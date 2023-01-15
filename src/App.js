import logo from "./logo.svg";
import "./App.css";
import Silder from "./Components/Slider";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";

function App() {
  return (
    <div class="isolate bg-white app">
      <Header />
      <MainSection />

      <Silder />
    </div>
  );
}

export default App;
