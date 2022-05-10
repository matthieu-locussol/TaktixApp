import { Box, experimental_sx as sx, styled } from '@mui/material';

const Root = styled(Box)(() =>
   sx({
      display: 'flex',
      width: '20vw',
      height: '100%',
      bgcolor: 'purple',
   }),
);

export const CharacterPanel = () => <Root></Root>;
