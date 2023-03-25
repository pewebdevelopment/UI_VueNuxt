<template>
    <div>
        <Section>
            <template v-slot:header>Button Generator</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5">
							<div class="dividedControlsWrap clearfix">
								<div class="dividedControlsLeft">
                                    <!-- color -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Color:
										</div>
										<!-- <div class="settingRowInput flex"> -->
											<input class="jscolor h-[21px] ml-2" id="backgroundColor" value="" autocomplete="off" style="background-image: none; background-color: rgb(208, 228, 245); color: rgb(0, 0, 0); padding: 2px 5px;">
										<!-- </div> -->
									</div>		

                                    <!-- size -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Size:
										</div>
										<Long-Slider />
									</div>

                                    <!-- padding -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Padding:
										</div>
										<Long-Slider />
									</div>

                                    <!-- radius -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Radius:
										</div>
										<Long-Slider />
									</div>
												
								</div>

                                <div class="body-text pt-[5px] mb-10">
								Change gradient, shadow, font and border in other panels.
								</div>

                                <!-- preview -->
								<div class="flex justify-center items-start h-20 w-full">
                                    <button class="inline-block">Css Button</button>
								</div>

                                <!-- oneline -->
                                <Result-Tab />
							</div>
						</div>
                </div>
            </template>
        </Section>
    </div>
</template>