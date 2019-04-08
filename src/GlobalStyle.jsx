import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    text-decoration: none;
    list-style: none;
    outline: none;
  }
  body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    background: #0e3d88d1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .none {
    display: none !important;
  }
`

export default GlobalStyle
