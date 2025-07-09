<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import NavBar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div>
      <NavBar />
    </div>
    <div class="py-1" />
    <div class="flex justify-center">
      <h1 class="text-2xl font-medium"> Contact me </h1>
    </div>
    <div class="m-6" />
    <transition name="fade" mode="out-in">
      <div class="flex-grow">
        <div class="block">
          <div class="flex justify-center">
            <div class="w-[13.5em] text-center">
              <div class="discord border border-neutral-700">
                <h1 class="text-light bg-neutral-900"> Got Discord? </h1>
                <div class="bg-neutral-800">
                  <a href="https://discord.com/users/202862911398346753">
                    <img src="/icons/icons8-discord.svg" class="m-auto h-[64px] w-[64px]" />
                    <span class=""> .waffler </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-[1em]"></div>
        <div class="block">
          <div class="flex justify-center">
            <div class="w-[13.5em] text-center">
              <div class="gmail border border-neutral-700">
                <h1 class="text-light text-center bg-neutral-900"> Check out my Github </h1>
                <div class="bg-neutral-800">
                  <a href="https://www.github.com/CodeByRiley/">
                    <img src="/icons/icons8-github.svg" class="m-auto h-[64px] w-[64px]" />
                    <span class=""> CodeByRiley@Github </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-[1em]"></div>
        <div class="block">
          <div class="flex justify-center">
            <div class="w-[13.5em] text-center">
              <div class="gmail border border-neutral-700">
                <h1 class="text-light text-center bg-neutral-900"> Email me if you want! </h1>
                <div class="bg-neutral-800">
                  <a href="mailto: mathewdev.53@gmail.com">
                    <img src="/icons/icons8-gmail.svg" class="m-auto h-[64px] w-[64px]" />
                    <span class=""> mathewdev.53@gmail.com </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.gmail:not(:hover) {
  fill: #ffffff;
  opacity: 50%;
  transition: opacity 220ms ease-out;
}

.gmail:hover {
  fill: #A6A6A6;
  opacity: 100%;
  transition: opacity 220ms ease-in-out;
}

.discord:not(:hover) {
  fill: #ffffff;
  opacity: 50%;
  transition: opacity 220ms ease-out;
}

.discord:hover {
  fill: #A6A6A6;
  opacity: 100%;
  transition: opacity 220ms ease-in-out;
}
</style>