<template>
  <div class="bg-sky-custom">
    <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
  </div>
</template>

<style>
.bg-sky-custom {
  background-color: hsl(198.4 100% 97%);
}
</style>

<script setup>
useHead({
  title: 'Open Quest Directly | Popup'
})

const pageTitle = 'Open Quest Directly'
const pageDescription = 'Trigger targeted quests in a popup modal, optimizing user interaction and increasing conversion rates'
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
          const widget = await window.AirlyftWidget(
            "59728a7d-ee7a-4638-b5fb-068422128784"
          );
          const instance = await widget.createModal({});

          initializeWidgetInstance(instance);
          widget.openSpecificTask(instance, "38657521-db0c-430a-9450-1b52f38e2ca2");
        } catch (err) {
          console.error(err);
        }
      };
      document.head.appendChild(script);
    },
  }
}
</script>