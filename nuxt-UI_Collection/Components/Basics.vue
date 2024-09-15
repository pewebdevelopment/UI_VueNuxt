<template>
    <div>
        <Section>
            <template v-slot:header>
                Basics
            </template>

            <template v-slot:content>
               <div class="section-subheader">
                   <h4>Syntax</h4>
               </div>

<pre style="color:#000" id="selectable1" onclick="selectText(&quot;selectable1&quot;)">
<span style="font-weight:700">selector</span>{
<span style="color:#6d79de;font-weight:700">property</span>: <span style="color:#c5060b;font-style:italic">value</span>;
<span style="color:#6d79de;font-weight:700">property2</span>: <span style="color:#c5060b;font-style:italic">value2</span>;
  }
</pre>

               <div class="section-subheader">
                   <h4>Include external css file</h4>
               </div>
<div class="overflow-auto">
<pre style="color:#000" id="selectable2" onclick="selectText(&quot;selectable2&quot;)"><span style="color:#1c02ff">&lt;<span style="font-weight:700">link</span><span style="font-style:italic">rel</span>=<span style="color:#d80800">"stylesheet"</span><span style="font-style:italic">type</span>=<span style="color:#d80800">"text/css"</span><span style="font-style:italic">href</span>=<span style="color:#d80800">"/style.css"</span> /&gt;</span></pre>
</div>

               <div class="section-subheader">
                   <h4>Internal styles</h4>
               </div>

<pre style="color:#000" id="selectable3" onclick="selectText(&quot;selectable3&quot;)">&lt;<span style="font-weight:700">style</span> <span style="font-style:italic">type</span>=<span style="color:#d80800">"text/css"</span>&gt;
<span style="font-weight:700">div</span> { <span style="color:#6d79de;font-weight:700">color</span>: <span style="color:#c5060b;font-style:italic">#444</span>;}
&lt;/<span style="font-weight:700">style</span>&gt;
</pre>

               <div class="section-subheader">
                   <h4>Inline styles</h4>
               </div>

<pre style="color:#000" id="selectable4" onclick="selectText(&quot;selectable4&quot;)"><span style="color:#1c02ff">&lt;<span style="font-weight:700">tag</span> <span style="font-style:italic">style</span>=<span style="color:#d80800">"property: value"</span>&gt;</span> <span style="color:#1c02ff">&lt;/<span style="font-weight:700">tag</span>&gt;</span></pre>

               <div class="section-subheader">
                   <h4>Clearfix</h4>
               </div>

<pre id="selectable5" onclick="selectText(&quot;selectable5&quot;)"><span style="color:#808030; ">.</span>clearfix<span style="color:#800080; ">:</span><span style="color:#800000; font-weight:bold; ">after</span> <span style="color:#800080; ">{</span>
<span style="color:#bb7977; font-weight:bold; ">clear</span><span style="color:#808030; ">:</span> <span style="color:#074726; ">both</span><span style="color:#800080; ">;</span>
<span style="color:#bb7977; font-weight:bold; ">content</span><span style="color:#808030; ">:</span> <span style="color:#800000; ">"</span><span style="color:#0000e6; "> </span><span style="color:#800000; ">"</span><span style="color:#800080; ">;</span>
<span style="color:#bb7977; font-weight:bold; ">display</span><span style="color:#808030; ">:</span> <span style="color:#074726; ">block</span><span style="color:#800080; ">;</span>
<span style="color:#bb7977; font-weight:bold; ">font-size</span><span style="color:#808030; ">:</span> <span style="color:#008c00; ">0</span><span style="color:#800080; ">;</span>
<span style="color:#bb7977; font-weight:bold; ">height</span><span style="color:#808030; ">:</span> <span style="color:#008c00; ">0</span><span style="color:#800080; ">;</span>
<span style="color:#bb7977; font-weight:bold; ">visibility</span><span style="color:#808030; ">:</span> <span style="color:#074726; ">hidden</span><span style="color:#800080; ">;</span>
<span style="color:#800080; ">}</span>
<span style="color:#808030; ">.</span>clearfix <span style="color:#800080; ">{</span> <span style="color:#bb7977; font-weight:bold; ">display</span><span style="color:#808030; ">:</span> <span style="color:#074726; ">inline-block</span><span style="color:#800080; ">;</span> <span style="color:#800080; ">}</span>
<span style="color:#808030; ">*</span> <span style="color:#800000; font-weight:bold; ">html</span> <span style="color:#808030; ">.</span>clearfix <span style="color:#800080; ">{</span> <span style="color:#bb7977; font-weight:bold; ">height</span><span style="color:#808030; ">:</span> <span style="color:#008c00; ">1</span><span style="color:#006600; ">%</span><span style="color:#800080; ">;</span> <span style="color:#800080; ">}</span>
<span style="color:#808030; ">.</span>clearfix <span style="color:#800080; ">{</span> <span style="color:#bb7977; font-weight:bold; ">display</span><span style="color:#808030; ">:</span> <span style="color:#074726; ">block</span><span style="color:#800080; ">;</span> <span style="color:#800080; ">}</span>
</pre>

               <div class="section-subheader">
                   <h4>Box model</h4>
               </div>

               <div class="margin">
                   <p>margin</p>

                   <div class="border">
                       <p>border</p>

                       <div class="padding">
                           <p>padding</p>

                           <div class="content">
                               <p>content</p>
                           </div>
                       </div>
                   </div>
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