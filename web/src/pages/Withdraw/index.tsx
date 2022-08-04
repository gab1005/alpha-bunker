import { useState } from 'react';

import { BgContainer } from '../../components/bgContainer';
import { MenuHeader } from '../../components/menuHeader';
import { MainContainer } from '../../components/mainContainer';
import { TransactionHeader } from '../../components/TransactionHeader';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import saque from '../../assets/icons/container-icons/saque-container.svg';
import sino from '../../assets/icons/container-icons/sino-container.svg';

interface Type {
  agencia: string;
  conta: string;
}

/**
 * Archive: src/pages/Withdraw.tsx
 *
 * Description: Withdraw page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

// falta fecahr os margins e paddings dos components.
export const Withdraw = ({ agencia = '1510-5', conta = '95785-3' }: Type) => {
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
        icon={saque}
        title="Saque"
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
