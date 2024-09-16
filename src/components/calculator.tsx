import { evaluate } from "mathjs";
import { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./button";
import ClearButtonComponent from "./clearButton";

const CalculatorContainer = styled.div`
  width: 400px;
  height: 500px;
  padding: 14px;
  background-color: #3A54FF;
  border-radius: 20px;
  border: 5px solid white;
`

const Input = styled.div`
  height: 70px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  background-color: #0a0a23;
  color: white;
  padding: 11px 30px 11px 11px;
  margin: 1px solid #888;
  box-shadow:  -1px 4px 1px 1px white;
`
const Row = styled.div`
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Calculator = () => {
    const [input, setInput] = useState('')

    const addToInput = (val: string) => {
        setInput(input + val)
    }

    const result = () => {
        if(input && input !== '.'){
            setInput(evaluate(input))
        }else{
            alert("Por favor ingrese valores para realizar los calculos")
            setInput('')
        }
    };

    return (
        <CalculatorContainer >
          <Input >
            {input}
          </Input>
          <Row >
            <ButtonComponent handleClick={addToInput}>1</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>2</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>3</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>+</ButtonComponent>
          </Row>
          <Row >
            <ButtonComponent handleClick={addToInput}>4</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>5</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>6</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>-</ButtonComponent>
          </Row>
          <Row >
            <ButtonComponent handleClick={addToInput}>7</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>8</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>9</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>*</ButtonComponent>
          </Row>
          <Row >
            <ButtonComponent handleClick={result}>=</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>0</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>.</ButtonComponent>
            <ButtonComponent handleClick={addToInput}>/</ButtonComponent>
          </Row>
          <Row >
            <ClearButtonComponent handleClick={() => setInput('')}>Clear</ClearButtonComponent>
          </Row>
      </CalculatorContainer>
    )
}

export default Calculator