import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store';
import { CharacterPanel } from './components/CharacterPanel';
import { LoadingScreen } from './components/LoadingScreen';

export const Game = observer(() => {
   const {
      loadingScreenStore: { loadingAssets },
   } = useStore();

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
