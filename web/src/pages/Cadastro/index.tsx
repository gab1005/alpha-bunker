import React, { ReactElement, useEffect, useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { BgContainer } from '../../components/bgContainer';
import path from '../../assets/images/image-login.png';
import { MainContainer } from '../../components/mainContainer';
import imgBanke from '../../assets/images/image-login.png';
interface UserType {
  name: string;
  birth_date: string;
  social_id: string;
  email: string;
  user_password: string;
  confirm_password: string;
}

/**
 * Archive: src/pages/Cadastro/index.tsx
 *
 * Description: pagina de cadastro
 *
 * Date: 2022/07/03
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const Cadastro = () => {
  const [name, setName] = useState('');
  const [birth_date, setBirth_date] = useState('');
  const [social_id, setSocial_id] = useState('');

  const [email, setEmail] = useState('');
  const [user_password, setUser_password] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const user: UserType = {
    name: '',
    birth_date: '',
    social_id: '',
    email: '',
    user_password: '',
    confirm_password: '',
  };

  // useEffect(() => {
  //   const nameText = user.name.toString();
  //   console.log(`user.name=${nameText}`);
  // }, []);

  return (
    <BgContainer>
      <img src={imgBanke} alt="img-alpha-bunker" className="w-[3.75em]" />
      <p>Alpha Bunker</p>
      <p>Crie sua conta</p>

      <Input
        category="default"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          user.name = name;
        }}
      />
      <Input
        category="default"
        placeholder="Digite sua data de nascimento"
        value={birth_date}
        onChange={(e) => {
          setBirth_date(e.target.value);
          user.birth_date = birth_date;
        }}
      />
      <Input
        category="default"
        placeholder="Digite seu CPF"
        value={social_id}
        onChange={(e) => {
          setSocial_id(e.target.value);
          user.social_id = social_id;
        }}
      />
      <Input
        category="default"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          user.email = email;
        }}
      />
      <Input
        category="default"
        placeholder="Digite sua senha"
        value={user_password}
        onChange={(e) => {
          setUser_password(e.target.value);
          user.user_password = user_password;
        }}
      />
      <Input
        category="default"
        placeholder="Confirme sua senha"
        value={confirm_password}
        onChange={(e) => {
          setConfirm_password(e.target.value);
          user.confirm_password = confirm_password;
          console.log(user);
        }}
      />

      <Button
        category="primary"
        label="Cadastrar"
        onClick={() => console.log(user)}
      />
      <Button
        category="secondary"
        label="Entrar"
        onClick={() => console.log('entrar')}
      />
    </BgContainer>
  );
};
