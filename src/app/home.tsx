
import { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import { ITEMS } from '@/data/items';
import { currentUser } from '@/lib/user';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  // Keep only the items whose name has the search text.
  // Convert to lowercase so case does not matter.
  const shown = ITEMS.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <View className="flex-1 bg-soft p-4">
      <Text className="mb-1 text-2xl font-bold text-brand">
        Hello!
      </Text>

      <Text className="mb-4 text-slate-600">
        {currentUser.email}
      </Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search..."
        className="mb-4 rounded-xl border border-slate-300 bg-white p-3"
      />

      <FlatList
        data={shown}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text className="mt-8 text-center text-slate-500">
            Nothing found.
          </Text>
        }
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: '/item/[id]' as never,
              params: { id: item.id },
            }}
            asChild
          >
            <Pressable className="mb-3 flex-row items-center gap-4 rounded-2xl bg-white p-4">
              <Text className="text-4xl">{item.emoji}</Text>

              <View className="flex-1">
                <Text className="text-lg font-bold text-slate-900">
                  {item.name}
                </Text>

                <Text className="text-brand">
                  {item.tag}
                </Text>
              </View>

              <Text className="text-2xl text-slate-400">
                ›
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
