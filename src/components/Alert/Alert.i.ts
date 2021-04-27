export interface IAlertProps {
	type: 'error' | 'success';
	children: string | JSX.Element | JSX.Element[];
}

export interface IAlertContainer {
	type: 'error' | 'success';
}
