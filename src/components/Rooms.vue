<template>
  <div>
    <li>
    <img :src="item.imageUrl" alt="room">
    </li>
  </div>
</template>

<script>
export default{
  props:["item"]
}
</script>
<style scoped>
li{
  list-style: none;
}
li img{
  width:550px; 
  height:450px;
}
</style>