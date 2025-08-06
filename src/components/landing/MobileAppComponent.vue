<template>
  <div class="flex items-center mx-20 mb-20 mt-44">
    <div class="flex justify-center grow">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <span class="font-bold text-5xl"> Téléchargez notre application mobile </span>
          <span class="text-lg mt-4 mb-8 max-w-lg">
            Vivamus dapibus diam vitae tortor tempor consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer eu felis in purus maximus porttitor in quis leo.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Aliquam erat volutpat. Donec vehicula nunc est. Nullam ac lorem ligula. Ut suscipit
            augue sem, sed tincidunt odio congue eget.
          </span>
        </div>
        <div class="flex gap-4">
          <img src="@/assets/images/from_app_store.png" alt="Mobile App" class="w-auto h-16" />
          <img src="@/assets/images/from_google_play.png" alt="Mobile App" class="w-auto h-16" />
        </div>
      </div>
    </div>
    <div class="relative w-1/2 flex pl-16 justify-center">
      <img src="@/assets/images/iphone_nobg.png" alt="Mobile App" class="w-auto h-[740px] z-20" />
      <div class="absolute bg-white w-[350px] h-[720px] rounded-[64px] translate-y-4 z-10"></div>
      <img
        src="@/assets/images/iphone_nobg.png"
        alt="Mobile App"
        class="absolute w-auto h-[740px] translate-x-16 -translate-y-16"
      />
    </div>
  </div>
</template>
