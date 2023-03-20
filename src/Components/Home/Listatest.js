import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import useFetch from '../../Hooks/useFetch';
import { SOCIO_GET } from '../../api';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Listatest = () => {
  const { data, request } = useFetch();

  React.useEffect(() => {
    async function fetchProdutos() {
      const { url, options } = SOCIO_GET();
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchProdutos();
  }, [request]);
  if (data)
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>Produtos</TableCell>
            <TableCell>Preços</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Ativos</TableCell>
            <TableCell>Options</TableCell>
          </TableHead>
          <TableBody>
            {data.map((produtos) => (
              <TableRow key={produtos.id}>
                <TableCell>{produtos.nome}</TableCell>
                <TableCell>{produtos.preco}</TableCell>
                <TableCell>{produtos.descricao}</TableCell>
                <TableCell>
                  <Badge bg="success">Empregado</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="primary">Download</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default Listatest;
