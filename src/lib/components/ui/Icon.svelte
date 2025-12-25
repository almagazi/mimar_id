<script lang="ts">
  import * as LucideIcons from 'lucide-svelte';
  import { toPascalCase } from '../../utils/iconUtils';

  interface Props {
    name: string;
    size?: number | string;
    class?: string;
  }

  const { name, size = 24, class: className = '' }: Props = $props();

  // Convert kebab-case to PascalCase and get the icon component
  const pascalCaseName = $derived(toPascalCase(name));
  const IconComponent = $derived((LucideIcons as Record<string, any>)[pascalCaseName]);
</script>

{#if IconComponent}
  {@const Component = IconComponent}
  <Component {size} class={className} />
{/if}
