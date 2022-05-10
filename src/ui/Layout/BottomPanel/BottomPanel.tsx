import { Box, experimental_sx as sx, styled } from '@mui/material';
import { CharacterPanel } from './CharacterPanel';
import { ChatPanel } from './ChatPanel';
import { SkillsPanel } from './SkillsPanel';

const Root = styled(Box)(() =>
   sx({
      display: 'flex',
      width: '100vw',
      height: '16vh',
      position: 'absolute',
      bottom: 0,
      borderTop: '1px solid #333',
      opacity: 0.96,
   }),
);

export const BottomPanel = () => (
   <Root>
      <ChatPanel />
      <CharacterPanel />
      <SkillsPanel />
   </Root>
);
