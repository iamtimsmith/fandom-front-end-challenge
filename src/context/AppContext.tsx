import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

interface IContext {
	points: number;
	setPoints: Dispatch<SetStateAction<number>>;
	pointsUsed: number;
	setPointsUsed: Dispatch<SetStateAction<number>>;
	error: string;
	setError: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext({} as IContext);

interface IProviderProps {
	children: JSX.Element | JSX.Element[];
}
export const AppProvider = ({children}: IProviderProps) => {
	const [points, setPoints] = useState<number>(6);
	const [pointsUsed, setPointsUsed] = useState<number>(0);
	const [error, setError] = useState<string>(``);

	return (
		<AppContext.Provider value={{
			points, setPoints,
			pointsUsed, setPointsUsed,
			error, setError,
		}}>
			{children}
		</AppContext.Provider>
	);
}
