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
          const widget = await window.AirlyftWidget("96affc32-6ce0-4654-b406-03a76bd75bd6");
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