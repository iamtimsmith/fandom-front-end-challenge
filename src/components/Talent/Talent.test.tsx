import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TestWrapper from 'testUtils/TestWrapper/TestWrapper';
import Talent from './Talent';
import 'testUtils/matchMedia';

const props = {
	item: {name: 'Chevron', pos: 0, tier: 1},
	active: false,
	increment: jest.fn(),
	decrement: jest.fn(),
}

test(`<Talent /> renders`, () => {
	const {queryByLabelText} = render(
		<TestWrapper>
			<Talent {...props} />
		</TestWrapper>
	);
	expect(queryByLabelText(/chevron/i)).toBeInTheDocument();
});

test(`<Talent /> activates when clicked and deactivates when right clicked`, () => {
	const {getByLabelText} = render(
		<TestWrapper>
			<Talent {...props} />
		</TestWrapper>
	);
	// Click to activate talent
	fireEvent.click(getByLabelText(/chevron/i));
	expect(props.increment).toHaveBeenCalled();
	// Right click to deactivate talent
	fireEvent.contextMenu(getByLabelText(/chevron/i));
	expect(props.decrement).toHaveBeenCalled();
});
