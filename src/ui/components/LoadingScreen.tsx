import {
   Box,
   CircularProgress,
   experimental_sx as sx,
   Stack,
   styled,
   Typography,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

const ProgressValueWrapper = styled(Box)(() =>
   sx({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 0,
   }),
);

export const LoadingScreen = observer(() => {
   const {
      loadingScreenStore: { progress, currentPath },
   } = useStore();

   const progressValue = progress * 100;

   return (
      <Stack
         height="100%"
         display="flex"
         alignItems="center"
         justifyContent="center"
         lineHeight={0}
      >
         <Box position="relative">
            <CircularProgress size={64} variant="determinate" value={progressValue} />
            <ProgressValueWrapper>
               <Typography variant="button" fontWeight="bold" color="white">
                  {progressValue}%
               </Typography>
            </ProgressValueWrapper>
         </Box>
         <Typography variant="body2" fontStyle="italic">
            {currentPath}
         </Typography>
      </Stack>
   );
});
