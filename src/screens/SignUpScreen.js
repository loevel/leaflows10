import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('CreateTutorProfile');
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark p-6 justify-center">
      <View className="items-center mb-6">
        <Text className="text-3xl font-bold text-gray-800 dark:text-gray-100">Leaflows</Text>
      </View>
      <Text className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 pb-2">Créer un compte Enseignant</Text>
      <Text className="text-base text-center text-gray-600 dark:text-gray-400 mb-8">Rejoignez notre communauté de tuteurs.</Text>

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
          placeholder="créez votre mot de passe"
          secureTextEntry
        />
      </View>

      <View className="mb-4">
        <Text className="text-base font-medium text-gray-800 dark:text-gray-200 pb-2">Confirmer le mot de passe</Text>
        <TextInput
          className="rounded-lg border border-gray-300 dark:border-gray-600 h-14 p-4 text-base text-gray-800 dark:text-gray-200"
          placeholder="confirmez votre mot de passe"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        className="bg-primary rounded-xl h-14 justify-center items-center my-4"
        onPress={handleSignUp}
      >
        <Text className="text-lg font-semibold text-background-dark">S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text className="text-sm font-medium text-primary/80 text-center">Déjà un compte ? Se connecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;
