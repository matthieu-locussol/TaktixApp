import {
   Box,
   experimental_sx as sx,
   lighten,
   LinearProgress,
   linearProgressClasses,
   LinearProgressProps,
   styled,
   Typography,
} from '@mui/material';

const Root = styled(Box)(() =>
   sx({
      position: 'relative',
   }),
);

const StyledProgressBar = styled(LinearProgress, {
   shouldForwardProp: (prop) => prop !== 'fillColor',
})<Omit<ProgressBarProps, 'maxValue'>>(({ fillColor, theme: { shadows } }) =>
   sx({
      height: 'max(2vh, 20px)',
      width: 'max(10vw, 60px)',
      border: '2px solid #3a3023',
      borderRadius: 1,
      backgroundColor: lighten(fillColor, 0.6),
      boxShadow: shadows[4],
      [`.${linearProgressClasses.bar}`]: {
         backgroundColor: fillColor,
      },
   }),
);

const Label = styled(Typography)(() =>
   sx({
      color: '#3a3023',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      m: 'auto',
      width: 60,
      height: 20,
      textAlign: 'center',
      fontFamily: 'Audiowide',
   }),
);

interface ProgressBarProps extends LinearProgressProps {
   value: number;
   maxValue: number;
   fillColor: string;
   showProgress?: boolean;
}

export const ProgressBar = ({ value, maxValue, showProgress, ...rest }: ProgressBarProps) => {
   const progress = (value / maxValue) * 100;

   return (
      <Root>
         <StyledProgressBar variant="determinate" value={progress} {...rest} />
         {showProgress && <Label variant="caption">{value}</Label>}
      </Root>
   );
};
