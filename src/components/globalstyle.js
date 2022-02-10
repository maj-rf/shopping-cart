import { createGlobalStyle } from 'styled-components';
// for global styling
const GlobalStyle = createGlobalStyle`

html,
body {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-wrap: break-word;
  font-size: 16px;
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
`;

export default GlobalStyle;
