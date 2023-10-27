/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {View} from 'react-native';
import {SVG} from 'src/assets/svg';
import {COLORS} from 'src/assets/theme';

import {SocialLoginProps} from 'src/types/SocialLoginTypes';
import Icon from '../Icon/Icon';
import Wrapper from '../Wrapper/Wrapper';
import {styles as styling} from './styles';

const SocialLogin: React.FC<SocialLoginProps> = props => {
  const {theme} = props;
  const onFacebook = () => {};
  const onGoogle = () => {};
  const onApple = () => {};
  const styles = styling(theme);
  return (
    <View style={styles.container}>
      <Icon
        SVGIcon={<SVG.Facebook fill={COLORS[theme].text} />}
        onPress={onFacebook}
        extraStyle={{container: styles.btn}}
        mL={0}
        mR={0}
      />
      <Icon
        SVGIcon={<SVG.Google />}
        onPress={onGoogle}
        extraStyle={{container: styles.btn}}
        mL={0}
        mR={0}
      />
      <Icon
        SVGIcon={<SVG.Apple fill={COLORS[theme].text} />}
        onPress={onApple}
        extraStyle={{container: styles.btn}}
        mL={0}
        mR={0}
      />
    </View>
  );
};

export default Wrapper(SocialLogin);
