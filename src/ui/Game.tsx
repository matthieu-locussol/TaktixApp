import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { CharacterPanel } from './components/CharacterPanel';
import { LoadingScreen } from './components/LoadingScreen';

export const Game = observer(() => {
   const store = useStore();

   if (store.loadingScreenStore.loading) {
      return <LoadingScreen />;
   }

   return (
      <Box>
         <CharacterPanel />
         <Box id="phaser-container" />
      </Box>
   );
});
