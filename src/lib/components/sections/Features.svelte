<script lang="ts">
  import FeatureCard from './Features/FeatureCard.svelte';
  import type { Feature } from '../../types';
  import { fade, fly } from 'svelte/transition';

  const features: Feature[] = [
    {
      icon: 'file-bar-chart-2',
      title: 'Manajemen RAB & RAP',
      description: 'Buat estimasi biaya akurat. Bandingkan RAB (Budget Owner) dengan RAP (Budget Internal) untuk menjaga margin profit tetap aman.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: 'truck',
      title: 'Procurement & Logistik',
      description: 'Kontrol permintaan material dari lapangan. Pantau PO, DO, hingga stok opname di gudang proyek secara real-time.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: 'wallet',
      title: 'Keuangan Proyek',
      description: 'Laporan Laba Rugi per proyek. Kelola tagihan termin, retensi, hutang supplier, dan cashflow operasional.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: 'hard-hat',
      title: 'Manajemen Subkon',
      description: 'Kelola kontrak sub-kontraktor, pantau progres kerja (opname mandor), dan pembayaran berdasarkan termin prestasi.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: 'home',
      title: 'Penjualan Properti',
      description: 'Fitur khusus Developer. Visualisasi siteplan, booking fee, simulasi KPR, hingga manajemen legalitas unit.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: 'smartphone',
      title: 'Aplikasi Lapangan',
      description: 'Upload foto progres harian langsung dari HP. Approval permintaan barang semudah membalas chat.',
      color: 'bg-teal-100 text-teal-600',
    },
  ];
</script>

<section id="fitur" class="py-20 bg-slate-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2
        in:fly={{ duration: 600, y: 20, opacity: 0 }}
        class="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
      >
        Fitur Lengkap untuk Ekosistem Proyek
      </h2>
      <p
        in:fly={{ duration: 600, y: 20, opacity: 0, delay: 100 }}
        class="text-lg text-slate-600"
      >
        Dari peletakan batu pertama hingga serah terima kunci, mimar.id mengelola setiap aspek bisnis Anda.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature, index}
        <div in:fly={{ duration: 500, y: 30, opacity: 0, delay: 200 + index * 100 }}>
          <FeatureCard {feature} />
        </div>
      {/each}
    </div>
  </div>
</section>
