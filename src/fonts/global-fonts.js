import { createGlobalStyle } from 'styled-components';

import RobotoCondensed from './roboto-condensed.woff';
import RobotoCondensed2 from './roboto-condensed.woff2';
import Quicksand from './quicksand.woff';
import Quicksand2 from './quicksand-v2.woff2';

export const CreateGlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto Condensed';
        src: local('Roboto Condensed'), local('Roboto Condensed'),
        url(${RobotoCondensed2}) format('woff2'),
        url(${RobotoCondensed}) format('woff');

        font-family: 'Quicksand';
        src: local('Quicksand'), local('Quicksand'),
        url(${Quicksand2}) format('woff2'),
        url(${Quicksand}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;