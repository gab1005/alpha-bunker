import { useState } from 'react';
import { BgContainer } from '../../components/bgContainer';
import { MenuHeader } from '../../components/menuHeader';
import { MainContainer } from '../../components/mainContainer';
import { TransactionHeader } from '../../components/TransactionHeader';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import transferencia from '../../assets/icons/container-icons/transferencia-container.svg';
import sino from '../../assets/icons/container-icons/sino-container.svg';

interface Type {
  OriAgencia: string;
  OriConta: string;
  DesAgencia: string;
  DesConta: string;
}

/**
 * Archive: src/pages/Transfer.tsx
 *
 * Description: Transfer page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

export const Transfer = ({
  OriAgencia = '1510-5',
  OriConta = '95785-3',
  DesAgencia = '2222-2',
  DesConta = '12345-6',
}: Type) => {
  const [valor, setValor] = useState('');
  const [senha, setSenha] = useState('');
  const [dAgencia, setDAgencia] = useState('');
  const [dConta, setDConta] = useState('');

  const handleData = () => {
    const data = {
      DestinoAgencia: dAgencia,
      DestinoConta: dConta,
      valor: valor,
      senha: senha,
    };
    return data;
  };

  //
  // const [agencia, setAgencia] = useState('');
  // const [conta, setConta] = useState('');

  // const handleDataConta = () => {
  //   const data = {
  //     DesAgencia: agencia,
  //     DesConta: conta,
  //   };

  //   return data;
  // };
  //

  return (
    <BgContainer>
      <MenuHeader />

      <MainContainer
        icon={transferencia}
        title="Transferência"
        iconSino={sino}
        className="mt-[70%]"
      >
        <div className="px-4 flex flex-col gap-y-4">
          <TransactionHeader
            type="reading"
            title="Origem"
            agencia={OriAgencia}
            conta={OriConta}
          />

          {/* <TransactionHeader
            type="writing"
            title="Destino"
            agencia={dAgencia}
            conta={dConta}
          /> */}
          <div>
            <p className="text-paragraph-dark text-4 leadin-5 mb-2">Destino</p>

            {/* container com os dois input */}
            <div className="flex flex-row flex-nowrap gap-8">
              {/* input com subtitle */}
              <div>
                <Input
                  category="default"
                  className="w-[4.5em] text-input-text text-4 leading-5 px-2 py-2"
                  value={dAgencia}
                  onChange={(e) => setDAgencia(e.target.value)}
                />
                <p className="text-input-inactive text-[11px] leading-[13px]">
                  Agencia
                </p>
              </div>

              {/*input com subtitle*/}

              <div>
                <Input
                  category="default"
                  placeholder=""
                  className="w-[4.5em] text-input-text text-4 leading-5 px-2 py-2"
                  value={dConta}
                  onChange={(e) => setDConta(e.target.value)}
                />
                <p className="text-input-inactive text-[11px] leading-[13px]">
                  Conta
                </p>
              </div>
            </div>
          </div>
          {/*  */}

          <Input
            category="default"
            placeholder="Valor"
            className="w-[15.625em] h-[2.063em] px-2 py-2"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <Input
            category="default"
            placeholder="Senha"
            className="w-[15.625em] h-[2.063em] px-2 py-2"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button
            category="primary"
            label="Depositar"
            onClick={() => console.log(handleData())}
            className="w-[15.625em] h-[2.5em]"
          />
        </div>
      </MainContainer>
    </BgContainer>
  );
};
