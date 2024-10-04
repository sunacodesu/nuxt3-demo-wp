<script lang="ts" setup>
const { data: works } = await useWpApi().getWorks<any>();
</script>
<template>
  <PageHeader title="Works Index"></PageHeader>

  <section class="py-10 container">
    <div class="flex flex-wrap gap-5">
      <BlogCard
        v-for="work in works"
        :key="work.id"
        :title="work.title.rendered"
        :image="work._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''"
        :excerpt="work.excerpt.rendered"
        :slug="`works/${work.slug}`"
        />
    </div>
  </section>
</template>
import type { NuxtLink } from '#build/components';
