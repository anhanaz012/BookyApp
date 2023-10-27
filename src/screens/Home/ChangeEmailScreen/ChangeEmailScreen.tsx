import React from 'react';
import { styles as styling } from './styles';
import {
  ChangeEmailForm,
  ChangeEmailScreenProps,
  ChangeEmailFormName,
} from 'src/types/ChangeEmailScreenTypes';
import { View } from 'react-native';
import { COLORS, HORIZON_MARGIN, STYLES } from 'src/assets/theme';

import {
  AppButton,
  AppInput,
  AppText,
  Header,
  Space,
  Wrapper,
} from 'src/components';
import { LABELS } from 'src/labels';
import { SVG } from 'src/assets/svg';
import { isValidatedEmail } from 'src/validation';

const ChangeEmailFormDefault: ChangeEmailForm = {
  email: '',
};

const ChangeEmailScreen: React.FC<ChangeEmailScreenProps> = props => {
  const { theme } = props;
  const styles = styling(theme);
  const [form, setForm] = React.useState<ChangeEmailForm>(
    ChangeEmailFormDefault,
  );

  const onChangeText = (name: ChangeEmailFormName, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const onChangeEmail = () => {
    return;

    const payload = {
      email: form.email.trim(),
    };

    if (isValidatedEmail(payload) === false) return;

    const params = {
      payload,
      successCallback: () => { },
      errorCallback: () => { },
    };
    // call redux action function here and pass params
  };

  return (
    <View style={[STYLES.pH(HORIZON_MARGIN), STYLES.container(theme)]}>

      <Header />
      <Space mB={64} />

      <AppText title={LABELS.changeEmail} variant="h2" alignSelf="flex-start" />
      <AppText
        title={LABELS.changeEmailText}
        variant="body3"
        alignSelf="flex-start"
      />

      <Space mB={47} />

      <AppInput
        placeholder={LABELS.newEmail}
        value={form.email}
        onChangeText={text => onChangeText('email', text)}
        keyboardType="email-address"
        SVGRight={<SVG.Email fill={COLORS[theme].gray} />}
      />

      <Space mB={50} />

      <AppButton
        title={LABELS.changeEmail}
        onPress={onChangeEmail}
        variant="filled"
      />
    </View>
  );
};

export default Wrapper(ChangeEmailScreen);
