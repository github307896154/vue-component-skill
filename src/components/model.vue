<template>
  <div>
    <div>头部</div>
    <div>
       <slot>默认内容</slot>
    </div>
    <div>
      <slot name="fotter">
         <Button>确认</Button>
      </slot> 
    </div>
  </div>
</template>

<script>
export default {
  name: "model",
};
</script>
