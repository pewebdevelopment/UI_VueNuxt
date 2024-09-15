<template>
        <div class="ml-2">
        <input type="range" placeholder="0" class="slider" />
		</div>
</template>

<style scoped>
.slider {
    appearance: none;
    width: 100%;
    height: 14px;
    border-radius: 4px;
    background: #eee;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 39px;
    height: 22px;
    border-radius: 4px;
    border: 2px solid #444;
    background: #f6f6f6;
    position: relative;
}
</style>