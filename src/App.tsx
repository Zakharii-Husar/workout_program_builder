import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './theme/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import RouteGuard from './components/RouteGuard';
import Main from './components/Main';
import ProgramEditor from './components/ProgramEditor';
import Exercises from './components/Exercises';
import StartProgram from './components/StartProgram';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  min-height: 100vh;
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
                  <Route path="/create" element={<ProgramEditor />} />
                  <Route path="/create/exercises" element={<Exercises />} />
                  <Route path="/edit/:programId" element={<ProgramEditor />} />
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
