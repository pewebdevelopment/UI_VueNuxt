<template>
    <div class="text-[#444] dark:text-white dark:bg-[#555] relative bg-white w-full shadow-md my-4 rounded-lg py-2">
        <div class="flex justify-between absolute px-7 top-[-27px] w-full">
            <h2 class="text-[20px] font-bold text-[#555] dark:text-white px-2 truncate capitalize bg-[#fff] pt-[5px] rounded-t-lg">
            {{item.heading}}
            </h2>
            <ul class="flex">
                <button @click="toggleDescription()" class="mr-1"><span class="px-1 rounded bg-blue-400 text-white font-bold">&#63;</span></button>
                <button @click="moveToTop()" class="mr-1">&#8598;</button>
                <button @click="deleteItem()" class="mr-1">
                <span class="px-1 rounded bg-blue-400 text-white font-bold">X</span>
                </button>
            </ul>
        </div>
        <div v-if="des" class="absolute w-full px-5 py-1 text-right rounded-md border-2 z-10 bg-white">
            {{item.description}}
        </div>

        <div v-if="!item.links" class="text-[13px] overflow-hidden h-[500px] hover:overflow-y-auto ">
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
        <div v-if="item.links" class="grid grid-cols-3 p-2 gap-2">
        <div class="text-[#C59237] hover:bg-[#C59237] hover:text-white cursor-pointer bg-[#eee] rounded px-2 text-center py-1 " v-for="link in item.links" :key="link.name" >
            {{link.name}}
        </div>
    </div>
    </div>
</template>
<script setup>
    const props = defineProps(['item'])
    const des = ref(false)
    const toggleDescription = () => {
        des.value = !des.value
    }
    const moveToTop = () => {
        emits('moveToTop', props.item.heading)
    }
    const deleteItem = () => {
        emits('deleteItem', props.item.heading)
    }
    const emits = defineEmits(['moveToTop', 'deleteItem'])
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