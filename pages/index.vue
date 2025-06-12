<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import NavBar from "~/components/navbar.vue";
import Footer from "~/components/footer.vue";
</script>
<script lang="ts">

</script>
  <template>
    <div class="min-h-screen flex flex-col">
      <NavBar />
      <Footer class="z-10" />
      <Transition name="fade" mode="out-in">
        <div class="relative flex-grow">
          <div class="flex flex-grow justify-center relative w-full" style="height:calc(100vh - 4rem)">
            <img src="/images/background.png" class="image-gradient blur-sm w-full h-full object-cover z-0">
            <div class="overlay-text absolute inset-0 flex flex-col items-center justify-center">
              <div class="max-w-2xl px-4">
                <h1 class="text-2xl font-medium text-center"> Hey! </h1>
                <hr class="w-80 h-1 mx-auto my-4 rounded-sm">
                <p class="text-lg">
                  I'm Riley — a 20-year-old self-taught software developer from Australia. 
                  <br>
                  I'm passionate about learning new programming languages and technologies. <br>
                  Currently, I'm diving into C++ and C#, while also exploring web development in my free time. 
                  <br>
                  I'm building this website as a hobby project, using NuxtJS and TailwindCSS to create something unique. 
                  <br>
                  Check out my work on GitHub <a href="https://github.com/viadot/" class="text-blue-400 hover:text-blue-300">here!</a>
                </p>
                <hr class="w-80 h-1 mx-auto my-4 rounded-sm">
                <div class="mt-8">
                  <h2 class="text-xl font-semibold text-center mb-4">Skills & Technologies</h2>
                  <div class="flex flex-wrap justify-center gap-3">
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Python</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">C++</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">C#</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Vue.js</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Nuxt.js</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Express</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Git</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">GitHub</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Linux</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">VS Code</span>
                    <span class="bg-neutral-800 text-slate-200 px-3 py-1 rounded-full text-sm">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
}
.image-gradient {
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}
</style>
