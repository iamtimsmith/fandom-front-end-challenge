import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import TestWrapper from 'testUtils/TestWrapper/TestWrapper';
import Modal, {ModalButtons} from './Modal';

test(`<Modal /> renders`, () => {
	const {queryByText} = render(
		<TestWrapper>
			<Modal>This is the modal</Modal>
		</TestWrapper>
	);
	expect(queryByText(/this is the modal/i)).toBeInTheDocument();
});

test(`<Modal /> clicking background closes background`, () => {
	const mock = jest.fn();
	const {getByTestId} = render(
		<TestWrapper>
			<Modal close={() => mock()}>This is the modal</Modal>
		</TestWrapper>
	);
	fireEvent.click(getByTestId('modalContainer'));
	expect(mock).toHaveBeenCalled();
});

test(`<Modal /> clicking dialog doesn't close modal`, () => {
	const mock = jest.fn();
	const {getByTestId} = render(
		<TestWrapper>
			<Modal close={() => mock()}>This is the modal</Modal>
		</TestWrapper>
	);
	fireEvent.click(getByTestId('modalDialog'));
	expect(mock).not.toHaveBeenCalled();
});

test(`<Modal /> clicking button works`, () => {
	const mock = jest.fn();
	const {getByText} = render(
		<TestWrapper>
			<Modal close={() => mock()}>
				<p>This is the modal</p>
				<ModalButtons>
					<button onClick={() => mock()}>Click me</button>
				</ModalButtons>
			</Modal>
		</TestWrapper>
	);
	fireEvent.click(getByText(/click me/i));
	expect(mock).toHaveBeenCalled();
});
