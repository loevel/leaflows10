import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const initialMessages = [
  { id: '1', text: 'Bonjour ! Je suis disponible jeudi à 16h pour le cours de maths. Est-ce que ça vous convient ?', time: '10:42', sent: false, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2e0GlXWZwI2ZLyre1cFdSxD1uhqaAc5W05H-eyg9rWud9zONcb4LVVXwOubmV5ZWiFDaRfxIc3lB8akZ0yXRw6ejmXEOauwT-SWMrWCVgRQC_SzY7laYncLVqJVTqfJCQ7NCfqW2J0Y7VXxyIafEw2G8_RhHBHjaCC5JT8fdt0r0uioUfto4VHMyyIM0xCJesEgnzxpnqrAPH7-0lcYfRuDY6s1y1lnsC45mUKcNFZqLg2V0Lna7dxJjGWP7GfhqZg0wW5HIgMTY' },
  { id: '2', text: 'Bonjour Clara, c\'est parfait pour moi ! Je vous confirme le cours.', time: '10:45', sent: true },
  { id: '3', text: 'Pourriez-vous me partager votre localisation pour que je puisse prévoir mon trajet ?', time: '10:46', sent: false, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2e0GlXWZwI2ZLyre1cFdSxD1uhqaAc5W05H-eyg9rWud9zONcb4LVVXwOubmV5ZWiFDaRfxIc3lB8akZ0yXRw6ejmXEOauwT-SWMrWCVgRQC_SzY7laYncLVqJVTqfJCQ7NCfqW2J0Y7VXxyIafEw2G8_RhHBHjaCC5JT8fdt0r0uioUfto4VHMyyIM0xCJesEgnzxpnqrAPH7-0lcYfRuDY6s1y1lnsC45mUKcNFZqLg2V0Lna7dxJjGWP7GfhqZg0wW5HIgMTY' },
  { id: '4', text: 'Bien sûr ! Voici ma localisation. Pourriez-vous confirmer le cours en procédant au paiement ?', time: '10:48', sent: true },
];

const ChatScreen = ({ navigation, route }) => {
  const { conversation } = route.params;
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        id: Math.random().toString(),
        text: inputText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sent: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View className={`flex-row items-start gap-3 max-w-[80%] ${item.sent ? 'self-end flex-row-reverse' : 'self-start'}`}>
      {!item.sent && <Image source={{ uri: item.avatar }} className="w-8 h-8 rounded-full" />}
      <View className={`flex-col ${item.sent ? 'items-end' : 'items-start'}`}>
        <View className={`p-3 rounded-xl ${item.sent ? 'bg-primary dark:bg-primary-dark rounded-br-none' : 'bg-white dark:bg-gray-700 rounded-bl-none'}`}>
          <Text className="text-sm text-primary-dark dark:text-background-light">{item.text}</Text>
        </View>
        <Text className="text-xs mt-1 text-secondary-text-light dark:text-secondary-text-dark">{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 shadow-sm bg-background-light dark:bg-background-dark z-20">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} className="text-primary-dark dark:text-background-light" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-lg font-bold text-primary-dark dark:text-background-light">{conversation.name}</Text>
          <Text className="text-xs text-secondary-text-light dark:text-secondary-text-dark">{conversation.online ? 'En ligne' : 'Hors ligne'}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} className="text-primary-dark dark:text-background-light" />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        className="flex-1 p-4"
        contentContainerStyle={{ gap: 16 }}
      />

      {/* Input */}
      <View className="flex-row items-center gap-2 p-4 border-t border-gray-200 dark:border-gray-700">
        <TouchableOpacity>
          <Icon name="add-circle" size={28} className="text-secondary-text-light dark:text-secondary-text-dark" />
        </TouchableOpacity>
        <TextInput
          className="flex-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-base"
          placeholder="Écrire un message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity className="p-2 rounded-full bg-primary" onPress={handleSend}>
          <Icon name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
