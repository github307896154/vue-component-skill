<template>
  <div v-once>
      {{hugeData}}
  </div>
</template>

<script>
export default{
  // name:'vOnce',
  data () {
    return {
      hugeData:"huge Data..."
    }
  },
  mounted() {
    setTimeout(()=>{
      this.hugeData="change Data..."
    },100)
  },
}
</script>