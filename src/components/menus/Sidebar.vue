<template>
<ul class="sidebar " :class="classObject">
  <slot></slot>
</ul>
</template>

<script>
// import _ from 'underscore'
/* global _:true */
export default {
  props: {
    type: {
      type: String,
      required: false
    },
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
      if (this.type === 'compact') {
        // ret = { compact: true }
        _.extend(ret, {compact: true})
      }
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


