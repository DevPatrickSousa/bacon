<template>
  <div>
    <div class="container">
      <div class="mainContainer">
        <div class="top">
          <span id="userSpan">Usuários</span>
          <div class="button-container">
            <router-link to="/newUser">
            <buttonComponent buttonText="Novo usuário" buttonColor="#000000" textColor="#FFFF"/>
          </router-link>
        </div>
        </div>

        <div class="cards">
          <div class="userCard" v-for="user in users" :key="user.id">
            <div class="userCardInformations">
            <img :src="(user.avatar)" :alt="user.first_name" id="cardImg"/>
            <div class="userInformation">
              <span id="userId">#{{ user.id }} </span>
              <br>
              <span id="fullName">{{ user.first_name }} {{ user.last_name }}</span>
              <br>
              <span id="email">{{ user.email }}</span>
            </div>
            <div class="icons">
              <img @click="$router.push('/newUser')" src="../assets/icons/edit.png" alt="edit" />
              <img @click="deleteUser(user.id)" src="../assets/icons/delete.png" alt="delete" />
              <img @click="$router.push('/user/' + user.id)" src="../assets/icons/moreDetails.png" alt="more details" />
            </div>
          </div>
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
        users: [],
        support:[],
        editingUserId: null,
        
        
      }
    },
    mounted() {
      axios.get('https://reqres.in/api/users')
      .then(response => {
        this.users = response.data.data;
        this.support = response.data.support;
        console.log(this.users)
        console.log(this.support)
      })
      .catch(error => {
        console.log(error);
      });
    },
    methods:{
    deleteUser(id) {
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then(response => {
      console.log(response);
      alert(`Usuário ${id} deletado com sucesso!`);
    })
    .catch(error => {
      console.log(error);
      alert("erro!");
    });
},
    editUser(id) {
      this.editingUserId = id // atualiza o valor de editingUserId
      this.$router.push('/newUser') // redireciona para a página de edição
    }
  },
  components:{
    buttonComponent
  }
  };
  </script>
  
  
 
  
  

  
  <style >
 

.container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    border: 0;
    justify-content: center;
    align-items: center;
    
  }
.mainContainer{
  border: 0;
  width: 592px;
  min-height: 761px;
  
}

#userSpan{
  font-size: 50px;
  margin-left: 4px;
  margin-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  
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
  gap: 15px;
}

.cards img{
  height: 80px;
  width: 80px;
  margin-right: 25px;
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
  row-gap: 17px;
  padding-top: 10px;
  
}
.top{
display: flex;
flex-direction: row; 
justify-content: space-between;
}
.black{
  max-width: 4px;
  height: 20px;
  background-color: black;
  display: flex;
  max-height: 100%;
  flex-direction: column;
}
.userCardInformations{
  display: flex;
  max-height: 100%;
  width: 528px;
  height: 80px;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  margin: 20px 30px 20px 30px;
  background-color: #F7F7F7;
}
a{
  text-decoration: none;
}
.userInformation{
  display: flex;
  flex-direction: column;
  
}
#userId{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.5px;
  letter-spacing: 0.2px;
}
#fullName{
  letter-spacing: 0.2px;
  line-height: 3px;
}
#email{
  letter-spacing: 0.2px;
}
.userCard{
  display: flex;
  background-color: #F7F7F7;
}



  </style>
  