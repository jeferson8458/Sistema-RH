import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Loginform.module.css';
import { UserContext } from '../../UserContext';
import Error from '../../Helper/Error';

const Login = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div className={`${styles.container} container animeleft`}>
      <form className={styles.forms} action="" onSubmit={handleSubmit}>
        <h1 className={styles.title}>Faça o seu Login ✌️</h1>
        <Input
          label="Usuário"
          type="text"
          placeholder="Digite seu usuário"
          name="username"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
    </div>
  );
};

export default Login;
