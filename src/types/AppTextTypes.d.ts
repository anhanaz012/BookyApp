// import {FlexAlignType, StyleProp, TextStyle} from 'react-native/types';
// import {Typography} from './StyleTypes';

// export type AppTextProps = {
//   title: string;
//   variant: Typography;
//   onPress?: () => void;
//   extraStyle?: StyleProp<TextStyle>;
//   children?: any;
//   color?: string;
//   alignSelf?: FlexAlignType;
//   fontSize?: number;
//   numberOfLines?: number;
//   ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
//   translation: boolean;
// };



import { Typography } from "./StyleTypes";
import { Theme } from "./ThemeTypes";
export interface AppTextProps {
  variant: Typography;
  title : string;
  onPress?: () => void;
  extraStyle?: any;
  children?: any;
  color?: string;
  alignSelf?: FlexAlignType;
  fontSize?: number;
  theme?:Theme;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    
}