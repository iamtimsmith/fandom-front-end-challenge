import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TestWrapper from 'testUtils/TestWrapper/TestWrapper';
import theme from 'styles/theme';
import Button from './Button';
import 'jest-styled-components';

test(`<Button /> renders`, () => {
	const mock = jest.fn();
	const {queryByText} = render(
		<TestWrapper>
			<Button variant='primary' onClick={() => mock()}>Click me</Button>
		</TestWrapper>
	);
	expect(queryByText(/click me/i)).toBeInTheDocument();
});

test(`<Button /> allows onClick`, () => {
	const mock = jest.fn();
	const {getByText} = render(
		<TestWrapper>
			<Button variant='primary' onClick={() => mock()}>Click me</Button>
		</TestWrapper>
	);
	fireEvent.click(getByText(/click me/i));
	expect(mock).toHaveBeenCalled();
});

test(`<Button /> has primary styles`, () => {
	const mock = jest.fn();
	const {queryByText} = render(
		<TestWrapper>
			<Button variant='primary' onClick={() => mock()}>Click me</Button>
		</TestWrapper>
	);
	expect(queryByText(/click me/i)).toHaveStyleRule('background', theme.blue[600]);
});

test(`<Button /> has secondary styles`, () => {
	const mock = jest.fn();
	const {queryByText} = render(
		<TestWrapper>
			<Button variant='secondary' onClick={() => mock()}>Click me</Button>
		</TestWrapper>
	);
	expect(queryByText(/click me/i)).toHaveStyleRule('background', theme.black[500]);
});

test(`<Button /> default to primary`, () => {
	const mock = jest.fn();
	const {queryByText} = render(
		<TestWrapper>
			<Button onClick={() => mock()}>Click me</Button>
		</TestWrapper>
	);
	expect(queryByText(/click me/i)).toHaveStyleRule('background', theme.blue[600]);
});
