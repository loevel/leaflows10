import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RoleSelectionScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark p-6">
      <View className="flex-1 justify-center">
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-[#0d1b10] dark:text-gray-200">Leaflows</Text>
        </View>

        <Text className="text-3xl font-bold text-center text-[#0d1b10] dark:text-gray-200 pb-3">Bienvenue sur Leaflows</Text>
        <Text className="text-base text-center text-[#0d1b10]/80 dark:text-gray-400 pb-8">Quel profil vous correspond ?</Text>

        <View className="space-y-4">
          <TouchableOpacity
            className={`p-4 rounded-xl border-2 ${selectedRole === 'student' ? 'border-[#4c9a59]' : 'border-transparent'} bg-white dark:bg-background-dark/50 shadow-md`}
            onPress={() => setSelectedRole('student')}
          >
            <View className="flex-row items-center gap-4">
              <View className="p-3 rounded-full bg-[#4c9a59]/10 dark:bg-primary/20">
                <Icon name="school" size={30} color="#4c9a59" />
              </View>
              <View>
                <Text className="text-lg font-bold text-[#0d1b10] dark:text-gray-200">Élève</Text>
                <Text className="text-base text-[#4c9a59] dark:text-gray-400">Trouve le répétiteur idéal pour ta réussite.</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className={`p-4 rounded-xl border-2 ${selectedRole === 'teacher' ? 'border-[#4c9a59]' : 'border-transparent'} bg-white dark:bg-background-dark/50 shadow-md`}
            onPress={() => setSelectedRole('teacher')}
          >
            <View className="flex-row items-center gap-4">
              <View className="p-3 rounded-full bg-[#4c9a59]/10 dark:bg-primary/20">
                <Icon name="menu-book" size={30} color="#4c9a59" />
              </View>
              <View>
                <Text className="text-lg font-bold text-[#0d1b10] dark:text-gray-200">Enseignant</Text>
                <Text className="text-base text-[#4c9a59] dark:text-gray-400">Propose tes services de répétition scolaire.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-[#4c9a59] dark:bg-primary rounded-xl py-4 mt-10"
          onPress={() => navigation.navigate('Login')}
          disabled={!selectedRole}
        >
          <Text className="text-white text-lg font-bold text-center">Continuer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RoleSelectionScreen;
