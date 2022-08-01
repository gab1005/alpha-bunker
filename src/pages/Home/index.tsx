import { useUser } from '../../providers/UserProvider';
import path from '../../assets/images/image-login.png';
/**
 * Archive: src/pages/Home.tsx
 *
 * Description: Home page
 *
 * Date: 2022/07/20
 *
 * Author: Rey
 */

export const Home = () => {
  // const { loading } = useUser();

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={path} alt="porta de entrada" className="w-12" />
      <p>Alpha bunker</p>

      <div className="flex flex-col justify-center items-center gap-2">
        <h3>Login</h3>
        <input type="text" placeholder="Digite seu CPF" />
        <input type="text" placeholder="Digite sua senha" />
        <button>Entrar</button>
        <p>Crie sua conta</p>
      </div>
    </div>
  );
};
