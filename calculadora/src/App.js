import { useState } from 'react';
import './App.css';

function App() {
  const [calc, setCalc] = useState("");
  const [resultado, setResultado] = useState("");
  const operacoes = ['/','*','+','-','.'];

  const atualiza = valor => {
      if(
        operacoes.includes(valor) && calc ==='' ||
        operacoes.includes(valor) &&  operacoes.includes(calc.slice(-1))
        ){
          return
        }
        
      setCalc(calc + valor);

      if(!operacoes.includes(valor)){
        setResultado(eval(calc + valor).toString());
      }
  }

  const calcular = () => {
    setCalc(eval(calc).toString());
  }

  const limpar = () => {
    if(calc ==''){
      return
    }
    const valor = calc.slice(0,-1);
    setCalc(valor);
  }
  return (
    <div className="App">
        <div className="calculadora">
          <div className="display">
              {resultado ?<span>({resultado})</span> : '' }
              { calc || "0" }
          </div>
          <div className="operacoes">
              <button onClick={()=>atualiza('/')}>/</button>
              <button onClick={()=>atualiza('*')}>*</button>
              <button onClick={()=>atualiza('+')}>+</button>
              <button onClick={()=>atualiza('-')}>-</button>
              <button onClick={limpar}>DEL</button>
          </div>
          <div className="numeros">
              <button onClick={()=>atualiza('1')}>1</button>
              <button onClick={()=>atualiza('2')}>2</button>
              <button onClick={()=>atualiza('3')}>3</button>
              <button onClick={()=>atualiza('4')}>4</button>
              <button onClick={()=>atualiza('5')}>5</button>
              <button onClick={()=>atualiza('6')}>6</button>
              <button onClick={()=>atualiza('7')}>7</button>
              <button onClick={()=>atualiza('8')}>8</button>
              <button onClick={()=>atualiza('9')}>9</button>
              <button onClick={()=>atualiza('0')}>0</button>
              <button onClick={()=>atualiza('.')}>.</button>
              <button onClick={calcular}>=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
