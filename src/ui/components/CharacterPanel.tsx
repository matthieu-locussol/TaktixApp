import { experimental_sx as sx, Stack, StackProps, styled } from '@mui/material';
import { useStore } from '../../store';
import { CharacterAvatar } from './CharacterAvatar';
import { ProgressBar } from './ProgressBar';

const StyledStack = styled(Stack)(() =>
   sx({
      mt: 2,
      ml: 2,
      width: 200,
      display: 'flex',
      alignItems: 'center',
      opacity: 0.85,
   }),
);

export const CharacterPanel = (props: StackProps) => {
   const {
      characterStore: { health, healthPercentage, experience, experiencePercentage },
   } = useStore();

   return (
      <StyledStack direction="row" {...props}>
         <CharacterAvatar />
         <Stack sx={{ ml: -1.5 }}>
            <ProgressBar
               value={health}
               progress={healthPercentage}
               fillColor="#ef4444"
               showProgress
            />
            <ProgressBar
               value={experience}
               progress={experiencePercentage}
               fillColor="#10b981"
               sx={{ mt: 0.75, width: '8vw', height: '0.8vh' }}
            />
         </Stack>
      </StyledStack>
   );
};
