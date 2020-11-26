import React, { useEffect, useState } from "react";
import * as Fi from "react-icons/fi";
import * as Fa from "react-icons/fa";
import api from "../services/api";
import cogoToast from "cogo-toast";

function CardPedido({ pedido, confirmar, afterChange }) {
  const [link, setLink] = useState("");
  const [showContato, setShowContato] = useState(false);

  useEffect(() => {
    const number = "5547999254473";
    const text = `Olá!! Quero realizar um sonho! Eu selecionei o pedido de número ${pedido.id}. Como faço para realizá-lo?`;
    setLink(`https://api.whatsapp.com/send?phone=${number}&text=${text}`);
  }, [pedido]);

  async function handleConfirmar() {
    await api.post("/pedido/setStatus", { pedidoId: pedido.id, status: 1 });
    cogoToast.success("Pedido realizado!!");
    if (afterChange) afterChange();
  }
  async function handleDesconfirmar() {
    await api.post("/pedido/setStatus", { pedidoId: pedido.id, status: 0 });
    cogoToast.success("Desconfirmado!!");
    if (afterChange) afterChange();
  }

  return (
    <div className={`card-pedido ${pedido.status ? "resolvido" : ""}`}>
      <div className="card-header">Pedido nº {pedido.id}</div>
      <div className="card-body">
        {pedido.pedido}
        {showContato && (
          <div className="contato">
            {pedido.contato
              ? `Contato: ${pedido.contato}`
              : "Contato não informado... Fale conosco!"}
          </div>
        )}
      </div>
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
                    <Fa.FaWhatsapp /> Fale conosco!!
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

        <div
          className={`btn-resolver-pedido`}
          onClick={() => setShowContato(!showContato)}
        >
          <Fi.FiPhone /> Contato
        </div>

        {confirmar && !pedido.status && (
          <div className="btn-resolver-pedido" onClick={handleConfirmar}>
            <Fi.FiCheck/>
            Confirmar realização
          </div>
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
