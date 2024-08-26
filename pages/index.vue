<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="relative pt-6 pb-16 sm:pb-8">
        <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-light text-gray-900 sm:text-4xl">AirLyft widget for your website
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">The AirLyft Widget
              allows you to create onboarding flows, run quests, and campaigns easily on your own domain.</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 flex flex-col" aria-hidden="true">
          <div class="flex-1" />
          <div class="flex-1 w-full" />
        </div>
        <div class="max-w-4xl mx-auto px-4 pb-8 sm:px-6">
          <img class="relative rounded-lg shadow-lg" src="../public/popup-widget.svg" alt="Widget" />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="rounded-2xl px-6 py-16 sm:p-16">
        <div class="max-w-xl mx-auto lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-light tracking-tight text-gray-900">Customizable, Interactive, Versatile</h2>
          </div>
          <div class="mt-20 max-w-sm mx-auto grid grid-cols-1 gap-y-20 gap-x-16 sm:max-w-none lg:grid-cols-3">
            <div v-for="incentive in incentives" :key="incentive.name"
              class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
                  <component :is="incentive.icon" class="w-12 mx-auto" />
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <p class="mt-2 text-sm text-gray-500">
                  {{ incentive.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-50">
    <div class="text-center py-16 px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-light text-gray-900 sm:text-4xl">
        Fully customized embed widget for your website
      </h2>
      <p class="mt-4 text-lg leading-6 text-gray-500">
        Create onboarding flows, run quests, and campaigns easily on your own domain
      </p>
      <div class="mt-12 flex justify-center">
        <nav class="relative z-0 rounded-md flex">
          <button v-for="tab in tabs" :key="tab.value" @click="activeTab = tab.value" :disabled="tab.disabled" :class="[
            'relative inline-flex items-center px-12 py-3 border text-sm',
            {
              'bg-purple-500 text-white font-medium': activeTab === tab.value,
              'bg-white text-gray-700 font-base': activeTab !== tab.value,
              'cursor-not-allowed opacity-50': tab.disabled,
              'rounded-l-full': tab.value === 'sidebar',
              'rounded-r-full': tab.value === 'inline',
            }
          ]">
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </div>

    <div class="pb-8 px-4 sm:px-6 lg:px-8">
      <div v-if="activeTab === 'sidebar'" class="text-center max-w-3xl mx-auto mb-4">
        <img src="../public/sidebar-widget.svg" alt="Sidebar Widget">
      </div>
      <div v-if="activeTab === 'popup'" class="text-center max-w-3xl mx-auto mb-4">
        <img src="../public/popup-widget.svg" alt="Popup Widget">
      </div>
      <div v-if="activeTab === 'inline'" class="text-center">
        <h3 class="text-xl font-bold">Inline Widget</h3>
        <p class="mt-2 text-gray-600">Coming soon...</p>
      </div>
    </div>
  </div>

  <div class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="lg:flex lg:items-center max-w-xs mx-auto lg:mx-0">
          <img src="../public/support-illustration.svg" alt="Support Illustration" />
        </div>
        <div class="lg:mt-0 lg:flex lg:items-center">
          <div class="text-center lg:text-left">
            <h2 class="text-3xl font-light text-gray-900 sm:text-4xl">
              Have questions on Embed Widget?
            </h2>
            <p class="mt-4 text-lg font-light leading-6 text-gray-500">
              Looking for embedding AirLyft widget onto your platform? Team AirLyft on your service here, drop us an
              email at
              <a href="mailto:team@airlyft.one" class="text-blue-500 hover:underline">
                team@airlyft.one
              </a> or message us on <a href="https://t.me/cbscrypt" target="_blank"
                class="text-blue-500 hover:underline">Telegram</a>
              for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 class="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
        Start using AirLyft Widget now
      </h2>
      <div class="mt-8 flex justify-center gap-x-5">
        <div class="inline-flex">
          <NuxtLink to="/demo"
            class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700">
            View Demo </NuxtLink>
        </div>
        <div class="ml-3 inline-flex">
          <a href="https://docs.airlyft.one/developers/widget/" target="_blank"
            class="flex items-center justify-center gap-x-3 px-5 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
            Docs
            <ArrowUpRightIcon class="w-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  transition: all 0.3s ease;
}
</style>

<script setup>
import { WrenchIcon, CursorArrowRaysIcon, PuzzlePieceIcon, ArrowUpRightIcon } from '@heroicons/vue/24/outline';

const incentives = [
  {
    icon: WrenchIcon,
    description: "Tailor onboarding flows and quests to match your brand and user needs",
  },
  {
    icon: CursorArrowRaysIcon,
    description: "Create engaging campaigns that actively involve users on your platform",
  },
  {
    icon: PuzzlePieceIcon,
    description:
      "Implement sidebar, or popup widgets to suit your specific requirements",
  },
]

const activeTab = ref('popup');

const tabs = [
  { value: 'sidebar', label: 'Sidebar' },
  { value: 'popup', label: 'Popup' },
  { value: 'inline', label: 'Inline', disabled: true }
];
</script>