<script lang="ts" setup>
</script>

<template>
  <header
    p-5 md:p-9 flex="~" justify-end wfull
    un-children="ml-3 pointer dark:c-white dark:hover:c-coolGray-3 c-coolGray-5 hover:c-coolGray-6 leading-4.5"
  >
    <div
      un-children="ml-3 pointer dark:c-white dark:hover:c-coolGray-3 c-coolGray-5 hover:c-coolGray-6"
      un-children-text-sm container display-none md-display-block
    >
      <a href="#">Home</a>
      <a href="#">Blog</a>
      <a href="#">Todo</a>
      <a href="#">Project</a>
    </div>
    <div i-ri-github-fill />
    <div i-ri-zhihu-line />
    <div i-ri-bilibili-line />
    <div i-ri-english-input />
    <div i-ri-moon-line i-ri-sun-line @click="toggleDark()" />
  </header>
</template>
