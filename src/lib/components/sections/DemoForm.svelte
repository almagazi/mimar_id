<script lang="ts">
  import Icon from '../ui/Icon.svelte';
  import Button from '../ui/Button.svelte';
  import type { FormData } from '../../types';
  import { fade, slide } from 'svelte/transition';

  let formData = $state<FormData>({
    name: '',
    company: '',
    businessType: 'Kontraktor',
  });

  // Validation state
  let errors = $state<Partial<Record<keyof FormData, boolean>>>({});
  let touched = $state<Partial<Record<keyof FormData, boolean>>>({});

  const businessTypes = [
    'Kontraktor',
    'Developer Properti',
    'Konsultan Arsitek',
  ];

  function handleSubmit(event: Event) {
    event.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Halo, saya ingin request demo mimar.id\n\nNama: ${formData.name}\nPerusahaan: ${formData.company}\nTipe Bisnis: ${formData.businessType}`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/62816782197?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  function handleInput(key: keyof FormData, value: string) {
    formData[key] = value;
    touched[key] = true;
  }

  function handleBlur(key: keyof FormData) {
    touched[key] = true;
    // Simple validation logic (can be expanded)
    if (key === 'name' && formData.name.length < 2) {
      errors[key] = true;
    } else {
      errors[key] = false;
    }
  }

  function hasError(key: keyof FormData): boolean {
    return touched[key] === true && errors[key] === true;
  }

  function hasSuccess(key: keyof FormData): boolean {
    return touched[key] === true && errors[key] === false && formData[key].length > 0;
  }
</script>

<section id="demo" class="py-20">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-primary-900 rounded-3xl overflow-hidden shadow-2xl relative">
      <!-- Decoration -->
      <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary-800 rounded-full opacity-50 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-600 rounded-full opacity-50 blur-3xl"></div>

      <div class="relative grid md:grid-cols-2 gap-12 p-10 md:p-16 items-center">
        <div in:slide={{ duration: 600, axis: 'y' }}>
          <h2 class="text-3xl font-bold text-white mb-4">
            Siap merapikan manajemen proyek Anda?
          </h2>
          <p class="text-blue-100 mb-8 text-lg">
            Jadwalkan demo 30 menit. Kami akan tunjukkan cara mimar.id menghemat budget proyek Anda hingga 15%.
          </p>
          <ul class="space-y-3 text-blue-100 mb-8">
            <li class="flex items-center gap-2 group transition-transform duration-200 cursor-default">
              <Icon name="check" size={20} class="text-accent group-hover:text-yellow-300 transition-all duration-200" />
              <span class="group-hover:text-white transition-colors duration-200">Free konsultasi workflow</span>
            </li>
            <li class="flex items-center gap-2 group transition-transform duration-200 cursor-default">
              <Icon name="check" size={20} class="text-accent group-hover:text-yellow-300 transition-all duration-200" />
              <span class="group-hover:text-white transition-colors duration-200">Trial akses full fitur</span>
            </li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg" in:slide={{ duration: 600, delay: 200, axis: 'y' }}>
          <form onsubmit={handleSubmit}>
            <div class="space-y-4">
              <div class="relative" in:fade={{ duration: 400, delay: 300 }}>
                <label for="name" class="block text-sm font-medium text-slate-700 mb-1 peer-focus:text-primary-600 transition-colors duration-200">Nama Lengkap</label>
                <input
                  id="name"
                  type="text"
                  bind:value={formData.name}
                  oninput={() => handleInput('name', formData.name)}
                  onblur={() => handleBlur('name')}
                  class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 {hasError('name') ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''} {hasSuccess('name') ? 'border-green-500 focus:ring-green-500 focus:border-green-500' : ''}"
                  placeholder="Budi Santoso"
                />
                {#if hasError('name')}
                  <p class="text-red-500 text-xs mt-1 transition-opacity duration-200">Nama harus minimal 2 karakter</p>
                {/if}
                {#if hasSuccess('name')}
                  <div class="absolute right-3 top-7 text-green-500 transition-opacity duration-200">
                    <Icon name="check" size={16} />
                  </div>
                {/if}
              </div>
              <div class="relative" in:fade={{ duration: 400, delay: 350 }}>
                <label for="company" class="block text-sm font-medium text-slate-700 mb-1 peer-focus:text-primary-600 transition-colors duration-200">Nama Perusahaan</label>
                <input
                  id="company"
                  type="text"
                  bind:value={formData.company}
                  oninput={() => handleInput('company', formData.company)}
                  onblur={() => handleBlur('company')}
                  class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300"
                  placeholder="PT Konstruksi Jaya"
                />
              </div>
              <div class="relative" in:fade={{ duration: 400, delay: 425 }}>
                <label for="businessType" class="block text-sm font-medium text-slate-700 mb-1 peer-focus:text-primary-600 transition-colors duration-200">Tipe Bisnis</label>
                <select
                  id="businessType"
                  bind:value={formData.businessType}
                  class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 bg-white"
                >
                  {#each businessTypes as type}
                    <option value={type}>{type}</option>
                  {/each}
                </select>
              </div>
              <div in:fade={{ duration: 400, delay: 500 }}>
                <Button
                  variant="accent"
                  type="submit"
                  class="w-full mt-2 hover:shadow-xl transition-all duration-300"
                >
                  Jadwalkan Demo Gratis
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
