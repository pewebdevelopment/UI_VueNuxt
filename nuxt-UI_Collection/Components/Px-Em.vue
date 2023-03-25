<template>
    <div>
        <Section>
            <template v-slot:header>
                Px - Em
            </template>
            <template v-slot:content>
<div class="px-2.5">
               <div class="text-[12px] flex flex-col w-full overflow-auto">
                   <div class=" border-b border-b-[#444]">
                   <div class="flex items-center py-2">
                       <label for="parent">Parent</label>
                       <p>px</p>
                   </div>
                   </div>

                   <!-- desired px -->
                    <div class="flex items-center py-2">
                       <label for="parent">desired px</label>
                       <input type="number">
                       <p>px</p>
                   </div>

                    <!-- desired em -->
                    <div class="flex items-center py-2">
                       <label for="parent">desired em</label>
                       <input type="number">
                       <p>em</p>
                   </div>
               </div>
</div>
            </template>
        </Section>
    </div>
</template>

<style scoped>
input {
    width: 77px;
    height: 21px;
    border: 1px solid #ccc;
    padding: 2px 5px;
    margin-right: 10px;
    margin-left: 30px;
}

label {
    text-align: right;
    width: 25%;
}
</style>
