<template>
    <div>
        <Section>
            <template v-slot:header>
                Selectors
            </template>
            <template v-slot:content>
               <div class="flex items-center justify-between px-2.5">
                  <ul class="section-bold-text">
                      <li><sup>*</sup></li>
                      <li>div</li>
                      <li>div,p</li>
                      <li>div p</li>
                      <li>div > p</li>
                      <li>div + p</li>
                      <li>div ~ p</li>
                      <li>.classname</li>
                      <li>#idname</li>
                      <li>div.classname</li>
                      <li>div#idname</li>
                      <li>#idname<sup>*</sup></li>
                  </ul>

                  <ul class="section-italic-text">
                      <li>all elements</li>
                      <li>all div tags</li>
                      <li>all divs and paragraphs</li>
                      <li>paragraphs inside divs</li>
                      <li>all p tags, one level deep in div</li>
                      <li>p tags immediately after div</li>
                      <li>p tags preceded by div</li>
                      <li>all elements with class</li>
                      <li>element with ID</li>
                      <li>divs with certain classname</li>
                      <li>div with certain ID</li>
                      <li>all elements inside #idname</li>
                  </ul>
               </div>

               <div class="section-subheader">
                   <h4>Pseudo classes </h4>
               </div>

               <div class="flex items-center justify-between px-2.5 h-[200px] overflow-auto">
                  <ul class="section-bold-text">
                      <li>a:link</li>
                      <li>a:active</li>
                      <li>a:hover</li>
                      <li>a:visited</li>
                      <li>p::after{content:"yo";}</li>
                      <li>p::before</li>
                      <li>input:checked</li>
                      <li>input:disabled</li>
                      <li>input:enabled</li>
                      <li>input:focus</li>
                      <li>input:in-range</li>
                      <li>input:out-of-range</li>
                      <li>input:valid</li>
                      <li>input:invalid</li>
                      <li>input:optional</li>
                      <li>input:required</li>
                      <li>input:read-only</li>
                      <li>input:read-write</li>
                      <li>div:empty</li>
                      <li>p::first-letter</li>
                      <li>p::first-line</li>
                      <li>p:first-of-type</li>
                      <li>p:last-of-type</li>
                      <li>p:lang(en)</li>
                      <li>:not(span)</li>
                      <li>p:first-child</li>
                      <li>p:last-child</li>
                      <li>p:nth-child(2)</li>
                      <li>p:nth-child(3n+1)</li>
                      <li>p:nth-last-child(2)</li>
                      <li>p:nth-of-type(2)</li>
                      <li>p:nth-last-of-type(2)</li>
                      <li>p:only-of-type</li>
                      <li>p:only-child</li>
                      <li>:root</li>
                      <li>::selection</li>
                      <li>:target</li>
                  </ul>

                  <ul class="section-italic-text">
                      <li>link in normal state</li>
                      <li>link in clicked state</li>
                      <li>link with mouse over it</li>
                      <li>visited link</li>
                      <li>add content after p</li>
                      <li>add content before p</li>
                      <li>checked inputs</li>
                      <li>disabled inputs</li>
                      <li>enabled inputs</li>
                      <li>input has focus</li>
                      <li>value in range</li>
                      <li>input value out of range</li>
                      <li>input with valid value</li>
                      <li>input with invalid value</li>
                      <li>no required attribute</li>
                      <li>input with requred attribute</li>
                      <li>with readonly attribute</li>
                      <li>no readonly attrib.</li>
                      <li>element with no children</li>
                      <li>first letter in p</li>
                      <li>first line in p</li>
                      <li>first of some type</li>
                      <li>last of some type</li>
                      <li>p with en language attribute</li>
                      <li>element that's not a span</li>
                      <li>first child of its parent</li>
                      <li>last child of its parent</li>
                      <li>second child of its parent</li>
                      <li>nth-child (an + b) formula</li>
                      <li>second child from behind</li>
                      <li>second p of its parent</li>
                      <li>...from behind</li>
                      <li>unique of its parent</li>
                      <li>only child of its parent</li>
                      <li>documents root element</li>
                      <li>portion selected by user</li>
                      <li>highlight active anchor</li>
                  </ul>
               </div>

               <div class="section-subheader">
                   <h4>Attribute selectors </h4>
               </div>
               
               <div class="flex items-center justify-between px-2.5">
                  <ul class="section-bold-text">
                      <li>a[target]</li>
                      <li>a[target="_blank"]</li>
                      <li>[title~="chair"]</li>
                      <li>[class^="chair"]</li>
                      <li>[class|="chair"]</li>
                      <li>[class*="chair"]</li>
                      <li>[class$="chair"]</li>
                      <li>input[type="button"]</li>
                  </ul>

                  <ul class="section-italic-text">
                      <li>links with a target attribute</li>
                      <li>links which open in new tab</li>
                      <li>title element containing a word</li>
                      <li>class starts with chair</li>
                      <li>class starts with the chair word</li>
                      <li>class contains chair</li>
                      <li>class ends with chair</li>
                      <li>specified input type</li>
                  </ul>
               </div>
            </template>
        </Section>
    </div>
</template>