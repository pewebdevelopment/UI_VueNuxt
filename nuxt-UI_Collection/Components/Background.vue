<template>
    <div>
        <Section>
            <template v-slot:header>Backgorund</template>
            <template v-slot:content>
                <div>
                    <div class="panelInner p-2.5">
							<div class="dividedControlsWrap clearfix">
								<div class="dividedControlsLeft">
                                    <!-- image url -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Image URL:
										</div>
										<div class="settingRowInput flex flex-col">
											<input id="backgroundImageUrl" value="https://htmlcheatsheet.com/images/logo-css.png">
											<span id="backgroundImageNone">&nbsp;none&nbsp;</span>
										</div>
									</div>

                                    <!-- position -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Position:
										</div>
										<div class="settingRowInput flex items-end">
											<div id="backgroundPositionSelect" class="">
												<div>
													<a style="background-position: left top;" title="left top">
													</a>
													<a style="background-position: center top;" title="center top">
													</a>
													<a style="background-position: right top;" title="right top">
													</a>
												</div>
												<div>
													<a style="background-position: left center;" title="left center">
													</a>
													<a style="background-position: center center;" title="center center">
													</a>
													<a style="background-position: right center;" title="right center">
													</a>
												</div>
												<div>
													<a style="background-position: left bottom;" title="left bottom">
													</a>
													<a style="background-position: center bottom;" title="center bottom">
													</a>
													<a style="background-position: right bottom;" title="right bottom">
													</a>
												</div>
											</div>
											<div class="ml-3">
												<table>
													<tbody>
														<tr>
															<td class="text-[13px]">X:&nbsp;</td>
															<td>
																<Slider/>
															</td>
														</tr>
														<tr>
															<td class="text-[13px]">Y:&nbsp;</td>
															<td>
																<Slider/>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>

                                    <!-- repeat	-->
									<div class="settingRow">
										<div class="settingRowLabel">
											Repeat:
										</div>
										<div class="settingRowInput">
											<div id="backgroundRepeatSelect">
												<a style="background-repeat: no-repeat" class="selected">no</a>
												<a style="background-repeat: repeat">repeat</a>
												<a style="background-repeat: repeat-x">repeat-x</a>
												<a style="background-repeat: repeat-y">repeat-y</a>
											</div>
										</div>
									</div>

                                    <!-- attachment -->
									<div class="settingRow">
										<div class="settingRowLabel">
											Attachment:
										</div>
										<div class="settingRowInput">
											<div id="backgroundAttachmentSelect">
												<a style="background-attachment: scroll;" class="selected">scroll</a>
												<a style="background-attachment: fixed;">fixed</a>
												<a style="background-attachment: local">local</a>
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
								</div>

                                <!-- preview -->
								<div class="dividedControlsRight">
									<div id="backgroundPreviewWrap">
										<div id="backgroundPeview" class="font-bold text-[20px] text-center" style="background: url(&quot;https://htmlcheatsheet.com/images/logo-css.png&quot;) 0px 0px no-repeat scroll rgb(208, 228, 245);">
											Preview
										<div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90;"></div></div>
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
#backgroundPositionSelect > div > a {
    display: block;
    float: left;
    border: 1px solid #999;
    width: 18px;
    height: 18px;
    background: url(/images/backgroundDot.png) no-repeat transparent;
    cursor: pointer;
}

#backgroundPositionSelect {
	max-width: 80px;
	/* height: 80px; */
    display: inline-flex;
    flex-direction: column;
    border: 1px solid #999;
}

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