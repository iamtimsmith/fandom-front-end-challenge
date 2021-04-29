import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import App from 'App';
import TestWrapper from 'testUtils/TestWrapper/TestWrapper';
import 'testUtils/matchMedia';

test(`<App /> renders`, () => {
	const {queryByText} = render(
		<TestWrapper>
			<App />
		</TestWrapper>
	);
	expect(queryByText(/rune mastery loadout talent calculator/i)).toBeInTheDocument();
});

test(`<App /> updates count as items are selected and deselected`, () => {
	const {queryByText, getByText, getByLabelText} = render(
		<TestWrapper>
			<App />
		</TestWrapper>
	);
	// Check initial count
	expect(queryByText('0/6')).toBeInTheDocument();
	// Add items and check the count
	fireEvent.click(getByLabelText(/chevron/i));
	expect(queryByText('0/6')).not.toBeInTheDocument();
	expect(queryByText('1/6')).toBeInTheDocument();
	fireEvent.click(getByLabelText(/silverware/i));
	expect(queryByText('1/6')).not.toBeInTheDocument();
	expect(queryByText('2/6')).toBeInTheDocument();
	fireEvent.click(getByLabelText(/cake/i));
	expect(queryByText('2/6')).not.toBeInTheDocument();
	expect(queryByText('3/6')).toBeInTheDocument();
	// Remove a single item and check count
	fireEvent.contextMenu(getByLabelText(/cake/i));
	expect(queryByText('3/6')).not.toBeInTheDocument();
	expect(queryByText('2/6')).toBeInTheDocument();
	// Remove a prerequisite item and check count
	fireEvent.contextMenu(getByLabelText(/chevron/i));
	expect(queryByText('2/6')).toBeInTheDocument();
	expect(queryByText(/are you sure you want to remove this talent/i)).toBeInTheDocument();
	fireEvent.click(getByText(/remove talent/i));
	expect(queryByText('2/6')).not.toBeInTheDocument();
	expect(queryByText('0/6')).toBeInTheDocument();
});

test(`<App /> displays modal when help button is clicked`, () => {
	const {queryByText, getByText} = render(
		<TestWrapper>
			<App />
		</TestWrapper>
	);
	// Make sure modal isn't showing
	expect(queryByText(/to select a talent/i)).not.toBeInTheDocument();
	// click need help button
	fireEvent.click(getByText(/need help/i));
	// See if modal is showing
	expect(queryByText(/to select a talent/i)).toBeInTheDocument();
	// Close the modal on button click
	fireEvent.click(getByText(/close/i));
	// Make sure modal isn't showing
	expect(queryByText(/to select a talent/i)).not.toBeInTheDocument();
});

test(`<App /> shows error when talents aren't selected in order`, () => {
	const {queryByText, getByLabelText} = render(
		<TestWrapper>
			<App />
		</TestWrapper>
	);
	// Make sure error isn't showing
	expect(queryByText(/you must select your talents in order/i)).not.toBeInTheDocument();
	// Click an item without prerequisites
	fireEvent.click(getByLabelText(/cake/i));
	// Error should be showing
	expect(queryByText(/you must select your talents in order/i)).toBeInTheDocument();
});

test(`<App /> shows message when all points are spent`, () => {
	const {queryByText, getByLabelText} = render(
		<TestWrapper>
			<App />
		</TestWrapper>
	);
	// Make sure message isn't showing
	expect(queryByText(/congratulations/i)).not.toBeInTheDocument();
	// Use all points
	fireEvent.click(getByLabelText(/chevron/i));
	fireEvent.click(getByLabelText(/silverware/i));
	fireEvent.click(getByLabelText(/cake/i));
	fireEvent.click(getByLabelText(/crown/i));
	fireEvent.click(getByLabelText(/ship/i));
	fireEvent.click(getByLabelText(/snorkel/i));
	// Error should be showing
	expect(queryByText(/congratulations/i)).toBeInTheDocument();
});

test(`<App /> doesn't allow more than 6 points to be spent`, () => {
	const {queryByText, getByText, getByLabelText} = render(
		<TestWrapper>
			<App />
		</TestWrapper>
	);
	// Check initial count
	expect(queryByText('0/6')).toBeInTheDocument();
	// Use all points
	fireEvent.click(getByLabelText(/chevron/i));
	fireEvent.click(getByLabelText(/silverware/i));
	fireEvent.click(getByLabelText(/cake/i));
	fireEvent.click(getByLabelText(/crown/i));
	fireEvent.click(getByLabelText(/ship/i));
	fireEvent.click(getByLabelText(/snorkel/i));
	expect(queryByText('6/6')).toBeInTheDocument();
	// click on one more and check count
	fireEvent.click(getByLabelText(/lightning/i));
	expect(queryByText('6/6')).toBeInTheDocument();
});
