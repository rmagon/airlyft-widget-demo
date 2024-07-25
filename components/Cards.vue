<template>
    <div class="py-12 sm:py-16 mx-auto">
        <div class="px-6 lg:px-8">
            <div class="mx-auto max-w-xs lg:mx-0 border-b pb-5 text-center lg:text-left">
                <h2 class="text-3xl font-bold tracking-tight text-white
                 sm:text-4xl">Sidebar Widgets</h2>
            </div>
            <div
                class="mt-5">
                <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <li v-for="sidebar in sidebar" :key="sidebar.name"
                    class="col-span-1 flex flex-col text-center bg-indigo-800 hover:bg-indigo-700 rounded-md text-white shadow-lg mx-auto">
                    <NuxtLink :to="sidebar.href">
                        <div class="flex-1 flex flex-col p-8">
                            <component :is="sidebar.icon" class="w-12 mx-auto" />
                            <h3 class="mt-6 text-xl font-semibold">{{ sidebar.name }}</h3>
                            <p class="text-gray-300 text-md mt-5 max-w-sm lg:max-w-xl">{{ sidebar.description }}</p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
            </div>
        </div>

        <div class="px-6 lg:px-8 mt-10">
            <div class="mx-auto max-w-xs lg:mx-0 border-b pb-5 text-center lg:text-left">
                <h2 class="text-3xl font-bold tracking-tight text-white
                 sm:text-4xl">Popup Widgets</h2>
            </div>
            <div
                class="mt-5">
                <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <li v-for="popup in popup" :key="popup.name"
                    class="col-span-1 flex flex-col text-center bg-indigo-800 hover:bg-indigo-700 rounded-md text-white shadow-lg mx-auto">
                    <NuxtLink :to="popup.href">
                        <div class="flex-1 flex flex-col p-8">
                            <component :is="popup.icon" class="w-12 mx-auto" />
                            <h3 class="mt-6 text-xl font-semibold">{{ popup.name }}</h3>
                            <p class="text-gray-300 text-md mt-5 max-w-sm lg:max-w-xl">{{ popup.description }}</p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
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