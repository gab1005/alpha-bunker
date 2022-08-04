import { useUser } from '../../providers/UserProvider';
import path from '../../assets/images/image-login.png';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';
import { BgContainer } from '../../components/bgContainer';

// add input, button, text, body; componentes

/**
 * Archive: src/pages/Home.tsx
 *
 * Description: Home page
 *
 * Date: 2022/07/31
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const Login = () => {
  // const { loading } = useUser();

  // px
  // fonte= 16px => fonte=24px
  // rem (elemento base/ pai todos body hmlt) = em (primeiro pai dele

  return (
    <BgContainer>
      <img src={path} alt="porta de entrada" className="w-12 mb-4" />
      <p className="text-brand-base hover:text-brand-hover font-medium text-5 leading- mb-14 ">
        Alpha bunker
      </p>

      <div className="flex flex-col justify-center items-center gap-5">
        <h3 className="text-paragraph-dark font-medium text-5 leading-6 ">
          Login
        </h3>
        {/* <input type="text" placeholder="Digite seu CPF" /> */}
        <Input
          type="number"
          placeholder="Digite seu CPF"
          category="default"
          descriptionBottom="testes descrição"
          className="px-3 py-2"
        />

        {/* <input type="text" placeholder="Digite sua senha" /> */}
        <Input
          type="number"
          placeholder="Digite sua senha"
          category="default"
          descriptionBottom="placeholder"
          className="px-3 py-2"
        />
        <Button
          category="primary"
          label="Entrar"
          className="w-64 h-10 font-normal text-[1.125em] leading-[1.3125em] -mb-3"
          onClick={() => console.log('login')}
        />
        <p className=" font-normal text-[0.875em] leading-4 text-[#353535] ">
          Crie sua conta
        </p>
      </div>
    </BgContainer>
  );
};
