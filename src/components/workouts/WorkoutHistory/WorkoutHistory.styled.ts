import styled from 'styled-components';

export const WorkoutHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const WorkoutCard = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.sm};
  transition: ${props => props.theme.transitions.fast};

  &:hover {
    box-shadow: ${props => props.theme.shadows.md};
    border-color: ${props => props.theme.colors.gray300};
  }
`;

export const WorkoutHeader = styled.div`
  margin-bottom: 16px;
`;

export const WorkoutTitle = styled.h3`
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const WorkoutMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const MetaItem = styled.p`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const CompletionStats = styled.p`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const SetDetailsSection = styled.div`
  margin-top: 16px;
`;

export const SetDetailsTitle = styled.h4`
  margin: 0 0 ${props => props.theme.spacing.md} 0;
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const SetDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

export const SetItem = styled.div<{ $completed: boolean }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.$completed ? props.theme.colors.accentBlueLight : props.theme.colors.gray100};
  border: 1px solid ${props => props.$completed ? props.theme.colors.accent : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.$completed ? props.theme.colors.accentBlue : props.theme.colors.textSecondary};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

export const SetItemName = styled.span`
  font-weight: ${props => props.theme.typography.fontWeight.medium};
`;

export const SetItemDetails = styled.span`
  margin-left: ${props => props.theme.spacing.sm};
  font-weight: ${props => props.theme.typography.fontWeight.normal};
`;


