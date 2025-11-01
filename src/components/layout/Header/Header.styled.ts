import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  box-shadow: ${props => props.theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.lg};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: ${props => props.theme.spacing.md};
    gap: ${props => props.theme.spacing.md};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  }
`;

export const Logo = styled.div`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  flex: 1;
  justify-content: center;

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: space-between;
    gap: ${props => props.theme.spacing.xs};
    overflow-x: auto;
    padding: ${props => props.theme.spacing.xs} 0;
    
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const NavButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.$active ? props.theme.colors.gray50 : 'transparent'};
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.$active ? props.theme.typography.fontWeight.semibold : props.theme.typography.fontWeight.medium};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};
  white-space: nowrap;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &:hover {
    background: ${props => props.$active ? props.theme.colors.gray50 : props.theme.colors.gray50};
    color: ${props => props.theme.colors.primary};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.xs};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

export const UserGreeting = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textSecondary};
  text-align: right;

  strong {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.fontSize.xs};
    text-align: center;
  }
`;

