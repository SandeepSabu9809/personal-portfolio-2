
import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner.js";
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.css';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
