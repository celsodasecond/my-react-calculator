import React from 'react'
import { Container, Screen, PreviousNumber, CurrentNumber, Button } from './styled_components/Container'

export default function Calculator() {
  return (
    <Container>
        <Screen>
            <PreviousNumber>
                10+
            </PreviousNumber>
            <CurrentNumber>
                10
            </CurrentNumber>
        </Screen>
        <Button gridSpan={2} control>AC</Button>
        <Button control>DEL</Button>
        <Button operation>÷</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button operation>x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button operation>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button operation>-</Button>
        <Button period>.</Button>
        <Button>0</Button>
        <Button gridSpan={2} equals>=</Button>
    </Container>
  )
}
