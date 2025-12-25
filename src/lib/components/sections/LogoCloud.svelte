<script lang="ts">
  import Icon from '../ui/Icon.svelte';
  import type { CompanyLogo } from '../../types';
  import { fade } from 'svelte/transition';

  const logos: CompanyLogo[] = [
    { icon: 'building-2', name: 'KARYA BETON' },
    { icon: 'triangle', name: 'ADHI BUILD' },
    { icon: 'home', name: 'CITRA LAND' },
    { icon: 'hammer', name: 'TOTAL KONSTRUKSI' },
  ];
</script>

<section class="py-10 border-y border-slate-100 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
      Dipercaya oleh kontraktor & developer terdepan
    </p>
    <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {#each logos as logo, index}
        <div
          class="flex items-center gap-2 font-bold text-xl text-slate-800 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-500 cursor-default"
          in:fade={{ duration: 400, delay: index * 100 }}
        >
          <Icon
            name={logo.icon}
            size={24}
            class="transition-all duration-300 hover:scale-110 hover:rotate-6"
          />
          <span class="transition-colors duration-300 hover:text-primary-600">
            {logo.name}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
