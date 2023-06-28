<template>
  <Header_box />
  <div class="body-box hbox">
    <Aside_box />
    <Content_box />
</div>

</template>
  
  
<script lang="ts">
import Header_box from "./pages/Header.vue"
import Aside_box from "./pages/Aside.vue"
import Content_box from "./pages/Content.vue"

export default {
  components: {
    Header_box,
    Aside_box,
    Content_box,

  }
}
</script>
<style>
.space{
flex: 1;
}

.hbox {
  display: flex;
  flex-direction: row;
}

.vbox {
  display: flex;
  flex-direction: column;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #F6F7F9;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.body-box{
    flex: 1;

}

</style>