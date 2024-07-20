<template>
    <div class="bg-indigo-950 py-12 sm:py-16 mx-auto">
        <div class="px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-white
                 sm:text-4xl">Sidebar Widgets</h2>
            </div>
            <div
                class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="sidebar in sidebar" :key="sidebar.name"
                    class="flex max-w-xl flex-col items-start justify-between bg-indigo-800 hover:bg-indigo-700 p-10 rounded-md text-center text-white shadow-lg">
                    <NuxtLink :to="sidebar.href">
                        <div class="flex justify-center items-center flex-col space-y-4">
                            <div class="w-10 ">
                                <component :is="sidebar.icon" />
                            </div>
                            <span class="text-xl font-semibold dark:text-light">
                                {{ sidebar.name }}
                            </span>
                            <div class="text-gray-300">
                                {{ sidebar.description }}
                            </div>
                        </div>
                    </NuxtLink>
                </article>
            </div>
        </div>

        <div class="px-6 lg:px-8 mt-10">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-white
                 sm:text-4xl">Popup Widgets</h2>
            </div>
            <div
                class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="popup in popup" :key="popup.name"
                    class="flex max-w-xl flex-col items-start justify-between bg-indigo-800 hover:bg-indigo-700 p-10 rounded-md text-center text-white shadow-lg">
                    <NuxtLink :to="popup.href">
                        <div class="flex justify-center items-center flex-col space-y-4">
                            <div class="w-10 ">
                                <component :is="popup.icon" />
                            </div>
                            <span class="text-xl font-semibold dark:text-light">
                                {{ popup.name }}
                            </span>
                            <div class="text-gray-300">
                                {{ popup.description }}
                            </div>
                        </div>
                    </NuxtLink>
                </article>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline'

const sidebar = [
    {
        name: 'Simple Sidebar',
        icon: ChartPieIcon,
        href: '/sidebar/simple',
        description:
            'A short description about the Simple Sidebar Widget',
    },
    {
        name: 'Open Quest Directly',
        icon: CursorArrowRaysIcon,
        href: '/sidebar/open-quest-directly',
        description:
            'A short description about the Open Quest Directly Widget',
    },
    {
        name: 'Async Script Load',
        icon: SquaresPlusIcon,
        href: '/sidebar/async-script-load',
        description:
            'A short description about the Async Script Load Widget',
    },
    // {
    //     name: 'Hide XP and cFuel',
    //     href: '/sidebar/hide-xp-cfuel',
    //     description:
    //         'A short description about the Hide XP and cFuel Widget',
    // },
]

const popup = [
    {
        name: 'Simple Popup',
        icon: ChartPieIcon,
        href: '/popup/simple',
        description:
            'A short description about the Simple Popup Widget',
    },
    {
        name: 'Open Quest Directly',
        icon: CursorArrowRaysIcon,
        href: '/popup/open-quest-directly',
        description:
            'A short description about the Open Quest Directly Widget',
    },
    {
        name: 'Async Script Load',
        icon: SquaresPlusIcon,
        href: '/popup/async-script-load',
        description:
            'A short description about the Async Script Load Widget',
    },
    // {
    //     name: 'Hide XP and cFuel',
    //     href: '/popup/hide-xp-cfuel',
    //     description:
    //         'A short description about the Hide XP and cFuel Widget',
    // },
]
</script>