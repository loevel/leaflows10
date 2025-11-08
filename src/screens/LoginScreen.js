import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info -> ', userInfo);
      navigation.navigate('TutorSearch');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        Alert.alert('Google Sign-In Error', error.toString());
      }
    }
  };

  const handlePhoneSignIn = () => {
    navigation.navigate('TutorSearch');
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark p-6 justify-center">
      <View className="items-center mb-6">
        <Text className="text-3xl font-bold text-gray-800 dark:text-gray-100">Leaflows</Text>
      </View>
      <Text className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 pb-2">Bienvenue sur Leaflows</Text>
      <Text className="text-base text-center text-gray-600 dark:text-gray-400 mb-8">Ravi de vous revoir !</Text>

      <View className="mb-4">
        <Text className="text-base font-medium text-gray-800 dark:text-gray-200 pb-2">Numéro de téléphone</Text>
        <View className="flex-row items-center rounded-lg border border-gray-300 dark:border-gray-600 h-14">
          <Text className="text-base text-gray-800 dark:text-gray-200 pl-4 pr-3 border-r border-gray-300 dark:border-gray-600">+237</Text>
          <TextInput
            className="flex-1 p-4 text-base text-gray-800 dark:text-gray-200"
            placeholder="numéro de téléphone"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View className="mb-4">
        <Text className="text-base font-medium text-gray-800 dark:text-gray-200 pb-2">Mot de passe</Text>
        <TextInput
          className="rounded-lg border border-gray-300 dark:border-gray-600 h-14 p-4 text-base text-gray-800 dark:text-gray-200"
          placeholder="entrez votre mot de passe"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        className="bg-primary rounded-xl h-14 justify-center items-center mb-4"
        onPress={handlePhoneSignIn}
      >
        <Text className="text-lg font-semibold text-background-dark">Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text className="text-sm font-medium text-primary/80 text-right mb-6">Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <View className="flex-row items-center my-4">
        <View className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
        <Text className="px-4 text-sm font-medium text-gray-500 dark:text-gray-400">OU</Text>
        <View className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
      </View>

      <TouchableOpacity
        className="flex-row items-center justify-center h-14 px-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
        onPress={handleGoogleSignIn}
      >
        <Text className="text-base font-medium text-gray-800 dark:text-white">Continuer avec Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
