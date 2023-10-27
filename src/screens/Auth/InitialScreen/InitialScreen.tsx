import React from 'react';
import {styles as styling} from './styles';
import {View, ImageBackground} from 'react-native';
import {InitialScreenProps} from 'src/types/InitialScreenTypes';
import {COLORS, STYLES} from 'src/assets/theme';

import {AppButton, AppText, Space, Wrapper} from 'src/components';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from 'src/types/NavigationTypes';
import {LABELS} from 'src/labels';
import {IMAGES} from 'src/assets/images';

const InitialScreen: React.FC<InitialScreenProps> = props => {
  const {theme} = props;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const onLogin = () => {
    navigation.navigate('SignInScreen', {});
  };
  const onSignup = () => {
    navigation.navigate('SignUpScreen', {});
  };

  return (
    <View style={[STYLES.container(theme)]}>
      <ImageBackground source={IMAGES.initial} style={styles.image}>
        <View style={styles.overlay}>
          <AppText
            title={LABELS.welcomeToClip}
            variant="h1"
            color={COLORS[theme].white}
            extraStyle={styles.title}
          />
          <View style={styles.buttons}>
            <AppButton
              title={LABELS.signin}
              variant="filled"
              onPress={onLogin}
              extraStyle={{
                button: styles.loginBtn,
                title: {color: COLORS[theme].black},
              }}
            />
            <AppButton
              title={LABELS.signup}
              variant="filled"
              onPress={onSignup}
              extraStyle={{
                button: styles.signupBtn,
                title: {color: COLORS[theme].white},
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Wrapper(InitialScreen);
