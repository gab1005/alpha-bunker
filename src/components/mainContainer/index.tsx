interface Type {
  className?: string;
  children?: any;
}

export const MainContainer = ({ className, children }: Type) => {
  return (
    <div
      className={`${className} w-[290px] h-[290px] bg-white flex flex-col flex-nowrap justify-center items-center py-[12px] px[15px] gap-[25px]`}
    >
      {children}
    </div>
  );
};

/**
 * interface Type {
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
 */

// {arrayData.map((elem) => {
//   return (
//     <div key={elem.id}>
//       <h2></h2>
//       <p></p>
//     </div>
//   );
// })}

/**
 * <div>
        <img src="" alt="casa de ouro" />
        <p>Extrato de transações</p>
        <img src="" alt="sino" />
      </div>

      <div>
        <h2>{data}</h2>

        <div>
          <p>Transfência enviada</p>
          <p>{valor}</p>
        </div>

        <div>
          <p>Saque</p>
          <p>{valor}</p>
        </div>

        <div>
          <p>Depósito</p>
          <p>{valor}</p>
        </div>

        <div>
          <p>Transferência recebida</p>
          <p>{valor}</p>
        </div>
      </div>

      <div>
        <h2>{data}</h2>

        <div>
          <p>{tipoTransferencia}</p>
          <p>{valor}</p>
        </div>

        <div>
          <p>{tipoTransferencia}</p>
          <p>{valor}</p>
        </div>
      </div>
 */
