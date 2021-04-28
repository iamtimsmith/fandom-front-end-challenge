import React from 'react';
import {render} from '@testing-library/react';
import Alert from './Alert';
import 'jest-styled-components';

test(`<Alert /> renders`, () => {
	const {getByText} = render(<Alert type='success'>Hello there!</Alert>);
	expect(getByText(/hello there/i)).toBeInTheDocument();
});

test(`<Alert /> displays success styles`, () => {
	const {queryByText} = render(
		<Alert type='success'>
			Success
		</Alert>
	);
	expect(queryByText(/success/i)).toHaveStyleRule('border', `1px solid green`)
});

test(`<Alert /> displays error styles`, () => {
	const {queryByText} = render(
		<Alert type='error'>
			Error
		</Alert>
	);
	expect(queryByText(/error/i)).toHaveStyleRule('border', `1px solid red`)
});
