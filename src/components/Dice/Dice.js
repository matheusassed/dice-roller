import React, { useEffect, useState } from "react";

function Dice(props){
  const [tipoDado, setTipoDado] = useState('');
  const [quantidadeDados, setQuantidadeDados] = useState(0);
  const [finalResult, setFinalResult] = useState(null);

  useEffect(() => {
    if(!!props.quantidadeDados)
      setQuantidadeDados(props.quantidadeDados);
    
    if(!!props.tipoDado)
      setTipoDado(props.tipoDado);
  }, [props.quantidadeDados, props.tipoDado, quantidadeDados, tipoDado]);

  useEffect(() => {
    if(!!tipoDado && !!quantidadeDados){
      let result = resultado(tipoDado, quantidadeDados);
      setFinalResult(result);
    }
  }, [quantidadeDados, tipoDado], quantidadeDados);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const resultado = (dice, quantidade) => {
    let valorDado;
    switch (dice) {
      case "d4":
        valorDado = dados.d4;
        break;
      case "d6":
        valorDado = dados.d6;
        break;
      case "d8":
        valorDado = dados.d8;
        break;
      case "d10":
        valorDado = dados.d10;
        break;
      case "d12":
        valorDado = dados.d12;
        break;
      case "d20":
        valorDado = dados.d20;
        break;
      case "d100":
        valorDado = dados.d100;
        break;
      default:
        valorDado = dados.d20;
        break;
    }
    let resultArr = []
    for (let i = 0; i < quantidade; i++) {
      let valor = getRandomInt(1, valorDado)
      resultArr.push(valor);
    }
    return resultArr;
  }

  const dados = {
    d4: 4,
    d6: 6,
    d8: 8,
    d12: 12,
    d20: 20,
    d100: 100
  }

  const soma = (r) => {
    var total = 0;
    for ( var i = 0; i < r.length; i++ ){
      total += r[i];
    }
    return total;
  }

  return (
    <div className="dado">
      {
        !!finalResult &&
        finalResult.map((r) => (
          <p>{`${tipoDado}: ${r}`}</p>
        ))
      }
      {
        !!finalResult &&
        <p>{`Total: ${soma(finalResult)}`}</p>
      }
    </div>
  );
}


export default Dice;