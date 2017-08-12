<template>
    <div>
        <span>{{text}}</span>
        <el-switch v-model="value" on-color="#13ce66" off-color="#ff4949">
        </el-switch>
    </div> 
</template>


<script>

import {Switch} from 'element-ui';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Switch);

axios.get("http://localhost:8080/#/")
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err);
    })

export default {
  
  data(){
      return{
          text:'sdfasdfasdfa--------------sdfas',
          value:true
      }
  }
}
</script>
