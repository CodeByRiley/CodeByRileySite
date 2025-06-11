<template>
  <div class="absolute inset-x-0 bottom-0">
    <footer class="dark:bg-neutral-800 border-t border-neutral-700 mt-auto">
      <div class="grid grid-cols-3 items-center p-4">
        <div class="text-slate-300 text-sm">
          © {{ new Date().getFullYear() }} CodeByRiley. All rights reserved.
        </div>
        <div class="text-slate-300 text-sm justify-self-center">
          <a href="https://icons8.com" target="_blank" class="text-slate-300 hover:text-slate-100 transition-colors">Icons by Icons8</a>
        </div>
        <div class="flex gap-4 justify-self-end">
          <a href="https://github.com/CodeByRiley" target="_blank" class="text-slate-300 hover:text-slate-100 transition-colors">
            <img src="/icons/icons8-github.svg" class="h-6 w-6" alt="GitHub" />
          </a>
          <a href="https://discord.com/users/202862911398346753" target="_blank" class="text-slate-300 hover:text-slate-100 transition-colors">
            <img src="/icons/icons8-discord.svg" class="h-6 w-6" alt="Discord" />
          </a>
          <a href="mailto:mathewdev.53@gmail.com" class="text-slate-300 hover:text-slate-100 transition-colors">
            <img src="/icons/icons8-gmail.svg" class="h-6 w-6" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template> 