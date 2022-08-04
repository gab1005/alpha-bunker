import React from 'react';
import { BgContainer } from '../../components/bgContainer';
import { MenuHeader } from '../../components/menuHeader';
import { MainContainer } from '../../components/mainContainer';
import extrato from '../../assets/icons/container-icons/extrato-container.svg';
import sino from '../../assets/icons/container-icons/sino-container.svg';

/////
interface Type {
  className?: string;
  date?: string;
  tipoTransferencia?: string;
  valor?: string;
  // key?: number;
  // arrayData: object[];
}

interface Acount {
  agencia: string;
  conta: string;
}

interface TypeArray {
  id: number;
  date: string;
  dataTransacao: {
    tipo: string;
    valor: string;
    origin: Acount;
    destino: Acount;
  };
}

const arrayData: TypeArray[] = [
  {
    id: 1,
    date: '07/07/2022',
    dataTransacao: {
      tipo: 'Deposito',
      valor: '+$50,30',
      origin: {
        agencia: '1510-5',
        conta: '95785-3',
      },
      destino: {
        agencia: '2020-4',
        conta: '10210-2',
      },
    },
  },
  {
    id: 2,
    date: '02/06/2022',
    dataTransacao: {
      tipo: 'Saque',
      valor: '-$150,30',
      origin: {
        agencia: '1510-5',
        conta: '95785-3',
      },
      destino: {
        agencia: '1510-5',
        conta: '95785-3',
      },
    },
  },
];
/////

/**
 * Archive: src/pages/Extract/index.tsx
 *
 * Description: extrato do usuario
 *
 * Date: 2022/07/01
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const Extract = ({
  className,
  date = '03/07/2022',
  tipoTransferencia = 'Saque',
  valor = '-$85,80',
}: Type) => {
  return (
    <BgContainer className="">
      <MenuHeader className="" />

      <MainContainer
        title="Extrato"
        icon={extrato}
        iconSino={sino}
        className="mt-[40%] gap-y-4"
      >
        <div className="w-[auto] h-[196px] bg-[#F3F9F9] mx-4 rounded-[0.25em] flex flex-col flex-nowrap gap-5">
          {arrayData.map((elem) => {
            return (
              <div key={elem.id} className="">
                {/* data da transação */}
                <h2 className="ml-1 text-input-placeholder font-medium text-[14px] leading-4">
                  {elem.date}
                </h2>

                {/* tipo valor */}
                <div className="flex flex-row flex-nowrap justify-between mx-3">
                  <p className="text-input-inactive font-medium text-[14px] leadgin-4">
                    {elem.dataTransacao.tipo}
                  </p>

                  <p
                    className={`text-input-error font-bold text-[14px] leading-4 ${styleValor(
                      elem.dataTransacao.valor,
                    )}`}
                  >
                    {elem.dataTransacao.valor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </MainContainer>
    </BgContainer>
  );
};

// devolve estilo 'vermelho' ou 'verde' para a cor do valor.
const styleValor = (valor: string) => {
  if (valor.charAt(0) == '-') {
    return 'text-input-error';
  }
  if (valor.charAt(0) == '+') {
    return 'text-[#53D496]';
  }
};
