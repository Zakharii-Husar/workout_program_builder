import styled from 'styled-components';

export const Field = styled.div``;

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  box-sizing: border-box;
  font-family: ${props => props.theme.typography.fontFamily.primary};
  transition: ${props => props.theme.transitions.fast};
  background: ${props => props.theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.accentBlueLight};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`;

export const InputCompactWide = styled(Input)`
  width: 128px;
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const UnitToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

export const UnitToggle = styled.button<{ $isOn: boolean }>`
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 9999px;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.gray200};
  cursor: pointer;
  padding: 0;
  transition: ${props => props.theme.transitions.fast};
  box-shadow: none;

  &:hover {
    filter: brightness(0.98);
  }
`;

export const UnitToggleThumb = styled.div<{ $isOn: boolean }>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.sm};
  transform: translateX(${props => (props.$isOn ? '20px' : '0')});
  transition: ${props => props.theme.transitions.fast};
`;

export const UnitOption = styled.button<{ $active: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 12px;
  color: ${props => (props.$active ? props.theme.colors.text : props.theme.colors.textMuted)};
  font-weight: ${props => (props.$active ? props.theme.typography.fontWeight.semibold : props.theme.typography.fontWeight.medium)};
  padding: 2px 4px;
`;


