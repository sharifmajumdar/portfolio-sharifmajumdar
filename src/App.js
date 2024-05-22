import NavBar from "./components/NavBar";
import Etusivu from "./components/Etusivu";
import SocialLinks from "./components/SocialLinks";
import Lounas from "./components/Lounas";
import Alacarte from "./components/Alacarte";
import Välipalat from "./components/Välipalat";
import Yhteystiedot from "./components/Yhteystiedot";
import DarkMode from "./components/DarkMode";

const App = () => {
  return (
    <div>
      <NavBar />
      <Etusivu />
      <Lounas />
      <Alacarte />
      <Välipalat />
      <Yhteystiedot />
      <SocialLinks />
      <DarkMode />
    </div>
  );
};

export default App;
