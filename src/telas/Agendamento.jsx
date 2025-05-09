import { useState, useEffect } from 'react';
import AgendamentoContext from './context/AgendamentoContext';
import TabelaAgendamento from './TabelaAgendamento';

import {
    getAgendamentosAPI,
    deleteAgendamentoAPI, adicionarAgendamentoAPI, atualizarAgendamentoAPI
} from '../services/AgendamentoServico';

function Agendamento() {

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);

    const recuperaAgendamentos = async () => {
        const agendamentos = await getAgendamentosAPI();
        setListaObjetos(agendamentos);
    };

    const removerAgendamento = async id => {
        if (window.confirm('Deseja remover este agendamento?')) {
            const retornoAPI = await deleteAgendamentoAPI(id);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaAgendamentos(); 
        }
    };

    const criarAgendamento = async agendamento => {
        const retornoAPI = await adicionarAgendamentoAPI(agendamento);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
        recuperaAgendamentos(); 
    };

   
    const atualizarAgendamento = async (id, agendamento) => {
        const retornoAPI = await atualizarAgendamentoAPI(id, agendamento);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
        recuperaAgendamentos(); 
    };

    useEffect(() => {
        recuperaAgendamentos();
    }, []);

    return (
        <AgendamentoContext.Provider value={{
            alerta, setAlerta,
            listaObjetos,
            removerAgendamento,
            criarAgendamento,
            atualizarAgendamento
        }}>
            <TabelaAgendamento/>
        </AgendamentoContext.Provider>
    );
}

export default Agendamento;
