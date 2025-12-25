<script lang="ts">
  import Icon from '../ui/Icon.svelte';
  import TabContent from './SolutionTabs/TabContent.svelte';
  import GanttChart from './SolutionTabs/GanttChart.svelte';
  import SitePlan from './SolutionTabs/SitePlan.svelte';
  import type { TabType, TabContent as TabContentType } from '../../types';

  let activeTab = $state<TabType>('kontraktor');

  const tabs: TabType[] = ['kontraktor', 'developer'];

  const tabContents: Record<TabType, TabContentType> = {
    kontraktor: {
      type: 'kontraktor',
      quote: 'Menghindari cost overrun dan sengketa opname dengan owner.',
      features: [
        {
          title: 'Kontrol Pemakaian Material',
          description: 'Cegah pencurian dan pemborosan material di site dengan sistem approval berjenjang.',
        },
        {
          title: 'Penagihan Termin Tepat Waktu',
          description: 'Notifikasi otomatis saat progres fisik mencapai target termin pembayaran.',
        },
        {
          title: 'Laporan Harian Proyek',
          description: 'Generate laporan cuaca, tenaga kerja, dan material otomatis dalam format PDF.',
        },
      ],
    },
    developer: {
      type: 'developer',
      quote: 'Mempercepat penjualan unit dan memantau cashflow proyek secara makro.',
      features: [
        {
          title: 'Unit Inventory Management',
          description: 'Cegah double booking. Status unit (Available, Booked, Sold) terupdate real-time.',
        },
        {
          title: 'Monitoring Legalitas',
          description: 'Tracking proses AJB, BPHTB, dan pemecahan sertifikat per unit konsumen.',
        },
        {
          title: 'Komisi Marketing',
          description: 'Perhitungan otomatis komisi sales internal maupun agen properti eksternal.',
        },
      ],
    },
  };

  function setTab(tab: TabType) {
    activeTab = tab;
  }
</script>

<section id="solusi" class="py-20 bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Content Side -->
      <div in:fade={{ duration: 400 }}>
        <div in:slide={{ duration: 400, y: 20 }}>
          <h2 class="text-3xl font-bold text-slate-900 mb-6">Solusi Spesifik untuk Peran Anda</h2>

          <!-- Tab Buttons -->
          <div class="flex gap-4 mb-8 border-b border-slate-200">
            {#each tabs as tab}
              <button
                onclick={() => setTab(tab)}
                class="pb-3 px-1 text-lg font-bold border-b-2 transition-all duration-300 hover:scale-105 capitalize {activeTab === tab
                  ? 'border-primary-600 text-primary-700'
                  : 'border-transparent text-slate-400 hover:text-slate-600'}"
              >
                {tab}
              </button>
            {/each}
          </div>

          <!-- Tab Content -->
          <div key={activeTab}>
            {#if activeTab === 'kontraktor'}
              <div transition:fade={{ duration: 300 }}>
                <div transition:slide={{ duration: 300, y: 10 }}>
                  <TabContent content={tabContents[activeTab]} />
                </div>
              </div>
            {:else}
              <div transition:fade={{ duration: 300 }}>
                <div transition:slide={{ duration: 300, y: 10 }}>
                  <TabContent content={tabContents[activeTab]} />
                </div>
              </div>
            {/if}
          </div>

          <div class="mt-8">
            <a href="#demo" class="text-primary-700 font-bold hover:text-primary-900 flex items-center gap-2 group transition-colors duration-200">
              Pelajari Lebih Lanjut <Icon name="ArrowRight" size={16} class="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      <!-- Visual Side -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-3xl transform rotate-3 scale-95 z-0"></div>
        <div class="relative bg-white border border-slate-100 p-6 rounded-3xl shadow-xl z-10">
          {#if activeTab === 'kontraktor'}
            <GanttChart />
          {:else}
            <SitePlan />
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
