<template>
  <header :class="isSwapDemoPage ? 'text-white' : 'text-black'" class="bg-inherit z-10 fixed backdrop-blur-sm">
    <nav class="mx-auto w-dvw flex items-center justify-between p-6 lg:px-12" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">AirLyft.One</span>
          <img :src="logoSrc" class="h-8 w-auto" alt="AirLyft.One" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" :class="isSwapDemoPage ? 'text-white' : 'text-gray-800'" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 lg:items-center">
        <Popover class="relative" v-slot="{ open, close }">
          <PopoverButton
            :class="[open ? openTextClass : '', 'flex items-center gap-x-1 text-sm font-semibold leading-6 focus-visible:outline-none', textClass, hoverTextClass, { 'text-gray-900': isRouteActive('/demo/sidebar') }]">
            Sidebar
            <ChevronDownIcon
              :class="[open ? 'rotate-180 ease-out duration-200' : 'ease-out duration-200', 'h-5 w-5 flex-none']"
              aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
              :class="['absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5', bgPanelClass]">
              <div class="p-4">
                <div v-for="item in sidebar" :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                    <component :is="item.icon" :class="['h-6 w-6', textClass, hoverTextClass]"
                      aria-hidden="true" />
                  </div>
                  <div :class="['flex-auto', textClass, hoverTextClass]">
                    <NuxtLink :to="item.href" class=" block font-semibold"
                      :aria-current="route.path == item.href ? 'page' : undefined" @click="close">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </NuxtLink>
                    <p :class="['mt-1', textClass]">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <Popover class="relative" v-slot="{ open, close }">
          <PopoverButton
          :class="[open ? openTextClass : '', 'flex items-center gap-x-1 text-sm font-semibold leading-6 focus-visible:outline-none', textClass, hoverTextClass, { 'text-gray-900': isRouteActive('/demo/popup') }]">
            Popup
            <ChevronDownIcon
              :class="[open ? 'rotate-180 ease-out duration-200' : 'ease-out duration-200', 'h-5 w-5 flex-none']"
              aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
            :class="['absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-900/5', bgPanelClass]">
              <div class="p-4">
                <div v-for="item in popup" :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                    <component :is="item.icon" :class="['h-6 w-6', textClass, hoverTextClass]"
                      aria-hidden="true" />
                  </div>
                  <div :class="['flex-auto', textClass, hoverTextClass]">
                    <NuxtLink :to="item.href" class=" block font-semibold"
                      :aria-current="route.path == item.href ? 'page' : undefined" @click="close">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </NuxtLink>
                    <p :class="['mt-1', textClass]">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <Popover class="relative" v-slot="{ open, close }">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 focus-visible:outline-none text-gray-400"
            disabled="">
            Inline
            <ChevronDownIcon
              :class="[open ? 'rotate-180 ease-out duration-200' : 'ease-out duration-200', 'h-5 w-5 flex-none']"
              aria-hidden="true" />
          </PopoverButton>

          <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
              class="absolute right-0 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-sky-900 shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div v-for="item in inline" :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                    <component :is="item.icon" class="h-6 w-6 text-white group-hover:text-indigo-400"
                      aria-hidden="true" />
                  </div>
                  <div class="flex-auto hover:text-indigo-400">
                    <NuxtLink :to="item.href" class=" block font-semibold"
                      :aria-current="route.path == item.href ? 'page' : undefined" @click="close">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </NuxtLink>
                    <p class="mt-1 text-gray-300">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        
        <NuxtLink to="/demo/swap-demo" class="text-sm font-semibold leading-6 bg-blue-600 px-5 py-2 border border-transparent rounded-full text-white" v-if="!$route.name.match('demo-swap-demo')">Swap Demo
        </NuxtLink>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end" v-if="!$route.path.includes('/demo')">
        <NuxtLink to="/demo"
          class="text-sm font-semibold px-5 py-2 border border-transparent rounded-full text-white bg-indigo-600">Demo
        </NuxtLink>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        :class="['fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10', isSwapDemoPage ? 'bg-gray-800' : 'bg-purple-100']">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">AirLyft.One</span>
            <img class="h-8 w-auto" :src="logoSrc" alt="AirLyft.One" />
          </NuxtLink>
          <button type="button" :class="['-m-2.5 rounded-md p-2.5', textClass]" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 text-gray-800">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                :class="['flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7', textClass]">
                  Sidebar
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in sidebar" :key="item.name" as="a" :href="item.href"
                    :class="['block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7', textClass]"
                    :aria-current="route.path == item.href ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                :class="['flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7', textClass]">
                  Popup
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in popup" :key="item.name" as="a" :href="item.href"
                    :class="['block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7', textClass]"
                    :aria-current="route.path == item.href ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-400"
                  disabled="">
                  Inline
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in inline" :key="item.name" as="a" :href="item.href"
                    class="text-gray-800 block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7"
                    :aria-current="route.path == item.href ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  RectangleStackIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ClockIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const route = useRoute()

