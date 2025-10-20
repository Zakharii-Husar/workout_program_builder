import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './theme/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import RouteGuard from './components/RouteGuard';
import Main from './components/Main';
import CreateProgram from './components/CreateProgram';
import Exercises from './components/Exercises';
import StartProgram from './components/StartProgram';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppProvider>
          <Router>
            <RouteGuard>
              <div className="App">
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/create" element={<CreateProgram />} />
                  <Route path="/create/exercises" element={<Exercises />} />
                  <Route path="/edit/:programId" element={<CreateProgram />} />
                  <Route path="/edit/:programId/exercises" element={<Exercises />} />
                  <Route path="/start/:programId" element={<StartProgram />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </RouteGuard>
          </Router>
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
