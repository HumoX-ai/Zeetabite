import { Box } from "@mui/material";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};
