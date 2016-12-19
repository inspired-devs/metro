<template>
 <metrovue-layout>
   <div class="columns">
	  <div class="column">
        <metrovue-message>
          <div class="message-header">
			Hello World
		  </div>
		  <div class="message-body">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Pellentesque risus mi, tempus quis placerat ut, porta nec
			nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
			gravida purus diam, et dictum felis venenatis efficitur.
			Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
			arcu et sollicitudin porttitor, tortor urna tempor ligula,
			id porttitor mi magna a neque. Donec dui urna, vehicula et
			sem eget, facilisis sodales sem.
		  </div>
        <metrovue-message>
     </div>
     <div class="column">
        <metrovue-message :class="['is-primary']">
          <div class="message-header">
			Primary
		  </div>
		  <div class="message-body">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Pellentesque risus mi, tempus quis placerat ut, porta nec
			nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
			gravida purus diam, et dictum felis venenatis efficitur.
			Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
			arcu et sollicitudin porttitor, tortor urna tempor ligula,
			id porttitor mi magna a neque. Donec dui urna, vehicula et
			sem eget, facilisis sodales sem.
		  </div>
        <metrovue-message>
     </div>
   </div>
 </metrovue-layout>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
