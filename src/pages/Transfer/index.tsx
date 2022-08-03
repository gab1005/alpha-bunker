import { BgContainer } from '../../components/bgContainer';
import { MenuHeader } from '../../components/menuHeader';
import { MainContainer } from '../../components/mainContainer';
import { TransactionHeader } from '../../components/TransactionHeader';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import transferencia from '../../assets/icons/container-icons/transferencia-container.svg';
import sino from '../../assets/icons/container-icons/sino-container.svg';

/**
 * Archive: src/pages/Transfer.tsx
 *
 * Description: Transfer page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

export const Transfer = () => {
  return (
    <BgContainer>
      <MenuHeader />

      <MainContainer
        icon={transferencia}
        title="Transferência"
        iconSino={sino}
        className="mt-[60%]"
      >
        <div className="px-4 flex flex-col gap-y-4">
          <TransactionHeader
            type="reading"
            title="Origem"
            agencia="1510-5"
            conta="95785-3"
          />

          <TransactionHeader
            type="writing"
            title="Destino"
            agencia="1710-5"
            conta="96734-2"
          />

          <Input
            category="default"
            placeholder="Valor"
            className="w-[250px] h-[33px] px-2 py-2"
          />
          <Input
            category="default"
            placeholder="Senha"
            className="w-[250px] h-[33px] px-2 py-2"
          />

          <Button
            category="primary"
            label="Depositar"
            onClick={() => console.log('depositar')}
            className="w-[250px] h-[40px]"
          />
        </div>
      </MainContainer>
    </BgContainer>
  );
};
