<template>
    <div class="py-12 sm:py-16 mx-auto">
        <div class="px-6 lg:px-8">
            <div class="mx-auto max-w-xs lg:mx-0 border-b pb-5 text-center lg:text-left">
                <h2 class="text-3xl font-bold tracking-tight text-gray-800
                 sm:text-4xl">Sidebar Widgets</h2>
            </div>
            <div
                class="mt-5">
                <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <li v-for="sidebar in sidebar" :key="sidebar.name"
                    class="col-span-1 flex flex-col text-center bg-purple-card border rounded-md text-gray-600 shadow-xl mx-auto">
                    <NuxtLink :to="sidebar.href">
                        <div class="flex-1 flex flex-col p-8">
                            <component :is="sidebar.icon" class="w-12 mx-auto" />
                            <h3 class="mt-6 text-xl font-semibold">{{ sidebar.name }}</h3>
                            <p class="text-gray-500 text-md mt-5 max-w-sm lg:max-w-xl">{{ sidebar.description }}</p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
            </div>
        </div>

        <div class="px-6 lg:px-8 mt-10">
            <div class="mx-auto max-w-xs lg:mx-0 border-b pb-5 text-center lg:text-left">
                <h2 class="text-3xl font-bold tracking-tight text-gray-800
                 sm:text-4xl">Popup Widgets</h2>
            </div>
            <div
                class="mt-5">
                <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <li v-for="popup in popup" :key="popup.name"
                    class="col-span-1 flex flex-col text-center bg-purple-card border rounded-md text-gray-600 shadow-xl mx-auto">
                    <NuxtLink :to="popup.href">
                        <div class="flex-1 flex flex-col p-8">
                            <component :is="popup.icon" class="w-12 mx-auto" />
                            <h3 class="mt-6 text-xl font-semibold">{{ popup.name }}</h3>
                            <p class="text-gray-500 text-md mt-5 max-w-sm lg:max-w-xl">{{ popup.description }}</p>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<style>
.bg-purple-card{
  background-color: hsl(269.2, 50%, 97%);
}

.border{
    border-color: hsl(269.2, 50%, 50%);
    border-width: 1px;
}

.border-b{
    border-color: gray;
}
</style>

<script setup>
import {
    RectangleStackIcon,
    CursorArrowRaysIcon,
    ClockIcon,
} from '@heroicons/vue/24/outline'

const sidebar = [
    {
        name: 'Simple Sidebar',
        icon: RectangleStackIcon,
        href: '/demo/sidebar/simple',
        description:
            'Effortlessly integrate a customizable sidebar widget with a single button click for seamless user onboarding',
    },
    {
        name: 'Open Quest Directly',
        icon: CursorArrowRaysIcon,
        href: '/demo/sidebar/open-quest-directly',
        description:
            'Launch specific quests instantly in a sidebar widget, enhancing user engagement and streamlining onboarding flows',
    },
    {
        name: 'Async Script Load',
        icon: ClockIcon,
        href: '/demo/sidebar/async-script-load',
        description:
            'Boost website performance with an asynchronously loaded sidebar widget for smooth, uninterrupted user experiences',
    },
    // {
    //     name: 'Hide XP and cFuel',
    //     href: '/demo/sidebar/hide-xp-cfuel',
    //     description:
    //         'A short description about the Hide XP and cFuel Widget',
    // },
]

const popup = [
    {
        name: 'Simple Popup',
        icon: RectangleStackIcon,
        href: '/demo/popup/simple',
        description:
            'Engage users with a versatile popup widget, easily activated through a button for dynamic onboarding campaigns',
    },
    {
        name: 'Open Quest Directly',
        icon: CursorArrowRaysIcon,
        href: '/demo/popup/open-quest-directly',
        description:
            'Trigger targeted quests in a popup modal, optimizing user interaction and increasing conversion rates',
    },
    {
        name: 'Async Script Load',
        icon: ClockIcon,
        href: '/demo/popup/async-script-load',
        description:
            'Maximize site speed and user satisfaction with an asynchronously loaded popup widget for efficient onboarding',
    },
    // {
    //     name: 'Hide XP and cFuel',
    //     href: '/demo/popup/hide-xp-cfuel',
    //     description:
    //         'A short description about the Hide XP and cFuel Widget',
    // },
]
</script>