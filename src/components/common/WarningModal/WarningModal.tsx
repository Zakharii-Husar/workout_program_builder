import React from 'react';
import { icons } from '../../../data';
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  IconContainer,
  WarningMessage,
  ButtonGroup,
  ConfirmButton,
  CancelButton
} from './WarningModal.styled';

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmButtonColor?: string;
}

const WarningModal: React.FC<WarningModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmButtonColor = '#dc3545'
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <ModalContent>
          <IconContainer>
            <icons.warning />
          </IconContainer>
          <WarningMessage>{message}</WarningMessage>
          <ButtonGroup>
            <CancelButton onClick={onClose}>
              <icons.cancel />
              {cancelLabel}
            </CancelButton>
            <ConfirmButton onClick={handleConfirm} $color={confirmButtonColor}>
              <icons.check />
              {confirmLabel}
            </ConfirmButton>
          </ButtonGroup>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default WarningModal;

