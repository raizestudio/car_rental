<script setup lang="ts">
import { computed } from 'vue'

// Icons
import GearShiftIcon from '@/components/icons/GearShiftIcon.vue'
import GasPumpIcon from '@/components/icons/GasPumpIcon.vue'
import WindIcon from '@/components/icons/WindIcon.vue'
import GpsIcon from '@/components/icons/GpsIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'

// Stores
import { useCarStore } from '@/stores/car'

const carStore = useCarStore()

const props = defineProps<{
  car: {
    id: number
    brandId: number
    modelId: number
    classId: number
    carType: number
    transmissionId: number
    fuelTypeId: number
    seatsId: number
    doorsId: number
    colorId: number
    carExtras: number[]
    carExtra: number
    priceDaily: number
  }
}>()

const iconMap = {
  WindIcon,
  GpsIcon,
  StarIcon,
}

type IconMapKey = keyof typeof iconMap

const currentCarExtraIcon = computed(() => {
  const iconName = carStore.carExtras.find((extra) => extra.id === props.car.carExtra)?.icon as
    | IconMapKey
    | undefined
  return iconName && iconMap[iconName] ? iconMap[iconName] : null
})
</script>
<template>
  <div class="flex flex-col gap-8 p-6 bg-gray-50 rounded-xl">
    <img
      src="@/assets/images/car_placeholder.png"
      alt="Car Image"
      class="w-full h-64 object-contain rounded-lg mb-4 self-center"
    />
    <div class="flex flex-col gap-2">
      <div class="flex justify-between">
        <div class="flex items-end gap-1.5">
          <span class="font-semibold text-xl">{{
            carStore.carBrands.find((brand) => brand.id === props.car.brandId)?.name
          }}</span>
          <span class="text-sm text-gray-600">
            {{ carStore.carModels.find((model) => model.id === props.car.modelId)?.name }}
          </span>
        </div>
        <span class="font-semibold text-xl text-violet-800">{{ props.car.priceDaily }}€</span>
      </div>

      <div class="flex justify-between">
        <span class="text-gray-600">{{
          carStore.carTypes.find((type) => type.id === props.car.carType)?.name
        }}</span>
        <span class="text-gray-600">par jour</span>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <GearShiftIcon class="inline-block w-5 h-5 text-gray-700" />
        <span>{{
          carStore.carTransmission.find(
            (transmission) => transmission.id === props.car.transmissionId,
          )?.name
        }}</span>
      </div>
      <div class="flex items-center gap-2">
        <GasPumpIcon class="inline-block w-6 h-6" />
        <span>{{
          carStore.carFuelType.find((fuel) => fuel.id === props.car.fuelTypeId)?.name
        }}</span>
      </div>
      <div class="flex items-center gap-2">
        <component :is="currentCarExtraIcon" class="inline-block w-6 h-6" />
        <span>{{ carStore.carExtras.find((extra) => extra.id === props.car.carExtra)?.name }}</span>
      </div>
    </div>
    <div class="flex grow">
      <router-link
        :to="`/car/${props.car.id}`"
        class="w-full px-6 py-3 font-semibold text-white bg-violet-800 rounded-xl transition-colors duration-300 cursor-pointer hover:bg-violet-900"
      >
        Détails
      </router-link>
    </div>
  </div>
</template>
