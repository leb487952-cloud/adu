@import "tailwindcss";

@theme {
  --color-bg-dark: #0f0f1a;
  --color-primary-purple: #6a0dad;
  --color-highlight-purple: #a855f7;
  --color-text-bright: #ffffff;
  --color-text-muted: #9ca3af;
}

@layer base {
  body {
    @apply bg-bg-dark text-text-bright font-sans;
  }
}

.glass-card {
  @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl;
}

.purple-gradient {
  @apply bg-gradient-to-br from-primary-purple to-highlight-purple;
}
