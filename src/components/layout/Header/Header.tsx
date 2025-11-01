import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  UserSection,
  UserGreeting,
  NavButton,
  NavContainer,
} from './Header.styled';
import { icons } from '../../../data';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);

  // Get user display name
  const getUserDisplayName = (): string => {
    if (!user) return '';
    
    // Prefer display name, fallback to email
    if (user.displayName) {
      return user.displayName;
    }
    
    if (user.email) {
      // Extract name from email (before @)
      const name = user.email.split('@')[0];
      return name;
    }
    
    return 'User';
  };

  const userDisplayName = getUserDisplayName();

  // Check if current route should show header
  const shouldShowHeader = location.pathname !== '/login';

  if (!shouldShowHeader || !user) {
    return null;
  }

  // Helper to check if path matches (handles nested routes)
  const isActiveRoute = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => navigate('/')}>
          Workout Builder
        </Logo>
        
        <NavContainer>
          <NavButton
            onClick={() => navigate('/')}
            $active={isActiveRoute('/') && location.pathname !== '/create' && !location.pathname.startsWith('/edit') && !location.pathname.startsWith('/start')}
          >
            <icons.start />
            Home
          </NavButton>
          <NavButton
            onClick={() => navigate('/programs')}
            $active={isActiveRoute('/programs')}
          >
            <icons.edit />
            Programs
          </NavButton>
          <NavButton
            onClick={() => navigate('/workouts')}
            $active={isActiveRoute('/workouts')}
          >
            <icons.check />
            History
          </NavButton>
          <NavButton
            onClick={() => navigate('/settings')}
            $active={isActiveRoute('/settings')}
          >
            <icons.settings />
            Settings
          </NavButton>
        </NavContainer>

        <UserSection>
          <UserGreeting>
            Hello, <strong>{userDisplayName}</strong>
          </UserGreeting>
        </UserSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

