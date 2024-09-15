<template>
    <div>
        <Section>
            <template v-slot:header>Font Generator</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5">
							<div class="dividedControlsWrap clearfix">
								<div class="dividedControlsLeft">

                                    <div class="mb-2 flex flex-col relative">
                                        <label class="body-text relative right-0"><input name="fontLightBoxBackground" value="value" checked="" type="checkbox">&nbsp;Light background&nbsp;</label>
                                        <div class="text-center h-[100px] px-3">
										Grumpy wizards make toxic brew for the evil Queen and Jack.
                                        </div>
                                    </div>
                                    
	                                <!-- font -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Font:
										</div>
                                        <div class="w-12/12">
                                          	<Select class="w-[280px] body-text h-[20px] bg-[#eee] relative">
												<option style="font-family: Georgia, serif">
													Georgia
												</option>
                                                <option class="relative">
													 <option value="Georgia" style="font-family: Georgia, serif">Georgia</option>
													 <option value="Palatino" style="font-family: &quot;Palatino Linotype&quot;, &quot;Book Antiqua&quot;, Palatino, serif">Palatino</option>
													 <option value="Times New Roman" style="font-family: &quot;Times New Roman&quot;, Times, serif">Times New Roman</option>
													 <option value="Arial" style="font-family: Arial, Helvetica, sans-serif">Arial</option>
													 <option value="Arial Black" style="font-family: &quot;Arial Black&quot;, Gadget, sans-serif">Arial Black</option>
													 <option value="Comic Sans" style="font-family: &quot;Comic Sans MS&quot;, cursive, sans-serif">Comic Sans</option>
													 <option value="Impact" style="font-family: Impact, Charcoal, sans-serif">Impact</option>
													 <option value="Lucida Sans" style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif">Lucida Sans</option>
													 <option value="Tahoma" style="font-family: Tahoma, Geneva, sans-serif">Tahoma</option>
													 <option value="Trebuchet" style="font-family: &quot;Trebuchet MS&quot;, Helvetica, sans-serif">Trebuchet</option>
													 <option value="Verdana" style="font-family: Verdana, Geneva, sans-serif">Verdana</option>
													 <option value="Courier" style="font-family: &quot;Courier New&quot;, Courier, monospace">Courier</option>
													 <option value="Lucida Console" style="font-family: &quot;Lucida Console&quot;, Monaco, monospace">Lucida Console</option>
                                                </option>    
                                            </Select>    
                                        </div>
  
									</div>
									

                                    <!-- size -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Size:
										</div>
										<Long-Slider />
									</div>

                                    <!-- letter spc -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Letter spc:
										</div>
										<Long-Slider />
									</div>

                                    <!-- word spc -->
									<div class="settingRow">
										<div class="settingRowLabel">
                                            word spc:
										</div>
										<Long-Slider />
									</div>

									<!-- color -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Color:
										</div>
										<!-- <div class="settingRowInput flex"> -->
											<input class="jscolor h-[21px] ml-2" id="backgroundColor" value="" autocomplete="off" style="background-image: none; background-color: rgb(208, 228, 245); color: rgb(0, 0, 0); padding: 2px 5px;">
										<!-- </div> -->
									</div>

                                    <!-- weight	-->
									<div class="settingRow">
										<div class="settingRowLabel">
											Weight:
										</div>
										<div class="settingRowInput">
											<div id="backgroundRepeatSelect">
                                                <a style="font-weight: normal;" class="selectedTextDecoration">Normal</a>
                                                <a style="font-weight: bold;">Bold</a>
											</div>
										</div>
									</div>

                                    <!-- decoration	-->
									<div class="settingRow">
										<div class="settingRowLabel">
											Decoration:
										</div>
										<div class="settingRowInput">
											<div id="backgroundRepeatSelect">
												<a style="text-decoration: none;" class="selectedTextDecoration">None</a>
												<a style="text-decoration: underline;">Under</a>										
												<a style="text-decoration: overline;">Over</a>
												<a style="text-decoration: line-through;">Through</a>
											</div>
										</div>
									</div>

                                    <!-- style	-->
									<div class="settingRow">
										<div class="settingRowLabel">
											Style:
										</div>
										<div class="settingRowInput">
											<div id="backgroundRepeatSelect">
												<a style="font-style: normal;" class="selectedTextDecoration">Normal</a>
												<a style="font-style: unset;">Unset</a>
												<a style="font-style: italic;">Italic</a>										
												<a style="font-style: oblique;">Oblique</a>
											</div>
										</div>
									</div>

                                    <!-- variant	-->
									<div class="settingRow">
										<div class="settingRowLabel">
											Variant:
										</div>
										<div class="settingRowInput">
											<div id="backgroundRepeatSelect">
												<a style="font-variant: normal;" class="selectedTextDecoration">Normal</a>
												<a style="font-variant: small-caps;">Small caps</a>
											</div>
										</div>
									</div>

                                    <!-- case	-->
									<div class="settingRow">
										<div class="settingRowLabel">
											Case:
										</div>
										<div class="settingRowInput">
											<div id="backgroundRepeatSelect">
												<a style="text-transform: none;" class="selectedTextDecoration">none</a>
												<a style="text-transform: uppercase;">upper</a>
												<a style="text-transform: lowercase;">lower</a>
												<a style="text-transform: capitalize;">capital</a>
											</div>
										</div>
									</div>

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

#backgroundRepeatSelect > a, #backgroundAttachmentSelect > a {
    display: inline-block;
    padding: 0px 3px;
    border: 1px solid #999;
    cursor: pointer;
    color: #333;
    border-radius: 5px;
    margin-bottom: 2px;
    margin-right: 8px;
}

#backgroundRepeatSelect a, #backgroundAttachmentSelect a {
    font-size: 12px;
}

</style>