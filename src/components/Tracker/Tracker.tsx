import React, {useContext} from 'react';
import {AppContext} from 'context/AppContext';
import {TrackerContainer, TrackerCount, TrackerLabel} from './Tracker.style';

const Tracker = () => {
	const {pointsUsed, points} = useContext(AppContext);

	return (
		<TrackerContainer>
			<TrackerCount>{pointsUsed}/{points}</TrackerCount>
			<TrackerLabel>Points Spent</TrackerLabel>
		</TrackerContainer>
	);
}

export default Tracker;
