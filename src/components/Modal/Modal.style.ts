import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0,0,0,0.7);
	display: flex;
	justify-content: center;
	align-items: flex-start;
	z-index: 9;
	padding: 20px;
`;

export const ModalDialog = styled.div`
	background: ${(props) => props.theme.blue[900]};
	border: 1px solid ${(props) => props.theme.blue[800]};
	max-width: 600px;
	padding: 30px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const ModalButtons = styled.div`
	width: 100%;
	text-align: center;
`;
