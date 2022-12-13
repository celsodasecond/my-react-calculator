import React, { useState } from 'react'
import { Container, Screen, PreviousNumber, CurrentNumber, Button } from './styled_components/Container'


export default function Calculator() {

  const [previous, setPrevious] = useState('')
  const [current, setCurrent] = useState('')
  const [operation, setOperation] = useState('')

  const appendValue = (el) => {
      const value = el.target.getAttribute('data')

      if (value === '.' && current.includes('.')) return
      setCurrent(current + value)
  }

  const handleDelete = () => {
      setCurrent(String(current).slice(0, -1))
  }

  const handleAllClear = () => {
      setCurrent('')
      setPrevious('')
      setOperation('')
  }

  const chooseOperation = (el) => {
      if (current === '') return
      if (previous !== ''){
        let value = compute();
        setPrevious(value)
      } else {
        setPrevious(current)
      }


      setCurrent('')
      setOperation(el.target.getAttribute('data'))
    }

  const compute = () => {
      let result
      let previousNumber = parseFloat(previous)
      let currentNumber = parseFloat(current)

      if (isNaN(previousNumber) || isNaN(currentNumber)) return

      switch(operation){
        case '÷': 
          result = previousNumber / currentNumber;
          break;
        case '+':
          result = previousNumber + currentNumber;
          break;
        case '-':
          result = previousNumber - currentNumber;
          break;
        case 'x':
          result = previousNumber * currentNumber;
          break;
        default:
          return
      }

      return result;
  }

  const equals = () => {
      let value = compute()
      if (value == undefined || value == null) return

      setCurrent(value)
      setPrevious('')
      setOperation('')
  }

  return (
    <Container>
        <Screen>
            <PreviousNumber>
                {previous} {operation}
            </PreviousNumber>
            <CurrentNumber>
                {current}
            </CurrentNumber>
        </Screen>
        <Button onclick={handleAllClear} gridSpan={2} control>AC</Button>
        <Button onclick={handleDelete} control>DEL</Button>
        <Button data={'÷'} onclick={chooseOperation} operation>÷</Button>
        <Button data={'7'} onclick={appendValue}>7</Button>
        <Button data={'8'} onclick={appendValue}>8</Button>
        <Button data={'9'} onclick={appendValue}>9</Button>
        <Button data={'x'} onclick={chooseOperation} operation>x</Button>
        <Button data={'4'} onclick={appendValue}>4</Button>
        <Button data={'5'} onclick={appendValue}>5</Button>
        <Button data={'6'} onclick={appendValue}>6</Button>
        <Button data={'+'} onclick={chooseOperation} operation>+</Button>
        <Button data={'1'} onclick={appendValue}>1</Button>
        <Button data={'2'} onclick={appendValue}>2</Button>
        <Button data={'3'} onclick={appendValue}>3</Button>
        <Button data={'-'} onclick={chooseOperation} operation>-</Button>
        <Button data={'.'} period onClick={appendValue}>.</Button>
        <Button data={'0'}onclick={appendValue}>0</Button>
        <Button gridSpan={2} onClick={equals} equals>=</Button>
    </Container>
  )
}
