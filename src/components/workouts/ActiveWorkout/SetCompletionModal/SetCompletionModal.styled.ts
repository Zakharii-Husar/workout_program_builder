import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.shadowMedium};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 0;
  max-width: 480px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${props => props.theme.shadows.xl};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.accentBlueLight}, ${props => props.theme.colors.white});
  border-bottom: 2px solid ${props => props.theme.colors.accentBlue};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors.accentBlue}, ${props => props.theme.colors.accent});
    border-radius: ${props => props.theme.borderRadius.md};
  }
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  letter-spacing: ${props => props.theme.typography.letterSpacing.tight};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }
`;

export const ModalCloseButton = styled.button`
  background: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.border};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.sm};
  
  &:hover {
    background: ${props => props.theme.colors.accentRed};
    border-color: ${props => props.theme.colors.accentRed};
    transform: scale(1.1);
    
    svg {
      color: ${props => props.theme.colors.white};
    }
  }
  
  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.textSecondary};
    transition: ${props => props.theme.transitions.fast};
  }
`;

export const FormContainer = styled.div`
  padding: ${props => props.theme.spacing.xxl};
  background: ${props => props.theme.colors.white};
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xl};
  }
`;

export const InputGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.typography.fontSize.base};
  box-sizing: border-box;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  transition: ${props => props.theme.transitions.fast};
  background: ${props => props.theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.accentBlueLight};
    transform: translateY(-1px);
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

export const TimeDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  background: linear-gradient(135deg, ${props => props.theme.colors.gray50}, ${props => props.theme.colors.white});
  
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    transition: ${props => props.theme.transitions.fast};
    padding: ${props => props.theme.spacing.sm};
    border-radius: ${props => props.theme.borderRadius.full};
    background: ${props => props.theme.colors.white};
    
    &:hover {
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.accent};
      transform: scale(1.1);
    }
  }
  
  span {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.typography.fontFamily.timer};
    min-width: 70px;
    text-align: center;
    letter-spacing: 1px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.xxl};
  padding-top: ${props => props.theme.spacing.xl};
  border-top: 2px solid ${props => props.theme.colors.border};
`;

export const SaveButton = styled.button`
  flex: 1;
  background: linear-gradient(135deg, ${props => props.theme.colors.accentGreen}, #15803d);
  color: ${props => props.theme.colors.white};
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.md};
  letter-spacing: ${props => props.theme.typography.letterSpacing.wide};
  
  &:hover {
    background: linear-gradient(135deg, #15803d, ${props => props.theme.colors.accentGreen});
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  transition: ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadows.sm};
  
  &:hover {
    background: ${props => props.theme.colors.gray50};
    border-color: ${props => props.theme.colors.gray400};
    transform: translateY(-1px);
    box-shadow: ${props => props.theme.shadows.md};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

