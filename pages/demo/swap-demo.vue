<template>
  <div class="h-screen relative isolate overflow-hidden bg-gray-900">
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
    </svg>
    <div class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
      <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
    </div>

    <div class="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-50">
      <div
        class="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-950 px-8 py-5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
        <p class="text-sm leading-6 text-white">
          <strong class="font-semibold">Note: This is just a demo. No tokens will be swapped</strong><svg
            viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
          </svg>Click the button to get started
        </p>
        <button @click="openWidget"
          class="flex-none rounded-md bg-red-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Get
          Started <span aria-hidden="true">&rarr;</span></button>
      </div>
    </div>

    <div class="relative flex justify-center items-center h-full">
      <div class="w-full max-w-md mx-auto bg-slate-900 border-2 border-indigo-900 rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <div class="flex space-x-2">
            <span class="text-white bg-gray-700 px-4 py-2 rounded-full">Swap</span>
            <span class="text-gray-400 px-4 py-2">Limit</span>
            <span class="text-gray-400 px-4 py-2">Send</span>
            <span class="text-gray-400 px-4 py-2">Buy</span>
          </div>
          <Cog6ToothIcon class="h-6 w-6 text-gray-400" />
        </div>

        <div class="bg-slate-800 my-5 p-3 rounded-xl">
          <div class="flex items-center justify-between text-gray-400">
            <p class="text-white">Sell</p>
            <p class="text-sm">Balance: 2.3561431</p>
          </div>
          <div class="relative">
            <input v-model="sellValue" @input="updateBuyValue" type="number"
              class="w-full bg-inherit text-white text-2xl py-2 pl-4 pr-20 rounded-lg focus:outline-none"
              placeholder="0">
            <div class="absolute inset-y-0 right-4 flex items-center bg-gray-900 px-2 rounded-full -mx-5 space-x-2">
              <img src="/public/eth-logo.png" class="w-6 h-6" alt="ETH">
              <p class="text-white">ETH</p>
            </div>
          </div>
        </div>

        <div class="bg-slate-800 my-5 p-3 rounded-xl">
          <div class="flex items-center justify-between text-gray-400">
            <p class="text-white">Buy</p>
            <p class="text-sm">Balance: 426.35</p>
          </div>
          <div class="relative">
            <input v-model="buyValue" @input="updateSellValue" type="number"
              class="w-full bg-inherit text-white text-2xl py-2 pl-4 pr-20 rounded-lg focus:outline-none"
              placeholder="0">
            <div class="absolute inset-y-0 right-4 flex items-center bg-gray-900 px-2 rounded-full -mx-5 space-x-2">
              <img src="/public/usdt-logo.png" class="w-6 h-6" alt="USDT">
              <p class="text-white">USDT</p>
            </div>
          </div>
        </div>

        <button @click="openModal" :disabled="!sellValue"
          class="w-full bg-indigo-900 text-white p-3 rounded-lg disabled:bg-slate-700">
          {{ buttonText }}
        </button>

        <button @click="openWidget" class="w-full bg-indigo-900 text-white p-3 rounded-lg my-5">
          Learn & Earn
        </button>
      </div>
    </div>

    <TransitionRoot as="template" :show="isModalOpen">
      <Dialog class="relative z-10" @close="closeModal">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-slate-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-white">Swap Successful
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-300">Click the button below to verify your swap action on the AirLyft
                        Widget</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6">
                  <button type="button"
                    class="inline-flex w-full justify-center rounded-md bg-indigo-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800"
                    @click="verifySwap">Verify Swap</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon, Cog6ToothIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { removeWidgetScript, initializeWidgetInstance } from '@/utils'

const sellValue = ref(0);
const buyValue = ref(0);
const isModalOpen = ref(false);

const buttonText = computed(() => sellValue.value > 0 ? 'Swap' : 'Enter an amount');

const updateBuyValue = () => {
  if (sellValue.value) {
    buyValue.value = (parseFloat(sellValue.value) * 2351.71);
  } else {
    buyValue.value = 0;
  }
};

const updateSellValue = () => {
  if (buyValue.value) {
    sellValue.value = (parseFloat(buyValue.value) / 2351.71);
  } else {
    sellValue.value = 0;
  }
};

watch(sellValue, updateBuyValue);
watch(buyValue, updateSellValue);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const loadWidgetScript = () => {
  const script = document.createElement('script');
  script.src = 'https://assets.airlyft.one/widget/widget.js';
  script.onload = async () => {
    try {
      const widget = await window.AirlyftWidget("97efa039-c941-4fea-9950-caccb4032c6b");
      const instance = await widget.createModal({
        style: {
          button: {
            display: 'none'
          }
        }
      });

      initializeWidgetInstance(instance);
      window.AirlyftWidget1 = widget;
    } catch (err) {
      console.error(err);
    }
  };
  document.head.appendChild(script);
};

const openWidget = () => {
  window.AirlyftWidgetInstance.open();
};

const openTask = () => {
  window.AirlyftWidget1.openSpecificTask(window.AirlyftWidgetInstance, "5a49163c-ab4c-4384-ba5e-6ce0958bd0f3");
  window.AirlyftWidgetInstance.open();
};

const verifySwap = () => {
  closeModal();
  openTask();
};

onMounted(() => {
  loadWidgetScript();
});

onBeforeUnmount(() => {
  removeWidgetScript();
});
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>