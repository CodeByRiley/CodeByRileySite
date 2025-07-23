<script setup>
import { ref } from "vue";

const showDonoPanel = ref(false);
const showSponsorPanel = ref(false);
</script>

<template>
  <div class="">
    <footer class="dark:bg-neutral-800 border-t border-neutral-700 mt-auto">
      <div class="grid grid-cols-3 items-center p-4">
        <div class="text-slate-300 text-sm">
          © {{ new Date().getFullYear() }} CodeByRiley. All rights reserved.
        </div>
        <div class="text-slate-300 text-sm justify-self-center">
          <a
            href="https://icons8.com"
            target="_blank"
            class="text-slate-300 hover:text-slate-100 transition-colors"
            >Icons by Icons8</a
          >
        </div>
        <div class="flex gap-4 justify-self-end">
          <a
            href="https://github.com/CodeByRiley"
            target="_blank"
            class="text-slate-300 hover:text-slate-100 transition-colors"
          >
            <img src="/icons/icons8-github.svg" class="h-6 w-6" alt="GitHub" />
          </a>
          <a
            href="https://discord.com/users/202862911398346753"
            target="_blank"
            class="text-slate-300 hover:text-slate-100 transition-colors"
          >
            <img
              src="/icons/icons8-discord.svg"
              class="h-6 w-6"
              alt="Discord"
            />
          </a>
          <a
            href="mailto:mathewdev.53@gmail.com"
            class="text-slate-300 hover:text-slate-100 transition-colors"
          >
            <img src="/icons/icons8-gmail.svg" class="h-6 w-6" alt="Email" />
          </a>
          <button
            @click="showDonoPanel = true"
            class="text-slate-300 hover:text-slate-100 transition-colors flex items-center gap-2"
          >
            <img class="size-6" src="/icons/icons8-ko-fi.svg" alt="Ko-fi" />
          </button>
          <button
            @click="showSponsorPanel = true"
            class="text-slate-300 hover:text-slate-100 transition-colors flex items-center gap-2"
          >
            <img
              class="size-6"
              src="/icons/icons8-heart-100.png"
              alt="Sponsor"
            />
          </button>
          <div
            v-if="showSponsorPanel"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="showSponsorPanel = false"
            >
            <div
              class="relative max-w-md w-full p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 overflow-hidden border border-neutral-700 bg-neutral-800"
              >
              <button @click="showSponsorPanel = false" class="absolute top-2 right-2 text-slate-200 text-xl z-10">&times;</button>
              <div class="text-slate-100 text-lg font-semibold text-center z-10">
                Thank you for your support!
              </div>
              <div class="w-full border-t border-neutral-700 my-2 z-10"></div>
              <div class="text-neutral-200 text-base text-center z-10">
                Thank you for considering supporting my work! Your sponsorship helps me keep building cool projects and sharing them with the community.
              </div>
              <iframe src="https://github.com/sponsors/CodeByRiley/button" title="Sponsor CodeByRiley" height="32" width="114" style="border: 0; border-radius: 6px; z-index: 10;"></iframe>
            </div>
          </div>
          <div
            v-if="showDonoPanel"
            class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            @click.self="showDonoPanel = false"
          >
            <div
              class="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full relative"
            >
              <button
                @click="showDonoPanel = false"
                class="absolute top-2 right-2 text-black text-xl"
              >
                &times;
              </button>
              <iframe
                id="kofiframe"
                src="https://ko-fi.com/codebyriley/?hidefeed=true&widget=true&embed=true&preview=true"
                style="
                  border: none;
                  width: 100%;
                  padding: 4px;
                  background: #7c7c7c;
                "
                height="712"
                title="codebyriley"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
