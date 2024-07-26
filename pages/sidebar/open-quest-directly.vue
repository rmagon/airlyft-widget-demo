<template>
  <div class="bg-fuchsia-custom">
    <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
  </div>
</template>

<style>
.bg-fuchsia-custom {
  background-color: hsl(292 100% 97%);
}
</style>

<script setup>
useHead({
  title: 'Open Quest Directly | Sidebar'
})

const pageTitle = 'Open Quest Directly'
const pageDescription = 'Launch specific quests instantly in a sidebar widget, enhancing user engagement and streamlining onboarding flows'
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
          const widget = await window.AirlyftWidget(
            "a487e284-dac3-4801-bd11-4bfdcb9413c9"
          );
          const instance = await widget.createSidebar({});
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