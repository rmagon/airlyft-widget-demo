<template>
    <div class="bg-purple-custom">
        <div class="relative max-w-7xl mx-auto">
            <div class="relative pt-20 pb-16 sm:pb-24">
                <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                    <div class="text-center">
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span class="block">Welcome to AirLyft 🚀</span>
                            <span
                                class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-300">Widget
                                Demo</span>
                        </h1>
                        <p
                            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Click
                            the button below to learn how to integrate widgets in your project.</p>
                    </div>
                    <div class="mt-12 flex">
                        <div class="mt-4 mx-auto sm:mt-0">
                            <a href="https://docs.airlyft.one/developers/widget" target="_blank"
                                class="flex items-center justify-center gap-x-3 rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10">Get
                                started
                                <BookOpenIcon class="h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Cards />
        </div>
    </div>
</template>

<style>
.bg-purple-custom {
    background-color: hsl(269.2, 100%, 97%);
}
</style>

<script>
import { BookOpenIcon } from '@heroicons/vue/24/outline';

export default {
    components: {
        BookOpenIcon
    },
}
</script>