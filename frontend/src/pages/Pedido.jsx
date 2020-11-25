import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import cogo from "cogo-toast";

function Pedido() {
  const [pedido, setPedido] = useState("");
  const [contato, setContato] = useState("");
  const [numeroPedido, setNumeroPedido] = useState(false);

  useEffect(() => {
    const numPedido = localStorage.getItem("numeroPedido");
    // setNumeroPedido(numPedido);
  }, []);

  function setNumeroPedidoLocal(num) {
    localStorage.setItem("numeroPedido", num);
    setNumeroPedido(num);
  }

  async function enviarPedido() {
    try {
      const response = await api.post("/pedido", { pedido, contato });
      const { numero } = response.data;
      setNumeroPedidoLocal(numero);
    } catch {
      cogo.error("Erro ao realizar pedido.. você pode tentar novamente daqui a pouco. Uma dica? Copie o seu pedido para colar quando estiver de volta!", {
        hideAfter: 10000,
      });
    }
  }

  return (
    <div className="hover">
      <div className="title">
        <h3>Natal solidário</h3>
        <h1>Lages - SC</h1>
      </div>
      <div className="card-pedido">
        {!numeroPedido ? (
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
            >
              {pedido}
            </textarea>
            <button className="btn-envio-pedido" onClick={enviarPedido}>
              Enviar pedido!
            </button>
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
              <center>Número: {numeroPedido}</center>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pedido;
