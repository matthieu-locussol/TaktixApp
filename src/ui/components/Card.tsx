import { Card as MuiCard, CardProps, experimental_sx as sx, styled } from '@mui/material';

const Root = styled(MuiCard)(() =>
   sx({
      p: 0,
      borderRadius: 1.5,
      boxShadow: `0 5px 10px 0 rgba(31, 51, 86, 0.06)`,
      transition: 'all 0.15s',
   }),
);

export const Card = (props: CardProps) => {
   return <Root variant="outlined" {...props} />;
};
