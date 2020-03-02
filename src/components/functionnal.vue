<template functional>
  <button v-bind="data.attrs" v-on="listeners">
    <slot />
  </button>
</template>

<script>
export default {

};
</script>
