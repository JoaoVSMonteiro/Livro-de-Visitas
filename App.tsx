import {createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/pages/welcome/Welcome";
import { NavigationContainer} from "@react-navigation/native";
import { Form } from "./src/pages/form/src/Form";
import Toast from "react-native-toast-message";

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name= "welcome" component={Welcome}></Stack.Screen>
        <Stack.Screen options={{headerStyle: {backgroundColor: "#1A1A1A",}, headerTintColor: '#FFF', headerTitle: "Livro de Visitas", headerTitleAlign: "center"}} name="mainForm" component={Form}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    <Toast/>
    </>
  );
}

export default App;