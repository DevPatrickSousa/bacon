<template>
  <div>
  
  <div class="container">
    <div class="mainContainer">
      <div class="top">
        <span id="userSpanText">Usuários</span>
        <div class="button-container">
          <router-link to="/">
          <buttonComponent buttonText="Cancelar" />
          </router-link>
        </div>
      </div>


      <formComponentPost v-if="editingUserId === null" />
      <formComponentPut v-if="editingUserId !== null" :userId="editingUserId" />

      <div class="cards">
       
        <div class="card" v-for="user in users" :key="user.id">
          <div class="userCardInformations">
            <div class="black"></div>
          <img :src="(user.avatar)" :alt="user.first_name">
          <div>
            <span>#{{ user.id }}</span> 
             <br>
             <span id="fullName">{{ user.first_name}} {{ user.last_name }}</span> 
             <br>
             <span>{{ user.email }}</span> 
          </div>
          <div class="icons">
            <img @click="editUser(user.id)" src="../assets/icons/edit.png" alt="edit"/> 
            <img @click="deleteUser(user.id)" src="../assets/icons/delete.png" alt="delete"/> 
            <img @click="$router.push('/user/' + user.id)" src="../assets/icons/moreDetails.png" alt="more details"/>
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
import formComponentPost from "@/components/formComponentPost.vue";
import formComponentPut from "@/components/formComponentPut.vue";
import buttonComponent from "@/components/buttonComponent.vue";

export default {
  data() {
    return {
      users: [],
      editingUserId: null,
    }
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
    editUser(id) {
      console.log(`editando o user ${id}`);
      this.editingUserId = id;
      alert(`você está editando o usuário ${id}`)
    },
    deleteUser(id) {
    axios.delete(`https://reqres.in/api/users/${id}`)
    .then(response => {
      console.log(response);
      alert('usuário deletado com sucesso!');
    })
    .catch(error => {
      console.log(error);
      alert("erro!");
    });
},
  },
  components:{
    formComponentPost,
    formComponentPut,
    buttonComponent,
  }
  
};
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
  border-width: 0;
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
height: 937px;
}
#userSpanText{
font-size: 50px;

}

.cards{
display: flex;
height: 520px;
flex-direction: column;
overflow: scroll;
border-radius: 5px;
margin-top: 40px;
overflow: scroll;
}
.userCardInformations{
  display: flex;
  max-height: 100%;
  width: 588px;
  height: 120px;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  padding: 20px 30px 20px 30px;
  
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
padding-bottom: 40px;
justify-content: space-between;
}
.labelUser{
  margin-left: 4px;
}
.black{
  width: 4px;
  height: 20px;
  background-color: black;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

</style>
