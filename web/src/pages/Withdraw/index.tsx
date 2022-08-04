import { BgContainer } from '../../components/bgContainer';
import { MenuHeader } from '../../components/menuHeader';
import { MainContainer } from '../../components/mainContainer';
import { TransactionHeader } from '../../components/TransactionHeader';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import saque from '../../assets/icons/container-icons/saque-container.svg';
import sino from '../../assets/icons/container-icons/sino-container.svg';

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
export const Withdraw = () => {
  return (
    <BgContainer>
      <MenuHeader />

      <MainContainer
        icon={saque}
        title="Saque"
        iconSino={sino}
        className="mt-[50%]"
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
