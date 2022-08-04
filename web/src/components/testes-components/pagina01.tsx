import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

/**
 * Archive: src/components/testes-components/pagina01.tsx
 *
 * Description: componente que navega para 'pag02', feitos para testes em desenvolvimento
 *
 * Date: 2022/07/31
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const Pagina01 = () => {
  const navigation = useNavigate();
  return (
    <div className="w-[50%] h-[80%] bg-orange-500 flex flex-col justify-center items-center gap-2">
      <div>div qq coisa</div>
      <h2>pagina 01</h2>

      {/* <button onClick={() => navigation('page02')}>ir para pagina 02</button> */}
      <Button
        category="primary"
        label="ir para pagina 02"
        onClick={() => navigation('/page02')}
      ></Button>
    </div>
  );
};
