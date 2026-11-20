import { Pressable, Text } from 'react-native';
type Props = {
label: string;
onPress: () => void;
outline?: boolean; // true = white button with a border
};
// One button used on every screen, so all buttons look the same
export function Button({ label, onPress, outline = false }: Props) {
return (
<Pressable
onPress={onPress}
className={outline ? 'rounded-xl border-2 border-brand p-4' : 'rounded-xl bg-brand p-4'}
>
<Text className={outline ? 'text-center font-bold text-brand' : 'text-center font-bold text-white'}>
{label}
</Text>
</Pressable>
);
}