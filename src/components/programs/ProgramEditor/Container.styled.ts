import styled from 'styled-components';
import { fadeIn } from './animations';

export const ProgramEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg};
  animation: ${fadeIn} 0.6s ease-out;
  max-width: 1200px;
  margin: 0 auto;
  gap: ${props => props.theme.spacing.xl};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.lg};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xl};
    gap: ${props => props.theme.spacing.xxl};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spacing.xxxl};
    gap: ${props => props.theme.spacing.xxxl};
  }
`;
