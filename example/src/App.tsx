import { Text, View, StyleSheet } from 'react-native';
import { getVersionInfo } from 'xmtp-bindings-rn';

const versionInfo = getVersionInfo();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>XMTP Version: {versionInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
