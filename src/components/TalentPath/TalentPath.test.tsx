import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TestWrapper from 'testUtils/TestWrapper/TestWrapper';
import TalentPath from './TalentPath';
import 'testUtils/matchMedia';

const props = {
	title: `Talent Path 2`,
	items: [
		{name: 'Chevron', pos: -200, tier: 1},
		{name: 'Silverware', pos: -250, tier: 2},
		{name: 'Cake', pos: -300, tier: 3},
		{name: 'Crown', pos: -350, tier: 4},
	]
}

test(`<TalentPath /> Renders`, () => {
	const {getByTestId} = render(
		<TestWrapper>
			<TalentPath {...props} />
		</TestWrapper>
	);
	expect(getByTestId(/TalentPathContainer/i)).toBeInTheDocument();
});

test(`<TalentPath /> shows modal and removes prerequisites`, () => {
	const {queryByText, getByText, getByLabelText} = render(
		<TestWrapper>
			<TalentPath {...props} />
		</TestWrapper>
	);
	// Check to make sure modal isn't showing
	expect(queryByText(/are you sure you want to remove this talent/i)).not.toBeInTheDocument();
	// Add 2 talents
	fireEvent.click(getByLabelText(/chevron/i));
	fireEvent.click(getByLabelText(/silverware/i));
	// Remove first tier
	fireEvent.contextMenu(getByLabelText(/chevron/i));
	// Check to see if modal is showing
	expect(queryByText(/are you sure you want to remove this talent/i)).toBeInTheDocument();
	// Confirm removal of items
	fireEvent.click(getByText(/remove talent/i));
	// Make sure modal is gone
	expect(queryByText(/are you sure you want to remove this talent/i)).not.toBeInTheDocument();
});
