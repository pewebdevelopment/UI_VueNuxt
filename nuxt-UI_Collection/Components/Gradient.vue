<template>
    <div>
        <Section>
            <template v-slot:header>
                Gradient
            </template>
            <template v-slot:content>
<div class="px-2.5">
<div class="grid grid-cols-3">

    <div class="col-span-2">
        <div class="h-[21px] w-full mb-2.5" style="background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%);">
		</div>

        <div class="flex items-center justify-between">
            <input class="gradient-input mr-1" type="text">
            <input class="gradient-input mr-1" type="text">
            <input class="gradient-input" type="text">
        </div>

        <div class="flex items-start gap-2 pt-5">
            <div class="flex justify-start flex-col">
			<label class="text-[#333] body-text"><input type="checkbox" name="backgroundOneLine" id="backgroundOneLine" value="value" checked="">&nbsp;Middle Transition&nbsp;</label>
            <Slider />
            </div>

            <div>
                <div class="gradientDirections">
					<a title="Left to right" class="">left</a>
					<a title="Top to bottom" class="">top</a>
					<a title="Diagonal descending" class="">-45deg</a>
					<a title="Diagonal ascending" class="">45deg</a>
					<a title="Radial" class="gradientDirection">center</a>								
				</div>
			<label class="text-[#333] body-text"><input type="checkbox" name="backgroundOneLine" id="backgroundOneLine" value="value" checked="">&nbsp;HEX Codes&nbsp;</label>
            </div>
        </div>
    </div>

    <!-- preview -->
    <div class="ml-2.5">
        <div id="gradientPreview" class="ui-resizable" style="">
		<div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div>
    </div>
</div>
<Result-Tab/>
</div>
            </template>
        </Section>
    </div>
</template>


<style scoped>
.gradientDirections > a:nth-child(1) {
    background: linear-gradient(to right, #1c6ea4 25%,#FFFFFF 75%);
}

.gradientDirections > a:nth-child(2) {
    background: linear-gradient(to bottom, #1c6ea4 25%,#FFFFFF 75%)
}

.gradientDirections > a:nth-child(3) {
    background: linear-gradient(135deg, #1c6ea4 25%,#FFFFFF 75%);
}

.gradientDirections > a:nth-child(4) {
    background: linear-gradient(to bottom, #1c6ea4 45%,#FFFFFF 75%)
}

.gradientDirections > a:nth-child(5) {
    background: radial-gradient(ellipse at center, #1c6ea4 25%,#000000 75%)
}

.gradientDirections > a {
    display: inline-block;
    border: 1px solid #999;
    height: 18px;
    width: 18px;
    overflow: hidden;
    cursor: pointer;
    text-indent: 66px;
    margin-right: 2px;
}

#gradientPreview {
    min-width: 50px;
    max-width: 99%;
    min-height: 20px;
    max-height: 400px;
    border: 1px solid #bbb;
    margin-bottom: 10px;
    height: 150px;
    background: transparent none repeat scroll 0% 0%;
}
.ui-resizable-e {
    cursor: e-resize;
    width: 7px;
    right: -5px;
    top: 0;
    height: 100%;
}
.ui-resizable-s {
    cursor: s-resize;
    height: 7px;
    width: 100%;
    bottom: -5px;
    left: 0;
}
</style>