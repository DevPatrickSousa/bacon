<template>
<div id="userData">
          <form @submit.prevent="submitForm">
            <label class="labelUser">Nome do usuário
            <input type="text" v-model="name">
            </label>
            <label class="labelUser">Função do usuário
              <select v-model="job">
                <option selected="selected" disabled>Selecione a função</option>
                <option v-for="option in options" v-bind:value="option.value" >
                  {{ option.text }}
                </option>
              </select>
            </label>
             <buttonComponent/> 
          </form>
        </div>


</template>

<script setup>
import buttonComponent from './buttonComponent.vue'
</script>

<script>
import axios from 'axios'
export default {
  data() {
    return {
    name: '',
    job: '',
      options:[
        {text: 'Desenvolvedor', value: 'A'},
        {text: 'Gerente de Projetos', value: 'B'},
        {text: 'Tech Lead', value: 'C'},
        {text: 'UI/UX Designer', value: 'D'},
      ]}},
      methods: {
        submitForm() {
  axios.post('https://reqres.in/api/users', {
    name: this.name,
    job: this.job
  })
  .then(response => {
    console.log(response.data)
    this.name = ''
    this.job = ''
  })
  .catch(error => {
    console.log(error)
  })
}
}}
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
#userData{
width: 584px;
height: 277px;
}
.labelUser{
  margin-left: 4px;
}

</style>