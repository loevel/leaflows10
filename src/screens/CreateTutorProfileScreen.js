import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateTutorProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [bio, setBio] = useState('');
  const [price, setPrice] = useState('');

  const handleSaveProfile = () => {
    const newTutor = {
      id: Math.random().toString(),
      name,
      school,
      bio,
      price: `${price} CFA/h`,
      rating: 0,
      reviews: 0,
      subjects: [],
      avatar: 'https://www.gravatar.com/avatar/?d=mp', // Placeholder avatar
    };
    navigation.navigate('TutorSearch', { newTutor });
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark p-6">
      <ScrollView>
        <Text className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 pb-8">Créez votre profil d'enseignant</Text>

        <View className="mb-4">
          <Text className="text-base font-medium text-gray-800 dark:text-gray-200 pb-2">Nom complet</Text>
          <TextInput
            className="rounded-lg border border-gray-300 dark:border-gray-600 h-14 p-4 text-base text-gray-800 dark:text-gray-200"
            placeholder="Entrez votre nom complet"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="mb-4">
          <Text className="text-base font-medium text-gray-800 dark:text-gray-200 pb-2">École ou affiliation</Text>
          <TextInput
            className="rounded-lg border border-gray-300 dark:border-gray-600 h-14 p-4 text-base text-gray-800 dark:text-gray-200"
            placeholder="Ex: ENS de Yaoundé"
            value={school}
            onChangeText={setSchool}
          />
        </View>

        <View className="mb-4">
          <Text className="text-base font-medium text-gray-800 dark:text-gray-200 pb-2">Ma méthode</Text>
          <TextInput
            className="rounded-lg border border-gray-300 dark:border-gray-600 h-28 p-4 text-base text-gray-800 dark:text-gray-200"
            placeholder="Décrivez votre méthode d'enseignement"
            multiline
            value={bio}
            onChangeText={setBio}
          />
        </View>

        <View className="mb-4">
          <Text className="text-base font-medium text-gray-800 dark:text-gray-200 pb-2">Tarif horaire (en CFA)</Text>
          <TextInput
            className="rounded-lg border border-gray-300 dark:border-gray-600 h-14 p-4 text-base text-gray-800 dark:text-gray-200"
            placeholder="Ex: 15000"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
        </View>

        <TouchableOpacity
          className="bg-primary rounded-xl h-14 justify-center items-center my-4"
          onPress={handleSaveProfile}
        >
          <Text className="text-lg font-semibold text-background-dark">Enregistrer le profil</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTutorProfileScreen;
