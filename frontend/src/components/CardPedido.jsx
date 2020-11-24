import React, { useEffect, useState } from "react";
import * as Fa from "react-icons/fa";
import api from "../services/api";

function CardPedido({ pedido, confirmar, afterChange }) {
  const [link, setLink] = useState("");

  useEffect(() => {
    const number = "5547999254473";
    const text = `Olá!! Quero realizar um sonho! Eu selecionei o pedido de número ${pedido.id}. Como faço para realizá-lo?`;
    setLink(`https://api.whatsapp.com/send?phone=${number}&text=${text}`);
  }, [pedido]);

  async function handleConfirmar() {
    await api.post("/pedido/setStatus", { pedidoId: pedido.id, status: 1 });
    if (afterChange) afterChange();
  }
  async function handleDesconfirmar() {
    await api.post("/pedido/setStatus", { pedidoId: pedido.id, status: 0 });
    if (afterChange) afterChange();
  }

  return (
    <div className={`card-pedido ${pedido.status ? "resolvido" : ""}`}>
      <div className="card-header">Pedido nº {pedido.id}</div>
      <div className="card-body">{pedido.pedido}</div>
      <div className="card-footer">
        {!confirmar && (
          <>
            {pedido.status !== 2 ? (
              <a
                className={`btn-resolver-pedido ${
                  pedido.status ? "disabled" : ""
                }`}
                href={!pedido.status ? link : "#"}
                target={!pedido.status ? "_blank" : ""}
              >
                {pedido.status ? (
                  "Pedido realizado!"
                ) : (
                  <>
                    <Fa.FaWhatsapp /> Realizar!!
                  </>
                )}
              </a>
            ) : (
              <center>
                <br />
                Tem certeza que digitou o número certo??
              </center>
            )}
          </>
        )}

        {confirmar && !pedido.status && (
          <button className="btn-resolver-pedido" onClick={handleConfirmar}>
            Confirmar realização
          </button>
        )}
        {confirmar && !!pedido.status && pedido.status > 0 && (
          <button
            className="btn-resolver-pedido disabled"
            onClick={handleDesconfirmar}
          >
            Pedido já realizado
          </button>
        )}
      </div>
    </div>
  );
}

export default CardPedido;
