import { useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { api } from '../../libs/api';

import { Input } from '../../components/input';
import { BgContainer } from '../../components/bgContainer';
import { MainContainer } from '../../components/mainContainer';
import { MenuHeader } from '../../components/menuHeader';
import { TransactionHeader } from '../../components/TransactionHeader';

import deposito from '../../assets/icons/container-icons/depositar-container.svg';
import sino from '../../assets/icons/container-icons/sino-container.svg';

interface Type {
  agencia?: string;
  conta?: string;
}

/**
 * Archive: src/pages/Deposit.tsx
 *
 * Description: Deposit page
 *
 * Date: 2022/07/20
 *
 * Author: Alehff
 */

export const Deposit = ({ agencia = '1510-5', conta = '95785-3' }: Type) => {
  const [valor, setValor] = useState('');
  const [senha, setSenha] = useState('');

  const handleData = () => {
    const data = {
      valor: valor,
      senha: senha,
    };
    return data;
  };

  return (
    <BgContainer>
      <MenuHeader />

      <MainContainer
        title="Deposito"
        icon={deposito}
        iconSino={sino}
        className="mt-[50%] gap-y-4 px-4"
      >
        <TransactionHeader
          type="reading"
          title="Dados para saque"
          agencia={agencia}
          conta={conta}
        />

        <Input
          category="default"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <Input
          category="default"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Button
          category="primary"
          label="Sacar"
          onClick={() => console.log(handleData())}
        />
      </MainContainer>
    </BgContainer>
  );
};
