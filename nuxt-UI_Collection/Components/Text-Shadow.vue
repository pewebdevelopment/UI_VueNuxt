<template>
    <div>
        <Section>
            <template v-slot:header>Text Shadow</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5">
							<div>

                                <!-- preview -->
								<div class="flex flex-col justify-start">
			<label class="text-[#333] body-text float-right"><input type="checkbox" name="backgroundOneLine" id="backgroundOneLine" value="value" checked="">&nbsp;One line&nbsp;</label>
                                    <h2 class="text-[20px] text-center pb-4 pt-2.5 my-[5px]">PREVIEW</h2>
								</div>


								<div class="mb-2">
                                    
                                    <!-- right -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Right:
										</div>
										<Long-Slider />
									</div>	

                                    <!-- down -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Down:
										</div>
										<Long-Slider />
									</div>

                                    <!-- blur -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Blur:
										</div>
										<Long-Slider />
									</div>

                                    <!-- opacity -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Opacity:
										</div>
										<Long-Slider />
									</div>

                                    <!-- color -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Color:
										</div>
											<input class="jscolor h-[21px] ml-2" id="backgroundColor" value="" autocomplete="off" style="background-image: none; background-color: rgb(208, 228, 245); color: rgb(0, 0, 0); padding: 2px 5px;">
									</div>
												
								</div>


                                <div>
                                    <div id="textShadowGallery">
									<div style="color: #FFF; background-color: #232323; text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18">Neon</div>
									<div style="color: #FFF; background-color: #333; text-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px;">Flaming</div>
									<div style="color: #131313; background-color: #e7e5e4; letter-spacing: .15em; text-shadow: 1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2;">Lux</div>
									<div style="color: transparent; text-shadow: -4px 4px hsla(0, 0%, 70%, .4), -3px 3px hsla(0, 0%, 60%, .2), -2px 2px hsla(0, 0%, 70%, .2), -1px 1px hsla(0, 0%, 70%, .2), 0px 0px hsla(0, 0%, 50%, .5), 1px -1px hsla(0, 0%, 30%, .6), 2px -2px hsla(0, 0%, 30%, .7), 3px -3px hsla(0, 0%, 32%, .8), 4px -4px hsla(0, 0%, 30%, .9), 5px -5px hsla(0, 0%, 30%, 1.0);">Ghost</div>	
									<div style="color: rgb(255, 255, 255); background-color: rgb(247, 193, 193); text-shadow: rgb(122, 122, 122) 4px 3px 0px;">Candy</div>
									<div style="color: #e0dfdc; background-color: #567; letter-spacing: .1em; text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9);">Deep</div>
									<a class="body-text blue-text" title="CSS Text Shadow Generator" href="https://html-css-js.com/css/generator/text-shadow/" target="_blank" rel="nofollow">more...</a>
								    </div>

                                    <Result-Tab />
                                </div>

							</div>
						</div>
                </div>
            </template>
        </Section>
    </div>
</template>


<style scoped>
#textShadowGallery > div {
    cursor: pointer;
    display: inline-block;
    padding: 0px 3px 4px;
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
    border-radius: 6px;
    margin: 1px 3px 3px 1px;
    border: 1px solid #888;
    text-align: center;
    overflow: hidden;
    vertical-align: middle;
}
</style>
