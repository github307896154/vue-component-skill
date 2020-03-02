<template>
  <div>
    33
    <div class="title">
      {{title}}
    </div>
    <div class="content">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  name:'tip',
  props:{
    title:{
      type:[String],
      default:''
    },
    content:{
      type:[String],
      default:''
    }
  },
  methods: {
    show(options){

    }
  },
}
</script>
