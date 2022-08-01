import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

/**
 * Archive: src/caminho
 *
 * Description: descrição qualquer
 *
 * Date: ano/mes/dia
 *
 * Author: ...........
 */

export const Pagina02 = () => {
  const navigation = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-orange-500 w-[50%] h-[80%]">
      <div>qq coisa</div>
      <h2>pagina 02</h2>
      {/* to go back in page flow */}
      <Button
        category="primary"
        label="voltar"
        onClick={() => navigation(-1)}
      ></Button>
    </div>
  );
};
