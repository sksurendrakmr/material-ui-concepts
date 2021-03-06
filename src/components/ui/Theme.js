import { createMuiTheme } from '@material-ui/core/styles'

const arcBlue = '#0B72B9'
const arcOrange = '#FFBA60'
const arcGrey = '#868686'
export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      color: `${arcBlue}`,
      fontSize: '1.7rem',
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
})
