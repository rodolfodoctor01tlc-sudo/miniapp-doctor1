// Each function returns an error message, or '' (empty) when the value is 
OK.
export function validateEmail(email: string) {
const text = email.trim();
if (text === '') return 'Please enter your email.';
if (!text.includes('@') || !text.includes('.')) return 'Please enter a 
valid email.';
return '';
}
export function validatePassword(password: string) {
if (password === '') return 'Please enter your password.';
if (password.length < 6) return 'Password must be at least 6 characters.';
return '';
}