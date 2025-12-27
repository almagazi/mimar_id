<script lang="ts">
  import { type Snippet } from 'svelte';
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

  type ButtonVariant = 'primary' | 'secondary' | 'accent';
  type ButtonSize = 'sm' | 'md' | 'lg';

  interface Props extends HTMLButtonAttributes {
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    children?: Snippet;
  }

  const {
    variant = 'primary',
    size = 'md',
    href,
    children,
    class: className = '',
    ...rest
  }: Props = $props();

  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary-900 hover:bg-primary-700 text-white shadow-lg shadow-primary-900/30 hover:shadow-lg hover:shadow-primary-600/30',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300',
    accent: 'bg-accent hover:bg-yellow-500 text-slate-900 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-400/40',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const allClasses = $derived(`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`);
</script>

{#if href}
  <a {href} class={allClasses} {...(rest as HTMLAnchorAttributes)}>
    {@render children?.()}
  </a>
{:else}
  <button class={allClasses} {...rest}>
    {@render children?.()}
  </button>
{/if}
