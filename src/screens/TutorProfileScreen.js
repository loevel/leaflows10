import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TutorProfileScreen = ({ route, navigation }) => {
  const { tutor } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView>
        <View className="p-4 items-center">
          <Image source={{ uri: tutor.avatar }} className="w-32 h-32 rounded-full ring-4 ring-primary/20" />
          <Text className="text-2xl font-bold mt-4 text-text-light-primary dark:text-dark-primary">{tutor.name}</Text>
          <Text className="text-base text-text-light-secondary dark:text-dark-secondary">{tutor.school}</Text>
          <View className="flex-row items-center gap-1.5 mt-1">
            <Text className="text-base font-medium text-text-light-secondary dark:text-dark-secondary">{tutor.rating} ({tutor.reviews} avis)</Text>
          </View>
        </View>

        <View className="p-4">
          <Text className="text-xl font-bold text-text-light-primary dark:text-dark-primary mb-2">Ma méthode</Text>
          <Text className="text-base text-text-light-secondary dark:text-dark-secondary">
            Passionné par la transmission du savoir, j'accompagne mes élèves vers la réussite avec une méthode pédagogique personnalisée et bienveillante.
          </Text>
        </View>

        <View className="p-4">
          <Text className="text-xl font-bold text-text-light-primary dark:text-dark-primary mb-3">Matières enseignées</Text>
          <View className="flex-row flex-wrap gap-2">
            {tutor.subjects.map((subject, index) => (
              <View key={index} className="px-3 py-1 rounded-full bg-primary-light dark:bg-primary/20">
                <Text className="text-sm font-medium text-text-light-primary dark:text-dark-primary">{subject}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="p-4">
          <Text className="text-xl font-bold text-text-light-primary dark:text-dark-primary mb-3">Tarifs</Text>
          <View className="p-4 rounded-lg bg-primary-light dark:bg-primary/20">
            <Text className="text-lg font-bold text-primary">{tutor.price}</Text>
          </View>
        </View>
      </ScrollView>

      <View className="p-4 border-t border-border-light dark:border-border-dark">
        <TouchableOpacity
          className="bg-primary rounded-xl h-14 justify-center items-center"
          onPress={() => navigation.navigate('Chat', { conversation: { name: tutor.name, avatar: tutor.avatar } })}
        >
          <Text className="text-white text-base font-bold">Contacter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TutorProfileScreen;
