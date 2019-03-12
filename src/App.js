import React from 'react'
import { styled } from 'astroturf'

const Container = styled('div')`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`

const Button = styled('button')`
  color: #999;
  background-color: #fefefe;
  border: 1px solid rgb(225, 225, 225);
  border-radius: 0.5rem;
  box-shadow: 0 0.03375rem 0.25rem rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 0.0675rem 0.25rem rgba(0, 0, 0, 0.1);
    transform: translateY(-0.0675rem) scale(0.975);
  }
`

const App = () => (
  <Container>
    <Button>Hello</Button>
  </Container>
)

export default App
