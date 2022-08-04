import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

/**
 * Archive: src/pages/HomeFake/index.tsx
 *
 * Description: uma pagina home, com um botão para cada pagina do projeto, foco em ajudar no processo de desenvolvimento
 *
 * Date: 2022/07/31
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const HomeFake = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-blue-300 w-screen h-screen">
      <h2 className="text-2xl text-neutral-700">lista de paginas do projeto</h2>
      <div className="flex flex-row flex-wrap justify-start items-center gap-2 bg-red-300 w-[90%] h-[70%] rounded-md p-2">
        <div className="w-full flex flex-row justify-evenly">
          <Button
            label="page01"
            category="primary"
            onClick={() => navigate('/page01')}
          />

          <Button
            label="page02"
            category="primary"
            onClick={() => navigate('/page02')}
          />
        </div>

        <div className="w-full flex flex-row justify-evenly">
          <Button
            label="login"
            category="primary"
            onClick={() => navigate('/login')}
          />

          <Button
            label="cadastro"
            category="primary"
            onClick={() => navigate('/cadastro')}
          />
        </div>

        <Button
          label="Home"
          category="primary"
          onClick={() => navigate('/home')}
        />

        <Button
          label="deposit"
          category="primary"
          onClick={() => navigate('/deposit')}
        />

        <Button
          label="extract"
          category="primary"
          onClick={() => navigate('/extract')}
        />

        <Button
          label="Transfer"
          category="primary"
          onClick={() => navigate('/Transfer')}
        />

        <Button
          label="withdraw"
          category="primary"
          onClick={() => navigate('/withdraw')}
        />

        <Button
          label="profile"
          category="primary"
          onClick={() => navigate('/profile')}
        />

        <Button
          label="transaction/:transactionId"
          category="primary"
          onClick={() => navigate('/transaction/:transactionId')}
        />
      </div>
    </div>
  );
};
