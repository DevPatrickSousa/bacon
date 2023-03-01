<template>
    <button id="buttonStyle" :style="{ backgroundColor: buttonColor, color: textColor }">{{ buttonText }}</button>
    </template>
    
    
    <script>
    export default{
           props:{
               buttonText: String,
               buttonColor: String,
               textColor: String, 
           }
           
       }
   </script>
    
    <style>
    button#buttonStyle{
    width: 185px;
    height: 55px;
    border-radius: 5px;
    border-width: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-left: auto; /* centralizar o botão na tela */
    margin-right: auto;
    display: block; /* tornar o botão um elemento de bloco para centralizar */
    }
    </style>