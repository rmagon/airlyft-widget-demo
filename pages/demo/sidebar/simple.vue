<template>
  <div class="bg-purple-custom">
    <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
  </div>
</template>

<style>
.bg-purple-custom {
  background-color: hsl(270 100% 97%);
}
</style>

<script setup>
useHead({
  title: 'Simple | Sidebar'
})

const pageTitle = 'Simple Sidebar'
const pageDescription = 'Effortlessly integrate a customizable sidebar widget with a single button click for seamless user onboarding'
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
      script.onload = async () => {
        try {
          const widget = await window.AirlyftWidget("239a94df-cd80-4083-a957-696d1eec7690");
          const instance = await widget.createSidebar({});

          initializeWidgetInstance(instance);
        } catch (err) {
          console.error(err);
        }
      };
      document.head.appendChild(script);
    },
  }
}
</script>