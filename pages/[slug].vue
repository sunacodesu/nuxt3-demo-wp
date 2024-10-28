<script lang="ts" setup>
const { params } = useRoute();

// Ensure that posts is defined before accessing its value
const { data: posts } = await useWpApi().getPost<any>(params.slug as string);

// Use a computed ref to handle when posts.value is available
const post = computed(() => posts.value ? posts.value[0] : null);
</script>

<template>
  <main v-if="post">
    <section class="header container py-12 sm:py-24">
      <!-- Post title -->
      <div class="post-title text-center mb-5">
        <h1 class="text-3xl sm:text-5xl font-bold leading-normal">
          {{ post.title.rendered }}
        </h1>
      </div>
      <!-- Post Meta -->
      <div class="post-meta text-center mb-10">
        <span class="mr-3">Written by {{ post._embedded?.author?.[0]?.name }}</span>
        <span>Published on {{ post.date }}</span>
      </div>
      <!-- Post Image -->
      <div v-if="post._embedded?.['wp:featuredmedia']?.[0]?.source_url" class="w-full h-[250px] sm:h-[500px] relative shadow-xl rounded overflow-hidden">
        <img
          :src="post._embedded['wp:featuredmedia'][0].source_url"
          alt="Blog Thumb"
          class="absolute w-full h-full object-cover"
        >
      </div>
      <!-- Post Content -->
      <div class="post-content">
        <div v-html="post.content.rendered"></div>
      </div>
    </section>
  </main>

  <!-- Fallback in case the post is not available -->
  <p v-else>Loading...</p>
</template>



<style scoped>
.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6 {
  @apply mb-3 font-bold;
}

.post-content p {
  @apply mb-2;
}

.post-content img {
  @apply mb-4;
}
</style>
