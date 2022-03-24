import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero-Section/Hero";
import Shop from "./components/Shop/Shop";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Hero></Hero>
            <Shop></Shop>
        </div>
    );
}

export default App;
