import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header nombre="Javier" apellido="Cruces" dni="985632147" />
      <h1>Javier Cruces</h1>
      <div>
        <Header nombre="Javier" apellido="Cruces" dni="745896321" />
        <Header nombre="Javier" apellido="Najarro"  />
      </div>
      <Footer 
      celular="985632154"
      direccion="av a lado de mi casa"
      linkedin="profile"
      correo="javier.cruces@gmail.com"
      />
    </div>
  );
}

