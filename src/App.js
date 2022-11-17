import "./Styles/styles.scss";
import "./Styles/index.scss";
import "./Styles/navbar.scss";
import "./Styles/presentation.scss";
import "./Styles/footer.scss";
import "./Styles/carrousel.scss";
import "./Styles/cards.scss";
import "./Styles/technologies.scss";

import { Cards } from "./components/Cards";
import { Carrousel } from "./components/Carrousel";
import { NavBar } from "./components/NavBar";
import { Formation } from "./components/Formation";
import { Footer } from "./components/Footer";
import { Technologies } from "./components/Technologies";
import { GoUp } from "./components/GoUpButt";

function App() {
  return (
    <div>
      <NavBar />
      <Carrousel />
      <Technologies />
      <Cards />
      <Formation />
      <GoUp />
      <Footer />
    </div>
  );
}

export default App;
