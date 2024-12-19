import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'glitch-base': {
  				'0%, 100%': { transform: 'translate(0)' },
  				'20%': { transform: 'translate(-2px, 2px)' },
  				'40%': { transform: 'translate(-2px, -2px)' },
  				'60%': { transform: 'translate(2px, 2px)' },
  				'80%': { transform: 'translate(2px, -2px)' }
  			},
  			'glitch-overlay': {
  				'0%, 100%': { transform: 'translate(0)' },
  				'50%': { transform: 'translate(1px, 1px)' }
  			},
  			'flicker-base': {
  				'0%, 100%': { opacity: '0.05' },
  				'50%': { opacity: '0.02' }
  			},
  			'glitch-once': {
  				'0%, 100%': { transform: 'translate(0)' },
  				'20%': { transform: 'translate(-2px, 2px)' },
  				'40%': { transform: 'translate(-2px, -2px)' },
  				'60%': { transform: 'translate(2px, 2px)' },
  				'80%': { transform: 'translate(2px, -2px)' }
  			},
  			'blink': {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0' }
  			},
  			tear: {
  				'0%': { transform: 'translateY(-100%)' },
  				'50%': { transform: 'translateY(0)' },
  				'100%': { transform: 'translateY(100%)' }
  			},
  		},
  		animation: {
  			glitch: 'glitch-base 0.3s ease-in-out',
  			'glitch-overlay': 'glitch-overlay 0.2s ease-in-out infinite',
  			flicker: 'flicker-base 0.15s infinite',
  			'glitch-once': 'glitch-once 0.3s ease-in-out 1',
  			'blink': 'blink 1s step-end infinite',
  			tear: 'tear 0.5s ease-in-out',
  		}
  	}
  },
  plugins: [animate],
};
export default config;
