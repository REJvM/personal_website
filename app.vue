<template>
  <div>
    <div id="container">
      <section class="navigation">
        <header>
          <nav>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/area">Area</NuxtLink>
            <NuxtLink to="/resources">Resources</NuxtLink>
            <NuxtLink to="/archive">Archive</NuxtLink>
          </nav>
        </header>
      </section>
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
