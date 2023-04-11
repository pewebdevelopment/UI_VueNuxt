<template>
    <div class="p-2.5 mt-10 bg-[#f8f8f8]">
        <Cheatsheet-Header/>
        <!-- <div class="w-full h-fit p-5 grid grid-rows-3 grid-flow-col"> -->
        <div class="w-full h-fit p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 gap-3">
        <div v-for="item in jsContent" :key="item.heading" class="h-fit">
            <JavascriptSection :item="item"/>
        </div>
    </div>
    <ArticleJS/>
    </div>
</template>

<script setup>
import jsCheatSheet from "@/src/jsCheatSheet.json"
// const data = JSON.parse(jsCheatSheet)
const jsContent = ref(jsCheatSheet)
</script>
