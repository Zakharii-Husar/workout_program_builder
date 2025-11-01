import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
  clearError,
} from '../../../store/slices/authSlice';
import {
  LoginContainer,
  LoginCard,
  Title,
  Form,
  Input,
  Button,
  GoogleButton,
  ErrorMessage,
  ToggleMode,
  Divider,
} from './Login.styled';
import { FaGoogle } from 'react-icons/fa';

type AuthMode = 'signin' | 'signup';

const Login: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Clear errors when mode changes
    dispatch(clearError());
    setValidationError('');
  }, [mode, dispatch]);

  const validateForm = (): boolean => {
    if (!email || !password) {
      setValidationError('Please fill in all fields');
      return false;
    }

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setValidationError('Passwords do not match');
        return false;
      }
      if (password.length < 6) {
        setValidationError('Password must be at least 6 characters');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!validateForm()) {
      return;
    }

    try {
      if (mode === 'signin') {
        await dispatch(signInWithEmail({ email, password })).unwrap();
      } else {
        await dispatch(signUpWithEmail({ email, password })).unwrap();
      }
    } catch (err) {
      // Error is handled by Redux state
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await dispatch(signInWithGoogle()).unwrap();
    } catch (err) {
      // Error is handled by Redux state
    }
  };

  const displayError = validationError || error?.message || '';

  return (
    <LoginContainer>
      <LoginCard>
        <Title>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          {mode === 'signup' && (
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
            />
          )}

          {displayError && <ErrorMessage>{displayError}</ErrorMessage>}

          <Button type="submit" disabled={loading}>
            {loading ? 'Loading...' : mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </Button>
        </Form>

        <Divider>
          <span>OR</span>
        </Divider>

        <GoogleButton onClick={handleGoogleSignIn} disabled={loading}>
          <FaGoogle />
          Continue with Google
        </GoogleButton>

        <ToggleMode>
          {mode === 'signin' ? (
            <>
              Don't have an account?{' '}
              <button type="button" onClick={() => setMode('signup')}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" onClick={() => setMode('signin')}>
                Sign In
              </button>
            </>
          )}
        </ToggleMode>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;

