<script setup lang="ts">
import { ref } from 'vue'

// Components
import CarBrandBannerComponent from '@/components/banner/CarBrandBannerComponent.vue'

// Icons
import MapPinAreaIcon from '@/components/icons/MapPinAreaIcon.vue'
import EnvelopeSimpleIcon from '@/components/icons/EnvelopeSimpleIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'

// Images
import blog_placeholder1 from '@/assets/images/blog_placeholder1.png'
import blog_placeholder2 from '@/assets/images/blog_placeholder2.png'
import blog_placeholder3 from '@/assets/images/blog_placeholder3.png'

const mockArticles = ref([
  {
    title: 'Titre',
    date: '06/08/2025',
    image: blog_placeholder1,
  },
  {
    title: 'Titre',
    date: '06/08/2025',
    image: blog_placeholder2,
  },
  {
    title: 'Titre',
    date: '06/08/2025',
    image: blog_placeholder3,
  },
])
</script>
<template>
  <div class="flex flex-col gap-10 mx-16 my-16">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-5xl font-black mb-4">Écrivez-nous</h1>
    </div>
    <div class="flex gap-8 m-16">
      <div class="flex flex-col gap-10 grow p-8 bg-violet-900 rounded-2xl">
        <div class="flex justify-center">
          <span class="font-bold text-3xl text-white">Formulaire de contact</span>
        </div>
        <div class="flex flex-col gap-10">
          <select class="w-full p-4 text-white bg-violet-700 rounded-lg outline-0">
            <option value="" disabled selected>Choisissez un sujet</option>
            <option value="general">Général</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
          <input
            type="text"
            placeholder="Nom"
            class="w-full p-3 text-white rounded-lg bg-violet-700 outline-0"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full p-3 text-white rounded-lg bg-violet-700 outline-0"
          />
          <textarea
            placeholder="Votre message"
            class="w-full p-3 text-white rounded-lg bg-violet-700 outline-0"
            rows="5"
          ></textarea>
          <button
            class="w-full p-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors cursor-pointer"
          >
            Envoyer
          </button>
        </div>
      </div>
      <div class="w-2/3">
        <img
          src="@/assets/images/contact_placeholder.png"
          alt="Contact Image"
          class="w-full h-auto"
        />
      </div>
    </div>
    <div class="flex justify-between gap-6 mb-16">
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <MapPinAreaIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Adresse</span>
          <span class="font-semibold text-xl">1 Rue Géon Laumont, 44000 Nantes</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <EnvelopeSimpleIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Email</span>
          <span class="font-semibold text-xl">contact@carrental.com</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <PhoneIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Téléphone</span>
          <span class="font-semibold text-xl">+33 1 23 45 67 89</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex justify-center items-center p-3 bg-orange-400 rounded-full">
          <ClockIcon class="w-10 h-10 text-white" />
        </div>
        <div class="flex flex-col">
          <span class="text-lg">Horaires</span>
          <span class="font-semibold text-xl">Lundi - Vendredi: 9h - 18h</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <span class="text-5xl font-black mb-20">Nos derniers articles</span>
      </div>
      <div class="grid grid-cols-3 gap-10">
        <div v-for="article in mockArticles" :key="article.title" class="flex flex-col">
          <img :src="article.image" alt="Article Image" class="w-full h-auto mb-4" />
          <div class="flex justify-between">
            <span>{{ article.title }}</span>
            <span>{{ article.date }}</span>
          </div>
        </div>
      </div>
    </div>
    <CarBrandBannerComponent />
  </div>
</template>
