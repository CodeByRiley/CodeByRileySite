<script setup lang="ts">
import NavBar from "~/components/navbar.vue";
</script>
<script lang="ts">

</script>
  <template>
    <div>
      <div>
        <Head>
          <Title> Mathew </Title>
        </Head>
        <NavBar />
      </div>
      <div class="py-1" />
      <Transition name="fade" mode="out-in">

        <div class="flex justify-center">
          <img src="/images/background2.png" class="image-gradient blur-sm" style="width: 70%; height: 70%;">
          <div class="overlay-text">
            <div class="">
              <h1 class="text-2xl font-medium text-center"> Hey! </h1>
              <hr>
            </div>
            <div class="">

              <div class="">
                <p class="">
                  My name is Mathew and I'm a self-learnt software developer.
                  <br>
                  This site is a hobby project I'm working on.
                  <br>
                  A short introduction about me; I'm an 18 year old developer from Australia.
                  <br>
                  I'm currently learning C++, C# and a few others. I'm learning about web development in my free time.
                  <br>
                  This website is a hobby project I'm working on, I'm using NuxtJS and TailwindCSS.
                  <br>
                  If you want to check out some of my other projects you can click <NuxtLink to="/projects" class="text-slate-400 hover:underline">here</NuxtLink>,
                  or check out my github <NuxtLink to="https://github.com/viadot/" class="text-slate-400 hover:underline">here</NuxtLink>.
                </p>
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
  transition: opacity 250ms ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.overlay-text {
  @apply text-center;
  @layer text-1xl;
  position: absolute;
}
.image-gradient {
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
}
</style>