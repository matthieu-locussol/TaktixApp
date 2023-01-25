import {
   Box,
   LinearProgress,
   LinearProgressProps,
   Typography,
   lighten,
   linearProgressClasses,
   styled,
} from '@mui/material';

const Root = styled(Box)(() => ({
   position: 'relative',
}));

const StyledProgressBar = styled(LinearProgress, {
   shouldForwardProp: (prop) => prop !== 'fillColor',
})<Omit<ProgressBarProps, 'maxValue'>>(({ fillColor, theme: { shadows } }) => ({
   height: 'max(2vh, 20px)',
   width: 'max(10vw, 60px)',
   border: '2px solid #3a3023',
   borderRadius: 1,
   backgroundColor: lighten(fillColor, 0.6),
   boxShadow: shadows[4],
   [`.${linearProgressClasses.bar}`]: {
      backgroundColor: fillColor,
   },
}));

const Label = styled(Typography)(() => ({
   color: '#3a3023',
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
   margin: 'auto',
   width: 60,
   height: 20,
   textAlign: 'center',
   fontFamily: 'Audiowide',
}));

interface ProgressBarProps extends LinearProgressProps {
   value: number;
   progress: number;
   fillColor: string;
   showProgress?: boolean;
}

export const ProgressBar = ({ value, progress, showProgress, ...rest }: ProgressBarProps) => {
   return (
      <Root>
         <StyledProgressBar variant="determinate" progress={progress} value={progress} {...rest} />
         {showProgress && <Label variant="caption">{value}</Label>}
      </Root>
   );
};
