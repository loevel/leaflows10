import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignUpScreen from '../src/screens/SignUpScreen';

describe('SignUpScreen', () => {
  it('renders correctly', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText, getByPlaceholderText } = render(<SignUpScreen navigation={navigation} />);

    expect(getByText('Créer un compte Enseignant')).toBeTruthy();
    expect(getByPlaceholderText('numéro de téléphone')).toBeTruthy();
    expect(getByPlaceholderText('créez votre mot de passe')).toBeTruthy();
    expect(getByPlaceholderText('confirmez votre mot de passe')).toBeTruthy();
  });

  it('navigates to CreateTutorProfile on sign-up', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<SignUpScreen navigation={navigation} />);

    fireEvent.press(getByText("S'inscrire"));
    expect(navigation.navigate).toHaveBeenCalledWith('CreateTutorProfile');
  });

  it('navigates to Login screen', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<SignUpScreen navigation={navigation} />);

    fireEvent.press(getByText('Déjà un compte ? Se connecter'));
    expect(navigation.navigate).toHaveBeenCalledWith('Login');
  });
});
