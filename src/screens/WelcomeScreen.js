import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-light-background dark:bg-background-dark">
      <View className="flex-1 items-center justify-between p-6">
        <View className="items-center">
          <Text className="text-dark-text dark:text-light-background text-2xl font-bold tracking-wide">Leaflows</Text>
        </View>

        <View className="w-full h-1/2">
            <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnF7t_Qn8mwfrwJIdMcVrovxnHSNTFbw8pKzflUcYYktsA9zZ5IppWGhlgAChpgaCkNbq57e1CeyDFuOO61g-_GwIR5_0ofIfwvDB5SPATb52emIsuJLwvgM4GZFeXCguSNG3aa3v6v9bnn300PHGeW7gc6Nxqv7kYhiuoeQJ_F_Y-eps3axPH1X4jzM4dC756OwqthL7KBhkrooODqltxU-subIQOd8gSq03xFwg97Xpb_lk0A0OVs_gF9opvgFn5T3QDgJq2CGQ' }}
                className="w-full h-full rounded-xl"
                resizeMode="cover"
            />
        </View>

        <View className="items-center">
          <Text className="text-dark-text dark:text-light-background text-3xl font-bold text-center">Le soutien scolaire qui fait grandir.</Text>
          <Text className="text-dark-text/80 dark:text-light-background/80 text-base text-center mt-4">
            Mise en relation simple et sécurisée avec les meilleurs professeurs particuliers près de chez vous au Cameroun.
          </Text>
        </View>

        <View className="w-full">
          <TouchableOpacity
            className="bg-leaf-green rounded-lg h-12 justify-center items-center shadow-lg"
            onPress={() => navigation.navigate('RoleSelection')}
          >
            <Text className="text-white text-base font-bold">C'est parti !</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-4" onPress={() => navigation.navigate('Login')}>
            <Text className="text-leaf-green text-sm text-center underline">Déjà un compte ? Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
