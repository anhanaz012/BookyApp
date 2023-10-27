import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {IMAGES} from 'src/assets/images';
import {COLORS, HORIZON_MARGIN, STYLES} from 'src/assets/theme';
import {AppText, Header, Space, Wrapper} from 'src/components';
import DrawerView from 'src/components/DrawerView/DrawerView';

import {LABELS} from 'src/labels';
import {HomeScreenProps} from 'src/types/HomeScreen';
import {NavigationProps} from 'src/types/NavigationTypes';
import {styles as styling} from './styles';

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {theme} = props;
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  const onNavigate = () => {
    navigation.navigate('WorkoutPlansScreen', {});
  };

  return (
    <DrawerView>
      <View style={[STYLES.pH(HORIZON_MARGIN), STYLES.container(theme)]}>
        <Header title={LABELS.dashboard} menuBtn />
        <Space mB={30} />
      </View>
    </DrawerView>
  );
};

export default Wrapper(HomeScreen);
