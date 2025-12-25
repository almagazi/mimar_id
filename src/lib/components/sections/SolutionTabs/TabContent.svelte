<script lang="ts">
  import Icon from '../../ui/Icon.svelte';
  import type { TabContent as TabContentType } from '../../../types';

  interface Props {
    content: TabContentType;
  }

  const { content }: Props = $props();
</script>

<div class="space-y-6 animate-fade-in">
  <p class="text-lg text-slate-600 italic mb-4">{content.quote}</p>
  <ul class="space-y-4">
    {#each content.features as feature}
      <li class="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-slate-50 group">
        <Icon name="check-circle" size={24} class="text-primary-600 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
        <div>
          <h4 class="font-bold text-slate-900">{feature.title}</h4>
          <p class="text-slate-600 text-sm">{feature.description}</p>
        </div>
      </li>
    {/each}
  </ul>
</div>
