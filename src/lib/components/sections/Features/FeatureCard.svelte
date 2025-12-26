<script lang="ts">
  import Icon from '../../ui/Icon.svelte';
  import type { Feature } from '../../../types';

  interface Props {
    feature: Feature;
  }

  const { feature }: Props = $props();
</script>

<div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
  <div class="w-12 h-12 {feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-all duration-300">
    <Icon name={feature.icon} size={24} class="group-hover:text-blue-600 transition-colors duration-300" />
  </div>
  <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">{feature.title}</h3>
  <p class="text-slate-600 leading-relaxed">{feature.description}</p>
</div>
