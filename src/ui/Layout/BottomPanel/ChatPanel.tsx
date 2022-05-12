import { Box, experimental_sx as sx, styled, TextField, Typography } from '@mui/material';
import { Card } from '../../components/Card';

const Chatbox = styled(Box)(() =>
   sx({
      width: '40vw',
      height: '16vh',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      p: 1,
   }),
);

const Input = styled(TextField)(() =>
   sx({
      mt: 'auto',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      input: {
         bgcolor: '#F8F8F8',
         py: 0.5,
         px: 1,
         borderBottomLeftRadius: 4,
         borderBottomRightRadius: 4,
         fontSize: 14,
      },
      fieldset: {
         border: 'none',
      },
      ':hover': {
         input: {
            bgcolor: '#F0F0F0',
         },
      },
   }),
);

export const ChatPanel = () => (
   <Card>
      <Chatbox>
         {[...Array(10)].map(() => (
            <Typography variant="body2">
               [20:39] <b>Matthieu:</b> Hello world!
            </Typography>
         ))}
      </Chatbox>
      <Input fullWidth size="small" />
   </Card>
);
