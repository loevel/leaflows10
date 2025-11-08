import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const initialTutors = [
  {
    id: 1,
    name: 'Alexandre D.',
    school: 'ENS de Yaoundé',
    price: '20,000 CFA/h',
    rating: 4.9,
    reviews: 32,
    subjects: ['Terminale C', 'Maths', 'Physique'],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZvKR0j1b1iCzPwuL_qa6aAvaTmOC8jrYwa55Bz9OMuGzrO32DY46AzC5UV9IK2f0mfmhSI8XECbQvobhpVcg-TEmiFRTapPtBztnzLQicz7zlcxv4A2r8MiXvOSMtmWKPpKtHjXm1GCVya705-OWK4w6S4ZJ3H85Xn0O_B30lk62Gm9GGZOU2dvviYqyIkuwCnTODELDQENrnSDTEYuwZCKkmsvgfIFYhvu2mVYpbDHFmQf06ftPoArdZ3u9KFWZxSPijrkToZ0c',
  },
  {
    id: 2,
    name: 'Clara M.',
    school: 'Certifiée MINESEC',
    price: '15,000 CFA/h',
    rating: 5.0,
    reviews: 18,
    subjects: ['Première A', 'Français', 'Histoire'],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwlLycSkooqBC89z3ayJiBfeELQfQscb7Kc0O_x_FFppYAEcKmvCbnIdpFoIDwLGm3uEz-8Nm5L30aHnreKSWKVrca_sexZFkutpjCworCGwkpnfJIvoLuqNo420UGggGuR8oWyyi6TTzzn9di2jG_svYYnO-2WYBm4YvZwvfdPbHXcPrXMK2khGeUqsuRSy1EDg70tMJrGLXSZD2-3Ic7XApFG2tIYm-gFZ9KME17qBPA08EAXCvL33YYLUMzE8cRvDr9ECc0Kj4',
  },
];

const TutorSearchScreen = ({ route, navigation }) => {
  const [tutors, setTutors] = useState(initialTutors);
  const newTutor = route.params?.newTutor;

  useEffect(() => {
    if (newTutor) {
      setTutors((prevTutors) => [newTutor, ...prevTutors]);
    }
  }, [newTutor]);

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-row items-center justify-between p-4">
        <Text className="text-2xl font-bold text-primary-dark-text dark:text-primary-light-text">Trouvez le tuteur idéal</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ConversationList')}>
          <Icon name="chat" size={24} color="#4c9a59" />
        </TouchableOpacity>
      </View>
      <View className="px-4 py-3 flex-row items-center gap-3">
        <View className="flex-1 flex-row items-center rounded-lg bg-subtle-green-bg/60 dark:bg-background-dark">
          <TextInput
            className="flex-1 p-3 text-base text-primary-dark-text dark:text-primary-light-text"
            placeholder="Matière, niveau, nom..."
          />
        </View>
        <TouchableOpacity className="p-3 rounded-lg bg-subtle-green-bg/60 dark:bg-background-dark">
          {/* Filter Icon */}
        </TouchableOpacity>
      </View>

      <ScrollView>
        {tutors.map((tutor) => (
          <TouchableOpacity
            key={tutor.id}
            className="p-4 m-4 rounded-xl bg-subtle-green-bg/40 dark:bg-background-dark shadow-sm"
            onPress={() => navigation.navigate('TutorProfile', { tutor })}
          >
            <View className="flex-row items-center gap-4">
              <Image source={{ uri: tutor.avatar }} className="w-16 h-16 rounded-full" />
              <View className="flex-1">
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="text-base font-bold text-primary-dark-text dark:text-primary-light-text">{tutor.name}</Text>
                    <Text className="text-xs text-subtle-green-text mt-1">{tutor.school}</Text>
                  </View>
                  <Text className="text-lg font-bold text-primary-dark-text dark:text-primary-light-text">{tutor.price}</Text>
                </View>
                <View className="flex-row items-center gap-2 mt-1">
                  <Text className="text-sm font-semibold text-yellow-500">{tutor.rating}</Text>
                  <Text className="text-xs text-subtle-green-text">({tutor.reviews} avis)</Text>
                </View>
                <View className="flex-row flex-wrap items-center gap-2 mt-2">
                  {tutor.subjects.map((subject, index) => (
                    <View key={index} className="px-2 py-0.5 rounded-md bg-primary/20 dark:bg-primary/30">
                      <Text className="text-xs font-medium text-primary-dark-text dark:text-primary-light-text">{subject}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorSearchScreen;
