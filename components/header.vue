<script setup>
const route = useRoute()
const config = useRuntimeConfig()
</script>

<template>
    <section class="navigation" :class="route.name">
        <div id="container">
            <header>
                <nav>
                    <NuxtLink to="/projects" class="menu" activeClass="active">Projects</NuxtLink>
                    <NuxtLink to="/area" class="menu" activeClass="active">Area</NuxtLink>
                    <NuxtLink to="/resources" class="menu" activeClass="active">Resources</NuxtLink>
                    <NuxtLink to="/archive" class="menu" activeClass="active">Archive</NuxtLink>
                </nav>
                <a :href="config.public.cmsPath" class="menu secondary">Login</a>
            </header>
        </div>
    </section>
</template>

