import { createGlobalStyle } from 'styled-components';

export const lightMode = {
  body: 'white',
  color: 'black'
};

export const darkMode = {
  body: 'black',
  color: 'white'
};

export const GlobalStyle = createGlobalStyle`
body {
  background : ${(props) => props.theme.body};
  color : ${(props) => props.theme.color};
}
button {
  background : ${(props) => props.theme.body};
  color : ${(props) => props.theme.color};
  shadow : ${(props) => props.theme.body}
}
textarea{
  color : ${(props) => props.theme.color}
}
`;
