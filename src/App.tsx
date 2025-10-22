import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './theme/ThemeProvider';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import RouteGuard from './components/layout/RouteGuard';
import Main from './components/layout/Main';
import Programs from './components/layout/Programs/Programs';
import Workouts from './components/layout/Workouts/Workouts';
import ProgramEditor from './components/programs/ProgramEditor';
import Exercises from './components/exercises/Exercises';
import StartProgram from './components/programs/StartProgram';

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
        <Provider store={store}>
          <Router>
            <RouteGuard>
              <AppContainer>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/programs" element={<Programs />} />
                  <Route path="/workouts" element={<Workouts />} />
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
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
