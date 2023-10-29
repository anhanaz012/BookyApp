import {StyleSheet} from 'react-native';
import { Theme } from 'src/types/ThemeTypes';
export type Styles = {
  text: any;
};
export const styles = (theme:Theme) => StyleSheet.create<Styles>({
  text: {
    color : theme === 'dark' ? 'white' : 'black',
  },
});
