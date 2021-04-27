export interface ITalentPathProps {
	title: string;
	items: {
		name: string;
		pos: number;
		tier: number;
	}[];
}

export interface IProgressBar {
	talents: number;
	tier: number;
}
