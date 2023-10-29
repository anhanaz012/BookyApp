import {StyleSheet} from 'react-native';
export type Styles = {
  container: any;
  image: any;
  text: any;
};
export const styles = StyleSheet.create<Styles>({
  container: () => ({
    flexDirection: 'row',
    alignItems: 'center',
  }),
  image: () => ({
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  }),
  text: () => ({
    fontSize: 18,
    fontWeight: 'bold',
  }),
});
