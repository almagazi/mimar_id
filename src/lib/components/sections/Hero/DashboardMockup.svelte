<script lang="ts">
  import Icon from '../../ui/Icon.svelte';
</script>

<div class="relative lg:h-[600px] w-full flex items-center justify-center">
  <!-- Abstract Dashboard UI Representation -->
  <div class="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform rotate-1 hover:rotate-0 hover:shadow-2xl transition-all duration-500 ease-in-out">
    <!-- Mockup Header -->
    <div class="bg-slate-50 border-b border-slate-100 p-4 flex gap-2 items-center">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-400"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div class="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div class="ml-4 h-2 w-32 bg-slate-200 rounded-full"></div>
    </div>

    <!-- Mockup Content -->
    <div class="p-6 grid grid-cols-2 gap-4">
      <!-- Card 1: Project Progress -->
      <div class="col-span-2 bg-blue-50 p-4 rounded-xl border border-blue-100 hover:bg-blue-100 hover:shadow-md transition-all duration-300">
        <div class="flex justify-between items-start mb-2">
          <div>
            <div class="text-xs text-blue-600 font-bold uppercase tracking-wide">Proyek Apartment X</div>
            <div class="text-xl font-bold text-slate-800">Progres Fisik vs RAB</div>
          </div>
          <span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded hover:bg-green-200 transition-colors duration-300">+2.4% Ahead</span>
        </div>
        <div class="w-full bg-white h-3 rounded-full overflow-hidden mb-1">
          <div class="bg-primary-600 h-full w-3/4 hover:bg-primary-700 transition-colors duration-300"></div>
        </div>
        <div class="flex justify-between text-xs text-slate-500">
          <span>Realisasi: 75%</span>
          <span>Target: 72.6%</span>
        </div>
      </div>

      <!-- Card 2: Cost -->
      <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300">
        <div class="text-slate-500 text-xs mb-1">Sisa Budget (RAB)</div>
        <div class="text-lg font-bold text-slate-800">Rp 4.2 M</div>
        <div class="mt-2 flex items-center text-xs text-red-500">
          <Icon name="trending-down" size={12} class="mr-1 hover:text-red-600 transition-colors duration-300" />
          <span>Material Besi naik 5%</span>
        </div>
      </div>

      <!-- Card 3: Termin -->
      <div class="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300">
        <div class="text-slate-500 text-xs mb-1">Termin Pembayaran</div>
        <div class="text-lg font-bold text-slate-800">Rp 850 Jt</div>
        <div class="mt-2 flex items-center text-xs text-orange-500">
          <Icon name="clock" size={12} class="mr-1 hover:text-orange-600 transition-colors duration-300" />
          <span>Jatuh tempo 3 hari</span>
        </div>
      </div>

      <!-- Card 4: Task List -->
      <div class="col-span-2 mt-2">
        <div class="text-sm font-bold text-slate-700 mb-3">Persetujuan Pending</div>
        <div class="space-y-2">
          <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:shadow-md transition-all duration-300">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors duration-300">
                <Icon name="file-text" size={16} />
              </div>
              <div>
                <div class="text-sm font-medium text-slate-800">PO Semen Gresik</div>
                <div class="text-xs text-slate-500">Req by: Budi Santoso</div>
              </div>
            </div>
            <button class="text-xs bg-primary-600 text-white px-3 py-1.5 rounded hover:bg-primary-700 hover:shadow-md transition-all duration-300">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating Badge -->
  <div class="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-enhanced hover:animate-none hover:shadow-2xl transition-all duration-300 cursor-default">
    <div class="bg-green-100 p-2 rounded-lg text-green-600 hover:bg-green-200 transition-colors duration-300">
      <Icon name="trending-up" size={24} class="hover:text-green-700 transition-colors duration-300" />
    </div>
    <div>
      <div class="text-xs text-slate-500">Efisiensi Cost</div>
      <div class="text-lg font-bold text-slate-900">23% / tahun</div>
    </div>
  </div>
</div>

<style>
  @keyframes bounce-enhanced {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-bounce-enhanced {
    animation: bounce-enhanced 3s ease-in-out infinite;
  }
</style>
