import '../../global.css';
import { Link, Stack } from 'expo-router';
export default function RootLayout() {
return (
<Stack>
<Stack.Screen name="index" options={{ headerShown: false }} />
<Stack.Screen name="home"
options={{
title: 'Home',
headerRight: () => (
<Link href={'/profile' as any} className="p-2 font-bold text-brand">
Profile
</Link>
),
}}
/>
<Stack.Screen name="item/[id]" options={{ title: 'Details' }} />
<Stack.Screen name="profile" options={{ title: 'Profile' }} />
</Stack>
);
}