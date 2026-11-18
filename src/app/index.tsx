import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/button';
import { APP_NAME } from '@/data/items';
import { currentUser } from '@/lib/user';

const validateEmail = (email: string) => {
  const trimmedEmail = email.trim();
  if (trimmedEmail === '') return 'Email is required';
  if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) return 'Enter a valid email';
  return '';
};

const validatePassword = (password: string) => {
  if (password === '') return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return '';
};

export default function SignInScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = () => {
    // 1. Check the inputs and show the messages
    const eError = validateEmail(email);
    const pError = validatePassword(password);

    setEmailError(eError);
    setPasswordError(pError);

    // 2. Stop if there is any error
    if (eError !== '' || pError !== '') return;

    // 3. Remember the email, then go to Home
    currentUser.email = email.trim();
    router.replace('/home'); // replace: the Back button will not return here
  };

  return (
    <View className="flex-1 justify-center gap-3 bg-soft p-6">
      <Text className="text-center text-5xl">☕</Text>

      <Text className="text-center text-3xl font-bold text-brand">
        {APP_NAME}
      </Text>

      <Text className="mb-4 text-center text-slate-600">
        Sign in to continue
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        className="rounded-xl border border-slate-300 bg-white p-4"
      />

      {emailError !== '' && (
        <Text className="text-danger">{emailError}</Text>
      )}

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        className="rounded-xl border border-slate-300 bg-white p-4"
      />

      {passwordError !== '' && (
        <Text className="text-danger">{passwordError}</Text>
      )}

      <Button label="Sign In" onPress={handleSignIn} />
    </View>
  );
}