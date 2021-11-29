// @ts-check
import './App.css';
import TacoClass from './components/TacoClass';
import TacoClassJSDoc from './components/TacoClassJSDoc';
import TacoFunc from './components/TacoFunc';
import TacoFuncJSDoc from './components/TacoFuncJSDoc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TacoFunc sabor="Tripa" conSalsa />
        <TacoFuncJSDoc sabor="Chorizo" />
        <TacoClass sabor="Bisteck" />
        <TacoClassJSDoc sabor="Champiñon" conSalsa numeroDeTortillas={3} />
      </header>
    </div>
  );
}

export default App;

// https://gist.github.com/DeruiDENG/074b15de1ebc23ee8d307c14198c1231
// https://www.youtube.com/watch?v=4Qhgoy-4R3g&t=497s
