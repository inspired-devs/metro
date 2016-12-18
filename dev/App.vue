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
					<router-link :to="{ name: 'TestLayouts' }">Test Layouts</router-link>
					<ul>
						<li>
							<router-link :to="{ name: 'TestLayout1' }">Layout 1</router-link>
					    </li>
					    <li>
							<router-link :to="{ name: 'TestLayout2' }">Layout 2</router-link>
					    </li>
					</ul>
			    </li>
				<li>
					<router-link :to="{ name: 'cssComponents' }">Css components</router-link>
					<ul>
						<li>
							<router-link :to="{ name: 'cssLayout' }">Layout</router-link>
							<ul>
								<router-link :to="{ name: 'cssLayoutSec' }">Section</router-link>
								<router-link :to="{ name: 'cssLayoutFoot' }">Footer</router-link>
						    </ul>
						</li>
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
	
</style>
