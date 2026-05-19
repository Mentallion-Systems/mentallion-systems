import { createTheme } from "@mui/material/styles";

export const accent = "#1c3a2f";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: accent,
      dark: "#10241d",
      light: "#36584c",
      contrastText: "#f7f5f2"
    },
    secondary: {
      main: "#c6a15b"
    },
    background: {
      default: "#f7f5f2",
      paper: "#fffdf9"
    },
    text: {
      primary: "#111d18",
      secondary: "#5f625d"
    },
    divider: "rgba(28, 58, 47, 0.14)"
  },
  shape: {
    borderRadius: 20
  },
  typography: {
    fontFamily: "var(--font-sans), sans-serif",
    h1: {
      fontFamily: "var(--font-serif), serif",
      fontWeight: 400,
      lineHeight: 0.96,
      letterSpacing: "-0.055em"
    },
    h2: {
      fontFamily: "var(--font-serif), serif",
      fontWeight: 400,
      lineHeight: 0.98,
      letterSpacing: "-0.045em"
    },
    h3: {
      fontFamily: "var(--font-serif), serif",
      fontWeight: 400,
      lineHeight: 1.02,
      letterSpacing: "-0.04em"
    },
    h4: {
      fontFamily: "var(--font-serif), serif",
      fontWeight: 400,
      lineHeight: 1.08,
      letterSpacing: "-0.035em"
    },
    h5: {
      fontFamily: "var(--font-serif), serif",
      fontWeight: 400,
      lineHeight: 1.12,
      letterSpacing: "-0.025em"
    },
    h6: {
      fontFamily: "var(--font-serif), serif",
      fontWeight: 400,
      lineHeight: 1.16,
      letterSpacing: "-0.02em"
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.75
    },
    body2: {
      fontSize: "0.98rem",
      lineHeight: 1.7
    },
    button: {
      textTransform: "none",
      fontWeight: 650,
      letterSpacing: "-0.015em"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 12,
          boxShadow: "none"
        },
        containedPrimary: {
          backgroundColor: accent,
          color: "#f7f5f2 !important",
          "&:hover": {
            backgroundColor: "#10241d",
            boxShadow: "none"
          },
          "& .MuiButton-label, & .MuiButton-startIcon, & .MuiButton-endIcon, & .MuiSvgIcon-root": {
            color: "#f7f5f2 !important"
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          border: "1px solid rgba(28, 58, 47, 0.1)",
          boxShadow: "none",
          backgroundImage: "none"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999
        }
      }
    }
  }
});
