<script lang="ts" setup>
const route = useRoute();

// Get Category ID
const { data:categories } = await useWpApi().get<any>(`categories?slug=${route.params.slug}`);

// Get Post Related to category ID
const {data:posts} = await useWpApi().getPosts<any>(categories.value[0].id);
const post = posts.value[0];

</script>
<template>
  <PageHeader :title="`Archive: ${categories[0].name}`"></PageHeader>
  <section class="container py-12">
    <div class="grid sm:grid-cols-3 gap-5">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title.rendered"
        :image="post._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"        
        />
    </div>
  </section>
</template>
