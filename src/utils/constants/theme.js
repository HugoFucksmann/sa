import {Dimensions} from 'react-native';
const THEME = {
  colors: {
    red: '#F40000',
    darkred: '#BB050599',
    black: '#101010',
    darkgray: '#5E5C5C',
    lightgray: '#E3DDDD',
    white: '#ffffff',
    green: '#44b16e',
    creamwhite: '#f4f4fc',
    blackCronica: '#202020',
    blue: '#213257',
    lightblue: '#39548b',
  },
  fontSize: {
    heading: 18,
    subheading: 16,
    title: 13,
    description: 10,
  },
  fontFamily: {
    mainRegular: 'NotoSansDisplay-Regular',
    mainBold: 'NotoSansDisplay-Bold',
    secondaryRegular: 'Roboto-Regular',
    secondaryBold: 'Roboto-Bold',
  },
  width: {
    default: Dimensions.get('window').width * 0.95,
    fullWidth: '100%',
  },
};

export const APP_THEME_BLUE = {
  dark: true,
  colors: {
    primary: THEME.colors.white,
    background: THEME.colors.blue,
    card: THEME.colors.blackCronica,
    text: THEME.colors.blackCronica,
    border: THEME.colors.white,
    notification: THEME.colors.white,
  },
};

export const APP_THEME_CLASSIC = {
  dark: false,
  colors: {
    primary: THEME.colors.white,
    background: THEME.colors.creamwhite,
    card: THEME.colors.blue,
    text: THEME.colors.blue,
    border: THEME.colors.white,
    notification: THEME.colors.white,
  },
};

export default THEME;
