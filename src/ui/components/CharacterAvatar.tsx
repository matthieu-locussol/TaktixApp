import { Avatar, experimental_sx as sx, styled } from '@mui/material';

const StyledAvatar = styled(Avatar)(({ theme: { shadows } }) =>
   sx({
      backgroundColor: '#d8a793',
      boxShadow: shadows[4],
      border: '2px solid #3a3023',
      width: 48,
      height: 48,
      zIndex: 1,
   }),
);

export const CharacterAvatar = () => <StyledAvatar src="/assets/interface/avatar.png" />;
