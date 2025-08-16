import { defineConfig, presetUno, presetIcons, presetTypography } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Source Sans Pro',
          weights: ['400', '600'],
          italic: true,
        },
        serif: {
          name: 'Playfair Display',
          weights: ['400', '700'],
          italic: true,
        },
        mono: 'SF Mono, Monaco, Inconsolata, Roboto Mono, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace',
      },
      provider: 'google',
    }),
  ],
  theme: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)',
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-md font-medium transition-colors',
    'btn-primary': 'btn bg-primary text-primary-foreground hover:bg-primary/90',
    'btn-secondary': 'btn bg-secondary text-secondary-foreground hover:bg-secondary/90',
    'btn-outline': 'btn border border-border hover:bg-accent hover:text-accent-foreground',
    'card': 'rounded-lg border border-border bg-card text-card-foreground shadow-sm',
    'input': 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  },
})
