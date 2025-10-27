import styled from 'styled-components';

export const WorkoutHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WorkoutCard = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const WorkoutHeader = styled.div`
  margin-bottom: 16px;
`;

export const WorkoutTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: #212529;
`;

export const WorkoutMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`;

export const MetaItem = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6c757d;
`;

export const CompletionStats = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
`;

export const SetDetailsSection = styled.div`
  margin-top: 16px;
`;

export const SetDetailsTitle = styled.h4`
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
  color: #212529;
`;

export const SetDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SetItem = styled.div<{ $completed: boolean }>`
  padding: 8px 12px;
  background: ${props => props.$completed ? '#d4edda' : '#f8d7da'};
  border: 1px solid ${props => props.$completed ? '#c3e6cb' : '#f5c6cb'};
  border-radius: 6px;
  font-size: 14px;
  color: ${props => props.$completed ? '#155724' : '#721c24'};
`;

export const SetItemName = styled.span`
  font-weight: 500;
`;

export const SetItemDetails = styled.span`
  margin-left: 8px;
  font-weight: 400;
`;
