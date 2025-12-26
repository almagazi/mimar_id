<script lang="ts">
  import { fade, slide } from 'svelte/transition';
</script>

<div class="bg-slate-100 rounded-xl h-64 flex items-center justify-center overflow-hidden relative" in:fade={{ duration: 300 }}>
  <!-- Abstract representation of Project Schedule / Gantt Chart -->
  <div class="w-full h-full p-4 flex flex-col gap-3" in:slide={{ duration: 300, y: 10 }}>
    <div class="h-4 bg-white rounded w-1/3"></div>
    <div class="flex gap-2 items-center group">
      <div class="w-24 text-xs text-slate-400">Pekerjaan Struktur</div>
      <div class="flex-1 h-6 bg-blue-200 rounded-md relative overflow-hidden transition-all duration-300 group-hover:bg-blue-300">
        <div class="absolute left-0 top-0 h-full w-2/3 bg-blue-500 rounded-md transition-all duration-300 group-hover:bg-blue-600"></div>
      </div>
    </div>
    <div class="flex gap-2 items-center group">
      <div class="w-24 text-xs text-slate-400">Arsitektur</div>
      <div class="flex-1 h-6 bg-slate-200 rounded-md relative overflow-hidden transition-all duration-300 group-hover:bg-slate-300">
        <div class="absolute left-1/3 top-0 h-full w-1/4 bg-orange-400 rounded-md transition-all duration-300 group-hover:bg-orange-500"></div>
      </div>
    </div>
    <div class="flex gap-2 items-center group">
      <div class="w-24 text-xs text-slate-400">MEP</div>
      <div class="flex-1 h-6 bg-slate-200 rounded-md relative overflow-hidden transition-all duration-300 group-hover:bg-slate-300">
        <div class="absolute left-1/2 top-0 h-full w-1/4 bg-green-500 rounded-md transition-all duration-300 group-hover:bg-green-600"></div>
      </div>
    </div>
  </div>
</div>
