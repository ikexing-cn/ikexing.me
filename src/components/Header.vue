<script lang="ts" setup>
</script>

<template>
  <header
    p-5 md:p-9 flex="~" justify-end wfull
    un-children="ml-3 pointer dark:hover:c-coolGray-3 hover:c-coolGray-6 dark:c-white leading-4.5"
  >
    <div
      un-children="ml-3 pointer dark:hover:c-coolGray-3 hover:c-coolGray-6 dark:c-white"
      un-children-text-sm container display-none md-display-block
    >
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Todo</a>
      <a href="#">Project</a>
    </div>
    <a i-ri-github-fill href="https://github.com/ikexing-cn" target="_blank" />
    <a i-ri-zhihu-line href="https://www.zhihu.com/people/ke-xing-48-92" target="_blank" />
    <a i-ri-bilibili-line href="https://space.bilibili.com/25532735" target="_blank" />
    <div i-ri-english-input />
    <div i-ri-moon-line i-ri-sun-line @click="toggleDark()" />
  </header>
</template>
