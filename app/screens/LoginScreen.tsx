import { Text, TextInput, View } from "react-native/";
import { useState } from "react";
import MainStyle from "../style/MainStyle";
import CustomButton from "../components/CustomButton";

const expectedUsername = "admin";
const expectedPassword = "12345678";

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onLogin() {
    if(username == expectedUsername && password == expectedPassword){
      navigation.navigate("home")
    }
  }

  return (
    <View style={MainStyle.root}>
      <View style={MainStyle.field}>
        <Text style={MainStyle.mediumText}>Username:</Text>
        <TextInput
          style={MainStyle.textInput}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={MainStyle.field}>
        <Text style={MainStyle.mediumText}>Password:</Text>
        <TextInput
          style={MainStyle.textInput}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <CustomButton title="LOGIN" onPress={onLogin} />
    </View>
  );
}