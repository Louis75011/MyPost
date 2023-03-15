import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout.tsx";
import Error from "./component/layout/Error.tsx";
import FreeService from "./component/layout/informations/FreeService.tsx";
import Solidarity from "./component/layout/informations/Solidarity.tsx";
import Security from "./component/layout/informations/Security.tsx";
import Home from "./component/screens/Home.tsx";
import AuthForm from "./component/screens/AuthForm.tsx";
import ContactForm from "./component/screens/ContactForm.tsx";
import "./style/variables/Theme.scss";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Public pages */}
          <Route index path="/" element={<Home />} />
          <Route path="/formulaire/connexion" element={<AuthForm />} />
          <Route path="/formulaire/contact" element={<ContactForm />} />
          {/* Connected User */}
          {/* <Route path="/compte-sanc+am" element={<Account />} /> */}
          {/* Footer Links */}
          <Route path="/footer/service-gratuit" element={<FreeService />} />
          <Route path="/footer/solidarity" element={<Solidarity />} />
          <Route path="/footer/security" element={<Security />} />
          {/* Error of all navigations */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
