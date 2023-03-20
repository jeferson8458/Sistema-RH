import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { SOCIO_POST } from '../../api';

const PostCurriculo = () => {
  const nome = useForm();
  const contato = useForm('number');
  const cidade = useForm();
  const [img, setImg] = React.useState({});
  const { request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('contato', contato.value);
    formData.append('cidade', cidade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = SOCIO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
    });
  }
  return (
    <section>
      <h1>Enviar</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Contato" type="text" name="contato" {...contato} />
        <Input label="Cidade" type="text" name="cidade" {...cidade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default PostCurriculo;
