import "./app.css";
import { useState } from "react";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(
        "Você está levemente acima do peso! Seu IMC é: " + imc.toFixed(2)
      );
    } else if (imc > 34.9) {
      setMensagem("Cuidado, obesidade! Seu IMC é: " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1> Calculadora IMC</h1>
      <span> Vamos calcular seu IMC!</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em quilogramas (kg)"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em centímetros (cm)"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h2> {mensagem}</h2>
    </div>
  );
}
