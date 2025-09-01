import withMT from '@material-tailwind/react/utils/withMT';

const config = withMT({
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          black: '#202020',
          grey: '#292929',
          offwhite: '#eeeeee',
          white: '#f8f8f8',
          red: '#ff595e',
          yellow: '#ffca3a',
          green: '#8ac926',
          blue: '#1982c4',
          purple: '#6a4c93',
        },
      },
    },
  },
  plugins: [],
});

export default config;
