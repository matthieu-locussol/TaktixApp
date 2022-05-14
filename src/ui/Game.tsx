import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from '../store';
import { CharacterPanel } from './components/CharacterPanel';
import { LoadingScreen } from './components/LoadingScreen';

export const Game = observer(() => {
   const {
      loadingScreenStore: { loadingAssets },
      characterStore,
   } = useStore();

   useEffect(() => {
      characterStore.setName('Natsuchan');
      characterStore.setHealth(4_921);
      characterStore.setMaxHealth(5_480);
      characterStore.setExperience(39_788);
   }, []);

   if (loadingAssets) {
      return <LoadingScreen />;
   }

   return (
      <Box>
         <CharacterPanel />
         <Box id="root-game" />
      </Box>
   );
});
