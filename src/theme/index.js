import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Drawer: {
      baseStyle: {
        overlay: {
          backdropFilter: 'blur(15px)', // Increase the value for more blurriness
        },
      },
    },
  },
});

export default theme;