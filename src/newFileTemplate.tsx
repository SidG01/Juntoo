import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  useWindowDimensions,
  Text,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function newFileTemplate(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // size of the view
    root: {
      alignItems: 'center',
      height: '15%'
    },
    // size of the item
    container: {
      alignItems: 'center',
        width: '70%',
        height: '70%',
    },
  });

export default newFileTemplate;
