import {SVG} from 'src/assets/svg';
import AppButton from 'src/components/AppButton/AppButton';
import AppText from 'src/components/AppText/AppText';
import Icon from 'src/components/Icon/Icon';

const App: React.FC = () => {
  return (
    // <AppButton
    //   title="Submit"
    //   textColor="red"
    //   variant="outlined"
    //   textVariant="body2"
    //   textAlign={'center'}
    //   extraStyle={{
    //     container: {width: 200, height: 40, borderRadius: 5},
    //     text: {fontWeight: '400'},
    //   }}
    // />
    <Icon
      SVGIcon={<SVG.Advanced fill={'black'} />}
      iconLeft={true}
      title="hello2"
    />
  );
};
export default App;
