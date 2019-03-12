import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { css } from 'astroturf'

css`
  html, 
  body,
  :global(#app) {
    height: 100%;
  }

  body { margin: 0; }
`

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
