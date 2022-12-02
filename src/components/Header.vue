<script lang="ts" setup>
</script>

<template>
  <header
    p-5 md:p-9 flex="~" justify-end wfull font-sans
    un-children="ml-3 pointer text-sm leading-4.5 base-color transition"
  >
    <div un-children="xl-ml-3 ml-1">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/">
        Blog
      </router-link>
      <router-link to="/">
        Todo
      </router-link>
      <router-link to="/">
        Project
      </router-link>
    </div>
    <a i-ri-github-fill href="https://github.com/ikexing-cn" target="_blank" />
    <a i-ri-zhihu-line href="https://www.zhihu.com/people/ke-xing-48-92" target="_blank" />
    <a i-ri-bilibili-line href="https://space.bilibili.com/25532735" target="_blank" />
    <button i-ri-english-input />
    <button i-ri-moon-line i-ri-sun-line base-hover @click="toggleDark()" />
  </header>
</template>

<style scoped>
header > *:hover {
  --un-text-opacity: 1;
  color: rgba(31, 41, 55, var(--un-text-opacity));
}

.dark header > *:hover {
  --un-text-opacity: 1;
  color: rgba(209, 213, 219, var(--un-text-opacity));
}
</style>
