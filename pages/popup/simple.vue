<template>
  <div class="bg-cyan-custom">
    <DemoSteps :title="pageTitle" :description="pageDescription" />
  </div>
</template>

<style>
.bg-cyan-custom {
  background-color: hsl(187.9 100% 97%);
}
</style>

<script setup>
useHead({
  title: 'Simple | Popup'
})

const pageTitle = 'Simple Popup'
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
      script.onload = async () => {
        try {
          const widget = await window.AirlyftWidget("b26a2bd2-3f6b-4d9b-b582-bd1fc773704c");
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