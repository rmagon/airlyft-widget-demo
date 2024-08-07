<template>
    <div class="bg-orange-custom">
        <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
    </div>
</template>

<style>
.bg-orange-custom {
    background-color: hsl(27 100% 97%);
}
</style>

<script setup>
useHead({
    title: 'Async Script Load | Popup'
})

const pageTitle = 'Async Script Load'
const pageDescription = 'Maximize site speed and user satisfaction with an asynchronously loaded popup widget for efficient onboarding'
const svg = '/popup-demo.svg'
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
                    "de9e960a-bb2e-401c-a4fe-1362f5a70b46"
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