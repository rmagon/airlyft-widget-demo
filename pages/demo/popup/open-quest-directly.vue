<template>
  <div class="bg-pink-custom">
    <DemoSteps :title="pageTitle" :description="pageDescription" :svgPath="svg" />
  </div>
</template>

<style>
.bg-pink-custom {
  background-color: hsl(328.6 100% 97%);
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
            "ff2d3972-22bd-409f-a84b-448424259bb1"
          );
          const instance = await widget.createModal({});

          initializeWidgetInstance(instance);
          widget.openSpecificTask(instance, "21d16d2b-c0b1-4c27-89ff-575ee1828675");
        } catch (err) {
          console.error(err);
        }
      };
      document.head.appendChild(script);
    },
  }
}
</script>