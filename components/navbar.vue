<script setup lang="ts">
</script>
<template>
  <nav class="border-neutral-700 dark:bg-neutral-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span />
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700 dark:focus:ring-neutral-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-neutral-700 md:dark:bg-neutral-800 dark:border-neutral-700">
          <li>
            <NuxtLink to="/"
                      exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450"
            >
              About Me
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects"
                      exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450"
            >My Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact"
                      exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
      <span />
    </div>
  </nav>
</template>
<style scoped>

</style>