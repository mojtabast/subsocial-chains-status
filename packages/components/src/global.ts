let style = `
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  input, button, textarea, select {
    font: inherit;
  }
`;

export { style };
