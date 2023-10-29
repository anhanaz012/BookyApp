import AppButton from 'src/components/AppButton/AppButton';
import AppText from 'src/components/AppText/AppText';

const App: React.FC = () => {
  return (
    <AppButton
      title="Submit"
      textColor="red"
      variant="outlined"
      textVariant="body2"
      textAlign={'center'}
    />
  );
};
export default App;
