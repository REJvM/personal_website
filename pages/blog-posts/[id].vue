<script setup>
const { $api } = useNuxtApp();
const blogPostRepository = repository($api);
const route = useRoute();
const config = useRuntimeConfig();
const picturePath = config.public.picturePath;

const { data: blogPost, status } = await useAsyncData(() =>
  blogPostRepository.getSingleBlogpost(route.params.id)
);
</script>

<template>
  <template v-if="blogPost !== null">
    <section class="blog blog-post" :class="blogPost.category ?? ''">
      <div v-if="status === 'pending'">
        <p>Loading...</p>
      </div>
      <div v-else-if="status !== 'success'">
        <p>There has been an error loading the blog posts. Try again later.</p>
      </div>
      <div v-else-if="blogPost === null">
        <p>No blog posts have been found.</p>
      </div>
      <div v-else>
        <Breadcrumbs
          :category="blogPost.category ?? ''"
          :pageTitle="blogPost.title"
        />
        <header>
          <h1>
            {{ blogPost.title }}
          </h1>

          <div v-if="blogPost.user" class="blogpost-user">
            <img
              v-if="blogPost.user.picture"
              :src="picturePath + blogPost.user.picture"
            />
            <div>
              <p>{{ blogPost.user.name }}</p>
              <!-- <p>Last modified: {{ formatDate(blogPost.lastModifiedOn) }}</p> -->
            </div>
          </div>
          <div v-else>
            <!-- <p>Last modified: {{ formatDate(blogPost.lastModifiedOn) }}</p> -->
          </div>
        </header>
        <div class="content">
          <article v-html="blogPost.content"></article>
          <TableOfContent
            :content="blogPost.content ?? ''"
            :links="blogPost.links ?? ''"
          />
        </div>
      </div>
    </section>
    <RouteTransition :blogPostCategory="blogPost.category" />
  </template>
</template>
