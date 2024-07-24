<template>
    <div class="bg-white w-[90%] xl:w-[75%] 2xl:w-[60%] mx-auto rounded-lg p-10 lg:p-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div class="text-gray-600 text-center lg:text-left mx-auto">
                <h3 class="text-2xl sm:text-3xl sm:tracking-tight lg:text-4xl font-light uppercase">Embed Tools</h3>
                <p class="max-w-lg text-xl mt-5 lg:mt-10">AirLyft's widget offers easy integration of quests and
                    campaigns from your website.</p>
                <p class="max-w-lg text-lg mt-5 lg:mt-10 font-extralight">AirLyft Widgets are fully customisable &
                    embeddable, you can install them on any web page in a couple of minutes.</p>
            </div>
            <img src="../public/widget-demo.svg" alt="" class="rounded-md mx-auto">
        </div>
        <div class="relative inset-0 flex items-center mt-10" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
        </div>
        <div class="max-w-xl mx-auto lg:max-w-none my-10 lg:my-20">
            <div class="text-gray-600 text-center">
                <h3 class="text-2xl sm:text-3xl sm:tracking-tight lg:text-4xl font-light capitalize">How it works
                </h3>
            </div>
            <div class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-20 gap-x-8 sm:max-w-none lg:grid-cols-3">
                <div v-for="step in steps" :key="step.name"
                    class="text-center sm:flex sm:text-left lg:block lg:text-center">
                    <div class="sm:flex-shrink-0">
                        <div class="flow-root">
                            <component :is="step.icon" :class="[step.color, 'w-16 lg:w-24 mx-auto']" />
                        </div>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <h3 class="text-lg lg:text-xl font-light">
                            {{ step.name }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative inset-0 flex items-center mt-10" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
        </div>
        <div class="max-w-xl mx-auto lg:max-w-none my-10 lg:my-20">
            <div class="text-gray-600 text-center">
                <h3 class="text-2xl sm:text-3xl sm:tracking-tight lg:text-4xl font-light capitalize">Try it yourself
                </h3>
                <p class="text-2xl mt-5 lg:mt-10 font-extralight">Click the <span class="font-medium">Participate</span>
                    button on the lower right side of your screen.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CodeBracketIcon, DocumentDuplicateIcon, RocketLaunchIcon, } from '@heroicons/vue/24/outline'

const steps = [
    {
        name: 'Copy embeddable code',
        icon: CodeBracketIcon,
        color: 'text-pink-400'
    },
    {
        name: 'Paste it directly in your website',
        icon: DocumentDuplicateIcon,
        color: 'text-purple-400'
    },
    {
        name: 'You are good to go',
        icon: RocketLaunchIcon,
        color: 'text-blue-400'
    },
]
</script>