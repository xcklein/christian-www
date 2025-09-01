import { type ButtonStyleTypes } from '@material-tailwind/react';

export const BUTTON_STYLE: ButtonStyleTypes = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'blue',
    fullWidth: false,
    ripple: true,
    className: '',
  },
  valid: {
    variants: ['filled', 'outlined', 'text'],
    sizes: ['sm', 'md', 'lg'],
    colors: ['white', 'black', 'yellow', 'green', 'blue', 'purple', 'red'],
  },
  styles: {
    base: {
      initial: {
        verticalAlign: 'align-middle',
        userSelect: 'select-none',
        fontFamily: 'font-sans',
        fontWeight: 'font-bold',
        textAlign: 'text-center',
        textTransform: 'uppercase',
        transition: 'transition-all',
        disabled:
          'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none',
      },
      fullWidth: {
        display: 'block',
        width: 'w-full',
      },
    },
    sizes: {
      sm: {
        fontSize: 'text-xs',
        py: 'py-2',
        px: 'px-4',
        borderRadius: 'rounded-lg',
      },
      md: {
        fontSize: 'text-xs',
        py: 'py-3',
        px: 'px-6',
        borderRadius: 'rounded-lg',
      },
      lg: {
        fontSize: 'text-sm',
        py: 'py-3.5',
        px: 'px-7',
        borderRadius: 'rounded-lg',
      },
    },
    variants: {
      filled: {
        white: {
          backgroud: 'bg-palette-white',
          color: 'text-palette-black',
          shadow: 'shadow-md shadow-palette-white/10',
          hover: 'hover:shadow-lg hover:shadow-palette-white/20',
          focus: 'focus:opacity-[0.85] focus:shadow-none',
          active: 'active:opacity-[0.85] active:shadow-none',
        },
        black: {
          backgroud: 'bg-palette-black',
          color: 'text-palette-white',
          shadow: 'shadow-md shadow-palette-black/20',
          hover: 'hover:shadow-lg hover:shadow-palette-black/40',
          focus: 'focus:opacity-[0.85] focus:shadow-none',
          active: 'active:opacity-[0.85] active:shadow-none',
        },
        yellow: {
          backgroud: 'bg-palette-yellow',
          color: 'text-palette-black',
          shadow: 'shadow-md shadow-palette-yellow/20',
          hover: 'hover:shadow-lg hover:shadow-palette-yellow/40',
          focus: 'focus:opacity-[0.85] focus:shadow-none',
          active: 'active:opacity-[0.85] active:shadow-none',
        },
        green: {
          backgroud: 'bg-palette-green',
          color: 'text-palette-white',
          shadow: 'shadow-md shadow-palette-green/20',
          hover: 'hover:shadow-lg hover:shadow-palette-green/40',
          focus: 'focus:opacity-[0.85] focus:shadow-none',
          active: 'active:opacity-[0.85] active:shadow-none',
        },
        blue: {
          backgroud: 'bg-palette-blue',
          color: 'text-palette-white',
          shadow: 'shadow-md shadow-palette-blue/20',
          hover: 'hover:shadow-lg hover:shadow-palette-blue/40',
          focus: 'focus:opacity-[0.85] focus:shadow-none',
          active: 'active:opacity-[0.85] active:shadow-none',
        },
        purple: {
          backgroud: 'bg-palette-purple',
          color: 'text-palette-white',
          shadow: 'shadow-md shadow-palette-purple/20',
          hover: 'hover:shadow-lg hover:shadow-palette-purple/40',
          focus: 'focus:opacity-[0.85] focus:shadow-none',
          active: 'active:opacity-[0.85] active:shadow-none',
        },
        red: {
          backgroud: 'bg-palette-red',
          color: 'text-palette-white',
          shadow: 'shadow-md shadow-palette-red/20',
          hover: 'hover:shadow-lg hover:shadow-palette-red/40',
          focus: 'focus:opacity-[0.85] focus:shadow-none',
          active: 'active:opacity-[0.85] active:shadow-none',
        },
      },
      outlined: {
        white: {
          border: 'border border-palette-white',
          color: 'text-palette-white',
          hover: 'hover:opacity-75',
          focus: 'focus:ring focus:ring-palette-white/50',
          active: 'active:opacity-[0.85]',
        },
        black: {
          border: 'border border-palette-black',
          color: 'text-palette-black',
          hover: 'hover:opacity-75',
          focus: 'focus:ring focus:ring-palette-black/50',
          active: 'active:opacity-[0.85]',
        },
        yellow: {
          border: 'border border-palette-yellow',
          color: 'text-palette-yellow',
          hover: 'hover:opacity-75',
          focus: 'focus:ring focus:ring-palette-yellow/50',
          active: 'active:opacity-[0.85]',
        },
        green: {
          border: 'border border-palette-green',
          color: 'text-palette-green',
          hover: 'hover:opacity-75',
          focus: 'focus:ring focus:ring-palette-green/50',
          active: 'active:opacity-[0.85]',
        },
        blue: {
          border: 'border border-palette-blue',
          color: 'text-palette-blue',
          hover: 'hover:opacity-75',
          focus: 'focus:ring focus:ring-palette-blue/50',
          active: 'active:opacity-[0.85]',
        },
        purple: {
          border: 'border border-palette-purple',
          color: 'text-palette-purple',
          hover: 'hover:opacity-75',
          focus: 'focus:ring focus:ring-palette-purple/50',
          active: 'active:opacity-[0.85]',
        },
        red: {
          border: 'border border-palette-red',
          color: 'text-palette-red',
          hover: 'hover:opacity-75',
          focus: 'focus:ring focus:ring-palette-red/50',
          active: 'active:opacity-[0.85]',
        },
      },
      text: {
        white: {
          color: 'text-palette-white',
          hover: 'hover:bg-palette-white/10',
          active: 'active:bg-palette-white/30',
        },
        black: {
          color: 'text-palette-black',
          hover: 'hover:bg-palette-black/10',
          active: 'active:bg-palette-black/30',
        },
        yellow: {
          color: 'text-palette-yellow',
          hover: 'hover:bg-palette-yellow/10',
          active: 'active:bg-palette-yellow/30',
        },
        green: {
          color: 'text-palette-green',
          hover: 'hover:bg-palette-green/10',
          active: 'active:bg-palette-green/30',
        },
        blue: {
          color: 'text-palette-blue',
          hover: 'hover:bg-palette-blue/10',
          active: 'active:bg-palette-blue/30',
        },
        purple: {
          color: 'text-palette-purple',
          hover: 'hover:bg-palette-purple/10',
          active: 'active:bg-palette-purple/30',
        },
        red: {
          color: 'text-palette-red',
          hover: 'hover:bg-palette-red/10',
          active: 'active:bg-palette-red/30',
        },
      },
    },
  },
};
