import {View} from 'react-native';
import {IconProps} from 'src/types/IconTypes';
import AppText from '../AppText/AppText';
import {STYLES} from 'src/assets/theme';

const Icon: React.FC<IconProps> = props => {
  const {
    SVGIcon = null,
    title = 'hello',
    alignSelf = 'flex-start',
    color = 'black',
    iconLeft = false,
    mB = 0,
  } = props;
  return (
    <>
      {iconLeft && (
        <View style={[STYLES.row]} {...props}>
          {SVGIcon}
          <AppText title={title} variant={'body1'} color={color} />
        </View>
      )}
    </>
  );
};
export default Icon;
