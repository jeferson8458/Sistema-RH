import React from 'react';
import { Table } from 'react-bootstrap';
import { SOCIO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const ListCurriculo = () => {
  const { data, request } = useFetch();

  React.useEffect(() => {
    async function fetchProdutos() {
      const { url, options } = SOCIO_GET();
      await request(url, options);
    }
    fetchProdutos();
  }, [request]);
  if (data)
    return (
      <div className="tabela">
        <div>
          <h1>Lista de Socios</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Contato</th>
                <th>Cidade</th>
                <th>Função</th>
                <th>Idade</th>
                <th>Genero</th>
                <th>Ativos</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data.map((socios) => (
                <tr key={socios.id}>
                  <td>{socios.nome}</td>
                  <td>{socios.contato}</td>
                  <td>{socios.cidade}</td>
                  <td>{socios.funcao}</td>
                  <td>{socios.idade}</td>
                  <td>{socios.genero}</td>
                  <td>
                    <Badge bg="success">Empregado</Badge>{' '}
                  </td>
                  <td>
                    <a href={socios.fotos[0].src} download={socios.nome}>
                      <Button variant="primary">Downloand</Button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
};

export default ListCurriculo;
