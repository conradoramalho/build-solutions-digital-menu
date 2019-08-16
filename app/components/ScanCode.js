'use strict';
import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

import BarcodeMask from 'react-native-barcode-mask';

class ExampleApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a camera',
            message: 'Nos precisamos de permissão para usar a camera',
            buttonPositive: 'Confirmar',
            buttonNegative: 'Cancelar',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permissão para usar o audio',
            message: 'Nos precisamos de permissão para usar o audio',
            buttonPositive: 'Confirmar',
            buttonNegative: 'Cancelar',
          }}
          onBarCodeRead={this.onBarCodeRead}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log('onGoogleVisionBarcodesDetected', barcodes);
          }}
        />

        <BarcodeMask />
        <View
          style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> SNAP25553</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onBarCodeRead = console.log;

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default ExampleApp;
