export function removeWidgetScript() {
    window.AirlyftWidgetInstance?.ref?.remove();
    window.AirlyftWidgetData = undefined;
}

export function initializeWidgetInstance(instance) {
    window.AirlyftWidgetInstance = instance;
}