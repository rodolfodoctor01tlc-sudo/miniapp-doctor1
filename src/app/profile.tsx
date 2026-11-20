import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/button';
import { currentUser } from '@/lib/user';
export default function ProfileScreen() {
const router = useRouter();
const handleSignOut = () => {
currentUser.email = ''; // forget the user
router.dismissAll(); // close Home and Profile
router.replace('/'); // go back to Sign In
};
return (
<View className="flex-1 items-center gap-3 bg-soft p-6">
<Text className="text-7xl">
🙂
</Text>
<Text className="text-xl font-bold text-slate-900">My Profile</Text>
<Text className="mb-6 text-slate-600">{currentUser.email}</Text>
<View className="w-full">
<Button label="Sign Out" onPress={handleSignOut} />
</View>
</View>
);
}