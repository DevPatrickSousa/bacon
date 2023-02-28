<template>
  <div>
  
  <div class="container">
    <div class="mainContainer">
      <div class="top">
        <span id="userSpan">Usuários</span>
        <button id="cancel" @click="$router.push('/')"> <buttonComponentText buttonText="Cancelar"/> </button>
      </div>

      <div id="userData">
          <form action="">
            <label class="labelUser">Nome do usuário
            <input type="text">
            </label>
            <label class="labelUser">Função do usuário
              <select>
                <option selected="selected" disabled>Selecione a função</option>
                <option v-for="option in options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </label>
             <buttonComponent/> 

          </form>
        </div>


      <div class="cards">
       
        <div class="card" v-for="user in users" :key="user.id">
          <img :src="(user.avatar)" :alt="user.first_name">
          <div>
            <span>#{{ user.id }}</span> 
             <br>
             <span id="fullName">{{ user.first_name}} {{ user.last_name }}</span> 
             <br>
             <span>{{ user.email }}</span> 
          </div>
          <div class="icons">
            <img @click="teste" src="../assets/icons/edit.png" alt="edit"/> 
            <img @click="teste" src="../assets/icons/delete.png" alt="delete"/> 
            <img @click="teste" src="../assets/icons/moreDetails.png" alt="more details"/>
          </div>
           
        </div>
      
      </div>

      
       
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      options:[
        {text: 'Desenvolvedor', value: 'A'},
        {text: 'Gerente de Projetos', value: 'B'},
        {text: 'Tech Lead', value: 'C'},
        {text: 'UI/UX Designer', value: 'D'},
      ],
      
    };
  },
  mounted() {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        this.users = response.data.data;
        console.log(this.users)
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods:{
    teste(){
      alert('teste');
    }
  }
  
};
</script>

<script setup>
 import buttonComponentText from './buttonComponentText.vue'
 import buttonComponent from './buttonComponent.vue'

</script>





<style scoped>

select{
  margin: 0 4px;
  border-radius: 5px;
  margin-bottom: 24px;
  display: block;
  width: 584px;
  height: 55px;
}
input {
  display: block;
  width: 584px;
  height: 55px;
  margin: 0 4px;
  border-radius: 5px;
  border-width: 1px;
}


.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  border: 1px solid black;
}
.mainContainer{
border: 1px solid black;
width: 592px;
height: 660px;
}
button#cancel{
height: 55px;
width: 185px;
margin-left: 227px;
border-width: 0;

}

#userSpan{
font-size: 50px;

}

.cards{
display: flex;
height: 400px;
flex-direction: column;
overflow: scroll;


}
.card{
display: flex;
max-height: 100%;
min-width: 586px;
height: 120px;
margin-top: 10px;
margin-left: 4px;
list-style: none;
font-family: 'Montserrat', sans-serif;

}
.card img{
height: 80px;
width: 80px;
}


.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
}

.icons img {
  width: 15px;
  height: 17px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 10px; 
}
#userData{
width: 584px;
height: 277px;
}

.top{
  display: flex;
flex-direction: row; 
align-items: flex-start;
}
.labelUser{
  margin-left: 4px;
  
}

</style>
