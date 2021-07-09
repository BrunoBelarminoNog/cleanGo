import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { History } from "history";
import jwt_decode from "jwt-decode";
import api from "../../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface ClientLogin {
  email: string;
  password: string;
}

interface AuthProviderData {
  clientLogin: (
    clientData: ClientLogin,
    setError: Dispatch<boolean>,
    history: History
  ) => void;
  token: string;
  setAuth: (value: React.SetStateAction<string>) => void;
  idClient: number;
  setIdClient: (value: React.SetStateAction<number>) => void;
}
interface DecodeToken {
  sub: string;
  iat: number;
  email: string;
  exp: number;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const convertStringToNumber = (str: string): number => {
    return parseInt(str);
  };

  //  login de cliente
  const token = localStorage.getItem("token") || "";
  const [auth, setAuth] = useState<string>(token);
  const [idClient, setIdClient] = useState<number>(0);

  const clientLogin = (
    clientData: ClientLogin,
    setError: Dispatch<boolean>,
    history: History
  ) => {
    api
      .post("login", clientData)
      .then((response) => {
        console.log("Entrou na aplicação");
        localStorage.setItem("token", response.data.accessToken);
        const decodedToken: DecodeToken = jwt_decode(response.data.accessToken);
        localStorage.setItem("idClient", decodedToken.sub);
        setIdClient(convertStringToNumber(decodedToken.sub));
        setAuth(response.data.accessToken);
        history.push("/dashboardparceiro");
      })
      .catch(() => setError(true));
  };

  return (
    <AuthContext.Provider
      value={{ token: auth, setAuth, clientLogin, idClient, setIdClient }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
