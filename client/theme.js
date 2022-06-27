import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#DBE2EF',
      main: '#3F72AF',
      dark: '#364F6B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#EFBBCF',
      main: '#C3AED6',
      dark: '#8675A9',
      contrastText: '#000',
    },
      openTitle: teal['700'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  