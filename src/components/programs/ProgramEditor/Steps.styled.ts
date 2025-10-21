import styled from 'styled-components';

export const StepContainer = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden;
  transition: ${props => props.theme.transitions.normal};
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-2px);
  }

  /* Add subtle left border for visual hierarchy */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    border-radius: ${props => props.theme.borderRadius.xl} 0 0 ${props => props.theme.borderRadius.xl};
  }
`;

export const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.background}, ${props => props.theme.colors.surface});
  border-bottom: 1px solid ${props => props.theme.colors.border};
  position: relative;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
    gap: ${props => props.theme.spacing.md};
  }
`;

export const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.full};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  box-shadow: ${props => props.theme.shadows.md};
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    border-radius: ${props => props.theme.borderRadius.full};
    z-index: -1;
    opacity: 0.3;
    filter: blur(4px);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
`;

export const StepTitle = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin: 0;
  letter-spacing: 0.5px;
  line-height: ${props => props.theme.typography.lineHeight.tight};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }
`;

export const StepContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.lg};
    min-height: 100px;
  }
`;

export const AddExercisesButton = styled.button`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  box-shadow: ${props => props.theme.shadows.md};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: ${props => props.theme.spacing.lg};
  width: 100%;
  min-height: 52px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    border-radius: ${props => props.theme.borderRadius.lg};
    z-index: -1;
    opacity: 0;
    transition: ${props => props.theme.transitions.normal};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.sm};
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    min-height: 44px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.lg}, ${props => props.theme.shadows.glow};
    
    &::before {
      opacity: 0.1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;
