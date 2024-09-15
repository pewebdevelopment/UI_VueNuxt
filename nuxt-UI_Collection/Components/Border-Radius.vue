<template>
    <div>
        <Section>
            <template v-slot:header>
                Border-Radius
            </template>
            <template v-slot:content>

<div class="px-2.5 overflow-auto">
    <div class="flex justify-center gap-2">
        <div class="flex flex-col content-between">    
        <div class="flex flex-col justify-center items-center mb-[30px]">
            <input type="number" placeholder="0">
			<label class="body-text text-left flex"><input type="checkbox">All</label>
        </div>
            <input type="number" placeholder="0">
        </div>

        <div class="w-6/12 md:w-[230px]">
            <Result-Tab />
        </div>

        <div class="flex flex-col content-between">
            <input class="mb-[53px]" type="number" placeholder="0">
            <input type="number" placeholder="0">
        </div>
    </div>
</div>
            </template>
        </Section>
    </div>
</template>

<style scoped>
input {
    max-width: 77px;
    height: 21px;
    border: 1px solid #ccc;
}

label input {
    width: 14px;
    height: 14px;
    border: 1px solid #ccc;
    margin-top: 2px;
}
</style>