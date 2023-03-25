<template>
    <div>
        <Section>
            <template v-slot:header>
                Properties
            </template>
            <template v-slot:content>
               <div class="flex items-center justify-between px-2.5 h-[200px] overflow-auto">
                  <ul class="section-bold-text">
                      <li>align-content</li>
                      <li>align-items</li>
                      <li>align-self</li>
                      <li>all</li>
                      <li>animation</li>
                      <li>animation-delay</li>
                      <li>animation-direction</li>
                      <li>animation-duration</li>
                      <li>animation-fill-mode</li>
                      <li>animation-iteration-count</li>
                      <li>animation-name</li>
                      <li>animation-play-state</li>
                      <li>animation-timing-function</li>
                      <li>backface-visibility</li>
                      <li>background</li>
                      <li>background-attachment</li>
                      <li>background-blend-mode</li>
                      <li>background-clip</li>
                      <li>background-color</li>
                      <li>background-image</li>
                      <li>background-origin</li>
                      <li>background-position</li>
                      <li>background-repeat</li>
                      <li>background-size</li>
                      <li>border</li>
                      <li>border-bottom</li>
                      <li>border-bottom-color</li>
                      <li>border-bottom-left-radius</li>
                      <li>border-bottom-right-radius</li>
                      <li>border-bottom-style</li>
                      <li>border-bottom-width</li>
                      <li>border-collapse</li>
                      <li>border-color</li>
                      <li>border-image</li>
                      <li>border-image-outset</li>
                      <li>border-image-repeat</li>
                      <li>border-image-slice</li>
                      <li>border-image-source</li>
                      <li>border-image-width</li>
                      <li>border-left</li>
                      <li>border-left-color</li>
                      <li>border-left-style</li>
                      <li>border-left-color</li>
                      <li>border-radius</li>
                      <li>border-right</li>
                      <li>border-right-color</li>
                      <li>border-right-style</li>
                      <li>border-right-width</li>
                      <li>border-spacing</li>
                      <li>border-style</li>
                      <li>border-top</li>
                      <li>border-top-color</li>
                      <li>border-top-left-radius</li>
                      <li>border-top-right-radius</li>
                      <li>border-top-style</li>
                      <li>border-top-width</li>
                      <li>bottom</li>
                      <li>box-shadow</li>
                      <li>box-sizing</li>
                      <li>caption-side</li>
                      <li>clear</li>
                      <li>clip</li>
                      <li>Color</li>
                      <li>column-count</li>
                      <li>column-fill</li>
                      <li>column-gap</li>
                      <li>column-rule</li>
                      <li>column-rule-color</li>
                      <li>column-rule-style</li>
                      <li>column-rule-style</li>
                      <li>columns</li>
                      <li>content</li>
                      <li>counter-increment</li>
                      <li>counter-reset</li>
                      <li>cursor</li>
                      <li>direction</li>
                      <li>display</li>
                      <li>empty-cells</li>
                      <li>filter</li>
                      <li>flex</li>
                      <li>flex-basis</li>
                      <li>flex-direction</li>
                      <li>flex-flow</li>
                      <li>flex-grow</li>
                      <li>flex-shrink</li>
                      <li>flex-wrap</li>
                      <li>float</li>
                      <li>font</li>
                      <li>@font-face</li>
                      <li>font-family</li>
                      <li>font-size</li>
                      <li>font-size-adjust</li>
                      <li>font-strentch</li>
                      <li>font-style</li>
                      <li>font-variant</li>
                      <li>font-weight</li>
                      <li>hanging-punctuation</li>
                      <li>height</li>
                      <li>justify-content</li>
                      <li>@keyframes</li>
                      <li>left</li>
                      <li>letter-spacing</li>
                      <li>line-height</li>
                      <li>list-style</li>
                      <li>list-style-image</li>
                      <li>list-style-position</li>
                      <li>list-style-type</li>
                      <li>margin</li>
                      <li>margin-bottom</li>
                      <li>margin-left</li>
                      <li>margin-right</li>
                      <li>margin-top</li>
                      <li>max-height</li>
                      <li>max-width</li>
                      <li>@media</li>
                      <li>min-height</li>
                      <li>min-width</li>
                      <li>nav-down</li>
                      <li>nav-index</li>
                      <li>nav-left</li>
                      <li>nav-right</li>
                      <li>nav-up</li>
                      <li>opacity</li>
                      <li>order</li>
                      <li>outline</li>
                      <li>outline-color</li>
                      <li>outline-offset</li>
                      <li>outline-style</li>
                      <li>outline-width</li>
                      <li>overflow</li>
                      <li>overflow-x</li>
                      <li>overflow-y</li>
                      <li>padding</li>
                      <li>padding-bottom</li>
                      <li>padding-left</li>
                      <li>padding-right</li>
                      <li>padding-top</li>
                      <li>page-break-after</li>
                      <li>page-break-before</li>
                      <li>page-break-inside</li>
                      <li>perspective</li>
                      <li>perspective-origin</li>
                      <li>position</li>
                      <li>quotes</li>
                      <li>resize</li>
                      <li>right</li>
                      <li>tab-size</li>
                      <li>table-layout</li>
                      <li>text-align</li>
                      <li>text-align-last</li>
                      <li>text-decoration</li>
                      <li>text-indent</li>
                      <li>text-overflow</li>
                      <li>text-shadow</li>
                      <li>text-transform</li>
                      <li>top</li>
                      <li>transform</li>
                      <li>transform-origin</li>
                      <li>transform-style</li>
                      <li>transition</li>
                      <li>transition-delay</li>
                      <li>transition-duration</li>
                      <li>transition-property</li>
                      <li>transition-timing-function</li>
                      <li>unicode-bidi</li>
                      <li>user-select</li>
                      <li>vertical-align</li>
                      <li>visibility</li>
                      <li>white-space</li>
                      <li>width</li>
                      <li>word-break</li>
                      <li>word-spacing</li>
                      <li>word-wrap</li>
                      <li>z-index</li>
                  </ul>

                  <ul class="section-italic-text">
                      <li>behavior of the flex-wrap property</li>
                      <li>alignment for items inside the container</li>
                      <li>alignment for the selected item</li>
                      <li>changes all properties</li>
                      <li>binds an animation to an element</li>
                      <li>delays animation start</li>
                      <li>reverse animation or in alternate cycles</li>
                      <li>animation duration in seconds or ms</li>
                      <li>style when the animation is not playing</li>
                      <li>number of an animation replays</li>
                      <li>name for the @keyframes animation</li>
                      <li>the animation is running or paused</li>
                      <li>speed curve of an animation</li>
                      <li>is element visible when not facing the screen</li>
                      <li>all background properties in one declaration</li>
                      <li>is the background image fixed or scrolls</li>
                      <li>blending mode of each background layer</li>
                      <li>painting area of the background</li>
                      <li>background color</li>
                      <li>background image</li>
                      <li>where the background image is positioned</li>
                      <li>starting position of the background image</li>
                      <li>the way the background image is repeated</li>
                      <li>background image size</li>
                      <li>sets all border properties in one line</li>
                      <li>bottom border properties in one line</li>
                      <li>color of the bottom border</li>
                      <li>border bottom left radius</li>
                      <li>border bottom right radius</li>
                      <li>border bottom style</li>
                      <li>border bottom style</li>
                      <li>border collapse</li>
                      <li>border color</li>
                      <li>sets an image as border</li>
                      <li>border image area extends beyond the border box</li>
                      <li>border image repeated, rounded or stretched</li>
                      <li>how to slice the border image</li>
                      <li>path to the border image</li>
                      <li>border image width</li>
                      <li>left border properties in one line</li>
                      <li>border left color</li>
                      <li>border left style</li>
                      <li>border left width</li>
                      <li>border radius of the four rounded corners</li>
                      <li>right border properties in one line</li>
                      <li>border right color</li>
                      <li>border right style</li>
                      <li>border right width</li>
                      <li>border spacing</li>
                      <li>border style</li>
                      <li>top border properties in one line</li>
                      <li>border top color</li>
                      <li>border top left radius</li>
                      <li>border top right radius</li>
                      <li>border top style</li>
                      <li>border top width</li>
                      <li>border width</li>
                      <li>bottom offset for relative and absolute elements</li>
                      <li>shadow to element</li>
                      <li>box sizing properties</li>
                      <li>placement of a table caption</li>
                      <li>deny floating of an element</li>
                      <li>clip an absolutely positioned element</li>
                      <li>text color</li>
                      <li>divide the content in columns</li>
                      <li>balanced fill or not</li>
                      <li>gap between the columns</li>
                      <li>separator between columns, like border</li>
                      <li>column rule color</li>
                      <li>column rule style</li>
                      <li>column rule width</li>
                      <li>column span</li>
                      <li>column width</li>
                      <li>set column-width and column-count</li>
                      <li>insert content :before and :after elements</li>
                      <li>count sections</li>
                      <li>reset counter</li>
                      <li>cursor type when element is hovered</li>
                      <li>writing direction, Arabic is using rtl</li>
                      <li>box display type</li>
                      <li>hide borders and background on empty table cells</li>
                      <li>image effects: grayscale, blur, invert etc.</li>
                      <li>item length, relative to others inside the container</li>
                      <li>initial length of a flexible item</li>
                      <li>direction of the flexible items</li>
                      <li>shorthand for flex-direction and flex-wrap</li>
                      <li>how much the item will grow relative other items</li>
                      <li>how to shrink the item relative to other items</li>
                      <li>wrap flexible items</li>
                      <li>float elements left or right</li>
                      <li>all font properties in one line</li>
                      <li>declare non-web-safe fonts</li>
                      <li>font of the element</li>
                      <li>font size</li>
                      <li>control font size if the first declared option is not available</li>
                      <li>widen or narrow text</li>
                      <li>font style: normal, italic, oblique</li>
                      <li>set small-caps</li>
                      <li>use bold or thin characters</li>
                      <li>can a punctuation mark be placed outside the line box?</li>
                      <li>height of the element</li>
                      <li>justifies flexible container's items horizontally if necessary</li>
                      <li>specifies the animation code</li>
                      <li>left offset for relative and absolute elements</li>
                      <li>space between characters</li>
                      <li>line height of text or inline-block elements</li>
                      <li>all list properties in one line</li>
                      <li>replace the list item marker with an image</li>
                      <li>list item markers inside or outside the content flow</li>
                      <li>set the type of the list item marker</li>
                      <li>set the top, right, bottom and left margins in one line</li>
                      <li>bottom margin</li>
                      <li>left margin</li>
                      <li>right margin</li>
                      <li>margin top</li>
                      <li>maximum height of element</li>
                      <li>maximum width of element</li>
                      <li>see media queries</li>
                      <li>minimum height</li>
                      <li>minimum width</li>
                      <li>where to navigate when the the arrow-down button is pressed</li>
                      <li>sets sequential navigation order</li>
                      <li>where to navigate when the the arrow-left button is pressed</li>
                      <li>where to navigate when the the arrow-right button is pressed</li>
                      <li>where to navigate when the the arrow-up button is pressed</li>
                      <li>transparency level of an element</li>
                      <li>reorder elements in a container</li>
                      <li>drow an outer border around elements</li>
                      <li>outline color</li>
                      <li>gap between the element and the outline</li>
                      <li>outline style</li>
                      <li>outline width</li>
                      <li>hide, display or scroll if the content overflows its container</li>
                      <li>horizontal overflow</li>
                      <li>vertical overflow</li>
                      <li>padding between the element border and content</li>
                      <li>padding bottom</li>
                      <li>padding left</li>
                      <li>padding right</li>
                      <li>padding top</li>
                      <li>adds page break after an element</li>
                      <li>adds page break before an element</li>
                      <li>allow page break inside an element</li>
                      <li>how many pixels the 3D element is placed from the view</li>
                      <li>where is the 3D element based in the x- and y-axis</li>
                      <li>positioning type: absolute, fixed, relative, static</li>
                      <li>set quotation marks to wrap an element</li>
                      <li>declare resizable elements</li>
                      <li>right offset for relative and absolute elements</li>
                      <li>tab character space length</li>
                      <li>table layout algorithm</li>
                      <li>horizontal alignment of text</li>
                      <li>horizontal alignment of last line of text</li>
                      <li>overline, underline or line-through the text</li>
                      <li>indentation of the first line of the text</li>
                      <li>the way how overflowed content is marked (ellipsis)</li>
                      <li>text shadow</li>
                      <li>capitalization of text</li>
                      <li>top offset for relative and absolute elements</li>
                      <li>2D 3D transformation. See widget.</li>
                      <li>changes the position of transformed elements</li>
                      <li>render nested elements in 3D</li>
                      <li>transition properties in one line</li>
                      <li>delay before transition effect start</li>
                      <li>transition effect duration</li>
                      <li>which CSS property is the transition affecting</li>
                      <li>speed curve of the transition</li>
                      <li>should the text be overridden to support more languages</li>
                      <li>disable user content selection</li>
                      <li>vertical alignment</li>
                      <li>visibility:hidden elements leave a gap</li>
                      <li>how are white-spaces handled</li>
                      <li>width of an element</li>
                      <li>text breaking rules when text reaches the end of the container</li>
                      <li>size of white space between words</li>
                      <li>break long words and wrap onto the next line</li>
                      <li>stack order of the element</li>
                  </ul>
               </div>
            </template>
        </Section>
    </div>
</template>