import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppAvatarProps} from 'src/types/AppAvatarTypes';
import {styles as styling} from './styles';

import FastImage from 'react-native-fast-image';
import {IMAGES} from 'src/assets/images';
import Wrapper from '../Wrapper/Wrapper';
import AppText from '../AppText/AppText';
import {LABELS} from 'src/labels';
import {COLORS, STYLES} from 'src/assets/theme';

const AppAvatar: React.FC<AppAvatarProps> = ({
  uri,
  size = 50,
  extraStyle = {},
  name = '',
  onAvatar = () => {},
  theme,
}) => {
  const styles = styling(theme);
  return (
    <View style={[STYLES.AICenter, extraStyle]}>
      <TouchableOpacity activeOpacity={0.9} onPress={onAvatar}>
        <FastImage
          source={uri ? {uri} : IMAGES.avatarPlaceholder}
          style={styles.image(size)}
          resizeMode="cover"
        />
      </TouchableOpacity>
      {!!name && (
        <AppText
          title={name}
          variant="h2"
          color={COLORS[theme].text}
          alignSelf="center"
          extraStyle={[STYLES.mT(10)]}
        />
      )}
    </View>
  );
};

export default Wrapper(AppAvatar);
