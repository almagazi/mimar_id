<script lang="ts">
  import Navbar from './lib/components/layout/Navbar.svelte';
  import Footer from './lib/components/layout/Footer.svelte';
  import Hero from './lib/components/sections/Hero.svelte';
  import LogoCloud from './lib/components/sections/LogoCloud.svelte';
  import Features from './lib/components/sections/Features.svelte';
  import SolutionTabs from './lib/components/sections/SolutionTabs.svelte';
  import DemoForm from './lib/components/sections/DemoForm.svelte';
</script>

<div class="bg-slate-50 text-slate-800 antialiased overflow-x-hidden">
  <Navbar />
  
  <main>
    <Hero />
    <LogoCloud />
    <Features />
    <SolutionTabs />
    <DemoForm />
  </main>
  
  <Footer />
</div>
