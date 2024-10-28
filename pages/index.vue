<script lang="ts" setup>
let posts: any[] | globalThis.Ref<any, any> | null = [];
let error: string | null = null;

try {
  const { data } = await useWpApi().getPosts<any>();
  posts = data;
} catch (err) {
  error = err.message || 'Error fetching posts';
  console.error('Error fetching posts:', err); // エラー詳細をコンソールに出力
}
</script>

<template>
  <main>
    <PageHeader>
      <!-- Image -->
      <div class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md">
        <img src="~/assets/img/elon.png" alt="" class="w-full h-full absolute object-cover" />
      </div>
      <!-- Header text -->
      <div>
        <h1 class="text-4xl font-bold mb-2">Elon's Musk</h1>
        <p class="mb-3">
          I built SpaceX, acquired Tesla, Twitter.
        </p>
        <a
          class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200"
          href="https://x.com/elonmusk"
        >Let's Connect</a>
      </div>
    </PageHeader>

    <!-- Blog Grid Starts -->
    <section class="container py-16">
      <!-- エラーメッセージの表示 -->
      <div v-if="error" class="text-red-500">{{ error }}</div>
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
    <!-- Blog Grid End -->
  </main>
</template>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
