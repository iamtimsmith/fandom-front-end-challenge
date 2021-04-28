import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TestWrapper from 'testUtils/TestWrapper/TestWrapper';
import TalentPath from './TalentPath';

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
