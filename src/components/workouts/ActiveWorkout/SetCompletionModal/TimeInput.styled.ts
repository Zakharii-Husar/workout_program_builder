import styled from 'styled-components';

export const InputGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
  letter-spacing: ${props => props.theme.typography.letterSpacing.wide};
  text-transform: uppercase;
`;

export const DigitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.gray50};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
`;

export const DigitColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const DigitGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const DigitGroupRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
`;

export const DigitColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 44px;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};

  &:focus-within {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.accentBlueLight};
  }

  /* Make adjacent digit columns visually touch */
  &:not(:first-child) {
    border-left: 0;
  }
`;

export const DigitButton = styled.button`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${props => props.theme.colors.white};
  cursor: pointer;
  padding: 0;
  transition: ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.gray100};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const DigitInput = styled.input`
  width: 100%;
  height: 52px;
  text-align: center;
  border: 0;
  font-size: ${props => props.theme.typography.fontSize.lg};
  background: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transitions.fast};
  font-family: ${props => props.theme.typography.fontFamily.timer};
  border-top: 1px solid ${props => props.theme.colors.border};
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:focus {
    outline: none;
    border-top-color: ${props => props.theme.colors.accent};
    border-bottom-color: ${props => props.theme.colors.accent};
  }
`;

export const DigitSeparator = styled.div`
  padding: 0 8px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 18px;
  align-self: center;
  border-radius: ${props => props.theme.borderRadius.md};
  background: transparent;
  box-shadow: none;
`;

export const DigitSubLabel = styled.div`
  margin-top: 2px;
  font-size: 12px;
  color: ${props => props.theme.colors.textMuted};
  letter-spacing: ${props => props.theme.typography.letterSpacing.wide};
  text-transform: uppercase;
`;

export const TimeCurrent = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`;


