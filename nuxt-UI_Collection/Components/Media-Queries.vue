<template>
    <div>
        <Section>
            <template v-slot:header>
                Media Queries
            </template>

            <template v-slot:content>
               <div class="section-subheader">
                   <h4>Syntax</h4>
               </div>

<div class="overflow-auto">
<pre style="color:#000" id="selectable6" onclick="selectText(&quot;selectable6&quot;)"><span style="color:#0100b6;font-weight:700">@media</span> not|only <span style="color:#06960e;font-weight:700">mediatype</span> <span style="color:#0100b6;font-weight:700">and</span> (<span style="color:#6d79de;font-weight:700">media feature</span>) {
CSS Code }
</pre>
<p class="text-[12px] pl-2.5">Link external file</p>
<pre class="overflow-auto" style="background:#fff;color:#000" id="selectable7" onclick="selectText(&quot;selectable7&quot;)"><span style="color:#1c02ff">&lt;<span style="font-weight:700">link</span> <span style="font-style:italic">rel</span>=<span style="color:#d80800">"stylesheet"</span> <span style="font-style:italic">media</span>=<span style="color:#06960e;font-weight:700">mediatype</span> <span style="color:#0100b6;font-weight:700">and|not|only</span> (<span style="color:#6d79de;font-weight:700">media feature</span> <span style="font-style:italic">href</span>=<span style="color:#d80800">"mystylesheet.css"</span>&gt;</span>
</pre>
</div>

               <div class="section-subheader">
                   <h4>Viewport is 480 pixels or smaller</h4>
               </div>

<div class="overflow-auto">
<pre style="color:#000" id="selectable8" onclick="selectText(&quot;selectable8&quot;)"><span style="color:#0100b6;font-weight:700">@media</span> <span style="color:#06960e;font-weight:700">screen</span> <span style="color:#0100b6;font-weight:700">and</span> (<span style="color:#6d79de;font-weight:700">max-width</span>: <span style="color:#cd0000;font-style:italic">480<span style="color:#0100b6;font-weight:700">px</span></span>) { }
</pre>
</div>

               <div class="section-subheader">
                   <h4>Viewport width smaller or height smaller</h4>
               </div>

<div class="overflow-auto">
<pre id="selectable9" onclick="selectText(&quot;selectable9&quot;)"><span style="color:#800080; ">@</span><span style="color:#004a43; ">media</span> <span style="color:#004a43; ">screen and (max-width: 600px), (max-height: 500px) </span><span style="color:#800080; ">{</span>
</pre>
</div>

               <div class="section-subheader">
                   <h4>Print style</h4>
               </div>

<div>
    <pre id="selectable10" onclick="selectText(&quot;selectable10&quot;)">@media print { ... }</pre>
</div>

               <div class="section-subheader">
                   <h4>Night/dark mode</h4>
               </div>

<div class="overflow-auto">
    <pre id="selectable11" onclick="selectText(&quot;selectable11&quot;)">@media (prefers-color-scheme: dark) { ... }</pre>
</div>


               <div class="section-subheader">
                   <h4>Media types</h4>
               </div>

<div>
<p class="text-[12px] pl-2.5">all, print, screen, speech</p>
</div>


               <div class="section-subheader">
                   <h4>Media features</h4>
               </div>

               <div class="flex items-center justify-between px-2.5">
                  <ul class="section-bold-text">
                      <li>width</li>
                      <li>height</li>
                      <li>orientation</li>
                      <li>aspect-ratio</li>
                      <li>color</li>
                      <li>color-index</li>
                      <li>monochrome</li>
                      <li>resolution</li>
                      <li>scan</li>
                      <li>grid</li>
                  </ul>

                  <ul class="section-italic-text">
                      <li>viewport width</li>
                      <li>viewport height</li>
                      <li>orientation of the viewport</li>
                      <li>ratio between width & height</li>
                      <li>number of bits per color</li>
                      <li>number of displayable colors</li>
                      <li>color on greyscale device</li>
                      <li>resolution of the device</li>
                      <li>scanning process of the device</li>
                      <li>device is a grid or bitmap</li>
                  </ul>
               </div>

            </template>
        </Section>
    </div>
</template>

<style scoped>
pre{
    font-size: 12px;
    padding: 0px 10px;
}
</style>