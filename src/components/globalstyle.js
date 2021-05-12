import { createGlobalStyle } from 'styled-components';
// for global styling
const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
  scrollbar-width: thin;
  scrollbar-color: rgba(37, 34, 34, 0.79) rgba(179, 176, 176, 0.21);
}
`;

export default GlobalStyle;
