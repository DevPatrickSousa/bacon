<template>
<div id="userData">
          <form  @submit.prevent="submitForm">
            <label class="labelUser">Nome do usuário </label>
            <input type="text" v-model="name">
            <label class="labelUser">Função do usuário</label>
              <select v-model="job">
                <option selected="selected" disabled>Selecione a função</option>
                <option v-for="option in options" v-bind:value="option.value" >
                  {{ option.text }}
                </option>
              </select>
            
            <buttonComponentForm/> 
          </form>
        </div>


</template>

<script setup>
import buttonComponentForm from './buttonComponentForm.vue'
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
    this.name = ''
    this.job = ''
    console.log(response.data);
    alert('Usuário criado com sucesso!')
  })
  .catch(error => {
    console.log(error)
  })
}
},
created() {
  console.log('Component formComponentPost created');
},
}
</script>


<style scoped>

select{
  display: block;
  margin: 0 4px;
  border-radius: 5px;
  margin-bottom: 24px;
  width: 584px;
  height: 55px;
  border-width: 0;
  border: 1px solid #E5E5E5
}
input {
  display: block;
  width: 584px;
  height: 55px;
  margin: 0 4px;
  border-radius: 5px;
  border-width: 0;
  margin-bottom: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 15px;
  border: 1px solid #E5E5E5
}
#userData{
width: 584px;
height: 277px;

}
label.labelUser{
  padding: 0 0 12px 4px;
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

</style>