<script lang="ts">
  import Button from '../ui/Button.svelte';
  import Icon from '../ui/Icon.svelte';
  import DashboardMockup from './Hero/DashboardMockup.svelte';
  import { fade } from 'svelte/transition';
</script>

<section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
  <!-- Background Blobs -->
  <div class="blob bg-blue-200 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 animate-float-slow"></div>
  <div class="blob bg-orange-100 w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 animate-float-slow-delayed"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      <!-- Text Content -->
      <div class="text-center lg:text-left">
        <div
          in:fade={{ duration: 600 }}
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary-700 font-semibold text-sm mb-6"
        >
          <span class="flex h-2 w-2 rounded-full bg-primary-600"></span>
          #1 ERP Konstruksi Indonesia
        </div>
        <h1
          in:fade={{ duration: 600, delay: 100 }}
          class="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
        >
          Kendali Penuh Proyek <br />
          <span class="text-gradient">Tanpa Kebocoran Budget</span>
        </h1>
        <p
          in:fade={{ duration: 600, delay: 200 }}
          class="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
        >
          Platform terintegrasi untuk Kontraktor & Developer. Pantau RAB, Material, Progres Lapangan, hingga Laporan Keuangan secara
          <em>real-time</em>
          dalam satu dashboard.
        </p>

        <div
          in:fade={{ duration: 600, delay: 300 }}
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Button href="#demo" size="lg" class="group hover:shadow-lg transition-all duration-300">
            Coba Gratis Sekarang
            <Icon name="arrow-right" size={20} class="group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button href="/demo-video" variant="secondary" size="lg" class="group hover:shadow-lg transition-all duration-300">
            <Icon name="play-circle" size={20} class="text-primary-600 transition-transform duration-300" />
            Lihat Video Demo
          </Button>
        </div>

        <div
          in:fade={{ duration: 600, delay: 400 }}
          class="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm font-medium"
        >
          <div class="flex items-center gap-2 group cursor-default">
            <Icon name="check-circle-2" size={20} class="text-green-500 group-hover:text-green-600 transition-all duration-200" />
            <span class="group-hover:text-slate-700 transition-colors duration-200">Tanpa Biaya Setup</span>
          </div>
          <div class="flex items-center gap-2 group cursor-default">
            <Icon name="check-circle-2" size={20} class="text-green-500 group-hover:text-green-600 transition-all duration-200" />
            <span class="group-hover:text-slate-700 transition-colors duration-200">Support Lokal 24/7</span>
          </div>
        </div>
      </div>

      <!-- Hero Image / Dashboard Mockup -->
      <DashboardMockup />
    </div>
  </div>
</section>

<style>
  @keyframes float-slow {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(20px, -20px);
    }
  }

  @keyframes float-slow-delayed {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-15px, 15px);
    }
  }

  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }

  .animate-float-slow-delayed {
    animation: float-slow-delayed 10s ease-in-out infinite;
  }

  .blob {
    position: absolute;
    opacity: 0.5;
    filter: blur(60px);
    z-index: 0;
  }
</style>
