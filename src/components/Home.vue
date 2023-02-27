<template>
    <div>
    
    <div class="container">
      <div class="mainContainer">
        <div>
          <span id="userSpan">Usuários</span>
          <button >Novo usuário</button>
        </div>

        <div class="cards">
          <ul>
          <li v-for="user in users" :key="user.id">
            <img :src="(user.avatar)" :alt="user.first_name">
                {{ user.first_name }} {{ user.last_name }}
          </li>
        </ul>
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
        users: []
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
    


  };
  </script>
  Neste exemplo, estamos usando o Axios para fazer uma requisição GET para a API https://reqres.in/api/users e carregar uma lista de usuários. Depois de obter a resposta, armazenamos os dados no objeto users do componente usando o this.users = response.data.data. Certifique-se de importar o Axios no seu componente e manipular os erros com o método catch.
  
  
  
  
  

  
  <style>
 
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    border: 1px solid black;
  }
.mainContainer{
  border: 2px solid black;
  width: 592px;
  height: 761px;
  flex-direction: row;
  padding-top: 96px;
}


#userSpan{
  font-size: 50px;
  
}
button{
  height: 55px;
  width: 185px;
  margin-left: 225px;
  background-color: black;
  color: white;
  border-radius: 5px;
}
.cards{
  display: grid;
  grid-column: auto;
}
li{
  margin-left: 70px;
  list-style: none;
}
  </style>
  