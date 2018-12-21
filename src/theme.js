import {
  createMuiTheme,
} from '@material-ui/core/styles';

// Material-UI theme colours
// https://material-ui.com/customization/themes/#palette
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;
