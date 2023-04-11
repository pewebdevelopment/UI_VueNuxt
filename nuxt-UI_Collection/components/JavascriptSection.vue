<template>
    <div class="text-[#444] relative bg-white w-full shadow-md my-4 rounded-lg py-2">
        <div class="flex justify-between absolute px-7 top-[-27px] w-full">
            <h2 class="text-[20px] font-bold text-[#555] px-2 truncate capitalize bg-[#fff] pt-[5px] rounded-t-lg">
            {{item.heading}}
            </h2>
            <ul class="flex">
                <button class="mr-1"><span class="px-1 rounded bg-blue-400 text-white font-bold">&#63;</span></button>
                <button class="mr-1">&#8598;</button>
                <button class="mr-1">
                <span class="px-1 rounded bg-blue-400 text-white font-bold">X</span>
                </button>
            </ul>
        </div>
        <div class="text-[13px] overflow-hidden h-[500px] hover:overflow-y-auto ">
            <div>
            <div class="px-3">
                <pre class="overflow-hidden hover:overflow-x-auto" v-html="item.content"/>
            </div>
                <div v-for="subItem in item.data" :key="subItem.heading">
                    <div class="px-3 bg-[#ce5937] bg-opacity-10 my-2 font-bold">{{subItem.heading}}</div>
                    <div class="px-3">
                        <pre class="overflow-hidden hover:overflow-x-auto" v-html="subItem.content"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps(['item'])
</script>
<style scoped>
.highlight{
    font-weight: bold;
    color: darkblue;
}
:deep(.highlight){
    color: darkblue;
    font-weight: bold
    }
:deep(.comment) {
    color: #00b418
}
:deep(.value) {
    color: #d80800
}
</style>