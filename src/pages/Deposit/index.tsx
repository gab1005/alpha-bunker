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

/**
 * Archive: src/pages/Deposit.tsx
 *
 * Description: Deposit page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

export const Deposit = () => {
  return (
    <BgContainer>
      <MenuHeader />

      <MainContainer
        title="Deposito"
        icon={deposito}
        iconSino={sino}
        className="mt-[70%]"
      >
        <TransactionHeader
          type="reading"
          title="Dados para saque"
          agencia="1510-5"
          conta="95785-3"
        />

        <Input category="default" placeholder="Valor" />
        <Input category="default" placeholder="Senha" />

        <Button
          category="primary"
          label="Sacar"
          onClick={() => console.log('sacar')}
        />
      </MainContainer>
    </BgContainer>
  );
};
