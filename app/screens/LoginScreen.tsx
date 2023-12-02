import { Text, TextInput, View } from "react-native/";
import { useState } from "react";
import MainStyle from "../style/MainStyle";
import CustomButton from "../components/CustomButton";
import AuthServiceImpl from "../service/AuthServiceImpl";
import { useDispatch } from "react-redux";
import { slice } from "../reducers";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onLogin() {
    const user = AuthServiceImpl.auth(username, password);
    if (user) {
      dispatch(slice.actions.login(user));
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
