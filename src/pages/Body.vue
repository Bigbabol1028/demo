<template>
<div class="body-box hbox">
    <Aside_box />
    <Content_box />
</div>
</template>
<script lang="ts">
import Aside_box from "./Aside.vue"
import Content_box from "./Content.vue"

export default {
  components: {
    Aside_box,
    Content_box,

  }
}
</script>

<style>
.body-box{
    flex: 1;

}
</style>