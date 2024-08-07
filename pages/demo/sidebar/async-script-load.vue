<template>
    <div class="bg-blue-custom">
        <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
    </div>
</template>

<style>
.bg-blue-custom {
    background-color: hsl(221.2 100% 97%);
}
</style>

<script setup>
useHead({
    title: 'Async Script Load | Sidebar'
})

const pageTitle = 'Async Script Load'
const pageDescription = 'Boost website performance with an asynchronously loaded sidebar widget for smooth, uninterrupted user experiences'
const svg = '/sidebar-demo.svg'
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
                    "2c2657de-3b72-458d-ba81-20c638fe55c1"
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