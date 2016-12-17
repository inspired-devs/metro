<template>
<section id="app" class="section ">
  <div class="container">
	  <div class="columns">
		  <div class="column is-3">
			<aside class="menu">
			  <p class="menu-label">
				General
			  </p>
			  <ul class="menu-list">
				<li>
					<router-link :to="{ name: 'index' }">Index</router-link>
			    </li>
			    <li>
					<router-link :to="{ name: 'layouts' }">Layouts</router-link>
			    </li>
				<li>
					<router-link :to="{ name: 'cssComponents' }">Css components</router-link>
					<ul>
						<li>
							<router-link :to="{ name: 'cssGrid' }">Grid</router-link>
							<ul>
								<router-link :to="{ name: 'cssColumn' }">Columns</router-link>
								<router-link :to="{ name: 'cssGridTiles' }">Tiles</router-link>
						    </ul>
						</li>
						<li>
							<router-link :to="{ name: 'cssElements' }">Elements</router-link>
							<ul>
								<router-link :to="{ name: 'cssElementsBox' }">Box</router-link>
								<router-link :to="{ name: 'cssElementsButton' }">Button</router-link>
						    </ul>
						</li>
					</ul>
			    </li>
			  </ul>
			</aside>
		  </div>
		  <div class="column">
			  <router-view></router-view>
		  </div>
     </div>
  </div>
</section>
</template>

<script>
export default {

}
</script>
<style lang="scss">
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome'
</style>
