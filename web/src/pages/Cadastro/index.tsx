import React, { ReactElement, useEffect, useState } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { BgContainer } from '../../components/bgContainer';
import path from '../../assets/images/image-login.png';
import { MainContainer } from '../../components/mainContainer';
import imgBanke from '../../assets/images/image-login.png';
import { api } from '../../libs/api';

// const cors=require("cors");
// const corsOptions ={
//    origin:'*',
//    credentials:true,
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions))

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

  // useEffect(() => {
  //   const nameText = user.name.toString();
  //   console.log(`user.name=${nameText}`);
  // }, []);

  // async function handleDeposit() {
  //   try {
  //     const result = await api.post('deposit', {
  //       agency: '',
  //       account: '',
  //       value: '',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleValue = async () => {
    const user: UserType = {
      name: name,
      birth_date: birth_date,
      social_id: social_id,
      email: email,
      user_password: user_password,
      confirm_password: confirm_password,
    };
    console.log(user);

    // tentando conectar com backend
    try {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      };
      const result = await api.post('accounts', user, config);
    } catch (err) {
      console.log(err);
    }
  };

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
        }}
      />
      <Input
        category="default"
        placeholder="Digite sua data de nascimento"
        value={birth_date}
        onChange={(e) => {
          setBirth_date(e.target.value);
        }}
      />
      <Input
        category="default"
        placeholder="Digite seu CPF"
        value={social_id}
        onChange={(e) => {
          setSocial_id(e.target.value);
        }}
      />
      <Input
        category="default"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        category="default"
        placeholder="Digite sua senha"
        value={user_password}
        onChange={(e) => {
          setUser_password(e.target.value);
        }}
      />
      <Input
        category="default"
        placeholder="Confirme sua senha"
        value={confirm_password}
        onChange={(e) => {
          setConfirm_password(e.target.value);
        }}
      />

      <Button
        category="primary"
        label="Cadastrar"
        onClick={() => console.log(handleValue())}
        className="mt-4"
      />
      <Button
        label="Entrar"
        onClick={() => console.log('entrar')}
        className="w-20 h-8 -mt-2 bg-transparent text-[#353535] text-4 leading-4 "
      />
    </BgContainer>
  );
};
