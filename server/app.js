const express = require('express');
const cors = require('cors');

const app = express();

const knex = require('./database/knex');
const jwt = require('jsonwebtoken');

require('dotenv/config');
const bcrypt = require('bcrypt');

app.use(express.json())
app.use(cors())

const router = express.Router();

function verifyAuth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send({
        auth: false,
        message: 'Token não informado.'
    });

    jwt.verify(token, process.env.PRIVATE_TOKEN, function (err, decoded) {
        if (err) return res.status(500).send({
            auth: false,
            message: 'Token inválido.'
        });

        next();
    });

}

router.post('/api/auth', async (req, res) => {

    const {
        password
    } = req.body;

    const db_password = await knex('senha');

    let login = false;
    db_password.map(pass => {

        const senha = pass.senha;
        const compare = bcrypt.compareSync(password, senha);
        if (compare) login = pass;

    })

    let token = false;
    if (login) {
        token = jwt.sign({
            id: login.id,
        }, process.env.PRIVATE_TOKEN, {
            expiresIn: 86400,
        });
    }

    res.json({
        login: token
    })

})

router.get('/api/pedido', async (req, res) => {

    const {
        pedidoId
    } = req.query;
    const id = pedidoId;

    const select = knex().select()
        .from('pedido as p');

    if (id) {
        select.where('id', id);
    } else {
        select.orderBy('status');
    }

    const results = await select;
    res.json(results);

})

router.post('/api/pedido', async (req, res) => {

    const {
        pedido
    } = req.body;

    if (!pedido) {
        res.json({
            erro: "Dados inváldiso",
        });
        return false;
    }

    const response = await knex('pedido').insert({
        pedido
    }, 'id');
    const numeroPedido = response[0];

    res.json({
        numero: numeroPedido
    });

})

router.post('/api/pedido/setStatus', verifyAuth, async (req, res) => {


    const {
        pedidoId,
        status
    } = req.body;

    if (!pedidoId || (!status && status != 0)) {
        res.json({
            error: 'Dados inválidos'
        });
        return false;
    }

    const result = await knex('pedido').where('id', pedidoId).update('status', status);

    res.json({
        submit: !!result
    })

})

app.use(router);

app.listen(3333, () => {
    console.log(' Aberto na porta 3333 ');
})