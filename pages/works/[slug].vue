<script lang="ts" setup>
const { params } = useRoute();

const { data:works } = await useWpApi().getWork<any>(params.slug as string);

const post = works.value[0]

</script>
<template>
  <main>
    {{ post.title }}
  </main>
</template>



