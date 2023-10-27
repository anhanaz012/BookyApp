import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BottomSheetProps } from 'src/types/BottomSheetTypes';
import { styles as styling } from './styles';

import { View } from 'react-native';
import Wrapper from '../Wrapper/Wrapper';

const BottomSheet: React.FC<BottomSheetProps> = ({
  reference,
  children,
  extraStyle,
  height,
  theme,
}) => {
  const styles = styling(theme);
  return (
    <RBSheet
      ref={reference}
      height={height ? height : 300}
      openDuration={250}
      customStyles={{
        container: { ...extraStyle, ...styles.container },
      }}>
      <View>{children}</View>
    </RBSheet>
  );
};

export default Wrapper(BottomSheet);
