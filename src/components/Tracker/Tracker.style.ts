import styled from 'styled-components';

export const TrackerContainer = styled.div`
	height: 100px;
	background: ${(props) => props.theme.blue[900]};
	border: 1px solid ${(props) => props.theme.black[800]};
	margin: 0 auto;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const TrackerCount = styled.p`
	font-size: 2.6rem;
	margin: 0;
`;

export const TrackerLabel = styled.p`
	font-size: 2.6rem;
	color: ${(props) => props.theme.blue[400]};
	font-weight: 300;
	width: 100%;
	margin-top: -30px;
`;
