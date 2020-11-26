const express = require('express');
const cors = require('cors');
const path = require('path');

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
        .from('pedido as p')

    if (id) {
        select.where('id', id);
    } else {
        select.orderBy('status');
    }
    select.orderBy('id', 'desc');
    select.groupBy('pedido');

    const results = await select;
    res.json(results);

})

router.post('/api/pedido', async (req, res) => {

    const {
        pedido,
        contato,
        facebook
    } = req.body;

    facebookUser = !!facebook;
    if (facebook) {
        const result = await knex('facebook_user').column('id').where('userId', facebook.userID);
        facebookUser = result[0] ? result[0].id : false;

        if (!facebookUser) {
            const [id] = await knex('facebook_user').insert({
                userId: facebook.userID,
                name: facebook.name,
                email: facebook.email,
                profile_pic: JSON.stringify(facebook.picture),
            });
            facebookUser = id;
        }

    }

    if (!pedido) {
        res.json({
            erro: "Dados inválidos",
        });
        return false;
    }

    const response = await knex('pedido').insert({
        pedido,
        contato,
        facebook_user_id: facebookUser ? facebookUser : null
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

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.use(function (req, res) {
        return res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    });

}

const port = process.env.HOST_PORT;
app.listen(port || 3333, () => {
    console.log(`Servidor aberto na porta ${port}`);
})

module.exports = app;