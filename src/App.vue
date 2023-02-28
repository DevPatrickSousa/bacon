<template>
  <div id="app">

  <router-view/>
  </div>
</template>

<script setup>

</script>


<style >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav a{
  text-decoration: none;
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
   url(./assets/fonts/Montserrat-VariableFont_wght.ttf) format("truetype");
}
</style>
