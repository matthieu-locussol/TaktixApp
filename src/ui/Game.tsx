import { Box } from '@mui/material';
import { CharacterPanel } from './components/CharacterPanel';

export const Game = () => (
   <Box>
      <CharacterPanel />
      <Box id="phaser-container" />
   </Box>
);
