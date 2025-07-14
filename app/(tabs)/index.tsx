import {
  Camera,
  CameraView,
  type CameraType,
  type FlashMode,
} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<FlashMode>('off');
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const { granted } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(granted);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        flash={flash}
        ref={cameraRef}
      >
        <Text>Hello</Text>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
