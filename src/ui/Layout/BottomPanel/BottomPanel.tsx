import { Box, experimental_sx as sx, styled } from '@mui/material';
import { ChatPanel } from './ChatPanel';

const Root = styled(Box)(() =>
   sx({
      display: 'flex',
      position: 'absolute',
      left: 16,
      bottom: 16,
   }),
);

export const BottomPanel = () => (
   <Root>
      <ChatPanel />
   </Root>
);
