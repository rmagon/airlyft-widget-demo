<template>
  <div class="bg-rose-custom">
    <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
  </div>
</template>

<style>
.bg-rose-custom {
  background-color: hsl(351.3 100% 97%);
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
            "e47a2016-4171-436b-bf55-dc52da22d129"
          );
          const instance = await widget.createSidebar({});
          initializeWidgetInstance(instance);
          widget.openSpecificTask(instance, "af3cf3bd-b818-4912-bd0f-a38efd75cbe7");
        } catch (err) {
          console.error(err);
        }
      };
      document.head.appendChild(script);
    },
  }
}
</script>