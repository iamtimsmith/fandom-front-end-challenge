import {createGlobalStyle} from 'styled-components';
import reset from './reset';
import theme from './theme';

const global = createGlobalStyle`
	${reset}

	html {
		font-size: 10px;
	}

	body {
		font-size: 1.8rem;
		line-height: 1.2;
		background: ${theme.blue[900]};
		color: ${theme.black[200]};
		font-family: sans-serif;
	}

	h1 {
		font-size: 2.8rem;
		color: ${theme.black[0]};
	}
	h2 {
		font-size: 2.4rem;
		color: ${theme.black[400]};
	}

	ul {
		margin: 20px 0;
		list-style: disc;
		line-height: 1.4;
	}
`;

export default global;
