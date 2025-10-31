import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(1200px 800px at 50% 0%, rgba(0,0,0,0.35), rgba(0,0,0,0.55))
    , ${props => props.theme.colors.shadowMedium};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px) saturate(105%);
  -webkit-backdrop-filter: blur(8px) saturate(105%);
`;

export const ModalContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 0;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${props => props.theme.shadows.lg};
  border: 1px solid ${props => props.theme.colors.border};
  transform: translateY(6px) scale(0.98);
  opacity: 0;
  animation: modalIn 200ms ease-out forwards;

  @keyframes modalIn {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  letter-spacing: ${props => props.theme.typography.letterSpacing.tight};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  line-height: 1.2;
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
`;

export const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${props => props.theme.spacing.xs};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background: ${props => props.theme.colors.gray50};
  }
  
  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.textSecondary};
    transition: ${props => props.theme.transitions.fast};
  }
`;

export const FormContainer = styled.div`
  padding: ${props => props.theme.spacing.lg};
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing.sm};
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StepCard = styled.div`
  position: relative;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  min-height: auto;
  transition: none;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    min-height: auto;
  }
`;

export const StepNumber = styled.div`
  display: none;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const SaveButton = styled.button`
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.sm};
  width: 100%;
  
  &:hover {
    filter: brightness(0.95);
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  &:active {
    filter: brightness(0.9);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  border: none;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.xs};
  transition: ${props => props.theme.transitions.fast};
  box-shadow: none;
  text-decoration: underline transparent;

  &:hover {
    background: ${props => props.theme.colors.gray50};
    text-decoration-color: ${props => props.theme.colors.textSecondary};
  }

  &:active {
    filter: brightness(0.98);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ModalFooter = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.white};
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;


