import React from 'react';
import styled from 'styled-components';

const ProgramNameContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.md};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.sm};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg};
  }
`;

const ProgramNameDisplay = styled.div`
  text-align: center;
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textOnPrimary};
  margin-bottom: ${props => props.theme.spacing.md};
  text-shadow: ${props => props.theme.shadows.glow};
  letter-spacing: 2px;
  text-transform: uppercase;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
    letter-spacing: 3px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
    letter-spacing: 4px;
  }
`;

const Spacer = styled.div`
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 40px;
  }
`;

interface ProgramNameProps {
  name: string;
}

const ProgramName: React.FC<ProgramNameProps> = ({ name }) => {
  return (
    <ProgramNameContainer>
      <ProgramNameDisplay>{name}</ProgramNameDisplay>
      <Spacer />
    </ProgramNameContainer>
  );
};

export default ProgramName;
