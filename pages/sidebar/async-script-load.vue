<template>
    <div class="bg-violet-custom">
        <DemoSteps :title="pageTitle" :description="pageDescription" />
    </div>
</template>

<style>
.bg-violet-custom {
    background-color: hsl(255.1 100% 97%);
}
</style>

<script setup>
useHead({
    title: 'Async Script Load | Sidebar'
})

const pageTitle = 'Async Script Load'
const pageDescription = 'The AirLyft Widget allows you to create onboarding flows, run quests, and campaigns easily on your own website.'
</script>

<script>
import { removeWidgetScript, initializeWidgetInstance } from '@/utils'

export default {
    mounted() {
        this.loadWidgetScript();
    },
    beforeUnmount() {
        removeWidgetScript();
    },
    methods: {
        loadWidgetScript() {
            const script = document.createElement('script');
            script.src = 'https://assets.airlyft.one/widget/widget.js';
            script.async = true;
            script.onload = () => {
                this.initAirlyft();
            };
            document.head.appendChild(script);
        },
        async initAirlyft() {
            try {
                const widget = await window.AirlyftWidget(
                    "ca7fbce4-e349-4074-a8c6-091d102a3447"
                );
                const instance = await widget.createSidebar({});

                initializeWidgetInstance(instance);
            } catch (err) {
                console.error(err);
            }
        },
    }
}
</script>