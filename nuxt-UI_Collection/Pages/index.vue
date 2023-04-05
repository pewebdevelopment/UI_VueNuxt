<template>
    <div class="p-4 mt-24">

        <!-- navigation tabs -->
               <div class="navigationtabs">
					<nav>
						<ul class="text-white">
							<li><a href="/" class="bg-[#CE5937] rounded-l-2xl" title="HTML Cheat Sheet" style="font-size: 20px; margin-bottom: 2px; padding: 4px 15px;">HTML</a></li>
							<li><a href="#" class="bg-[#1c6ea4e6] rounded-l-2xl" title="CSS Cheat Sheet" style="font-size: 20px; margin-bottom: 2px; padding: 4px 15px;">CSS</a></li>
							<li><a href="/js/" class="bg-[#c59237e6] rounded-l-2xl" title="JS Cheat Sheet" style="font-size: 20px; margin-bottom: 2px; padding: 4px 15px;">JS</a></li>
							<li><a href="/jquery/" class="jqColor rounded-l-2xl" title="jQuery Cheat Sheet" style="font-size: 20px; margin-bottom: 2px; padding: 4px 15px;">&nbsp;&nbsp;&nbsp;jQ</a></li>
							<li><a href="/amp/" class="bg-[#90638c] rounded-l-2xl" title="AMP HTML Cheat Sheet" style="font-size: 20px; margin-bottom: 2px; padding: 4px 15px;"><span>⚡</span>&nbsp;AMP</a></li>
							<li><a href="/seo/" class="bg-white shadow-xl rounded-l-2xl" title="SEO Cheat Sheet" style="font-size: 20px; margin-bottom: 2px; padding: 4px 15px;"><strong class="text-blue-500">S</strong><strong class="text-red-600">E</strong><strong class="text-green-600">O</strong></a></li>
						</ul>
					</nav>
				</div>

        <!-- Code editor start -->
        <div @click="callEditor" class="z-40 cursor-pointer fixed bottom-0 left-[40px] rounded-t-sm rounded-b-md w-[30px] h-[30px] flex justify-center items-start mt-1 border-t-[5px] border-r-[3.5px] border-[2px] bg-white border-gray-500">
            <div class="w-[12px] h-[12px] bg-gray-500 mt-1"></div>
        </div>

        <div id="editor" class="z-50 fixed bottom-[-400px] w-full p-2 rounded-t-xl bg-[#ededed]">
            <div @click="returnEditor" class="cursor-pointer absolute top-[-34px] right-[60px] mr-8 p-2 bg-[#ededed] rounded-md"><icon class="text-gray-500 text-[24px]" name="uil:arrow-down-right" /></div>

            <div class="relative w-12/12">
            <Code-Editor-Call />
            </div>
        </div>
        <!-- Code editor end -->

        <!-- back to top -->
        <div class="z-40 fixed bottom-[20px] right-0 p-4 rotate-[-90deg]">
            <a id="back2Top" title="Back to top" href="#" style="display: inline;" class=" text-gray-500 text-[30px]">➤</a>
        </div>

        <!-- cheatsheet header -->
        <Cheatsheet-Header />

        <!-- cheatsheets -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Selectors />
            <Basics />
            <Useful-Links />
            <How-To-Use />
            <Properties />
            <Background />
            <Gradient />
            <Color-Picker />
            <Box-Shadow />
            <Text-Shadow />
            <Button-Generator />
            <Border-Radius />
            <Transform />
            <Font-Generator />
            <Border-Outline />
            <Reset-Css />
            <Px-Em />
            <Media-Queries />
        </div>     
            <Code-Editor />
            <Article />
    </div>
</template>

<script>
export default {
    methods: {
        callEditor(){
           document.getElementById('editor').style.bottom = '0px'
        },
        returnEditor(){
           document.getElementById('editor').style.bottom = '-400px'
        }
    }
}
</script>

<style scoped>
.navigationtabs {
    display: inline-block;
    float: right;
    position: fixed;
    top: 70px;
    right: 8px;
    z-index: 4000;
}

.navigationtabs ul li {
    display: block;
    text-align: right;
    font-size: 20px;
    margin-bottom: 2px;
    padding: 4px 15px;
}

.navigationtabs a.jqColor {
    background-color: rgba(6,105,173,0.9);
    background-image: url(/images/logo-jquery.png);
    background-repeat: no-repeat;
    background-position: center left;
    background-size: contain;
}
</style>