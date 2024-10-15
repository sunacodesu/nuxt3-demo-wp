<script lang="ts" setup>
const { params } = useRoute();

const { data:works } = await useWpApi().getWork<any>(params.slug as string);

const post = works.value[0]

</script>
<template>
  <main>
    <section class="container py-12">
      <h1 class="text-center text-3xl sm:text-5xl font-bold leading-normal">{{ post.title.rendered }}</h1>
      
            <!-- Works Image -->
      <div class="w-full h-[250px] sm:h-[500px] relative  shadow-xl rounded overflow-hidden">
        <img :src="post._embedded['wp:featuredmedia'][0]?.source_url" alt="Blog Thumb" class="absolute w-full h-full object-cover">
      </div>
      
    </section>
  </main>
</template>



