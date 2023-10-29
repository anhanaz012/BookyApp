// export type ButtonVariant = 'filled' | 'outlined';

// export type AppButtonProps = {
//   onPress: () => void;
//   title: string;
//   variant?: ButtonVariant;
//   extraStyle?: {button?: {}; title?: {}};
//   SVGLeft?: any;
//   SVGRight?: any;
//   onPressIcon?: () => void;
// };

export type ButtonVariant = 'filled' | 'outlined';
import {Typography} from './StyleTypes';
import {Theme} from './ThemeTypes';
export type AppButtonProps = {
  title: string;
  textAlign:FlexAlignType;
  textVariant?: Typography;
  onPress?: () => void;
  variant?: ButtonVariant;
  extraStyle?: {container?: {}; text?: {}};
  SVGLeft?: any;
  SVGRight?: any;
  theme?: Theme;
  onPressIcon?: () => void;
  disabled?: boolean;
  children?: any;
  textColor: string;
};
