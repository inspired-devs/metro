<template>
 <metrovue-layout>
     <div slot="header" class="heading">
        <h1 class="title">
          <span class="icon icon is-medium">
             <i class="fa fa-th-large"></i>
          </span>
          Metrovue App
        </h1>
     </div>
      <div class="columns">
		  <div class="column is-3">
			 <metrovue-v-menu>
				 <p class="menu-label">
					General
				  </p>
				  <ul class="menu-list">
					<li><a href="#">Dashboard</a></li>
					<li><a href="#">Customers</a></li>
				  </ul>
				  <p class="menu-label">
					Administration
				  </p>
				  <ul class="menu-list">
					<li><a href="#">Team Settings</a></li>
					<li>
					  <a class="is-active" href="#">Manage Your Team</a>
					  <ul>
						<li><a href="#">Members</a></li>
						<li><a href="#">Plugins</a></li>
						<li><a href="#">Add a member</a></li>
					  </ul>
					</li>
					<li><a href="#">Invitations</a></li>
					<li><a href="#">Authentication</a></li>
				  </ul>
				  <p class="menu-label">
					Transactions
				  </p>
				  <ul class="menu-list">
					<li><a href="#">Payments</a></li>
					<li><a href="#">Transfers</a></li>
					<li><a href="#">Balance</a></li>
				  </ul>
			 </metrovue-v-menu>
		  </div>
		  <div class="column">
			<p>Content</p>
		  </div>
     </div>
     <footer slot="footer" class="footer">
		  <div class="container">
			<div class="content has-text-centered">
			  <p>
				<a class="icon" href="">
				  <i class="fa fa-github"></i>
				</a>
			  </p>
			</div>
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
