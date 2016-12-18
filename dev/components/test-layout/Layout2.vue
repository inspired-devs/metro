<template>
 <metrovue-layout>
	 <metrovue-t-menu>
		 <span class="nav-toggle">
			<span></span>
			<span></span>
			<span></span>
          </span>
          
		 <div class="nav-left">
			 <p class="nav-item is-brand title">MET</p>
		  </div>
		  <div class="nav-center">
			<a class="nav-item" href="#">
			  <span class="icon">
				<i class="fa fa-github"></i>
			  </span>
			</a>
			<a class="nav-item" href="#">
			  <span class="icon">
				<i class="fa fa-twitter"></i>
			  </span>
			</a>
		  </div>
		  
		  <div class="nav-right nav-menu">
			<a class="nav-item" href="#">
			  Home
			</a>
			<a class="nav-item" href="#">
			  Documentation
			</a>
			<a class="nav-item" href="#">
			  Blog
			</a>
		  </div>
	 </metrovue-t-menu>
     
      <div class="columns">
		  <div class="column">
			 <metrovue-v-menu>
				  <ul class="menu-list">
					<li>
						<a href="#">
							<span class="icon">
							  <i class="fa fa-home"></i>
							</span>
							Dashboard
						</a>
					</li>
					<li>
						<a href="#">
							<span class="icon">
							  <i class="fa fa-ticket"></i>
							</span>
							Tickets
						</a>
					</li>
					<li>
						<a href="#">
							<span class="icon">
							  <i class="fa fa-user-circle-o"></i>
							</span>
							Users
						</a>
					</li>
					<li>
						<a href="#">
							<span class="icon">
							  <i class="fa fa-wifi"></i>
							</span>
							Network
						</a>
					</li>
				  </ul>
				  
			 </metrovue-v-menu>
		  </div>
		  <div class="column">
			
		  </div>
     </div>
     <footer slot="footer" class="footer">
		  <div class="container">
			<p class="has-text-centered">
				<a class="icon" href="">
				  <i class="fa fa-github"></i>
				</a>
			 </p>
		  </div>
	</footer>
 </metrovue-layout>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

