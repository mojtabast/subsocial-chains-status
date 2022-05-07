export interface Theme {
  typography: {
    scale: {
      [key: string]: number | string;
    };
  };
  radii: {
    [key: string]: number | string;
  };
  space: {
    [key: string]: number | string;
  };
  color: {
    [key: string]:
      | string
      | {
          [key: string]: string;
        };
  };
}

let light: Theme = {
  typography: {
    scale: {
      _unit: "px",
      xs: 10,
      s: 12,
      xm: 14,
      m: 16,
      l: 20,
      xl: 24,
      xxl: 32,
    },
  },
  radii: {
    _unit: "px",
    xs: 4,
    s: 8,
    m: 12,
    xm: 16,
    l: 24,
    xl: 32,
    circle: 100,
  },
  space: {
    _base: 4,
    _unit: "px",
    s: 1,
    m: 2,
    xm: 3,
    l: 4,
    xl: 6,
    xxl: 8,
    xxxl: 12,
    huge: 16,
  },
  color: {
    common: {
      white: "#ffffff",
      black: "#24292F",
    },
    text: "#57606A",
    bg: "#f6f8fa",
    primary: "#f50184",
    divider: "#d8dee4",
    green: "#3FB950",
    red: "#B62324",
  },
};

export default light;
