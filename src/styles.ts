// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
:root {
  --cor-principal: #a7727d;
  --cor-secundaria: #f9f5e7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .container {
    max-width: 80%;
  }
}

`

export default EstiloGlobal
