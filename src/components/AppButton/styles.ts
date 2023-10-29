import {StyleSheet} from 'react-native';
import {COLORS, COMMON_COLORS} from 'src/assets/theme';
import {ButtonVariant} from 'src/types/AppButtonTypes';
export type Styles = {
  container: any;
  text: any;
};
export const styles = (variant: ButtonVariant) =>
  StyleSheet.create<Styles>({
    container: {
      height: 45,
      width: '100%',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: variant === 'filled' ? 'transparent' : COMMON_COLORS.primary,
      backgroundColor:
        variant === 'filled' ? COMMON_COLORS.primary : COLORS.dark.white,
    },
    text: {
      color: variant === 'filled' ? COMMON_COLORS.white : COMMON_COLORS.primary,
      fontWeight: 'bold',
    },
  });
