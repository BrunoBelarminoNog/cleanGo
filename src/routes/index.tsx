import { Switch } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/DashboardPartner";
import Route from "./route";
import ProfessionalRegister from "../pages/ProfessionalRegister";
import { useAuth } from "../providers/Auth";
const Routes = () => {
  const { token } = useAuth();
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/cadastro" exact component={RegisterPage} />
      <Route path="/cadastroparceiro" exact component={ProfessionalRegister} />
      {token && (
        <Route isPrivate path="/dashboardparceiro" component={Dashboard} />
      )}
      {/* <Route component={() => <h1>Rota não encontrada</h1>} /> */}
    </Switch>
  );
};
export default Routes;
