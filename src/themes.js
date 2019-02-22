import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


const primaryColor = '#ffffff'
const secondaryColor = '#f62a55'
const backgroundColor = '#f6f7fb'

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
    },
  },
  typography: {
    fontSize: 16,
    htmlFontSize: 10,
    useNextVariants: true,
  },
})
