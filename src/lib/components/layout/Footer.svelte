<script lang="ts">
  import Icon from '../ui/Icon.svelte';
  import { slide } from 'svelte/transition';

  const productLinks = [
    { href: '#', label: 'Manajemen Proyek' },
    { href: '#', label: 'Procurement' },
    { href: '#', label: 'CRM Property' },
    { href: '#', label: 'Accounting' },
  ];

  const companyLinks = [
    { href: '#', label: 'Tentang Kami' },
    { href: '#', label: 'Karir' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Hubungi Kami' },
  ];

  const socialLinks = [
    { href: '#', icon: 'instagram' },
    { href: '#', icon: 'linkedin' },
    { href: '#', icon: 'facebook' },
  ];
</script>

<footer class="bg-slate-900 text-slate-400 pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div class="col-span-1 md:col-span-1" in:slide={{ duration: 400, delay: 0 }}>
        <div class="flex items-center gap-2 mb-4 text-white transition-transform duration-200 cursor-pointer">
          <div class="w-8 h-8 bg-primary-600 rounded flex items-center justify-center font-bold">M</div>
          <span class="font-bold text-xl">mimar.id</span>
        </div>
        <p class="text-sm leading-relaxed mb-4">
          Sistem ERP #1 untuk industri konstruksi di Indonesia. Membantu Anda membangun lebih efisien, transparan, dan profitable.
        </p>
        <div class="flex gap-4">
          {#each socialLinks as link}
            <a href={link.href} class="hover:text-white hover:drop-shadow-lg transition-all duration-300">
              <Icon name={link.icon} size={20} />
            </a>
          {/each}
        </div>
      </div>

      <div in:slide={{ duration: 400, delay: 100 }}>
        <h4 class="text-white font-bold mb-4">Produk</h4>
        <ul class="space-y-2 text-sm">
          {#each productLinks as link}
            <li>
              <a href={link.href} class="hover:text-primary-400 hover:translate-x-1 hover:underline transition-all duration-300 inline-block">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div in:slide={{ duration: 400, delay: 200 }}>
        <h4 class="text-white font-bold mb-4">Perusahaan</h4>
        <ul class="space-y-2 text-sm">
          {#each companyLinks as link}
            <li>
              <a href={link.href} class="hover:text-primary-400 hover:translate-x-1 hover:underline transition-all duration-300 inline-block">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div in:slide={{ duration: 400, delay: 300 }}>
        <h4 class="text-white font-bold mb-4">Kantor</h4>
        <p class="text-sm leading-relaxed">
          South Quarter Tower A<br />
          Jl. R.A. Kartini Kav 8<br />
          Jakarta Selatan, 12430<br />
          Indonesia
        </p>
        <p class="text-sm mt-4">
          <span class="block">halo@mimar.id</span>
          <span class="block">+62 21 500 555</span>
        </p>
      </div>
    </div>

    <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
      <p>&copy; 2024 Mimar Nusantara Teknologi. All rights reserved.</p>
      <div class="flex gap-6 mt-4 md:mt-0">
        <a href="/privacy" class="hover:text-white hover:underline transition-all duration-200">Privacy Policy</a>
        <a href="/terms" class="hover:text-white hover:underline transition-all duration-200">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
