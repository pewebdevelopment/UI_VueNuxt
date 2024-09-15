<template>
    <div>
        <Section>
            <template v-slot:header>Useful Links</template>
            <template v-slot:content>
                <div class="text-[12px] inline-flex flex-wrap justify-center items-center">
                <NuxtLink to="/">
                  <button class="useful-links-btn">CSS Editor, Compressor</button>
                </NuxtLink>
                <NuxtLink to="/">
                  <button class="useful-links-btn">CSS Cleaner</button>
                </NuxtLink>
                <br/>
                <NuxtLink to="/">
                  <button class="useful-links-btn">Can I Use</button>
                </NuxtLink>
                <NuxtLink to="/">
                  <button class="useful-links-btn">Modernizr</button>
                </NuxtLink>
                <NuxtLink to="/">
                  <button class="useful-links-btn">Bootstrap</button>
                </NuxtLink>
                <br/>
                <NuxtLink to="/">
                  <button class="useful-links-btn">Validator</button>
                </NuxtLink>
                <NuxtLink to="/">
                  <button class="useful-links-btn">Table CSS Styler</button>
                </NuxtLink>
                </div>
            </template>
        </Section>
    </div>
</template>