import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CardPedido from "../components/CardPedido";
import * as Fi from "react-icons/fi";
import api from "../services/api";

import cogo from "cogo-toast";

function RealizeUmSonho() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidoId, setPedidoId] = useState("");
  const [auth, setAuth] = useState(null);

  const { isLoading, isFetching, error, refetch } = useQuery(
    ["pedidos", pedidoId],
    fetchPedidos
  );

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if(!stored) return false

    setAuth(stored);
    api.defaults.headers.Authorization = stored;
  });

  async function handleLogin() {
    const { hide } = cogo.loading("Fazendo login");
    const result = await api.post("/auth", { password });
    hide();

    const { login } = result.data;
    if (!login) {
      return cogo.error('Senha incorreta...');
    }
    cogo.success('Login realizado com sucesso');
    setAuth(login);
    localStorage.setItem("auth", login);
    api.defaults.headers.Authorization = login;
  }

  const [password, setPassword] = useState("");
  if (!auth) {
    return (
      <div className="hover">
        <input
          type="password"
          placeholder="Senha de acesso"
          id="login-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div id="login-btn" onClick={handleLogin}>
          <Fi.FiLogIn /> Login
        </div>
      </div>
    );
  }

  async function fetchPedidos() {
    const query = pedidoId ? { pedidoId } : {};
    console.log(query);
    const result = await api.get("/pedido", { params: query });
    const pedidos = result.data;
    setPedidos(pedidos);
  }

  return (
    <div className="hover flex-start">
      <div className="title">
        <h3>Confirmação de pedidos</h3>
        <p>Somente confirme o pedido se ele foi realizado!</p>
        <input
          placeholder="Número do pedido realizado..."
          className="form-control"
          onChange={(e) => setPedidoId(e.target.value)}
          value={pedidoId}
        />
      </div>
      {(isLoading || isFetching) && <h2>Carregando pedidos...</h2>}
      {error && <h2>Erro ao carregar pedidos...</h2>}
      {pedidos.length ? (
        pedidos.map((pedido) => (
          <CardPedido pedido={pedido} key={pedido.id} confirmar={true} afterChange={refetch} />
        ))
      ) : (
        <CardPedido
          pedido={{ status: 2, pedido: "Nenhum pedido encontrado" }}
        />
      )}
    </div>
  );
}

export default RealizeUmSonho;
