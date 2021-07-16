import { createGlobalStyle } from 'styled-components';

export const lightMode = {
  body: 'white',
  font: 'black',
  fontColor: 'black'
};

export const darkMode = {
  body: 'black',
  font: 'white',
  fontColor: 'white'
};

export const GlobalStyle = createGlobalStyle`
body {
  background-color : ${(props) => props.theme.body}
}
font {
  font:${(props) => props.theme.font}
}`;
