import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {COLORS, STYLES} from 'src/assets/theme';
import {FullScreenLoaderModalProps} from 'src/types/FullScreenLoaderModalTypes';
import Wrapper from '../Wrapper/Wrapper';

const FullScreenLoaderModal: React.FC<FullScreenLoaderModalProps> = ({
  theme,
  visible,
}) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      style={[STYLES.flex1]}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      useNativeDriver>
      <View style={[STYLES.middle]}>
        <ActivityIndicator color={COLORS[theme].text} size="large" />
      </View>
    </ReactNativeModal>
  );
};
export default Wrapper(FullScreenLoaderModal);
