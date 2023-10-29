import {Text} from 'react-native';
import {AppTextProps} from 'src/types/AppTextTypes';
import {styles} from './styles';
import {COLORS, STYLES, TYPOGRAPHY} from 'src/assets/theme';

const AppText: React.FC<AppTextProps> = props => {
  const {
    title = '',
    variant = 'body1',
    theme = 'dark',
    color = COLORS[theme].text,
    extraStyle = {},
    children = null,
    alignSelf = 'flex-start',
  } = props;
  const style = styles(theme);
  return (
    <>
      <Text
        style={[
          STYLES.fontSize(TYPOGRAPHY[variant].fontSize),
          STYLES.alignSelf(alignSelf),
          STYLES.color(color),
          extraStyle,
        ]}>
        {title}
      </Text>
      {children && children}
    </>
  );
};
export default AppText;
