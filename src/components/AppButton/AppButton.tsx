import {TouchableOpacity, Text} from 'react-native';
import {AppButtonProps} from 'src/types/AppButtonTypes';
import {styles} from './styles';
import AppText from '../AppText/AppText';
import {STYLES} from 'src/assets/theme';

const AppButton: React.FC<AppButtonProps> = props => {
  const {
    variant = 'filled',
    title,
    extraStyle = {container: {}, text: {}},
    onPress = () => {},
    disabled = false,
    children = null,
    textVariant = 'body1',
    textColor,
    textAlign,
  } = props;
  const style = styles(variant);
  return (
    <>
      <TouchableOpacity
        style={[style.container, extraStyle.container]}
        disabled={disabled}
        onPress={onPress}
        {...props}>
        <AppText
          title={title}
          variant={textVariant}
          alignSelf={textAlign}
          color={textColor ? textColor : style.text.color}
          extraStyle={[style.text, extraStyle.text]}
        />
        {children && children}
      </TouchableOpacity>
    </>
  );
};
export default AppButton;
