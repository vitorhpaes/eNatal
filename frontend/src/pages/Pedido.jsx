import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Pedido() {
  const [pedido, setPedido] = useState("");
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
    const response = await api.post("/pedido", { pedido: pedido });
    const { numero } = response.data;
    setNumeroPedidoLocal(numero);
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
            <h1>
              Olá!! Recebemos seu pedido com sucesso!
              <br />
              Volte aqui mais tarde para ver se o seu pedido foi realizado! 
              <br/>
              Você também pode consultar a partir do número do seu pedido!!
              <br />
              <br />
              <center>Número: {numeroPedido}</center>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pedido;
