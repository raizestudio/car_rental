<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Components
import CarGridComponent from '@/components/grid/CarGridComponent.vue'

// Icons
import GearShiftIcon from '@/components/icons/GearShiftIcon.vue'
import GasPumpIcon from '@/components/icons/GasPumpIcon.vue'
import CarDoorIcon from '@/components/icons/CarDoorIcon.vue'
import WindIcon from '@/components/icons/WindIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import PathIcon from '@/components/icons/PathIcon.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()

const route = useRoute()

const carId = computed(() => Number(route.params.id))

const currentCar = computed(() => carStore.mockCars.find((car) => car.id === carId.value))

const currentBrandName = computed(
  () => carStore.carBrands.find((brand) => brand.id === currentCar.value?.brandId)?.name,
)

const dailyPrice = computed(() => {
  return currentCar.value ? currentCar.value.priceDaily : ''
})

const currentGearShift = computed(() => {
  return carStore.carTransmission.find(
    (transmission) => transmission.id === currentCar.value?.transmissionId,
  )?.name
})

const currentEnergy = computed(() => {
  return carStore.carFuelType.find((fuel) => fuel.id === currentCar.value?.fuelTypeId)?.name
})

const currentDoors = computed(() => {
  return carStore.carDoors.find((door) => door.id === currentCar.value?.doorsId)?.name
})

const hasAirConditioning = computed(() => {
  return currentCar.value?.carExtras.includes(1)
})

const currentSeats = computed(() => {
  return carStore.carSeats.find((seat) => seat.id === currentCar.value?.seatsId)?.name
})

const currentDistance = computed(() => {
  return currentCar.value ? currentCar.value.distance : ''
})

const getCarExtraData = (extraId: number) => {
  return carStore.carExtras.find((extra) => extra.id === extraId)
}
</script>
<template>
  <div class="flex flex-col gap-10 m-16">
    <div class="flex gap-8">
      <div class="grow">
        <div>
          <h1 class="font-bold text-5xl mb-4">
            {{ currentBrandName }}
          </h1>
          <div class="flex items-start gap-2">
            <span class="font-semibold text-3xl text-violet-900">{{ dailyPrice }}€</span>
            <span>/ par jour</span>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex justify-center">
            <img
              src="@/assets/images/car_placeholder.png"
              alt="Car Image"
              class="w-132 h-full object-contain rounded-lg mb-4 self-center"
            />
          </div>
          <div class="flex gap-4">
            <img
              src="@/assets/images/car_view_placeholder1.png"
              alt="Car Image"
              class="w-40 h-32 object-contain"
            />
            <img
              src="@/assets/images/car_view_placeholder2.png"
              alt="Car Image"
              class="w-40 h-32 object-contain"
            />
            <img
              src="@/assets/images/car_view_placeholder3.png"
              alt="Car Image"
              class="w-40 h-32 object-contain"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10 grow">
        <div>
          <span class="font-bold text-3xl">Informations techniques</span>
        </div>
        <div class="grid grid-cols-3 gap-10">
          <div class="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
            <GearShiftIcon class="w-6 h-6" />
            <span class="font-semibold text-xl">Transmission</span>
            <span class="text-gray-600">{{ currentGearShift }}</span>
          </div>
          <div class="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
            <GasPumpIcon class="" />
            <span class="font-semibold text-xl">Energie</span>
            <span class="text-gray-600">{{ currentEnergy }}</span>
          </div>
          <div class="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
            <CarDoorIcon class="" />
            <span class="font-semibold text-xl">Portes</span>
            <span class="text-gray-600">{{ currentDoors }}</span>
          </div>
          <div class="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
            <WindIcon class="" />
            <span class="font-semibold text-xl">Climatisation</span>
            <span class="text-gray-600">{{ hasAirConditioning ? 'Oui' : 'Non' }}</span>
          </div>
          <div class="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
            <UserIcon class="" />
            <span class="font-semibold text-xl">Places</span>
            <span class="text-gray-600">{{ currentSeats }}</span>
          </div>
          <div class="flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
            <PathIcon class="" />
            <span class="font-semibold text-xl">Kilométrage</span>
            <span class="text-gray-600">{{ currentDistance }}</span>
          </div>
        </div>
        <div>
          <button
            class="px-6 py-3 font-semibold text-white text-xl bg-violet-900 hover:bg-violet-800 rounded-xl cursor-pointer transition-colors duration-300"
          >
            Réserver maintenant
          </button>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="extra in currentCar?.carExtras" :key="extra" class="flex items-center gap-2">
            <div class="bg-violet-900 rounded-full p-1">
              <CheckIcon class="w-4 h-4 text-white" />
            </div>
            <span class="text-lg">{{ getCarExtraData(extra)?.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center px-16 py-4">
      <span class="font-bold text-4xl max-w-md">Véhicules similaires</span>
      <router-link to="/cars" class="flex gap-4 items-center"
        ><span>Voir tout</span><ArrowRightIcon
      /></router-link>
    </div>
    <CarGridComponent :filter-type="currentCar?.carType" />
  </div>
</template>
