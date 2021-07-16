import { createGlobalStyle } from 'styled-components';

export const lightMode = {
  body: 'white',
  color: 'black',
  fontColor: 'black'
};

export const darkMode = {
  body: 'black',
  color: 'white',
  fontCcolor: 'white'
};

export const GlobalStyle = createGlobalStyle`
body {
  background-color : ${(props) => props.theme.body}
}`;
