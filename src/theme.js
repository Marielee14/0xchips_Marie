import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/aldrich";
import "@fontsource/barlow";
import "@fontsource/inter";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#080705",
        color: "white",
      },
    },
  },

  fonts: {
    heading: ` "Inter", sans-serif; `,
    body: ` "Inter", sans-serif; `,
  },
});

export default theme;
