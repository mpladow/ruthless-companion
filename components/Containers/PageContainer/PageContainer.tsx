import React from "react";
import Box, { BoxProps } from "../../Box/Box";
import { padding } from "../../../constants/padding";

export type PageContainerType = {} & React.PropsWithChildren & BoxProps;
const PageContainer = ({ style, children }: PageContainerType) => {
  return (
    <Box style={[{ paddingHorizontal: padding.xl, height: "100%" }, style]}>
      {children}
    </Box>
  );
};

export default PageContainer;
