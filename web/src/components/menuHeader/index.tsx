import { useNavigate } from 'react-router-dom';
import { MainIcons } from '../mainIcons';

import extrato from '../../assets/icons/main-icons/extrato.svg';
import transferir from '../../assets/icons/main-icons/transferencia.svg';
import sacar from '../../assets/icons/main-icons/saque.svg';
import depositar from '../../assets/icons/main-icons/deposito.svg';
import iconUser from '../../assets/icons/main-icons/icon-user.svg';
import arrowDown from '../../assets/icons/main-icons/arrow-down.svg';
import ocultarSaldo from '../../assets/icons/main-icons/ocultar-saldo.svg';
import cifrao from '../../assets/icons/main-icons/R$-sifrao.svg';

interface Type {
  className?: string;
  onClick?: () => void;
  userName?: string;
  agencia?: string;
  conta?: string;
  saldo?: string;
}

/**
 * Archive: src/components/menuHeader/index.tsx
 *
 * Description: componente menu, que fica na pagina principal, ele contem os botoes de extrato, transferencia, saque, deposito
 *
 * Date: 2022/07/01
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const MenuHeader = ({
  className,
  onClick,
  userName = 'Dhesem',
  agencia = '1510-5',
  conta = '95785-3',
  saldo = '132.759,30',
}: Type) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${className} w-[22.5em] h-[13em] bg-[#337782] rounded-b-[25px] fixed top-0`}
    >
      <div className="w-[285px] h-[44px] flex flex-row flex-nowrap justify-between mx-auto mt-[14px] py-2.5 mb-[1.1em]">
        <p className="font-medium text-5 leading-6 text-header-light">
          Bem Vindo, {userName}
        </p>

        <img src={iconUser} alt="icone-user" className="w-5" />
      </div>

      <div className="flex flex-row flex-nowrap justify-center items-center gap-x-[0.625em]">
        <MainIcons
          image={extrato}
          subTitle="Extrato"
          onClick={() => navigate('/extract')}
        />
        <MainIcons
          image={transferir}
          subTitle="Transferir"
          onClick={() => navigate('/Transfer')}
        />
        <MainIcons
          image={sacar}
          subTitle="Sacar"
          onClick={() => navigate('/withdraw')}
        />
        <MainIcons
          image={depositar}
          subTitle="Depositar"
          onClick={() => navigate('/deposit')}
        />
      </div>
      {/* mt-9 */}
      <div className="relative top-9 bg-white w-[18em] h-16 rounded-[10px] mx-auto flex flex-col justify-center items-stretch ">
        <div className="flex flex-row flex-nowrap justify-evenly items-center text-header-gold font-medium text-[14px] leading-[17px] mt-2 mb-1">
          <p>Agência: {agencia}</p>
          <p>Conta: {conta} </p>
          <img src={arrowDown} alt="seta para baixo" />
        </div>

        <div className="flex flex-row flex-nowrap justify-start items-center gap-1 ml-4 text-brand-base font-bold text-[1.5em] leading-[29px] ">
          <img src={ocultarSaldo} alt="ocultar saldo" />
          <p>{saldo}</p>
          <img src={cifrao} alt="cifrão" className="mt-2" />
        </div>
      </div>
    </div>
  );
};
