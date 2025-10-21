import styled from 'styled-components';

export const CancelOrSave = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${props => props.theme.spacing.md};
  background: linear-gradient(135deg, ${props => props.theme.colors.background}, ${props => props.theme.colors.surface});
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 2px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.md};
  width: 100%;
  min-width: 0;
  padding: ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}05, ${props => props.theme.colors.accent}05);
    border-radius: ${props => props.theme.borderRadius.xl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: ${props => props.theme.spacing.lg};
    padding: ${props => props.theme.spacing.xl};
  }
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  background: linear-gradient(135deg, ${props => props.theme.colors.warmGray}, ${props => props.theme.colors.dustyBrown});
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
  flex: 1;
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
    background: linear-gradient(135deg, ${props => props.theme.colors.warmGray}, ${props => props.theme.colors.dustyBrown});
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
    box-shadow: ${props => props.theme.shadows.lg};
    
    &::before {
      opacity: 0.1;
    }
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
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
  flex: 1;
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

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 16px;
      height: 16px;
    }
  }
`;
