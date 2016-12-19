<template>
<article class="message" :class="classObject">
   <slot></slot>
</article>
</template>

<script>
/* global _:true */
export default {
  props: {
    classes: {
      type: Array,
      required: false
    }
  },
  methods: {

  },
  computed: {
    classObject () {
      let ret = {}
      if (this.classes && this.classes.length > 0) {
        let
          c = this.classes,
          o = {}
        _.each(c, function (e) {
          o[e] = true
          // o[_.camelCase(e)] = true
        })
        console.log(o)
        _.extend(ret, o)
      }
      console.log(ret)
      return ret
    }
  }
}
</script>

<style>
</style>







