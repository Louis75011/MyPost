import { render, screen } from "@testing-library/react"; // render créé environnement de test et screen permet de récup. un élement dans cet environnement
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/Layout.tsx";
import Error from "./component/layout/Error.tsx";
import Home from "./component/screens/Home.tsx";

describe("texts rendering exists", () => {
  it("Home's text exist in Home component", () => {
    render(<Home />); // Rendu du composant Error
    const textMessage = screen.getByText(/Notre service/i); // Recherche du texte "Erreur 404"
    expect(textMessage).toBeInTheDocument(); // Vérification que le message d'erreur est présent dans le document
  });

  it("Home's text exist in Layout/Header component", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    const homeLink = screen.getByText("Contact");
    expect(homeLink).toBeInTheDocument();
  });

  it("Messages exists in Error component", () => {
    render(<Error />); // Rendu du composant Error
    const errorMessage = screen.getByText(/Erreur 404/, { sensitive: true }); // Recherche du texte "Erreur 404"
    const errorDescription = screen.getByText(
      /Le chemin recherché n'existe pas/i
    );
    expect(errorMessage).toBeInTheDocument(); // Vérification que le message d'erreur est présent dans le document
    expect(errorDescription).toBeInTheDocument(); // Vérification que la description de l'erreur est présente dans le document
  });
});
