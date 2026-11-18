import { Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Button } from '@/components/button';
import { ITEMS } from '@/data/items';
export default function DetailsScreen() {
const { id } = useLocalSearchParams<{ id: string }>(); // the id from the 
link
const router = useRouter();
const item = ITEMS.find((i) => i.id === id); // find the item with that id
if (!item) {
return <Text className="p-6 text-center">Item not found.</Text>;
}
return (
<View className="flex-1 items-center gap-3 bg-soft p-6">
<Text className="text-8xl">{item.emoji}</Text>
<Text className="text-center text-3xl font-bold text-slate-900">
{item.name}</Text>
<Text className="text-xl font-bold text-brand">{item.tag}</Text>
<Text className="mb-4 text-center text-base text-slate-600">
{item.description}</Text>
<View className="w-full">
<Button label="Back to Home" onPress={() => router.back()} outline />
</View>
</View>
);
}