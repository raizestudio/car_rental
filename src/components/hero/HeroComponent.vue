<template>
  <div class="flex justify-between gap-8 m-16 p-16 bg-violet-900 rounded-2xl">
    <div class="flex flex-col justify-center gap-8 max-w-xl">
      <span class="text-white text-6xl font-bold"
        >Trouvez une voiture et réservez-la en quelques clics</span
      >
      <span class="text-white"
        >Vestibulum luctus cursus elit vel bibendum. Vivamus ultricies dui in purus fermentum, vel
        varius quam efficitur. Maecenas nisi arcu, lacinia eu justo nec, dictum pulvinar turpis.
        Nullam ac tincidunt tortor, vel euismod ipsum.
      </span>
      <button class="self-start px-3 py-2 bg-white rounded-lg cursor-pointer">
        Voir les véhicules
      </button>
    </div>
    <div class="flex flex-col justify-center p-8 bg-white rounded-2xl">
      <span class="font-semibold text-center text-xl">Réservez dès maintenant</span>
      <select class="mt-4 p-2 rounded bg-white" placeholder="Type de véhicule">
        <option value="car">Voiture</option>
        <option value="suv">SUV</option>
        <option value="truck">Camion</option>
        <option value="van">Van</option>
      </select>
      <input type="text" class="mt-4 p-2 rounded bg-white" placeholder="Lieu de prise en charge" />
      <input type="date" class="mt-4 p-2 rounded bg-white" placeholder="Date de prise en charge" />
      <input type="text" class="mt-4 p-2 rounded bg-white" placeholder="Lieu de retour" />
      <input type="date" class="mt-4 p-2 rounded bg-white" placeholder="Date de retour" />
      <button
        class="mt-4 p-2 bg-violet-800 text-white rounded-lg hover:bg-violet-700 transition-colors cursor-pointer"
      >
        Réserver maintenant
      </button>
      <span class="mt-4 text-gray-600 text-sm"
        >En réservant, vous acceptez nos
        <a href="#" class="text-violet-800">conditions générales</a> et notre
        <a href="#" class="text-violet-800">politique de confidentialité</a>.</span
      >
    </div>
  </div>
</template>
