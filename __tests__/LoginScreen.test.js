import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';

// Mock the GoogleSignin module
jest.mock('@react-native-google-signin/google-signin', () => ({
  GoogleSignin: {
    configure: jest.fn(),
    hasPlayServices: jest.fn().mockResolvedValue(true),
    signIn: jest.fn().mockResolvedValue({ user: { email: 'test@example.com' } }),
  },
  statusCodes: {
    SIGN_IN_CANCELLED: 'SIGN_IN_CANCELLED',
    IN_PROGRESS: 'IN_PROGRESS',
    PLAY_SERVICES_NOT_AVAILABLE: 'PLAY_SERVICES_NOT_AVAILABLE',
  },
}));

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={navigation} />);

    expect(getByText('Bienvenue sur Leaflows')).toBeTruthy();
    expect(getByPlaceholderText('numéro de téléphone')).toBeTruthy();
    expect(getByPlaceholderText('entrez votre mot de passe')).toBeTruthy();
  });

  it('navigates to TutorSearch on phone sign-in', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<LoginScreen navigation={navigation} />);

    fireEvent.press(getByText('Se connecter'));
    expect(navigation.navigate).toHaveBeenCalledWith('TutorSearch');
  });

  it('navigates to SignUp screen', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<LoginScreen navigation={navigation} />);

    fireEvent.press(getByText("Pas encore de compte ? S'inscrire"));
    expect(navigation.navigate).toHaveBeenCalledWith('SignUp');
  });

  it('handles Google Sign-In', async () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<LoginScreen navigation={navigation} />);

    fireEvent.press(getByText('Continuer avec Google'));

    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalledWith('TutorSearch');
    });
  });
});
