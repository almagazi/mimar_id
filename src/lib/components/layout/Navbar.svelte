<script lang="ts">
  import Button from '../ui/Button.svelte';
  import Icon from '../ui/Icon.svelte';
  import { onMount, onDestroy } from 'svelte';
  import { fade, slide, scale } from 'svelte/transition';

  let isMobileMenuOpen = $state(false);
  let isScrolled = $state(false);

  const navLinks = [
    { href: '#fitur', label: 'Fitur' },
    { href: '#solusi', label: 'Solusi' },
    { href: '#testimoni', label: 'Klien' },
    { href: '#faq', label: 'FAQ' },
  ];

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleLogoKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  }

  function handleScroll() {
    isScrolled = window.scrollY > 10;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav
  class="glass-nav fixed w-full z-50 transition-all duration-300"
  class:shadow-lg={isScrolled}
  class:bg-white={isScrolled}
  class:h-16={isScrolled}
  class:h-20={!isScrolled}
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <button
        class="flex-shrink-0 flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0 transition-transform duration-200"
        onclick={scrollToTop}
        onkeydown={handleLogoKeydown}
        aria-label="Go to top"
      >
        <div class="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          M
        </div>
        <span class="font-bold text-2xl tracking-tight text-slate-900">mimar<span class="text-primary-600">.id</span></span>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 items-center">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-slate-600 hover:text-primary-700 font-medium relative transition-colors duration-300 group"
          >
            {link.label}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        {/each}
      </div>

      <!-- CTA Button -->
      <div class="hidden md:flex items-center gap-4">
        <a
          href="/login"
          class="text-slate-600 font-medium hover:text-primary-700 transition-colors duration-300 relative group"
        >
          Login
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <Button
          href="#demo"
          size="md"
        >
          Jadwalkan Demo
        </Button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button
          onclick={toggleMobileMenu}
          class="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <Icon name={isMobileMenuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Panel -->
  {#if isMobileMenuOpen}
    <div
      class="md:hidden bg-white border-t border-gray-100 absolute w-full"
      transition:fade={{ duration: 200 }}
    >
      <div
        class="px-4 pt-2 pb-6 space-y-2 shadow-lg"
        in:slide={{ axis: 'y', duration: 200 }}
        out:slide={{ axis: 'y', duration: 200 }}
      >
        {#each navLinks as link}
          <a
            href={link.href}
            class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-700 transition-colors duration-300"
            onclick={() => isMobileMenuOpen = false}
          >
            {link.label}
          </a>
        {/each}
        <Button
          href="#demo"
          class="w-full mt-4"
          onclick={() => isMobileMenuOpen = false}
        >
          Jadwalkan Demo
        </Button>
      </div>
    </div>
  {/if}
</nav>
