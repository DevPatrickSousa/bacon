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
            submitForm(id) {
            axios.put(`https://reqres.in/api/users/${this.$route.params.id}`, {
                name: this.name,
                job: this.job
            })
            .then(response => {
             console.log(response.data);
             alert('Usuário atualizado com sucesso!')
            })
            .catch(error => {
              console.log(error)
            })}
            },
            created() {
            console.log('Component formComponentPut created');
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
    }
    input {
      display: block;
      width: 584px;
      height: 55px;
      margin: 0 4px;
      border-radius: 5px;
      border-width: 0;
      margin-bottom: 24px;
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