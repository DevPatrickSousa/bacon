<template>
    <button id="buttonStyle" :style="{ backgroundColor: buttonColor, color: textColor, marginTop: marginTopValue, marginRight: marginRightValue }">{{ buttonText }}</button>
    </template>
    
    
    <script>
    export default{
           props:{
               buttonText: String,
               buttonColor: String,
               textColor: String,
               marginTopValue: {
                type: String,
                default: '0',
                },
               marginRightValue: {
                type: String,
                default: '0',
                },
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
    margin-left: auto; 
    margin-right: auto;
    display: block; 
    font-size: 15px;
    }
    </style>