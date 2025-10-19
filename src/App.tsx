import React from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './theme/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import Main from './components/Main';
import CreateProgram from './components/CreateProgram';
import Exercises from './components/Exercises';
import StartProgram from './components/StartProgram';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppProvider>
          <div className="App">
            <Main />
            <CreateProgram />
            <Exercises />
            <StartProgram />
          </div>
        </AppProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
