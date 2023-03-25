<template>
    <div>
        <Section>
            <template v-slot:header>Border / Outline</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5">
							<div class="dividedControlsWrap clearfix">
								<div class="dividedControlsLeft">
                                    <!-- image url -->
                                <!-- preview -->
									<div class="w-full h-[100px] mb-4 bg-[#eee]">
										<div class="font-bold body-text text-center text-white h-full flex items-center justify-center">
											Preview
                                        </div>
									</div>

                                <div class="w-full flex justify-center items-center gap-2 text-[13px] mb-4">
                                    <button class="px-4 rounded hover:light-blue-bg">Border</button>
                                    <button class="px-4 rounded hover:light-blue-bg">Outline</button>
                                </div>

                                    <!-- width -->
									<div class="settingRow">
										<div class="settingRowLabel">
											width:
										</div>
                                        <div>
                                        <Long-Slider />
                                        </div>
									</div>

                                    <!-- repeat	-->
									<div class="settingRow">
										<div class="settingRowLabel">
											Repeat:
										</div>
										<div class="settingRowInput">
											<div id="borderStyles">
														<a style="border-style: solid;" title="solid" class="">solid</a>
														<a style="border-style: dotted;" title="dotted" class="selected">dotted</a>
														<a style="border-style: dashed;" title="dashed">dashed</a>
														<a style="border-style: double;" title="double">double</a>
														<a style="border-style: groove;" title="groove">groove</a>
														<a style="border-style: ridge;" title="ridge">ridge</a>
														<a style="border-style: inset;" title="inset">inset</a>
														<a style="border-style: outset;" title="outset">outset</a>
														<a style="border-style: hidden;" title="hidden">hidden</a>
														<a style="border-style: none;" title="none">none</a>
											</div>
										</div>
									</div>


                                    <!-- color -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Color:
										</div>
										<div class="settingRowInput flex">
											<input class="jscolor" id="backgroundColor" value="D0E4F5" autocomplete="off" style="background-image: none; background-color: rgb(208, 228, 245); color: rgb(0, 0, 0); padding: 2px 5px;">
										
                                        <Slider/>
										</div>
									</div>


                                    
                                    <!-- position -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Position:
										</div>
                                       <div class="settingRowInput">
											<div id="whichBorder" class="body-text">
												<a class="selected" title="border" style="border: 4px solid #1C6EA4;">All</a>
												<a title="border-top" style="border-top: 4px solid #1C6EA4;">Top</a>
												<a title="border-right" style="border-right: 4px solid #1C6EA4;">Right</a>
												<a title="border-bottom" style="border-bottom: 4px solid #1C6EA4;">Bottom</a>
												<a title="border-left" style="border-left: 4px solid #1C6EA4;">Left</a>									
											</div>
										</div>
									</div>												
								</div>


                                <!-- oneline -->
                                <Result-Tab>
                                    <template v-slot:default>
			<label class="text-white float-right"><input type="checkbox" name="backgroundOneLine" id="backgroundOneLine" value="value" checked="">&nbsp;One line&nbsp;</label>
                                    </template>
                                </Result-Tab>
							</div>
						</div>
                </div>
            </template>
        </Section>
    </div>
</template>

<script>

export default ({
    data() {
        return{
            background:{
                color: 0,
            }
        }
    },
})
</script>


<style scoped>

#borderStyles > a {
    display: inline-block;
    border: 4px solid #1C6EA4;
    margin: 1px;
    cursor: pointer;
    color: #333;
    padding: 0 4px;
    height: 24px;
    font-size: 12px;
    text-align: center;
    background-color: #eee;
}

#whichBorder > a {
    display: inline-block;
    margin: 1px;
    cursor: pointer;
    color: #333;
    padding: 0 8px;
    font-size: 12px;
    text-align: center;
    background-color: #eee;
}
</style>