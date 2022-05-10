import { Box, experimental_sx as sx, styled } from '@mui/material';

const Root = styled(Box)(() =>
   sx({
      display: 'flex',
      width: '40vw',
      height: '100%',
      bgcolor: 'green',
   }),
);

export const SkillsPanel = () => <Root></Root>;
