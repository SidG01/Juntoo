import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/loginScreen';
import SignUpScreen from './src/screens/signUpScreen';
import Navigation from './src/navigation/Navigation';
import LoginScreen1 from './src/screens/LoginScreen1';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          {/* <LoginScreen1></LoginScreen1> */}
          {/* <SignUpScreen1></SignUpScreen1> */}
          {/* <ConfirmEmailScreen></ConfirmEmailScreen> */}
          {/* <ResetPassScreen></ResetPassScreen> */}
          {/* <NewPasswordScreen></NewPasswordScreen> */}
          <Navigation></Navigation>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
