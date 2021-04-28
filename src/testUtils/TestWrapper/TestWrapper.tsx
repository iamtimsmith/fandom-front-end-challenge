import React from 'react';
import {ThemeProvider} from 'styled-components';
import {AppProvider} from 'context/AppContext';
import theme from 'styles/theme';
import {ITestWrapperProps} from './TestWrapper.i';

const TestWrapper = ({children}: ITestWrapperProps) => (
	<ThemeProvider theme={theme}>
		<AppProvider>
			{children}
		</AppProvider>
	</ThemeProvider>
);

export default TestWrapper;
