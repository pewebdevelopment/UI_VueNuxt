<template>
    <div>
        <Section>
            <template v-slot:header>
                Properties
            </template>
            <template v-slot:content>
               <div class="flex items-center justify-between px-2.5 h-[200px] overflow-auto">
<div class="descriptionListing">
								<div class="text-grid"><span class="section-bold-text">align-content</span><em class="section-italic-text">behavior of the flex-wrap property </em></div>
								<div class="text-grid"><span class="section-bold-text">align-items</span><em class="section-italic-text">alignment for items inside the container </em></div>
								<div class="text-grid"><span class="section-bold-text">align-self</span><em class="section-italic-text">alignment for the selected item </em></div>
								<div class="text-grid"><span class="section-bold-text">all</span><em class="section-italic-text">changes all properties </em></div>
								<div class="text-grid"><span class="section-bold-text">animation</span><em class="section-italic-text">binds an animation to an element </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-delay</span><em class="section-italic-text">delays animation start </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-direction</span><em class="section-italic-text">reverse animation or in alternate cycles </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-duration</span><em class="section-italic-text">animation duration in seconds or ms </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-fill-mode</span><em class="section-italic-text">style when the animation is not playing  </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-iteration-count</span><em class="section-italic-text">number of an animation replays </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-name</span><em class="section-italic-text">name for the @keyframes animation </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-play-state</span><em class="section-italic-text">the animation is running or paused </em></div>
								<div class="text-grid"><span class="section-bold-text">animation-timing-function</span><em class="section-italic-text">speed curve of an animation </em></div>
								<div class="text-grid"><span class="section-bold-text">backface-visibility</span><em class="section-italic-text">is element visible when not facing the screen </em></div>
								<div class="text-grid"><span class="section-bold-text">background</span><em class="section-italic-text">all background properties in one declaration </em></div>
								<div class="text-grid"><span class="section-bold-text">background-attachment</span><em class="section-italic-text">is the background image fixed or scrolls</em></div>
								<div class="text-grid"><span class="section-bold-text">background-blend-mode</span><em class="section-italic-text">blending mode of each background layer </em></div>
								<div class="text-grid"><span class="section-bold-text">background-clip</span><em class="section-italic-text">painting area of the background </em></div>
								<div class="text-grid"><span class="section-bold-text">background-color</span><em class="section-italic-text">background color </em></div>
								<div class="text-grid"><span class="section-bold-text">background-image</span><em class="section-italic-text">background image </em></div>
								<div class="text-grid"><span class="section-bold-text">background-origin</span><em class="section-italic-text">where the background image is positioned </em></div>
								<div class="text-grid"><span class="section-bold-text">background-position</span><em class="section-italic-text">starting position of the background image </em></div>
								<div class="text-grid"><span class="section-bold-text">background-repeat</span><em class="section-italic-text">the way the background image is repeated </em></div>
								<div class="text-grid"><span class="section-bold-text">background-size</span><em class="section-italic-text">background image size </em></div>
								<div class="text-grid"><span class="section-bold-text">border</span><em class="section-italic-text">sets all border properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">border-bottom</span><em class="section-italic-text">bottom border properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">border-bottom-color</span><em class="section-italic-text">color of the bottom border</em></div>
								<div class="text-grid"><span class="section-bold-text">border-bottom-left-radius</span><em class="section-italic-text">border bottom left radius </em></div>
								<div class="text-grid"><span class="section-bold-text">border-bottom-right-radius</span><em class="section-italic-text">border bottom right radius </em></div>
								<div class="text-grid"><span class="section-bold-text">border-bottom-style</span><em class="section-italic-text">border bottom style </em></div>
								<div class="text-grid"><span class="section-bold-text">border-bottom-width</span><em class="section-italic-text">border bottom width</em></div>
								<div class="text-grid"><span class="section-bold-text">border-collapse</span><em class="section-italic-text">border collapse</em></div>
								<div class="text-grid"><span class="section-bold-text">border-color</span><em class="section-italic-text">border color </em></div>
								<div class="text-grid"><span class="section-bold-text">border-image</span><em class="section-italic-text">sets an image as border</em></div>
								<div class="text-grid"><span class="section-bold-text">border-image-outset</span><em class="section-italic-text">border image area extends beyond the border box </em></div>
								<div class="text-grid"><span class="section-bold-text">border-image-repeat</span><em class="section-italic-text">border image repeated, rounded or stretched</em></div>
								<div class="text-grid"><span class="section-bold-text">border-image-slice</span><em class="section-italic-text">how to slice the border image </em></div>
								<div class="text-grid"><span class="section-bold-text">border-image-source</span><em class="section-italic-text">path to the border image </em></div>
								<div class="text-grid"><span class="section-bold-text">border-image-width</span><em class="section-italic-text">border image width </em></div>
								<div class="text-grid"><span class="section-bold-text">border-left</span><em class="section-italic-text">left border properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">border-left-color</span><em class="section-italic-text">border left color </em></div>
								<div class="text-grid"><span class="section-bold-text">border-left-style</span><em class="section-italic-text">border left style </em></div>
								<div class="text-grid"><span class="section-bold-text">border-left-width</span><em class="section-italic-text">border left width </em></div>
								<div class="text-grid"><span class="section-bold-text">border-radius</span><em class="section-italic-text">border radius of the four rounded corners</em></div>
								<div class="text-grid"><span class="section-bold-text">border-right</span><em class="section-italic-text">right border properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">border-right-color</span><em class="section-italic-text">border right color </em></div>
								<div class="text-grid"><span class="section-bold-text">border-right-style</span><em class="section-italic-text">border right style </em></div>
								<div class="text-grid"><span class="section-bold-text">border-right-width</span><em class="section-italic-text">border right width </em></div>
								<div class="text-grid"><span class="section-bold-text">border-spacing</span><em class="section-italic-text">border spacing </em></div>
								<div class="text-grid"><span class="section-bold-text">border-style</span><em class="section-italic-text">border style </em></div>
								<div class="text-grid"><span class="section-bold-text">border-top</span><em class="section-italic-text">top border properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">border-top-color</span><em class="section-italic-text">border top color </em></div>
								<div class="text-grid"><span class="section-bold-text">border-top-left-radius</span><em class="section-italic-text">border top left radius </em></div>
								<div class="text-grid"><span class="section-bold-text">border-top-right-radius</span><em class="section-italic-text">border top right radius </em></div>
								<div class="text-grid"><span class="section-bold-text">border-top-style</span><em class="section-italic-text">border top style </em></div>
								<div class="text-grid"><span class="section-bold-text">border-top-width</span><em class="section-italic-text">border top width </em></div>
								<div class="text-grid"><span class="section-bold-text">border-width</span><em class="section-italic-text">border width </em></div>
								<div class="text-grid"><span class="section-bold-text">bottom</span><em class="section-italic-text">bottom offset for relative and absolute elements </em></div>
								<div class="text-grid"><span class="section-bold-text">box-shadow</span><em class="section-italic-text">shadow to element </em></div>
								<div class="text-grid"><span class="section-bold-text">box-sizing</span><em class="section-italic-text">box sizing properties</em></div>
								<div class="text-grid"><span class="section-bold-text">caption-side</span><em class="section-italic-text">placement of a table caption </em></div>
								<div class="text-grid"><span class="section-bold-text">clear</span><em class="section-italic-text">deny floating of an element </em></div>
								<div class="text-grid"><span class="section-bold-text">clip</span><em class="section-italic-text">clip an absolutely positioned element </em></div>
								<div class="text-grid"><span class="section-bold-text">color</span><em class="section-italic-text">text color</em></div>
								<div class="text-grid"><span class="section-bold-text">column-count</span><em class="section-italic-text">divide the content in columns</em></div>
								<div class="text-grid"><span class="section-bold-text">column-fill</span><em class="section-italic-text">balanced fill or not </em></div>
								<div class="text-grid"><span class="section-bold-text">column-gap</span><em class="section-italic-text">gap between the columns </em></div>
								<div class="text-grid"><span class="section-bold-text">column-rule</span><em class="section-italic-text">separator between columns, like border </em></div>
								<div class="text-grid"><span class="section-bold-text">column-rule-color</span><em class="section-italic-text">column rule color </em></div>
								<div class="text-grid"><span class="section-bold-text">column-rule-style</span><em class="section-italic-text">column rule style </em></div>
								<div class="text-grid"><span class="section-bold-text">column-rule-width</span><em class="section-italic-text">column rule width </em></div>
								<div class="text-grid"><span class="section-bold-text">column-span</span><em class="section-italic-text"> column span</em></div>
								<div class="text-grid"><span class="section-bold-text">column-width</span><em class="section-italic-text">column width </em></div>
								<div class="text-grid"><span class="section-bold-text">columns</span><em class="section-italic-text">set column-width and column-count </em></div>
								<div class="text-grid"><span class="section-bold-text">content</span><em class="section-italic-text">insert content :before and :after elements </em></div>
								<div class="text-grid"><span class="section-bold-text">counter-increment</span><em class="section-italic-text">count sections </em></div>
								<div class="text-grid"><span class="section-bold-text">counter-reset</span><em class="section-italic-text">reset counter </em></div>
								<div class="text-grid"><span class="section-bold-text">cursor</span><em class="section-italic-text">cursor type when element is hovered </em></div>
								<div class="text-grid"><span class="section-bold-text">direction</span><em class="section-italic-text">writing direction, Arabic is using rtl </em></div>
								<div class="text-grid"><span class="section-bold-text">display</span><em class="section-italic-text">box display type </em></div>
								<div class="text-grid"><span class="section-bold-text">empty-cells</span><em class="section-italic-text">hide borders and background on empty table cells </em></div>
								<div class="text-grid"><span class="section-bold-text">filter</span><em class="section-italic-text">image effects: grayscale, blur, invert etc. </em></div>
								<div class="text-grid"><span class="section-bold-text">flex</span><em class="section-italic-text">item length, relative to others inside the container </em></div>
								<div class="text-grid"><span class="section-bold-text">flex-basis</span><em class="section-italic-text">initial length of a flexible item </em></div>
								<div class="text-grid"><span class="section-bold-text">flex-direction</span><em class="section-italic-text">direction of the flexible items </em></div>
								<div class="text-grid"><span class="section-bold-text">flex-flow</span><em class="section-italic-text">shorthand for flex-direction and flex-wrap  </em></div>
								<div class="text-grid"><span class="section-bold-text">flex-grow</span><em class="section-italic-text">how much the item will grow relative other items </em></div>
								<div class="text-grid"><span class="section-bold-text">flex-shrink</span><em class="section-italic-text">how to shrink the item relative to other items </em></div>
								<div class="text-grid"><span class="section-bold-text">flex-wrap</span><em class="section-italic-text">wrap flexible items </em></div>
								<div class="text-grid"><span class="section-bold-text">float</span><em class="section-italic-text">float elements left or right </em></div>
								<div class="text-grid"><span class="section-bold-text">font</span><em class="section-italic-text">all font properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">@font-face</span><em class="section-italic-text">declare non-web-safe fonts</em></div>
								<div class="text-grid"><span class="section-bold-text">font-family</span><em class="section-italic-text">font of the element </em></div>
								<div class="text-grid"><span class="section-bold-text">font-size</span><em class="section-italic-text">font size </em></div>
								<div class="text-grid"><span class="section-bold-text">font-size-adjust</span><em class="section-italic-text">control font size if the first declared option is not available </em></div>
								<div class="text-grid"><span class="section-bold-text">font-stretch</span><em class="section-italic-text">widen or narrow text </em></div>
								<div class="text-grid"><span class="section-bold-text">font-style</span><em class="section-italic-text">font style: normal, italic, oblique </em></div>
								<div class="text-grid"><span class="section-bold-text">font-variant</span><em class="section-italic-text">set small-caps </em></div>
								<div class="text-grid"><span class="section-bold-text">font-weight</span><em class="section-italic-text">use bold or thin characters </em></div>
								<div class="text-grid"><span class="section-bold-text">hanging-punctuation</span><em class="section-italic-text">can a punctuation mark be placed outside the line box?  </em></div>
								<div class="text-grid"><span class="section-bold-text">height</span><em class="section-italic-text">height of the element </em></div>
								<div class="text-grid"><span class="section-bold-text">justify-content</span><em class="section-italic-text">justifies flexible container's items horizontally if necessary  </em></div>
								<div class="text-grid"><span class="section-bold-text">@keyframes</span><em class="section-italic-text">specifies the animation code </em></div>
								<div class="text-grid"><span class="section-bold-text">left</span><em class="section-italic-text">left offset for relative and absolute elements </em></div>
								<div class="text-grid"><span class="section-bold-text">letter-spacing</span><em class="section-italic-text">space between characters  </em></div>
								<div class="text-grid"><span class="section-bold-text">line-height</span><em class="section-italic-text">line height of text or inline-block elements</em></div>
								<div class="text-grid"><span class="section-bold-text">list-style</span><em class="section-italic-text">all list properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">list-style-image</span><em class="section-italic-text">replace the list item marker with an image </em></div>
								<div class="text-grid"><span class="section-bold-text">list-style-position</span><em class="section-italic-text">list item markers inside or outside the content flow </em></div>
								<div class="text-grid"><span class="section-bold-text">list-style-type</span><em class="section-italic-text">set the type of the list item marker </em></div>
								<div class="text-grid"><span class="section-bold-text">margin</span><em class="section-italic-text">set the top, right, bottom and left margins in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">margin-bottom</span><em class="section-italic-text">bottom margin </em></div>
								<div class="text-grid"><span class="section-bold-text">margin-left</span><em class="section-italic-text">left margin </em></div>
								<div class="text-grid"><span class="section-bold-text">margin-right</span><em class="section-italic-text">right margin </em></div>
								<div class="text-grid"><span class="section-bold-text">margin-top</span><em class="section-italic-text">margin top </em></div>
								<div class="text-grid"><span class="section-bold-text">max-height</span><em class="section-italic-text">maximum height of element </em></div>
								<div class="text-grid"><span class="section-bold-text">max-width</span><em class="section-italic-text">maximum width of element </em></div>
								<div class="text-grid"><span class="section-bold-text">@media</span><em class="section-italic-text">see media queries </em></div>
								<div class="text-grid"><span class="section-bold-text">min-height</span><em class="section-italic-text">minimum height </em></div>
								<div class="text-grid"><span class="section-bold-text">min-width</span><em class="section-italic-text">minimum width </em></div>
								<div class="text-grid"><span class="section-bold-text">nav-down</span><em class="section-italic-text">where to navigate when the the arrow-down button is pressed </em></div>
								<div class="text-grid"><span class="section-bold-text">nav-index</span><em class="section-italic-text">sets sequential navigation order  </em></div>
								<div class="text-grid"><span class="section-bold-text">nav-left</span><em class="section-italic-text">where to navigate when the the arrow-left button is pressed </em></div>
								<div class="text-grid"><span class="section-bold-text">nav-right</span><em class="section-italic-text">where to navigate when the the arrow-right button is pressed </em></div>
								<div class="text-grid"><span class="section-bold-text">nav-up</span><em class="section-italic-text">where to navigate when the the arrow-up button is pressed </em></div>
								<div class="text-grid"><span class="section-bold-text">opacity</span><em class="section-italic-text">transparency level of an element </em></div>
								<div class="text-grid"><span class="section-bold-text">order</span><em class="section-italic-text">reorder elements in a container </em></div>
								<div class="text-grid"><span class="section-bold-text">outline</span><em class="section-italic-text">drow an outer border around elements </em></div>
								<div class="text-grid"><span class="section-bold-text">outline-color</span><em class="section-italic-text">outline color </em></div>
								<div class="text-grid"><span class="section-bold-text">outline-offset</span><em class="section-italic-text">gap between the element and the outline </em></div>
								<div class="text-grid"><span class="section-bold-text">outline-style</span><em class="section-italic-text">outline style </em></div>
								<div class="text-grid"><span class="section-bold-text">outline-width</span><em class="section-italic-text">outline width </em></div>
								<div class="text-grid"><span class="section-bold-text">overflow</span><em class="section-italic-text">hide, display or scroll if the content overflows its container  </em></div>
								<div class="text-grid"><span class="section-bold-text">overflow-x</span><em class="section-italic-text">horizontal overflow </em></div>
								<div class="text-grid"><span class="section-bold-text">overflow-y</span><em class="section-italic-text">vertical overflow </em></div>
								<div class="text-grid"><span class="section-bold-text">padding</span><em class="section-italic-text">padding between the element border and content</em></div>
								<div class="text-grid"><span class="section-bold-text">padding-bottom</span><em class="section-italic-text">padding bottom </em></div>
								<div class="text-grid"><span class="section-bold-text">padding-left</span><em class="section-italic-text">padding left </em></div>
								<div class="text-grid"><span class="section-bold-text">padding-right</span><em class="section-italic-text">padding right </em></div>
								<div class="text-grid"><span class="section-bold-text">padding-top</span><em class="section-italic-text">padding top </em></div>
								<div class="text-grid"><span class="section-bold-text">page-break-after</span><em class="section-italic-text">adds page break after an element </em></div>
								<div class="text-grid"><span class="section-bold-text">page-break-before</span><em class="section-italic-text">adds page break before an element </em></div>
								<div class="text-grid"><span class="section-bold-text">page-break-inside</span><em class="section-italic-text">allow page break inside an element </em></div>
								<div class="text-grid"><span class="section-bold-text">perspective</span><em class="section-italic-text">how many pixels the 3D element is placed from the view </em></div>
								<div class="text-grid"><span class="section-bold-text">perspective-origin</span><em class="section-italic-text">where is the 3D element based in the x- and y-axis </em></div>
								<div class="text-grid"><span class="section-bold-text">position</span><em class="section-italic-text">positioning type: absolute, fixed, relative, static</em></div>
								<div class="text-grid"><span class="section-bold-text">quotes</span><em class="section-italic-text">set quotation marks to wrap an element </em></div>
								<div class="text-grid"><span class="section-bold-text">resize</span><em class="section-italic-text">declare resizable elements </em></div>
								<div class="text-grid"><span class="section-bold-text">right</span><em class="section-italic-text">right offset for relative and absolute elements </em></div>
								<div class="text-grid"><span class="section-bold-text">tab-size</span><em class="section-italic-text">tab character space length </em></div>
								<div class="text-grid"><span class="section-bold-text">table-layout</span><em class="section-italic-text">table layout algorithm </em></div>
								<div class="text-grid"><span class="section-bold-text">text-align</span><em class="section-italic-text">horizontal alignment of text </em></div>
								<div class="text-grid"><span class="section-bold-text">text-align-last</span><em class="section-italic-text">horizontal alignment of last line of text </em></div>
								<div class="text-grid"><span class="section-bold-text">text-decoration</span><em class="section-italic-text">overline, underline or line-through the text </em></div>
								<div class="text-grid"><span class="section-bold-text">text-indent</span><em class="section-italic-text">indentation of the first line of the text </em></div>
								<div class="text-grid"><span class="section-bold-text">text-overflow</span><em class="section-italic-text">the way how overflowed content is marked (ellipsis) </em></div>
								<div class="text-grid"><span class="section-bold-text">text-shadow</span><em class="section-italic-text">text shadow </em></div>
								<div class="text-grid"><span class="section-bold-text">text-transform</span><em class="section-italic-text">capitalization of text </em></div>
								<div class="text-grid"><span class="section-bold-text">top</span><em class="section-italic-text">top offset for relative and absolute elements </em></div>
								<div class="text-grid"><span class="section-bold-text">transform</span><em class="section-italic-text">2D 3D transformation. See widget. </em></div>
								<div class="text-grid"><span class="section-bold-text">transform-origin</span><em class="section-italic-text">changes the position of transformed elements </em></div>
								<div class="text-grid"><span class="section-bold-text">transform-style</span><em class="section-italic-text">render nested elements in 3D </em></div>
								<div class="text-grid"><span class="section-bold-text">transition</span><em class="section-italic-text">transition properties in one line </em></div>
								<div class="text-grid"><span class="section-bold-text">transition-delay</span><em class="section-italic-text">delay before transition effect start </em></div>
								<div class="text-grid"><span class="section-bold-text">transition-duration</span><em class="section-italic-text">transition effect duration </em></div>
								<div class="text-grid"><span class="section-bold-text">transition-property</span><em class="section-italic-text">which CSS property is the transition affecting </em></div>
								<div class="text-grid"><span class="section-bold-text">transition-timing-function</span><em class="section-italic-text">speed curve of the transition </em></div>
								<div class="text-grid"><span class="section-bold-text">unicode-bidi</span><em class="section-italic-text">should the text be overridden to support more languages </em></div>
								<div class="text-grid"><span class="section-bold-text">user-select</span><em class="section-italic-text">disable user content selection </em></div>
								<div class="text-grid"><span class="section-bold-text">vertical-align</span><em class="section-italic-text">vertical alignment </em></div>
								<div class="text-grid"><span class="section-bold-text">visibility</span><em class="section-italic-text">visibility:hidden elements leave a gap  </em></div>
								<div class="text-grid"><span class="section-bold-text">white-space</span><em class="section-italic-text">how are white-spaces handled </em></div>
								<div class="text-grid"><span class="section-bold-text">width</span><em class="section-italic-text">width of an element </em></div>
								<div class="text-grid"><span class="section-bold-text">word-break</span><em class="section-italic-text">text breaking rules when text reaches the end of the container </em></div>
								<div class="text-grid"><span class="section-bold-text">word-spacing</span><em class="section-italic-text">size of white space between words </em></div>
								<div class="text-grid"><span class="section-bold-text">word-wrap</span><em class="section-italic-text">break long words and wrap onto the next line </em></div>
								<div class="text-grid"><span class="section-bold-text">z-index</span><em class="section-italic-text">stack order of the element </em></div>
							</div>
               </div>
            </template>
        </Section>
    </div>
</template>