import React from 'react';
import { BgContainer } from '../../components/bgContainer';
import { MenuHeader } from '../../components/menuHeader';
import { MainContainer } from '../../components/mainContainer';

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

      <MainContainer className="bg-red-500 mt-40">
        {arrayData.map((elem) => {
          return (
            <div key={elem.id}>
              <h2>{elem.date}</h2>

              <div>
                <p>{elem.dataTransacao.tipo} </p>
                <p>{elem.dataTransacao.valor} </p>
              </div>
            </div>
          );
        })}
      </MainContainer>
    </BgContainer>
  );
};
