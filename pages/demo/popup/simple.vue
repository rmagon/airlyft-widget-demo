<template>
  <div class="bg-emerald-custom">
    <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
  </div>
</template>

<style>
.bg-emerald-custom {
  background-color: hsl(158.1 100% 97%);
}
</style>

<script setup>
useHead({
  title: 'Simple | Popup'
})

const pageTitle = 'Simple Popup'
const pageDescription = 'Engage users with a versatile popup widget, easily activated through a button for dynamic onboarding campaigns'
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
      script.onload = async () => {
        try {
          const widget = await window.AirlyftWidget("022c8d74-3e34-4a81-ad2c-1e91f279de55");
          const instance = await widget.createModal({});

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