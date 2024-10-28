<script lang="ts" setup>
const props = defineProps<{
  title: string;
  image: string;
  excerpt?: string;
  slug: string;
}>();

import { computed } from 'vue';

// HTMLタグを削除してクリーンなテキストを取得
const cleanExcerpt = computed(() => {
  return props.excerpt ? props.excerpt.replace(/<\/?[^>]+(>|$)/g, "") : "";
});
</script>


<template>
  <div class="col-span-1 shadow-lg">
    <!-- Blog Image -->
    <div v-if="image" class="w-full h-[180px] relative">
      <img
        :src="image"
        alt="Blog Thumb"
        class="w-full h-full absolute object-cover"
      />
    </div>
    <!-- Blog Contents -->
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
      <!-- v-textを使用してHTMLタグなしのテキストを表示 -->
      <p v-text="cleanExcerpt" class="text-sm mb-3"></p>
      <NuxtLink :to="`/${slug}`">Read More</NuxtLink>
    </div>
  </div>
</template>
