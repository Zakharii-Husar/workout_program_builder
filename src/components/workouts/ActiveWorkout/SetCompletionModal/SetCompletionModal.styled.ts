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
  backdrop-filter: blur(6px);
`;

export const ModalContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 0;
  max-width: 420px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: ${props => props.theme.shadows.lg};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
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
  
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
  }
`;

export const Section = styled.section`
  padding: ${props => props.theme.spacing.sm} 0;
  
  &:not(:last-of-type) {
    margin-bottom: ${props => props.theme.spacing.lg};
    padding-bottom: ${props => props.theme.spacing.lg};
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textSecondary};
  letter-spacing: ${props => props.theme.typography.letterSpacing.wide};
  text-transform: uppercase;
`;

export const SectionBody = styled.div``;

export const InputGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const FieldsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.md};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

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

export const InputCompact = styled(Input)`
  width: 96px;
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const InputCompactWide = styled(Input)`
  width: 128px;
  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const TimeDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  background: ${props => props.theme.colors.white};
  
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    transition: ${props => props.theme.transitions.fast};
    padding: ${props => props.theme.spacing.sm};
    border-radius: ${props => props.theme.borderRadius.full};
    background: transparent;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
      background: ${props => props.theme.colors.gray50};
    }
  }
  
  span {
    font-size: ${props => props.theme.typography.fontSize.xl};
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
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
  margin-top: ${props => props.theme.spacing.xl};
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.border};
  justify-content: flex-end;
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
  box-shadow: ${props => props.theme.shadows.md};
  
  &:hover {
    filter: brightness(0.95);
    box-shadow: ${props => props.theme.shadows.lg};
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
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
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
  box-shadow: none;
  
  &:hover {
    background: ${props => props.theme.colors.gray50};
    border-color: ${props => props.theme.colors.gray400};
  }
  
  &:active {
    filter: brightness(0.98);
  }
  
  svg {
    width: 18px;
    height: 18px;
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

export const TimeInputs = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  align-items: center;
`;

export const TimeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 72px;
    text-align: center;
  }
`;

export const TimeUnit = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.textMuted};
  margin-top: 4px;
`;

export const TimeColon = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const TimeCurrent = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.textMuted};
`;

export const DigitWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const DigitColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const DigitColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const DigitButton = styled.button`
  width: 28px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: pointer;
  padding: 0;
  transition: ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.gray50};
  }
`;

export const DigitInput = styled.input`
  width: 28px;
  height: 36px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.base};
  background: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transitions.fast};
  font-family: ${props => props.theme.typography.fontFamily.timer};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.accentBlueLight};
  }
`;

export const DigitSeparator = styled.div`
  padding: 0 4px;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 16px;
  align-self: center;
`;

