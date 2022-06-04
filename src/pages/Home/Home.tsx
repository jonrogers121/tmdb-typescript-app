import { HomeProvider } from '../../hooks/useHomeContext';
import HomeTemplate from '../../templates/HomeTemplate';

export const Home = () => {
  return (
    <HomeProvider>
      <HomeTemplate />
    </HomeProvider>
  );
};
