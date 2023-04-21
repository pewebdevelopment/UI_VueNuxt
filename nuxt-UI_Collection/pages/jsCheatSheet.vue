<template>
    <div class="p-2.5 mt-10 bg-[#f8f8f8]" dark:bg-[#444]>
        <Cheatsheet-Header/>
        <!-- <div class="w-full h-fit p-5 grid grid-rows-3 grid-flow-col"> -->
        <div class="w-full h-fit p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 gap-3">
        <div v-for="item in jsContent" :key="item.heading" class="h-fit">
            <JavascriptSection :item="item" @deleteItem="deleteItem" @moveToTop="moveToTop"/>
        </div>
    </div>
    <ArticleJS/>
    </div>
</template>

<script setup>
import jsCheatSheet from "@/src/jsCheatSheet.json"
// const data = JSON.parse(jsCheatSheet)
const jsContent = ref(jsCheatSheet)
const deleteItem = (name) => {
    jsContent.value = jsContent.value.filter((item)=> item.heading !== name)
}
const moveToTop = (name) => {
    let index = jsContent.value.findIndex((item) => item.heading === name)
    let temp = jsContent.value[index]
    jsContent.value.splice(index,1)
    jsContent.value.unshift(temp)
}
</script>
