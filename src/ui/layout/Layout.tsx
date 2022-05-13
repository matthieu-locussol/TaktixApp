import { Box, BoxProps, experimental_sx as sx, styled } from '@mui/material';

const Root = styled(Box)(() =>
   sx({
      position: 'absolute',
      width: '100vw',
      height: '100vh',
   }),
);

export const Layout = ({ children }: BoxProps) => <Root>{children}</Root>;
