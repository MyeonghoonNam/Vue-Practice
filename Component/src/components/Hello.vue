<template>
  <h1>Hello</h1>
  <slot name="abc"></slot>
  <slot name="def"></slot>
  <slot :username="'hoon'"></slot>
</template>

<style scoped lang="scss">
$color: orange;

h1 {
  color: $color;
}
</style>
