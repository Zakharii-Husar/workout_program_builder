import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './theme/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import RouteGuard from './components/RouteGuard';
import Main from './components/Main';
import CreateProgram from './components/CreateProgram';
import Exercises from './components/Exercises';
import StartProgram from './components/StartProgram';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto 0 auto;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppProvider>
          <Router>
            <RouteGuard>
              <AppContainer>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/create" element={<CreateProgram />} />
                  <Route path="/create/exercises" element={<Exercises />} />
                  <Route path="/edit/:programId" element={<CreateProgram />} />
                  <Route path="/edit/:programId/exercises" element={<Exercises />} />
                  <Route path="/start/:programId" element={<StartProgram />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AppContainer>
            </RouteGuard>
          </Router>
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
