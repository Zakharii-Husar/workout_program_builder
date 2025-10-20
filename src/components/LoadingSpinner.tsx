import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Spinner = styled.div<{ size: string }>`
  border: 4px solid ${props => props.theme.colors.border};
  border-top: 4px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  
  ${props => props.size === 'small' && `
    width: 20px;
    height: 20px;
    border-width: 2px;
  `}
  
  ${props => props.size === 'medium' && `
    width: 40px;
    height: 40px;
    border-width: 4px;
  `}
  
  ${props => props.size === 'large' && `
    width: 60px;
    height: 60px;
    border-width: 6px;
  `}
`;

const LoadingMessage = styled.p`
  margin-top: 1rem;
  color: ${props => props.theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 'medium' 
}) => {
  return (
    <LoadingContainer size={size}>
      <Spinner size={size} />
      {message && <LoadingMessage>{message}</LoadingMessage>}
    </LoadingContainer>
  );
};