const sidebar = [
  { name: 'Simple Sidebar', description: 'Effortlessly integrate a customizable sidebar widget with a single button click for seamless user onboarding', href: '/demo/sidebar/simple', icon: RectangleStackIcon },
  { name: 'Open Quest Directly', description: 'Launch specific quests instantly in a sidebar widget, enhancing user engagement and streamlining onboarding flows', href: '/demo/sidebar/open-quest-directly', icon: CursorArrowRaysIcon },
  { name: 'Async Script Load', description: 'Boost website performance with an asynchronously loaded sidebar widget for smooth, uninterrupted user experiences', href: '/demo/sidebar/async-script-load', icon: ClockIcon },
  // { name: 'Hide XP and cFuel', description: 'Description about hide XP and cFuel', href: '/demo/sidebar/hide-xp-cfuel', icon: FingerPrintIcon },
  // { name: 'Silent Login', description: 'Description about silent login', href: '/demo/sidebar/silent-login', icon: FingerPrintIcon },
]

const popup = [
  { name: 'Simple Popup', description: 'Engage users with a versatile popup widget, easily activated through a button for dynamic onboarding campaigns', href: '/demo/popup/simple', icon: RectangleStackIcon },
  { name: 'Open Quest Directly', description: 'Trigger targeted quests in a popup modal, optimizing user interaction and increasing conversion rates', href: '/demo/popup/open-quest-directly', icon: CursorArrowRaysIcon },
  { name: 'Async Script Load', description: 'Maximize site speed and user satisfaction with an asynchronously loaded popup widget for efficient onboarding', href: '/demo/popup/async-script-load', icon: ClockIcon },
  // { name: 'Hide XP and cFuel', description: 'Description about hide XP and cFuel', href: '/demo/popup/hide-xp-cfuel', icon: FingerPrintIcon },
  // { name: 'Silent Login', description: 'Description about silent login', href: '/demo/popup/silent-login', icon: FingerPrintIcon },
]

const inline = [
  { name: 'Simple Inline', description: 'Description about simple inline', href: '/demo/inline/simple', icon: RectangleStackIcon },
  { name: 'Open Quest Directly', description: 'Description about open quest directly', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Async Script Load', description: 'Description about async script load', href: '#', icon: ClockIcon },
  { name: 'Hide XP and cFuel', description: 'Description about hide XP and cFuel', href: '#', icon: FingerPrintIcon },
  { name: 'Silent Login', description: 'Description about silent login', href: '/demo/inline/silent-login', icon: FingerPrintIcon },
]

const isRouteActive = (baseRoute) => route.path.startsWith(baseRoute);
const isSwapDemoPage = computed(() => route.name === 'demo-swap-demo');
const logoSrc = computed(() => isSwapDemoPage.value ? '/logo-white.png' : '/logo.svg');
const textClass = computed(() => isSwapDemoPage.value ? 'text-gray-300' : 'text-gray-800');
const openTextClass = computed(() => isSwapDemoPage.value ? 'text-white' : 'text-gray-900');
const hoverTextClass = computed(() => isSwapDemoPage.value ? 'hover:text-white' : 'hover:text-gray-950');
const bgPanelClass = computed(() => isSwapDemoPage.value ? 'bg-gray-800' : 'bg-gray-200');

const mobileMenuOpen = ref(false)
</script>
