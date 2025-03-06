<script setup>
const route = useRoute()
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
                <NuxtLink to="/login" class="menu secondary">Login</NuxtLink>
            </header>
        </div>
    </section>
</template>

