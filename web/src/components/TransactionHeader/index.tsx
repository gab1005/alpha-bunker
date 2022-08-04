import { useState } from 'react';
import { Input } from '../input';

interface Type {
  type: 'reading' | 'writing';
  className?: string;
  title: string;
  agencia: string;
  conta: string;
}

/**
 * Archive: src/components/TransactionHeader/index.tsx
 *
 * Description: component header que mostra: nome da operação, agaencia e conta
 *
 * Date: 2022/07/01
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const TransactionHeader = (props: Type) => {
  return typeHeader(props);
};

const typeHeader = (props: Type): any => {
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');

  const handleDataConta = () => {
    const data = {
      DesAgencia: agencia,
      DesConta: conta,
    };

    return data;
  };

  if (props.type == 'reading') {
    return (
      <div className={props.className}>
        <p className="text-paragraph-dark text-4 leadin-5 mb-2">
          {props.title}
        </p>

        {/* container com as duas caixas cinzas */}
        <div className="flex flex-row flex-nowrap">
          {/* caixa cinza */}
          <div className="bg-input-readonly w-[110px] h-[33px] rounded-md flex flex-row flex-nowrap items-center pl-2 mr-[30px]">
            <p className="text-[#727272] text-4 leading-5">{props.agencia}</p>
          </div>

          {/* caixa cinza */}
          <div className="bg-input-readonly w-[110px] h-[33px] rounded-md flex flex-row flex-nowrap items-center pl-2 ">
            <p className="text-[#727272] text-4 leading-5">{props.conta}</p>
          </div>
        </div>
      </div>
    );
  }

  if (props.type == 'writing') {
    return (
      <div className={props.className}>
        <p className="text-paragraph-dark text-4 leadin-5 mb-2">
          {props.title}
        </p>

        {/* container com os dois input */}
        <div className="flex flex-row flex-nowrap gap-8">
          {/* input com subtitle */}
          <div>
            <Input
              category="default"
              className="w-[4.5em] text-input-text text-4 leading-5 px-2 py-2"
              value={agencia}
              onChange={(e) => setAgencia(e.target.value)}
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
              value={conta}
              onChange={(e) => setConta(e.target.value)}
            />
            <p className="text-input-inactive text-[11px] leading-[13px]">
              Conta
            </p>
          </div>
        </div>
      </div>
    );
  }
};
