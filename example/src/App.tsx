import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  getVersionInfo,
  getInboxIdForIdentifier,
  connectToBackend,
  FfiIdentifierKind,
} from 'xmtp-bindings-rn';

const versionInfo = getVersionInfo();

const address = '0xF8cd371Ae43e1A6a9bafBB4FD48707607D24aE43';

export default function App() {
  const [inboxId, setInboxId] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      try {
        const backend = await connectToBackend(
          'https://production.xmtp.network:5556',
          undefined,
          true,
          undefined,
          undefined,
          undefined,
          undefined
        );
        const resolvedId = await getInboxIdForIdentifier(backend, {
          identifier: address,
          identifierKind: FfiIdentifierKind.Ethereum,
        });
        setInboxId(resolvedId);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [setInboxId]);

  return (
    <View style={styles.container}>
      <Text>XMTP Version: {versionInfo}</Text>
      <Text>
        Inbox ID for address {address} = {inboxId}
      </Text>
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
