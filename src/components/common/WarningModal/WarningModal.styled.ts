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
  box-shadow: ${props => props.theme.shadows.xl};
  border: 2px solid ${props => props.theme.colors.accentAmber};
  overflow: hidden;
`;

export const ModalContent = styled.div`
  padding: ${props => props.theme.spacing.xxxl} ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.accentBlueLight}10, ${props => props.theme.colors.white});
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, ${props => props.theme.colors.accentAmber}, #f59e0b);
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  svg {
    width: 40px;
    height: 40px;
    color: ${props => props.theme.colors.white};
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

export const WarningMessage = styled.p`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  text-align: center;
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  padding: 0 ${props => props.theme.spacing.md};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  width: 100%;
  padding-top: ${props => props.theme.spacing.lg};
`;

export const ConfirmButton = styled.button<{ $color: string }>`
  flex: 1;
  background: ${props => props.$color};
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
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg};
    filter: brightness(1.1);
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

