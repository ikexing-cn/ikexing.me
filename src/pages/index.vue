<script lang="ts" setup>
const count = $(useLocalStorage('count', 0))
</script>

<template>
  <div>hello world</div>
  <div center children-ml-2 mt-2>
    <button btn @click="count++">
      increment
    </button>

    <span>{{ count }}</span>

    <button btn @click="count--">
      decrement
    </button>
  </div>
</template>
