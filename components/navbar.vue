<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>
<template>
  <nav class="border-neutral-700 dark:bg-neutral-800">
    <div class="max-w-screen-xl flex items-center justify-center mx-auto p-4">
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-neutral-500 dark:hover:border-neutral-700 dark:focus:ring-neutral-600"
        aria-controls="navbar-default" aria-expanded="false" @click="isOpen = !isOpen">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <!-- Desktop menu -->
      <div class="hidden md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-neutral-700 md:dark:bg-neutral-800 dark:border-neutral-700">
          <li>
            <NuxtLink to="/"
              exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450">
              About Me
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects"
              exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450">
              My Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact"
              exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- Mobile menu -->
    <Transition name="slide-fade">
      <div v-show="isOpen" class="w-full md:hidden" id="navbar-default-mobile">
        <ul
          class="font-medium flex flex-col p-2 mt-2 border border-gray-100 bg-neutral-50 dark:bg-neutral-700 dark:border-neutral-700">
          <li>
            <NuxtLink to="/"
              exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450">
              About Me
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects"
              exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450">
              My Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact"
              exact-active-class="block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450 font-bold"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-neutral-500 md:hover:bg-transparent md:border-0 md:hover:text-neutral-500 md:p-0 dark:text-white md:dark:hover:text-neutral-450">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 500px;
  /* adjust as needed for your menu */
  opacity: 1;
}
</style>