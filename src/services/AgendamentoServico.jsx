export const getAgendamentosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/aplicacao`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export const deleteAgendamentoAPI = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/aplicacao/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}

export const adicionarAgendamentoAPI = async (objeto) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/aplicacao`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto),
    });
    return await response.json();
}

export const atualizarAgendamentoAPI = async (objeto) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/aplicacao`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto),
    });
    return await response.json();
}
