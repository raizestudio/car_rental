<script setup lang="ts">
// Icons
import CheckIcon from '@/components/icons/CheckIcon.vue'
import QuoteIcon from '@/components/icons/QuoteIcon.vue'
import CaretDownIcon from '@/components/icons/CaretDownIcon.vue'
</script>
<template>
  <div class="flex flex-col gap-24 mx-16 my-16">
    <div class="flex flex-col items-center gap-10">
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-5xl font-black mb-14">A propos de nous</h1>
      </div>
      <div class="flex justify-center gap-10">
        <div class="mt-10 max-w-md">
          <span class="font-bold text-4xl">Chaque trajet devient une expérience unique.</span>
        </div>
        <div class="flex flex-col items-center gap-10">
          <div class="flex gap-6">
            <div class="flex flex-col gap-4">
              <span class="font-semibold text-xl">Nombreux modèles disponibles.</span>
              <span class="max-w-md"
                >Curabitur viverra arcu est, nec gravida arcu consequat quis. Nulla nisl elit,
                pellentesque at diam sed, aliquam eleifend velit. Fusce nec dignissim lorem, ac
                placerat quam.</span
              >
            </div>
            <div class="flex flex-col gap-4">
              <span class="font-semibold text-xl">Un support client réactif.</span>
              <span class="max-w-md"
                >Cras tortor lectus, tincidunt a diam et, mollis tincidunt magna. Quisque pretium ac
                nibh at vestibulum. Aliquam nisi augue, eleifend sed tincidunt non, hendrerit sed
                sem.
              </span>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col gap-4">
              <span class="font-semibold text-xl">Liberté maximale.</span>
              <span class="max-w-md"
                >Ut vitae euismod ligula. Aenean sit amet pellentesque libero. Donec non diam
                libero. Donec ac lectus eu magna accumsan vestibulum.
              </span>
            </div>
            <div class="flex flex-col gap-4">
              <span class="font-semibold text-xl">Flexibilité.</span>
              <span class="max-w-md"
                >Vestibulum pharetra sit amet nulla nec pellentesque. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Quisque posuere laoreet
                egestas.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-24">
      <img
        src="@/assets/images/video_placeholder.png"
        alt="A propos de nous"
        class="w-full h-auto rounded-lg"
      />
    </div>
    <div class="flex justify-around">
      <div class="flex flex-col">
        <span class="font-black text-6xl text-violet-800">5k+</span>
        <span class="text-2xl text-gray-500">Clients satisfaits</span>
      </div>
      <div class="flex flex-col">
        <span class="font-black text-6xl text-violet-800">320+</span>
        <span class="text-2xl text-gray-500">Véhicules disponibles</span>
      </div>
      <div class="flex flex-col">
        <span class="font-black text-6xl text-violet-800">10+</span>
        <span class="text-2xl text-gray-500">Années d'expérience</span>
      </div>
    </div>
    <div class="flex mx-24">
      <div class="flex flex-col justify-center gap-14 w-1/2">
        <div class="flex flex-col">
          <div class="flex flex-col gap-14">
            <span class="font-black text-5xl max-w-lg"
              >Offrez-vous des moments mémorables sur chaque trajet.</span
            >
            <span class="text-lg text-gray-600"
              >Morbi feugiat ultricies eros, ut malesuada dolor egestas sit amet. Donec nec nunc
              euismod purus gravida eleifend at eu arcu. Pellentesque finibus, nibh sit amet maximus
              viverra, ex dolor congue justo, id tristique nulla velit in massa. Nunc aliquet congue
              ex quis placerat.
            </span>
          </div>
        </div>
        <div class="flex flex-col gap-10">
          <div class="flex gap-6">
            <div class="flex gap-4 w-1/2">
              <div
                class="flex items-center justify-center w-10 h-10 p-2 bg-violet-800 rounded-full"
              >
                <CheckIcon class="w-6 h-6 text-white" />
              </div>
              <span class="text-lg text-gray-600"
                >Ut posuere mollis dui, vitae accumsan orci volutpat quis. Cras dolor elit, dictum
                ut mauris non, condimentum ultrices risus.</span
              >
            </div>
            <div class="flex gap-4 w-1/2">
              <div
                class="flex items-center justify-center w-10 h-10 p-2 bg-violet-800 rounded-full"
              >
                <CheckIcon class="w-6 h-6 text-white" />
              </div>
              <span class="text-lg text-gray-600"
                >Proin quis diam enim. Maecenas eget nunc ac sapien dignissim venenatis. Maecenas
                tristique orci at lectus molestie rhoncus.
              </span>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex gap-4 w-1/2">
              <div
                class="flex items-center justify-center w-10 h-10 p-2 bg-violet-800 rounded-full"
              >
                <CheckIcon class="w-6 h-6 text-white" />
              </div>
              <span class="text-lg text-gray-600"
                >Mauris sed nibh nulla. Fusce vestibulum quam ante. Praesent interdum sapien
                venenatis sapien consequat mattis.</span
              >
            </div>
            <div class="flex gap-4 w-1/2">
              <div
                class="flex items-center justify-center w-10 h-10 p-2 bg-violet-800 rounded-full"
              >
                <CheckIcon class="w-6 h-6 text-white" />
              </div>
              <span class="text-lg text-gray-600"
                >Nullam vel molestie diam, eu tincidunt turpis. Proin at iaculis risus, eu convallis
                ex.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="p-10">
        <img
          src="@/assets/images/about_us_placeholder.png"
          alt="A propos de nous"
          class="w-full h-auto rounded-lg"
        />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <span class="text-5xl font-black mb-20">Nos clients en parlent</span>
      </div>
      <div class="grid grid-cols-3 gap-14 h-full">
        <div class="bg-gray-100 rounded-xl flex flex-col h-full">
          <div class="flex flex-col p-8 flex-1">
            <QuoteIcon class="text-violet-800" />
            <div class="flex justify-center">
              <span class="text-center text-xl px-4 py-12 max-w-lg"
                >Cras non arcu ultrices, bibendum magna non, dapibus lorem. Etiam nec hendrerit
                lorem. Ut fringilla porttitor risus et tincidunt.</span
              >
            </div>
          </div>
          <div
            class="relative flex flex-col items-center px-8 pb-8 pt-12 bg-violet-800 rounded-b-xl"
          >
            <img
              src="@/assets/images/client_placeholder1.png"
              alt="Client 1"
              class="absolute -top-10 w-20 h-20 rounded-full mb-4"
            />
            <span class="text-gray-300">Enterprise SA</span>
            <span class="text-white text-xl">Joanna</span>
          </div>
        </div>
        <div class="bg-gray-100 rounded-xl flex flex-col h-full">
          <div class="flex flex-col p-8 flex-1">
            <QuoteIcon class="text-violet-800" />
            <div class="flex justify-center">
              <span class="text-center text-xl px-4 py-12 max-w-lg"
                >Sed commodo justo iaculis, vulputate sem ac, laoreet leo. Pellentesque eu justo
                ornare, fringilla metus eu, aliquet massa.</span
              >
            </div>
          </div>
          <div
            class="relative flex flex-col items-center px-8 pb-8 pt-12 bg-violet-800 rounded-b-xl"
          >
            <img
              src="@/assets/images/client_placeholder2.png"
              alt="Client 1"
              class="absolute -top-10 w-20 h-20 rounded-full mb-4"
            />
            <span class="text-gray-300">Enterprise SA</span>
            <span class="text-white text-xl">Jean</span>
          </div>
        </div>
        <div class="bg-gray-100 rounded-xl flex flex-col h-full">
          <div class="flex flex-col p-8 flex-1">
            <QuoteIcon class="text-violet-800" />
            <div class="flex justify-center">
              <span class="text-center text-xl px-4 py-12 max-w-lg">
                In molestie libero vel nibh tristique pulvinar in eget sem. Pellentesque lorem nunc,
                tempus vitae libero nec, dignissim vehicula sapien.</span
              >
            </div>
          </div>
          <div
            class="relative flex flex-col items-center px-8 pb-8 pt-12 bg-violet-800 rounded-b-xl"
          >
            <img
              src="@/assets/images/client_placeholder3.png"
              alt="Client 1"
              class="absolute -top-10 w-20 h-20 rounded-full mb-4"
            />
            <span class="text-gray-300">Enterprise SA</span>
            <span class="text-white text-xl">Marie</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <span class="text-5xl font-black mb-20">Questions fréquentes</span>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-8 p-4 border border-gray-400 rounded">
          <div class="flex justify-between items-center">
            <div class="font-bold text-2xl">Comment ça marche ?</div>
            <CaretDownIcon class="w-6 h-6 text-gray-500" />
          </div>
          <span class="text-lg text-gray-600">
            Mauris quis cursus est. Sed quam tortor, blandit sit amet bibendum in, condimentum vitae
            urna. Etiam volutpat feugiat arcu, eget aliquet lacus euismod et. Sed consequat eu lorem
            ut volutpat. Phasellus feugiat tortor sed magna dapibus maximus. Donec consequat ornare
            lacinia. Nullam placerat molestie nisl sed condimentum. Sed iaculis arcu vitae nisl
            fringilla posuere. Aliquam nulla sem, accumsan nec placerat ut, sollicitudin ut est.
            Aenean vitae nibh tempus, fermentum felis iaculis, placerat massa. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Ut sed venenatis mauris.
          </span>
        </div>
        <div class="flex flex-col gap-8 p-4 border border-gray-400 rounded">
          <div class="flex justify-between items-center">
            <div class="font-bold text-2xl">Puis-je louer sans carte de crédit ?</div>
            <CaretDownIcon class="w-6 h-6 text-gray-500" />
          </div>
        </div>
        <div class="flex flex-col gap-8 p-4 border border-gray-400 rounded">
          <div class="flex justify-between items-center">
            <div class="font-bold text-2xl">Quels sont les prérequis pour louer un véhicule ?</div>
            <CaretDownIcon class="w-6 h-6 text-gray-500" />
          </div>
        </div>
        <div class="flex flex-col gap-8 p-4 border border-gray-400 rounded">
          <div class="flex justify-between items-center">
            <div class="font-bold text-2xl">Est-ce que l'assurance est incluse ?</div>
            <CaretDownIcon class="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex flex-col gap-10 bg-violet-800 p-20 rounded-2xl mb-10">
      <div class="flex flex-col gap-6">
        <span class="font-black text-white text-4xl">Vous recherchez un véhicule ?</span>
        <a href="tel:+33212345678" class="text-2xl text-white">+33 2 12 34 56 78</a>
      </div>
      <span class="text-lg text-gray-300 max-w-2xl"
        >Fusce eget magna non enim eleifend placerat vel vel sem. Morbi viverra est nec tellus
        imperdiet, non bibendum nisi scelerisque. Fusce suscipit id dolor in feugiat. Sed eros
        dolor, hendrerit eu interdum ac, volutpat sit amet dui.
      </span>
      <button class="px-6 py-3 bg-orange-400 w-fit font-semibold text-white rounded-xl">
        Réserver maintenant
      </button>
      <img
        src="@/assets/images/hero_bg.png"
        alt="Hero Image"
        class="absolute right-8 -bottom-10 h-full"
      />
    </div>
  </div>
</template>
