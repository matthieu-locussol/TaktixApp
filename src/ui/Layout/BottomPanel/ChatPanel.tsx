import { Box, experimental_sx as sx, styled, TextField, Typography } from '@mui/material';

const Root = styled(Box)(() =>
   sx({
      display: 'flex',
      flexDirection: 'column',
      width: '40vw',
      height: '100%',
      bgcolor: '#464646',
   }),
);

const Input = styled(TextField)(() =>
   sx({
      color: 'rgb(224, 224, 224)',
      width: '100%',
      mt: 'auto',
      borderTop: '1px solid #333',
      input: {
         color: 'white',
         bgcolor: '#565656',
         py: 0.5,
      },
      fieldset: {
         border: 'none',
         borderRadius: 0,
      },
      ':hover': {
         input: {
            bgcolor: '#646464',
         },
      },
   }),
);

export const ChatPanel = () => (
   <Root>
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            py: 0.5,
            px: 1,
            overflowY: 'auto',
         }}
      >
         <Typography color="rgb(224, 224, 224)">
            [20:39] <b>Matthieu :</b> Hello world!
         </Typography>
         <Typography color="rgb(224, 224, 224)">
            [20:39] <b>Matthieu :</b> Hello world!
         </Typography>
         <Typography color="rgb(224, 224, 224)">
            [20:39] <b>Matthieu :</b> Hello world!
         </Typography>
         <Typography color="rgb(224, 224, 224)">
            [20:39] <b>Matthieu :</b> Hello world! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec eget nunc eget nunc eget nunc eget nunc eget nunc eget.
         </Typography>
      </Box>
      <Input size="small" />
   </Root>
);
