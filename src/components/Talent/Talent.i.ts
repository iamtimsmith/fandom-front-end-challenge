export interface ITalentProps {
	item: {
		name: string;
		pos: number;
		tier: number;
	}
	active: boolean;
	increment: Function;
	decrement: Function;
}

export interface ITalentButton {
	pos: number;
	active: boolean;
}
