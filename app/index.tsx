import { Text, View,Button,Pressable } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
     <Link href="/Register" asChild>
      <Pressable>
        <Text>Register</Text>
      </Pressable>
    </Link>
    <Button
      title="Login"
    
    />
  </View>
  );
}
