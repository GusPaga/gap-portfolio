import "./Styles/styles.scss";
import "./Styles/index.scss";
import "./Styles/navbar.scss";
import "./Styles/title.scss";
import "./Styles/presentation.scss";
import "./Styles/footer.scss";
import "./Styles/carrousel.scss";
import "./Styles/cards.scss";

import { Cards } from "./components/Cards";
import { Carrousel } from "./components/Carrousel";
import { NavBar } from "./components/NavBar";
import { Formation } from "./components/Formation";
import { Title } from "./components/Title";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Title />
      <Carrousel />
      <Cards />
      <Formation />
      <Footer />
    </div>
  );
}

export default App;
