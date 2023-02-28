<template>
  <div>
    <div class="container">
      <div class="mainContainer">
        <div>
          <span id="userSpan">Usuários</span>
          <button id="newUser" @click="$router.push('/newUser')">
            <buttonComponentText buttonText="Novo usuário" />
          </button>
        </div>

        <div class="cards">
          <div class="userCard" v-for="user in users" :key="user.id">
            <img :src="(user.avatar)" :alt="user.first_name" />
            <div>
              <span>#{{ user.id }} </span>
              <br>
              <span id="fullName">{{ user.first_name }} {{ user.last_name }}</span>
              <br>
              <span>{{ user.email }}</span>
              <div v-if="user.id === selectedUserId">
                <span>#{{ user.id }} </span>
                <img :src="(user.avatar)" :alt="user.first_name" />
              </div>
            </div>
            <div class="icons">
              <img @click="teste" src="../assets/icons/edit.png" alt="edit" />
              <img @click="teste" src="../assets/icons/delete.png" alt="delete" />
              <img @click="divVisibility(user)" src="../assets/icons/moreDetails.png" alt="more details" />
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
        selectedUserId: null,
      }
    },
    mounted() {
      axios.get('https://reqres.in/api/users')
      .then(response => {
        this.users = response.data.data.map(user => ({
          ...user,
          showDiv: false,
        }));
        console.log(this.users)
      })
      .catch(error => {
        console.log(error);
      });
    },
    methods:{
      teste(){
        alert('teste');
      },
      divVisibility(user) {
      if (this.selectedUserId === user.id) {
        this.selectedUserId = null;
      } else {
        this.selectedUserId = user.id;
      }
    },
  },
    
    


  };
  </script>
  
  
  <script setup>
  import buttonComponentText from './buttonComponentText.vue'
  </script>
  
  

  
  <style>
 

.container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    
  }
.mainContainer{
  border: 1px solid black;
  width: 592px;
  min-height: 761px;
  
}

#userSpan{
  font-size: 50px;
}
button#newUser{
  height: 55px;
  width: 185px;
  margin-left: 227px;
  background-color: black;
  color: white;
  border-radius: 5px;
}
.cards{
  display: flex;
  max-height: 100%;
  flex-direction: column;
  
}
.userCard{
  display: flex;
  max-height: 100%;
  min-width: 586px;
  height: 120px;
  margin-left: 4px;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  overflow: scroll;
}
.cards img{
  height: 80px;
  width: 80px;
}

.icons img {
  width: 15px;
  height: 17px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 10px; 
}
#fullName{
  font-weight: 600;
}
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
}

  </style>
  