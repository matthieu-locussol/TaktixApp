import { Box, BoxProps, styled, experimental_sx as sx } from "@mui/material";

const Root = styled(Box)(() =>
  sx({
    position: "absolute",
    width: "100vw",
    height: "100vh",
  })
);

export const Layout = ({ children }: BoxProps) => <Root>{children}</Root>;
