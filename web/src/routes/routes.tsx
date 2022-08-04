import { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';

// chamo as paginas como componentes
import { Home } from '../pages/Home';
import { Extract } from '../pages/Extract';
import { Transfer } from '../pages/Transfer';
import { Deposit } from '../pages/Deposit';
import { Withdraw } from '../pages/Withdraw';
import { Profile } from '../pages/Profile';
import { Transaction } from '../pages/Transaction';

// chamar as duas paginas que eu criei
import { TestePagina01, TestePagina02 } from '../pages/testes-page';
import { HomeFake } from '../pages/HomeFake';
import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';

interface ChildrenTypes {
  children: ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/cadastro" />;
  }

  return children;
};

const Public = ({ children }: ChildrenTypes) => {
  const { user } = useUser();

  if (user) {
    // return <Navigate to="/deposit" />;
    return <Navigate to="/homefake" />;
  }

  return children;
};

export const Router = () => (
  // path é o "apelido", o componente Pagina que foi importado em cima, é desenhado
  <Routes>
    <Route path="/" element={<Navigate to="/homefake" />} />

    <Route
      path="/homefake"
      element={
        <Private>
          <HomeFake />
        </Private>
      }
    />

    <Route
      path="/home"
      element={
        <Private>
          <Home />
        </Private>
      }
    />

    <Route
      path="/login"
      element={
        <Private>
          <Login />
        </Private>
      }
    />

    <Route
      path="/cadastro"
      element={
        <Private>
          <Cadastro />
        </Private>
      }
    />

    <Route
      path="/page01"
      element={
        <Private>
          <TestePagina01 />
        </Private>
      }
    />

    <Route
      path="/page02"
      element={
        <Private>
          <TestePagina02 />
        </Private>
      }
    />

    {/*  */}

    <Route
      path="/home"
      element={
        <Public>
          <Home />
        </Public>
      }
    />

    <Route
      path="/deposit"
      element={
        <Private>
          <Deposit />
        </Private>
      }
    />
    <Route
      path="/extract"
      element={
        <Private>
          <Extract />
        </Private>
      }
    />
    <Route
      path="/Transfer"
      element={
        <Private>
          <Transfer />
        </Private>
      }
    />
    <Route
      path="/withdraw"
      element={
        <Private>
          <Withdraw />
        </Private>
      }
    />
    <Route
      path="/profile"
      element={
        <Private>
          <Profile />
        </Private>
      }
    />
    <Route path="/transaction/:transactionId" element={<Transaction />} />

    <Route path="*" element={<h1 className="">Error 404</h1>} />
  </Routes>
);
