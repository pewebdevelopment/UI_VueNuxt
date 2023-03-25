<template>
    <div>
        <Section>
            <template v-slot:header>Box Shadow</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5">
							<div class="flex">

								<div class="mb-2">
                                    
                                    <!-- right -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Right:
										</div>
										<Slider />
									</div>	

                                    <!-- down -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Down:
										</div>
										<Slider />
									</div>

                                    <!-- spread -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Spread:
										</div>
										<Slider />
									</div>

                                    <!-- blur -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Blur:
										</div>
										<Slider />
									</div>

                                    <!-- opacity -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Opacity:
										</div>
										<Slider />
									</div>

                                    <!-- inset -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Inset:
										</div>
										<input type="checkbox" />
									</div>

                                    <!-- color -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Color:
										</div>
											<input class="jscolor h-[21px] ml-2" id="backgroundColor" value="" autocomplete="off" style="background-image: none; background-color: rgb(208, 228, 245); color: rgb(0, 0, 0); padding: 2px 5px;">
									</div>
												
								</div>


                                <!-- preview -->
								<div class="flex flex-col justify-start items-end p-3">
			                        <label class="text-[#333] body-text float-right"><input type="checkbox" name="backgroundOneLine" id="backgroundOneLine" value="value" checked="">&nbsp;Light background&nbsp;</label>
                                        <!-- preview -->
                                       <div class="ml-2.5 blue-background h-[110px] body-text w-full text-white text-center pt-10">
                                           Preview
                                           <div id="gradientPreview" class="ui-resizable" style="">
	                                   	   <div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
                                           <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                                           <div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div>
                                           </div>
                                       </div>
								</div>
							</div>
                                    <Result-Tab />

						</div>
                </div>
            </template>
        </Section>
    </div>
</template>


<style scoped>
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
