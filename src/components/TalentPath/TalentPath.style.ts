import styled from 'styled-components';
import {IProgressBar} from './TalentPath.i';

export const TalentPathContainer = styled.div`
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		margin: 50px 0;
`;

export const TalentPathTitle = styled.p`
	text-transform: uppercase;
	width: 100%;
	font-size: 1.4rem;
	padding: 10px 0;

	${(props) => props.theme.tablet} {
		width: auto;
		margin-right: 50px;
	}
`;

export const TalentPathTalents = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	position: relative;
`;

export const TalentPathProgress = styled.div<IProgressBar>`
	flex: 1;
	background: ${(props) => props.theme.black[800]};
	border: 2px solid ${(props) => props.theme.black[700]};
	height: 15px;
	margin-top: 20px;
	width: calc(100% - 4px);
	position: absolute;
	z-index: 0;

	&:after {
		content: '';
		display: block;
		margin-top: -2px;
		top: 0;
		left: 0;
		height: 100%;
		width: ${(props) => props.tier === 0 ? 0 : (props.talents / props.tier) === 1 ? 100 : ((100 / (props.talents - 1)) * props.tier)}%;
		background: ${(props) => props.theme.black[700]};
		border-top: 2px solid ${(props) => props.theme.black[600]};
		border-bottom: 2px solid ${(props) => props.theme.black[600]};
		transition: width 0.75s;
	}
`;
