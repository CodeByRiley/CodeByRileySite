<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import NavBar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";

// import { useRouter } from 'vue-router';
// const router = useRouter();
// console.log('Nuxt routes:', router.getRoutes());

</script>
<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <Transition name="fade" mode="out-in">
      <div
        class="relative flex-grow flex justify-center w-full bg-cover bg-center overflow-hidden"
        style="background-image: url('/images/background.png');"
      >
        <!-- Blurred background image layer -->
        <div class="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div
            class="w-full h-full bg-cover bg-center blur-sm"
            style="background-image: url('/images/background.png');"
          ></div>
        </div>

        <!-- Overlay text/content -->
        <div
          class="overlay-text absolute inset-0 flex items-center justify-center w-full h-full z-10"
        >
          <div class="max-w-4xl px-6 flex items-center justify-center space-x-6">
            <!-- Photo -->
            <img
              src="/images/me.jpg"
              alt="Me"
              class="w-40 h-40 object-cover rounded-md shadow-lg"
            />

            <!-- About text -->
            <div class="text-left">
              <h1 class="text-2xl font-medium">Hey!</h1>
              <hr class="w-40 h-1 my-4 rounded-sm mx-0">
              <p class="text-lg leading-relaxed">
                I'm Riley — a 20-year-old self-taught software developer from Australia. <br>
                I'm passionate about learning new programming languages and technologies. <br>
                Currently, I'm exploring web development in my free time. <br>
                I'm building this website as a hobby project, using NuxtJS and TailwindCSS. <br>
                Check out my work on GitHub
                <a
                  href="https://github.com/viadot/"
                  class="text-blue-400 hover:text-blue-300"
                >here!</a>
              </p>
              <hr class="w-40 h-1 my-4 rounded-sm mx-0">
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <Footer class="z-10" />
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

.overlay-text {
  @apply text-center;
  @layer text-1xl;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%);
}

.image-gradient {
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
}
</style>
