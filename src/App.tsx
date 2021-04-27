import React, {useContext, useState} from 'react';
import TalentPath from 'components/TalentPath/TalentPath';
import Alert from 'components/Alert/Alert';
import Tracker from 'components/Tracker/Tracker';
import Modal, {ModalButtons} from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import {AppContext} from 'context/AppContext';
import {AppContainer, AppTitle, AppHelpButton, AppGrid} from 'App.style';

const App = () => {
	const {error, points, pointsUsed} = useContext(AppContext);
	const [helpModal, setHelpModal] = useState<boolean>(false);
	const pathOne = [
		{name: 'Chevron', pos: 0, tier: 1},
		{name: 'Silverware', pos: -50, tier: 2},
		{name: 'Cake', pos: -100, tier: 3},
		{name: 'Crown', pos: -150, tier: 4},
	];
	const pathTwo = [
		{name: 'Chevron', pos: -200, tier: 1},
		{name: 'Silverware', pos: -250, tier: 2},
		{name: 'Cake', pos: -300, tier: 3},
		{name: 'Crown', pos: -350, tier: 4},
	];

  return (
		<AppContainer>
			<AppTitle>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</AppTitle>
			<AppHelpButton onClick={() => setHelpModal(true)}>Need Help?</AppHelpButton>
			{/* Display error if user tries to skip talents */}
			{error && <Alert type='error'>{error}</Alert>}
			{/* Display success message when user has spent all available points */}
			{points === pointsUsed && <Alert type='success'>Congratulations, you spent all your points! Level up to gain more.</Alert>}
			<AppGrid>
				<div>
					<TalentPath
						title='Talent Path 1'
						items={pathOne!}
					/>
					<TalentPath
						title='Talent Path 2'
						items={pathTwo!}
					/>
				</div>
				<Tracker />
			</AppGrid>
			{helpModal && 
				<Modal close={() => setHelpModal(false)}>
					<h2>Help</h2>
					<ul>
						<li>To select a talent: Left click (desktop) or tap (mobile) on desired talent</li>
						<li>To unselect a talent: Right click (desktop) or tap (mobile) on talent.</li>
					</ul>
					<ModalButtons>
						<Button variant='primary' onClick={() => setHelpModal(false)}>Close</Button>
					</ModalButtons>
				</Modal>
			}
		</AppContainer>
	);
}

export default App;
