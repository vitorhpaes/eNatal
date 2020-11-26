import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import CardPedido from "../components/CardPedido";
import api from "../services/api";

function RealizeUmSonho() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoId, setPedidoId] = useState("");
  const [pedidosFeitos, setPedidosFeitos] = useState([]);

  const { isLoading, isFetching, error } = useQuery(
    ["pedidos", pedidoId],
    fetchPedidos
  );

  async function fetchPedidos() {
    const query = pedidoId ? { pedidoId } : {};
    const result = await api.get("/pedido", { params: query });
    setPedidos(result.data);
  }

  useEffect(() => {
    const stored = localStorage.getItem("pedidos");
    const peds = stored ? JSON.parse(stored) : [];
    setPedidosFeitos(peds);
  }, []);

  return (
    <div className="hover flex-start">
      <div className="title">
        <h3>Realize um sonho!</h3>
        <p>
          Dividimos o mesmo objetivo! Um sorriso é um passo a mais por um mundo
          melhor!
          <br />
          Vem comigo, vou te mostrar algum sonho que você pode realizar!
        </p>
        {pedidosFeitos.length > 0 && (
          <div className="pedidos-feitos">
            Números dos seus pedidos: 
            {pedidosFeitos.map((ped, index) => {
              return pedidosFeitos.length - 1 === index ? ped : `${ped}, `;
            })}
          </div>
        )}
        <input
          placeholder="Busque o seu pedido pelo número!"
          className="form-control"
          onChange={(e) => setPedidoId(e.target.value)}
          value={pedidoId}
        />
      </div>
      {(isLoading || isFetching) && <h2>Carregando pedidos...</h2>}
      {error && <h2>Erro ao carregar pedidos...</h2>}
      {pedidos.length ? (
        pedidos.map((pedido) => <CardPedido pedido={pedido} key={pedido.id} />)
      ) : (
        <CardPedido
          pedido={{ status: 2, pedido: "Nenhum pedido encontrado" }}
        />
      )}
    </div>
  );
}

export default RealizeUmSonho;
