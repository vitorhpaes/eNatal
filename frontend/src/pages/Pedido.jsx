import React, { useState, useEffect } from "react";
import api from "../services/api";
import cogo from "cogo-toast";
import * as Fi from 'react-icons/fi';

function Pedido({ history }) {
  const [pedido, setPedido] = useState("");
  const [contato, setContato] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [pedidoAtual, setPedidoAtual] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pedidos");
    const pedidos = stored ? JSON.parse(stored) : [];
    setPedidos(pedidos);
  }, []);

  function setPedidosLocal(num) {
    const stored = localStorage.getItem("pedidos");
    const numeroPedidos = stored ? JSON.parse(stored) : [];

    numeroPedidos.push(num);
    setPedidoAtual(num);

    localStorage.setItem("pedidos", JSON.stringify(numeroPedidos));
    setPedidos(numeroPedidos);
  }

  function acompanharPedidos() {
    cogo.success(
      "Para acompanhar os seus pedidos, digite o código na caixa abaixo e verifique se ele foi realizado!!",
      {
        hideAfter: 10,
      }
    );
    return history.push("/realizeUmSonho");
  }

  async function enviarPedido() {
    try {
      const response = await api.post("/pedido", { pedido, contato });
      const { numero } = response.data;
      setPedidosLocal(numero);
    } catch (e) {
      console.log(e);
      cogo.error(
        "Erro ao realizar pedido.. você pode tentar novamente daqui a pouco. Uma dica? Copie o seu pedido para colar quando estiver de volta!",
        {
          hideAfter: 10000,
        }
      );
    }
  }

  return (
    <div className="hover">
      <div className="title">
        <h3>Natal solidário</h3>
        <h1>Lages - SC</h1>
      </div>
      <div className="card-pedido">
        {pedidos.length > 0 && (
          <div className="pedidos-feitos">
            Números de pedidos seus:{" "}
            {pedidos.map((ped, index) => {
              return pedidos.length - 1 == index ? ped : `${ped}, `;
            })}
          </div>
        )}

        {!pedidoAtual ? (
          <>
            <input
              onChange={(e) => setContato(e.target.value)}
              value={contato}
              placeholder="Uma forma de contato"
            />
            <textarea
              className="caixa"
              placeholder="Digite seu pedido aqui"
              onChange={(e) => setPedido(e.target.value)}
              value={pedido}
            />
            {pedidos.length > 0 && (
              <div class="btn-resolver-pedido" onClick={acompanharPedidos}>
                <Fi.FiEye size={18}/>
                Acompanhar os meus pedidos
              </div>
            )}
            <div className="btn-envio-pedido" onClick={enviarPedido}>
              <Fi.FiSend size={18}/>
              Enviar pedido!
            </div>
          </>
        ) : (
          <div className="show-numero-pedido">
            <h2>
              Olá!! Recebemos seu pedido com sucesso!
              <br />
              Volte aqui mais tarde para ver se o seu pedido foi realizado!
              <br />
              Você também pode consultar a partir do número do seu pedido!!
              <br />
              <br />
              <center>Número: {pedidoAtual}</center>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pedido;
