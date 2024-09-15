<template>
    <div>
        <Section>
            <template v-slot:header>
                Selectors
            </template>
            <template v-slot:content>
               <div class="flex items-center justify-between px-2.5">
                   <div class="">
						<div class="text-grid"><span class="section-bold-text">* </span><em class="section-italic-text">all elements</em></div>
						<div class="text-grid"><span class="section-bold-text">div </span><em class="section-italic-text">all div tags </em></div>
						<div class="text-grid"><span class="section-bold-text">div,p </span><em class="section-italic-text">all divs and paragraphs </em></div>
						<div class="text-grid"><span class="section-bold-text">div p </span><em class="section-italic-text">paragraphs inside divs </em></div>
						<div class="text-grid"><span class="section-bold-text">div &gt; p </span><em class="section-italic-text">all p tags, one level deep in div</em></div>
						<div class="text-grid"><span class="section-bold-text">div + p </span><em class="section-italic-text">p tags immediately after div</em></div>
						<div class="text-grid"><span class="section-bold-text">div ~ p </span><em class="section-italic-text">p tags preceded by div</em></div>
						<div class="text-grid"><span class="section-bold-text">.classname </span><em class="section-italic-text">all elements with class </em></div>
						<div class="text-grid"><span class="section-bold-text">#idname </span><em class="section-italic-text">element with ID </em></div>
						<div class="text-grid"><span class="section-bold-text">div.classname </span><em class="section-italic-text">divs with certain classname</em></div>
						<div class="text-grid"><span class="section-bold-text">div#idname </span><em class="section-italic-text">div with certain ID </em></div>
						<div class="text-grid"><span class="section-bold-text">#idname * </span><em class="section-italic-text">all elements inside #idname</em></div>
					</div>
               </div>

               <div class="section-subheader">
                   <h4>Pseudo classes </h4>
               </div>

               <div class="flex items-center justify-between px-2.5 h-[200px] overflow-auto">
                           <div class="descriptionListing">
								<div class="text-grid"><span class="section-bold-text">a:link </span><em class="section-italic-text">link in normal state</em></div>
								<div class="text-grid"><span class="section-bold-text">a:active </span><em class="section-italic-text">link in clicked state</em></div>
								<div class="text-grid"><span class="section-bold-text">a:hover </span><em class="section-italic-text">link with mouse over it</em></div>
								<div class="text-grid"><span class="section-bold-text">a:visited </span><em class="section-italic-text">visited link</em></div>	
								<div class="text-grid"><span class="section-bold-text">p::after{content:"yo";}</span><em class="section-italic-text">add content after p </em></div>
								<div class="text-grid"><span class="section-bold-text">p::before </span><em class="section-italic-text">add content before p </em></div>
								<div class="text-grid"><span class="section-bold-text">input:checked </span><em class="section-italic-text">checked inputs </em></div>
								<div class="text-grid"><span class="section-bold-text">input:disabled </span><em class="section-italic-text">disabled inputs </em></div>
								<div class="text-grid"><span class="section-bold-text">input:enabled </span><em class="section-italic-text">enabled inputs </em></div>
								<div class="text-grid"><span class="section-bold-text">input:focus </span><em class="section-italic-text">input has focus </em></div>
								<div class="text-grid"><span class="section-bold-text">input:in-range </span><em class="section-italic-text">value in range </em></div>
								<div class="text-grid"><span class="section-bold-text">input:out-of-range </span><em class="section-italic-text">input value out of range </em></div>
								<div class="text-grid"><span class="section-bold-text">input:valid </span><em class="section-italic-text">input with valid value </em></div>
								<div class="text-grid"><span class="section-bold-text">input:invalid </span><em class="section-italic-text">input with invalid value </em></div>
								<div class="text-grid"><span class="section-bold-text">input:optional </span><em class="section-italic-text">no required attribute </em></div>
								<div class="text-grid"><span class="section-bold-text">input:required </span><em class="section-italic-text">input with requred attribute </em></div>
								<div class="text-grid"><span class="section-bold-text">input:read-only </span><em class="section-italic-text">with readonly attribute </em></div>
								<div class="text-grid"><span class="section-bold-text">input:read-write </span><em class="section-italic-text">no readonly attrib. </em></div>
								<div class="text-grid"><span class="section-bold-text">div:empty </span><em class="section-italic-text">element with no children </em></div>
								<div class="text-grid"><span class="section-bold-text">p::first-letter </span><em class="section-italic-text">first letter in p </em></div>
								<div class="text-grid"><span class="section-bold-text">p::first-line </span><em class="section-italic-text">first line in p </em></div>
								<div class="text-grid"><span class="section-bold-text">p:first-of-type </span><em class="section-italic-text">first of some type </em></div>
								<div class="text-grid"><span class="section-bold-text">p:last-of-type </span><em class="section-italic-text">last of some type </em></div>
								<div class="text-grid"><span class="section-bold-text">p:lang(en) </span><em class="section-italic-text">p with en language attribute </em></div>
								<div class="text-grid"><span class="section-bold-text">:not(span) </span><em class="section-italic-text">element that's not a span </em></div>
								<div class="text-grid"><span class="section-bold-text">p:first-child </span><em class="section-italic-text">first child of its parent </em></div>
								<div class="text-grid"><span class="section-bold-text">p:last-child </span><em class="section-italic-text">last child of its parent </em></div>
								<div class="text-grid"><span class="section-bold-text">p:nth-child(2) </span><em class="section-italic-text">second child of its parent </em></div>
								<div class="text-grid"><span class="section-bold-text">p:nth-child(3n+1) </span><em class="section-italic-text">nth-child (an + b) formula</em></div>
								<div class="text-grid"><span class="section-bold-text">p:nth-last-child(2) </span><em class="section-italic-text">second child from behind </em></div>
								<div class="text-grid"><span class="section-bold-text">p:nth-of-type(2) </span><em class="section-italic-text">second p of its parent </em></div>
								<div class="text-grid"><span class="section-bold-text">p:nth-last-of-type(2) </span><em class="section-italic-text">...from behind </em></div>
								<div class="text-grid"><span class="section-bold-text">p:only-of-type </span><em class="section-italic-text">unique of its parent</em></div>
								<div class="text-grid"><span class="section-bold-text">p:only-child </span><em class="section-italic-text">only child of its parent</em></div>
								<div class="text-grid"><span class="section-bold-text">:root </span><em class="section-italic-text">documents root element </em></div>
								<div class="text-grid"><span class="section-bold-text">::selection </span><em class="section-italic-text">portion selected by user </em></div>
								<div class="text-grid"><span class="section-bold-text">:target </span><em class="section-italic-text">highlight active anchor </em></div>
							</div>
               </div>

               <div class="section-subheader">
                   <h4>Attribute selectors </h4>
               </div>
               
               <div class="flex items-center justify-between px-2.5">
                            <div class="descriptionListing noscroller">
								<div class="text-grid"><span class="section-bold-text">a[target] </span><em class="section-italic-text">links with a target attribute </em></div>
								<div class="text-grid"><span class="section-bold-text">a[target="_blank"] </span><em class="section-italic-text">links which open in new tab </em></div>
								<div class="text-grid"><span class="section-bold-text">[title~="chair"] </span><em class="section-italic-text">title element containing a word </em></div>
								<div class="text-grid"><span class="section-bold-text">[class^="chair"] </span><em class="section-italic-text">class starts with chair </em></div>
								<div class="text-grid"><span class="section-bold-text">[class|="chair"] </span><em class="section-italic-text">class starts with the chair word </em></div>
								<div class="text-grid"><span class="section-bold-text">[class*="chair"] </span><em class="section-italic-text">class contains chair </em></div>
								<div class="text-grid"><span class="section-bold-text">[class$="chair"] </span><em class="section-italic-text">class ends with chair </em></div>
								<div class="text-grid"><span class="section-bold-text">input[type="button"] </span><em class="section-italic-text">specified input type </em></div>
							</div>
               </div>
            </template>
        </Section>
    </div>
</template>