# Workout Program Builder

React app for creating and executing custom workout programs with exercise selection and timer functionality.

## Architecture

**Stack**: React 18 + TypeScript, Redux Toolkit, React Router, Styled Components

**State Management**: Redux store with 2 slices:
- `programSlice` - program drafts, saved programs, running program
- `workoutSlice` - workout history and session data

## Routes

- `/` - Main menu
- `/programs` - Program list
- `/workouts` - Workout history
- `/create` - Create program
- `/create/exercises` - Exercise selector (create mode)
- `/edit/:id` - Edit program
- `/edit/:id/exercises` - Exercise selector (edit mode)
- `/start/:id` - Run workout

## File Structure

```
src/
├── components/
│   ├── exercises/       # Exercise selection UI
│   ├── programs/        # Program CRUD (editor, start)
│   ├── layout/          # Pages and navigation
│   ├── common/          # Reusable components
│   └── ui/              # UI primitives
├── store/
│   ├── slices/          # Redux state slices
│   └── selectors/       # Memoized selectors
├── services/            # Business logic (program/exercise operations, storage, validation)
├── data/                # Exercise definitions, constants
├── hooks/               # Custom React hooks
├── types/               # TypeScript definitions
├── theme/               # Global styles and theming
└── utils/               # Helpers and formatters
```

## Key Concepts

- **Draft Pattern**: Programs edited in temporary draft state before saving
- **Local Storage**: Programs persisted via storage service
- **Exercise Library**: Pre-defined exercises organized by muscle group
- **Timer System**: Configurable rest timer between exercises
- **Workout History**: Completed workout sessions tracked and stored
