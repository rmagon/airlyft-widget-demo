<template>
    <div class="bg-blue-custom">
        <DemoSteps :title="pageTitle" :description="pageDescription" />
    </div>
</template>

<style>
.bg-blue-custom {
    background-color: hsl(213.1 100% 97%);
}
</style>

<script setup>
useHead({
    title: 'Async Script Load | Popup'
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
                    "aac9db6e-297e-4e4a-90fb-4d0fdf98aa56"
                );
                const instance = await widget.createModal({});

                initializeWidgetInstance(instance);
            } catch (err) {
                console.error(err);
            }
        },
    }
}
</script>