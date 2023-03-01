<template>
    <div>
        <div class="container">
      <div class="mainContainer">
        <div class="top">
        <span id="userSpanDetails" v-if="user">#{{ user.id }}</span>
        <router-link to="/">
        <buttonComponent buttonText="Voltar"/>
        </router-link>
      </div>
      <div v-if="user">
        <div class="img-plus-full-name">
            <img :src="user.avatar" :alt="user.first_name">
            <div class="first-name">
                <span class="spanTitle">Primeiro Nome</span>
                <br>
                <span class="spanDescription">{{ user.first_name }}</span> 
            </div>
            <div class="last-name">
                <span class="spanTitle">Último Nome</span>
                <br>
                <span class="spanDescription">{{ user.last_name }}</span>
            </div>
        </div>
        <div id="emailTitleDescription">
            <span class="spanTitle">Endereço de e-mail</span>
            <br>
            <span class="spanDescription">{{ user.email }}</span> 
        </div>

        <br>

        <div id="avatarTitleDescription">
            <span class="spanTitle">Link do avatar</span>
            <br>
            <span class="spanDescription">{{ user.email }}</span> 
        </div>

        <br>
        
        <div id="linkTitleDescription" >
            <span class="spanTitle">Link de suporte</span>
            <br>
            <span class="spanDescription" >{{ support.url }}</span> 
        </div>

        <br>
        
        <div id="userTitleDescription">
            <span class="spanTitle">Descrição do usuário</span>
            <br>
            <span class="spanDescription">{{ support.text }}</span> 
        </div>
        
      </div>
      </div>
      </div>
    </div>
  </template>


<script>
import axios from 'axios';
import buttonComponent from './buttonComponent.vue'
export default {
  data() {
    return {
      user: [],
      support:[],
    }
  },
  mounted() {
    axios.get(`https://reqres.in/api/users/${this.$route.params.id}`)
      .then(response => {
        this.user = response.data.data;
        this.support = response.data.support;
        console.log(this.user);
        console.log(this.support);
      })
      .catch(error => {
        console.log(error);
      });
  },
  components:{
    buttonComponent
  }
}
</script>



<style scoped>
.container {
    display: flex;
    flex-direction: row;
    border: 0;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    
  }
.mainContainer{
  border: 0;
  width: 616px;
  min-height: 400px;
  
}
.top{
  display: flex;
flex-direction: row; 
align-items: flex-start;
}
#userSpanDetails{
font-size: 50px;
font-weight: 700;
width: 56px;
height: 61px;
margin-bottom: 42px;
}
img{
width: 120px;
height: 120px;
}
.img-plus-full-name{
    display: flex;
    align-items: center;
    width: 100%;
}
.first-name{
    margin-left: 34px;
    margin-right: 34px;
}
.spanTitle{
    font-size: 14px;
    font-weight: 400;
}

.spanDescription{
    font-size: 16px;
    font-weight: 600;
}
#emailTitleDescription{
    height: 44px;
    width: 200px;
    margin-top: 30px;
}
#avatarTitleDescription{
    width: 330px;
    height: 44px;
}
#linkTitleDescription{
    width: 293px;
    height: 44px;
}
#userTitleDescription{
    width: 616px;
    height: 44px;
}
#buttonBounceBack{
    margin-left: 50px;
}


</style>