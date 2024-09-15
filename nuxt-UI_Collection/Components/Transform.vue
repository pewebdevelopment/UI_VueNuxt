<template>
    <div>
        <Section>
            <template v-slot:header>Transform</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5 body-text">
							<div class="dividedControlsWrap">
								<div class="dividedControlsLeft">

                                    <!-- Scale -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Scale:
										</div>
										<Slider />
            <input type="number" placeholder="0">
            x
									</div>

                                    <!-- rotate -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Rotate:
										</div>
										<Slider />
            <input type="number" placeholder="0">
            deg

									</div>

                                    <!-- x -->
									<div class="settingRow">
										<div class="settingRowLabel">
											X:
										</div>
										<Slider />
            <input type="number" placeholder="0">
            px
									</div>

                                    <!-- y -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Y:
										</div>
										<Slider />
            <input type="number" placeholder="0">
            px
									</div>

                                    <!-- skew X -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Skew X:
										</div>
										<Slider />
            <input type="number" placeholder="0">
            deg
									</div>

                                    <!-- skew y -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Skew Y:
										</div>
										<Slider />
            <input type="number" placeholder="0">
            deg
									</div>
								</div>


                                <!-- preview -->
								<div class="flex justify-center items-start mb-10 mt-3 w-full">
                                    <button class="inline-block w-[140px] h-[60px] blue-background text-white rounded-md">Preview</button>
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


<style scoped>
input {
    width: 77px;
    height: 21px;
    border: 1px solid #ccc;
    margin: 0px 5px;
}
</style>