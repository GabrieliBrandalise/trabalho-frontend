import { useContext } from 'react';
import AgendamentoContext from './context/AgendamentoContext';
import Alerta from '../commons/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabela() {

    const { alerta, listaObjetos, remover } = useContext(AgendamentoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Agendamentos</h1>
            <Alerta alerta={alerta} />
            <Button variant="primary">
                Novo <i className="bi bi-file-earmark-plus"></i>
            </Button>
            {listaObjetos.length === 0 && <h4>Nenhum agendamento encontrado</h4>}
            {listaObjetos.length > 0 && (

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>ID</th>
                            <th>Pedido</th>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Status</th>
                            <th>Cliente</th>
                            <th>Telefone</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map((objeto) => (
                            <tr key={objeto.id}>
                                <td align="center">
                                    <Button variant="info">
                                        <i className="bi bi-pencil-square"></i>
                                    </Button>{' '}
                                    <Button variant="danger" onClick={() => remover(objeto.id)}>
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </td>
                                <td>{objeto.id}</td>
                                <td>{objeto.pedido_id}</td>
                                <td>{objeto.data_aplicacao}</td>
                                <td>{objeto.local_aplicacao}</td>
                                <td>{objeto.status}</td>
                                <td>{objeto.cliente_nome}</td>
                                <td>{objeto.cliente_telefone}</td>
                                <td>{objeto.descricao_produto}</td>
                                <td>{objeto.quantidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default Tabela;
