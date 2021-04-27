import React from 'react';
import {TalentButton} from './Talent.style';
import {ITalentProps} from './Talent.i';

const Talent = ({item, active, increment, decrement}: ITalentProps) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, dir: string) => {
		e.preventDefault(); 
		e.stopPropagation();
		// If mobile device, allow talent toggle with touch
		if (window.matchMedia("(hover: none)").matches) {
			if (active === true) {decrement(item.tier)}
			else {increment(item.tier)}
		}
		// If desktop, allow left and right click
		else {
			if (dir === 'increment') increment(item.tier);
			if (dir === 'decrement') decrement(item.tier);
		}
	}

	return (
		<TalentButton
			pos={item.pos}
			active={active}
			onClick={(e) => handleClick(e, 'increment')}
			onContextMenu={(e) => handleClick(e, 'decrement')}
			title={item.name}
			aria-label={item.name}
		/>
	);
}

export default Talent;
