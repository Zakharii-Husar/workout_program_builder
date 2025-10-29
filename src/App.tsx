import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './theme/ThemeProvider';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import RouteGuard from './components/layout/RouteGuard';
import Main from './components/layout/Main';
import Programs from './components/layout/Programs/Programs';
import WorkoutHistory from './components/layout/WorkoutHistory';
import Settings from './components/layout/Settings';
import ProgramEditor from './components/programs/ProgramEditor';
import Exercises from './components/exercises/Exercises';
import ActiveWorkout from './components/workouts/ActiveWorkout';
import { timerService, TimerService } from './services/timerService';

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
  // Initialize timer service when app starts
  useEffect(() => {
    // Get rest time from store
    const state = store.getState();
    const targetRestTimeMs = state.workouts.runningWorkout?.restBetweenSets || 60000;
    
    timerService.initialize(targetRestTimeMs);
    
    // Subscribe to store changes to sync timer service
    const unsubscribe = store.subscribe(() => {
      const currentState = store.getState();
      const currentRestTimeMs = currentState.workouts.runningWorkout?.restBetweenSets || 60000;
      timerService.syncWithState(currentRestTimeMs);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

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
                  <Route path="/workouts" element={<WorkoutHistory />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/create" element={<ProgramEditor />} />
                  <Route path="/create/exercises" element={<Exercises />} />
                  <Route path="/edit/:programId" element={<ProgramEditor />} />
                  <Route path="/edit/:programId/exercises" element={<Exercises />} />
                  <Route path="/start/:programId" element={<ActiveWorkout />} />
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
