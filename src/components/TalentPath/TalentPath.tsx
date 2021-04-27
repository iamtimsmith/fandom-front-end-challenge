import React, {useState, useContext} from 'react';
import Talent from 'components/Talent/Talent';
import Modal, {ModalButtons} from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import {AppContext} from 'context/AppContext';
import {TalentPathContainer, TalentPathTitle, TalentPathTalents, TalentPathProgress} from './TalentPath.style';
import {ITalentPathProps} from './TalentPath.i';

const TalentPath = ({title, items}: ITalentPathProps) => {
	const {setError, points, pointsUsed, setPointsUsed} = useContext(AppContext);
	const [tier, setTier] = useState<number>(0);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [toBeRemoved, setToBeRemoved] = useState<number>(-1);
	
	const increment = (clickedTier: number) => {
		// Make sure there are available points
		if (pointsUsed < points) {
			// If next tier talent is clicked
			if (tier === clickedTier - 1) {
				setTier(clickedTier);
				setPointsUsed(pointsUsed + 1);
				setError(``);
			}
			// If user clicks an item other than next tier, show error
			else if (clickedTier > tier + 1) {
				setError(`You must select your talents in order!`);
			}
		}
	}

	const decrement = (clickedTier: number) => {
		// Make sure used can't go negative
		if (pointsUsed > 0) {
			// If user removes current talent
			if (clickedTier === tier) {
				setTier(clickedTier - 1);
				setPointsUsed(pointsUsed - 1);
			}
			// If user selects previous tier, show modal to confirm choice
			else {
				setToBeRemoved(clickedTier);
				setShowModal(true);
			}
		}
	}

	const decrementMany = () => {
		setTier(toBeRemoved);
		setShowModal(false);
		setPointsUsed(pointsUsed - (tier - toBeRemoved));
		setToBeRemoved(-1);
	}

	return (
		<TalentPathContainer>
			<TalentPathTitle>{title}</TalentPathTitle>
			<TalentPathTalents>
				{items.map((item, key) => (
					<React.Fragment key={key}>
						<Talent
							item={item}
							active={tier >= item.tier}
							increment={increment}
							decrement={decrement}
						/>
					</React.Fragment>
				))}
				<TalentPathProgress talents={items.length}tier={tier} />
			</TalentPathTalents>
			{showModal &&
				<Modal close={() => setShowModal(false)}>
					<p>Are you sure you want to remove this talent? By clicking remove, you will remove the following:</p>
					<ul>
						{items.filter((filterItem) => filterItem.tier >= toBeRemoved && filterItem.tier <= tier).map((listItem) => (
							<li key={listItem.tier}>{listItem.name}</li>
						))}
					</ul>
					<ModalButtons>
						<Button variant='primary' onClick={() => decrementMany()}>Remove Talent</Button>
						<Button variant='secondary' onClick={() => setShowModal(false)}>Cancel</Button>
					</ModalButtons>
				</Modal>
			}
		</TalentPathContainer>
	);
}

export default TalentPath;
