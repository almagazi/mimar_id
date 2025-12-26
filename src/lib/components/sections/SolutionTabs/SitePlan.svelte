<script lang="ts">
  import { fade, slide } from 'svelte/transition';
</script>

<div class="bg-slate-100 rounded-xl h-64 flex items-center justify-center overflow-hidden relative" in:fade={{ duration: 300 }}>
  <!-- Abstract representation of Site Plan -->
  <div class="w-full h-full p-6 grid grid-cols-4 gap-2" in:slide={{ duration: 300, y: 10 }}>
    <div class="bg-red-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer">SOLD</div>
    <div class="bg-red-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer">SOLD</div>
    <div class="bg-green-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:bg-green-500 cursor-pointer">AVBL</div>
    <div class="bg-red-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer">SOLD</div>
    <div class="bg-yellow-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:bg-yellow-500 cursor-pointer">BOOK</div>
    <div class="bg-green-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:bg-green-500 cursor-pointer">AVBL</div>
    <div class="bg-green-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:bg-green-500 cursor-pointer">AVBL</div>
    <div class="bg-green-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-sm transition-all duration-300 hover:shadow-md hover:bg-green-500 cursor-pointer">AVBL</div>
  </div>
</div>
