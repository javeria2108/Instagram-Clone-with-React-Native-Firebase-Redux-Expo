import { Stack } from "expo-router";
import {initializeApp, getApps} from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyBXex5esD3Kqo0BtsYoV-0I0uT1vxuI8e4",
  authDomain: "instagram-clone-8abae.firebaseapp.com",
  projectId: "instagram-clone-8abae",
  storageBucket: "instagram-clone-8abae.appspot.com",
  messagingSenderId: "164051139640",
  appId: "1:164051139640:web:dd56fa86b1bf2bf436bacd",
  measurementId: "G-XG5NT7L71Y"
};
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
}
