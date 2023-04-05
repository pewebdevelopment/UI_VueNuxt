<template>
    <div class="section relative shadow-xl">
        <div class="flex justify-between items-end absolute top-[-30px] left-[15px] right-[-15px]">
            <h2 class="section-header">
                <slot name="header" />
            </h2>
            <ul class="flex mr-[24px]">
                <li><icon class="rounded-sm bg-white m-[1px] text-[#bbb]" name="uil:question" /></li>
                <li><icon class="rounded-sm bg-white m-[1px] text-[#bbb]" name="uil:arrow-up-left" /></li>
                <li><icon class="rounded-sm bg-white m-[1px] text-[#bbb]" name="uil:times" /></li>
            </ul>
        </div>
        <div><slot name="content" /></div>
    </div>
</template>