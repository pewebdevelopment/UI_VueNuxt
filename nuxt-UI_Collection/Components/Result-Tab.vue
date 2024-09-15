<template>
    <div>
        <div class="backgroundResultWrap">
            <slot></slot>
			<textarea id="backgroundResult" onclick="this.select();" rows="4" cols="50"></textarea>
		</div>
		<a onclick="applybackground();" class="usethis" title="Populate the editors">&nbsp;</a>
    </div>
</template>

<style scoped>
a.usethis {
        width: 40px;
    height: 15px;
    background: url(/images/arrow.png) no-repeat transparent;
    display: block;
    clear: both;
    margin: 0 auto;
    color: #fff;
    padding: 0px 0 0 0;
    cursor: pointer;
}
</style>