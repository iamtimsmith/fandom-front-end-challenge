import styled from 'styled-components';
import bgImage from 'assets/talent-calc-bg.png';

export const AppContainer = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 20px 25px;
	border: 1px solid ${(props) => props.theme.black[800]};
	background-image: url(${bgImage});
`;

export const AppTitle = styled.h1`
	text-align: center;
	background: ${(props) => props.theme.black[800]};
	padding: 10px;
`;

export const AppHelpButton = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.blue[400]};
	font-size: 1.8rem;
	padding: 10px;
	text-decoration: underline;
	cursor: pointer;
`;

export const AppGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 50px;
	align-items: center;

	${(props) => props.theme.tablet} {
		grid-template-columns: 3fr 1fr;
	}
`;
