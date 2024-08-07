<template>
    <div class="">
        <div class="h-dvh flex items-center justify-center text-white bg-purple-950">
            <div class="relative isolate px-6 pt-14 lg:px-8">
                <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true">
                    <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Hide XP and cFuel | Popup'
})
</script>

<script>
export default {
    mounted() {
        this.loadWidgetScript();
    },
    beforeUnmount() {
        this.removeWidget();
    },
    methods: {
        loadWidgetScript() {
            const script = document.createElement('script');
            script.src = 'https://assets.airlyft.one/widget/widget.js';
            script.async = true;
            script.onload = () => {
                this.initAirlyft();
            };
            script.id = 'airlyft-widget-script';
            document.head.appendChild(script);
        },
        async initAirlyft() {
            try {
                const widget = await window.AirlyftWidget(
                    "96affc32-6ce0-4654-b406-03a76bd75bd6"
                );
                widget.createModal({});
            } catch (err) {
                console.error(err);
            }
        },
        removeWidget() {
            // Remove widget elements
            const widgetContainer = document.querySelector('.FBgbKZ9lJCatEIU4pCs7');
            if (widgetContainer) {
                widgetContainer.remove();
            }
        }
    }
}
</script>