import React from 'react';
import {ModalContainer, ModalDialog} from './Modal.style';
import {IModalProps} from './Modal.i';

const Modal = ({close, children}: IModalProps) => {
	return (
		<ModalContainer onClick={close} data-testid='modalContainer'>
			<ModalDialog onClick={e => e.stopPropagation()} data-testid='modalDialog'>
				{children}
			</ModalDialog>
		</ModalContainer>
	);
}

export default Modal;

export {ModalButtons} from './Modal.style';
