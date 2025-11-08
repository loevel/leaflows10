import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const conversations = [
  { id: '1', name: 'Clara D. - Mathématiques', lastMessage: 'Bonjour, je suis disponible jeudi...', time: '10:42', unread: 2, online: true, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2e0GlXWZwI2ZLyre1cFdSxD1uhqaAc5W05H-eyg9rWud9zONcb4LVVXwOubmV5ZWiFDaRfxIc3lB8akZ0yXRw6ejmXEOauwT-SWMrWCVgRQC_SzY7laYncLVqJVTqfJCQ7NCfqW2J0Y7VXxyIafEw2G8_RhHBHjaCC5JT8fdt0r0uioUfto4VHMyyIM0xCJesEgnzxpnqrAPH7-0lcYfRuDY6s1y1lnsC45mUKcNFZqLg2V0Lna7dxJjGWP7GfhqZg0wW5HIgMTY' },
  { id: '2', name: 'Marc P. - Physique', lastMessage: 'Oui, c\'est parfait pour moi. À demain !', time: '10:35', unread: 0, online: true, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtvuag1yFYFZYCF3BMcnQhmzmokRKTd6K5YWw6TAHjZIJP8vGRaD9kFMp3XSEDpk1g5zai9p999ODY_BrxNWxUz0x_GIfLVFuSsKd3cia-3s1GySlZRHNtofwENrR8QhxTS8-DFmlSuSdDMHa2znjuYp6hdejMlyCnuAc-mhN3MDMahpUIaGnM8RLnVfw90f7kt1DkjodQ_CBXvXqMzOnTErs3-h_CmVmeatTffJbw5crKazt_TnWS1r_8rl_jz5t9OMkqOgd9pXY' },
  { id: '3', name: 'Léa M. - Anglais', lastMessage: 'Merci pour le cours, c\'était très clair.', time: 'Hier', unread: 0, online: false, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW5RQi7nIuUpzJlFx-PyTXFKnV50sVtXXfmY8E6H0CXDHDxaMaQP-WXTe8-zBWirhN8lRd-_TFkq3R8RghV8oHMspgyEgo3grA7mA-tvqBqA7sOJxkfcGv7BbAV6W1adbf_027vRLcTVzZy_JejCMTqc--yBQyhUAocACrSmeDDy2gqNGIWkBc8zaAdV2fxIRO0c_jLIcK4q0X78AJrxw5hvvXqLMpZ-FkpKPrtlme1ouISuBFCQVhYq9AUeOswDZqg4P0NHZmdc4' },
];

const ConversationListScreen = ({ navigation }) => {
  const renderConversation = ({ item }) => (
    <TouchableOpacity
      className={`flex-row items-center p-4 min-h-[72px] rounded-xl ${item.unread > 0 ? 'bg-primary/20 dark:bg-primary/10' : ''}`}
      onPress={() => navigation.navigate('Chat', { conversation: item })}
    >
      <View className="relative">
        <Image source={{ uri: item.avatar }} className="w-14 h-14 rounded-full" />
        {item.online && <View className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background-light dark:border-background-dark" />}
      </View>
      <View className="flex-1 ml-4">
        <Text className="text-base font-semibold text-primary-dark dark:text-background-light">{item.name}</Text>
        <Text className="text-sm text-secondary-text-light dark:text-secondary-text-dark">{item.lastMessage}</Text>
      </View>
      <View className="items-end">
        <Text className="text-xs text-secondary-text-light dark:text-secondary-text-dark">{item.time}</Text>
        {item.unread > 0 && (
          <View className="mt-1 w-6 h-6 rounded-full bg-accent items-center justify-center">
            <Text className="text-xs font-bold text-white">{item.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} className="text-primary-dark dark:text-background-light" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-primary-dark dark:text-background-light flex-1 text-center">Messagerie</Text>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} className="text-primary-dark dark:text-background-light" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-3">
        <TextInput
          className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 text-base"
          placeholder="Rechercher un contact..."
        />
      </View>

      {/* Conversation List */}
      <FlatList
        data={conversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        className="flex-1 px-2"
      />
    </SafeAreaView>
  );
};

export default ConversationListScreen;
