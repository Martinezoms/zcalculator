import { createGlobalStyle } from 'styled-components';

export const lightMode = {
  body: '#ffff',
  color: 'black',
  btnColor: '-internal-light-dark(rgb(239,239,239), rgb(59,59,59))',
  btnBorderColor: '-internal-light-dark(rgb(118,118,118),rgb(133,133,133))'
};

export const darkMode = {
  body: '#242424',
  color: 'white',
  btnColor: '#2f2f2f',
  btnBorderColor: '#000000',
  border: '3px solid rgb(103, 99, 99)',
  hoverBackground: '#454444'
};

export const GlobalStyle = createGlobalStyle`
body {
  background : ${(props) => props.theme.body};
  color : ${(props) => props.theme.color};
  transition : all 0.4s ease;
}
button {
  background : ${(props) => props.theme.btnColor};
  border-color: ${(props) => props.theme.btnBorderColor};
  color: ${(props) => props.theme.color}

}
button:hover {
background :${(props) => props.theme.hoverBackground}
}
textarea{
  color : ${(props) => props.theme.color}
}
.frame {
border: ${(props) => props.theme.border};

}
`;
