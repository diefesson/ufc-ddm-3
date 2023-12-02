import { Text, TextInput, View, ToastAndroid } from "react-native/";
import { useState } from "react";
import MainStyle from "../style/MainStyle";
import CustomButton from "../components/CustomButton";
import AuthServiceImpl from "../services/AuthServiceImpl";
import { useDispatch } from "react-redux";
import { actions } from "../state/Store";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin() {
    try {
      const user = await AuthServiceImpl.auth(email, password);
      dispatch(actions.login(user));
      navigation.navigate("home");
    } catch (error) {
      ToastAndroid.show("Credenciais incorretas", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={MainStyle.root}>
      <View style={MainStyle.field}>
        <Text style={MainStyle.mediumText}>Email:</Text>
        <TextInput
          style={MainStyle.textInput}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={MainStyle.field}>
        <Text style={MainStyle.mediumText}>Senha:</Text>
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
