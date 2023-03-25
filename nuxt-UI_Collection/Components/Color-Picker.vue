<template>
    <div class="mb-3">
        <Section>
            <template v-slot:header>Backgorund</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5">
                        
                        <div id="pickerke">
                          <a href="https://rgbcolorcode.com/color/000000" style="background:#000000" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/993300" style="background:#993300" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/333300" style="background:#333300" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/000080" style="background:#000080" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/333399" style="background:#333399" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/333333" style="background:#333333" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/800000" style="background:#800000" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FF6600" style="background:#FF6600" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/808000" style="background:#808000" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/008000" style="background:#008000" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/008080" style="background:#008080" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/0000FF" style="background:#0000FF" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/666699" style="background:#666699" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/808080" style="background:#808080" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FF0000" style="background:#FF0000" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FF9900" style="background:#FF9900" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/99CC00" style="background:#99CC00" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/339966" style="background:#339966" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FFFFFF" style="background:#FFFFFF" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/33CCCC" style="background:#33CCCC" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/3366FF" style="background:#3366FF" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/800080" style="background:#800080" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/999999" style="background:#999999" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FF00FF" style="background:#FF00FF" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FFCC00" style="background:#FFCC00" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FFFF00" style="background:#FFFF00" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/00FF00" style="background:#00FF00" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/00FFFF" style="background:#00FFFF" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/00CCFF" style="background:#00CCFF" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/993366" style="background:#993366" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/C0C0C0" style="background:#C0C0C0" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FF99CC" style="background:#FF99CC" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FFCC99" style="background:#FFCC99" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/FFFF99" style="background:#FFFF99" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/CCFFFF" style="background:#CCFFFF" target="_blank" rel="nofollow"></a>
                          <a href="https://rgbcolorcode.com/color/99CCFF" style="background:#99CCFF" target="_blank" rel="nofollow"></a> 
						</div>

                        
						<div class="settingRow items-center">
							<div class="settingRowLabel font-bold mr-1">
								Color picker:
							</div>
							<div class="settingRowInput flex">
							    <input class="jscolor text-[18px]" type="color-picker" value="D0E4F5" autocomplete="off" style="background-image: none; background-color: rgb(208, 228, 245); color: rgb(0, 0, 0); padding: 2px 5px;">
							
                            <Slider/>
							</div>
						</div>

                        <div>
                            <div class="flex items-center my-2">
                               <input class="bg-white gradient-input mr-1 w-[215px]" type="text">
                               <div id="demo">Text color</div>
                            </div>

                            <div class="flex items-center my-2">
                               <input class="bg-white gradient-input mr-1 w-[215px]" type="text">
                               <div id="demo">Background <br/> color</div>
                            </div>

                            <div class="flex items-center my-2">
                               <input class="bg-white gradient-input mr-1 w-[215px]" type="text">
                               <div id="demo">Box border</div>
                            </div>

                            <div class="flex items-center my-2">
                               <input class="bg-white gradient-input mr-1 w-[215px]" type="text">
                               <div id="demo">Text shadow</div>
                            </div>

                            <div class="flex items-center my-2">
                               <input class="bg-white gradient-input mr-1 w-[215px]" type="text">
                               <div id="demo">Box shadow</div>
                            </div>
                        </div>
					</div>
                </div>
            </template>
        </Section>
    </div>
</template>

<style scoped>
#demo {
    width: 120px;
    text-align: center;
    font-size: 13px;
    text-align: center;
    font-size: 12px;
    margin-right: 4px;
}

#pickerke {
    display: block;
    max-width: 320px;
    margin: 0 auto;
}

#pickerke a {
    display: block;
    width: 26px;
    height: 20px;
    overflow: hidden;
    text-indent: 999px;
    float: left;
    position: relative;
    z-index: 8;
}
</style>
