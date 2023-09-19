import React from "react";
import { useState } from "react";

const CalculoAbastecimento = () => {
  const [km, setKm] = useState();
  const [consumo, setConsumo] = useState();
  const abastecimento = km / consumo;
  const [valorCombustivel, setValorCombustivel] = useState();
  const valorFinal = abastecimento * valorCombustivel;

  return (
    <div className="CalculoAbastecimento">
      <label>Informe o Km total da viagem </label>
      <input value={km} onChange={(e) => setKm(e.target.value)} />
      <br></br>

      <label>Informe o consumo de Km/L do seu veiculo </label>
      <input value={consumo} onChange={(e) => setConsumo(e.target.value)} />
      <br></br>

      <label>Voce precisa abastecer {abastecimento.toFixed(2)} Litros</label>
      <br></br>

      <label>Informe o valor do combustivel R$</label>
      <input
        value={valorCombustivel}
        onChange={(e) => setValorCombustivel(e.target.value)}
      />
      <br></br>

      <label>
        O custo total para abastecer o carro é R${valorFinal.toFixed(2)}
      </label>
    </div>
  );
};

export default CalculoAbastecimento;
