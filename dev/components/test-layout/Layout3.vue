
<template>
 <metrovue-layout>
      <div class="columns">
		  <div class="column is-narrow">
			 <metrovue-sidebar :classes="['is-primary']" type="compact">
				 <li>
					 <a href="#">
							<span class="icon">
							  <i class="fa fa-home"></i>
							</span>
							<span class="title">Dashboard</span>
                       </a>
                 </li>
                 <li>
					 <a href="#">
							<span class="icon">
							  <i class="fa fa-ticket"></i>
							</span>
							<span class="title">Tickets</span>
							<span class="counter">10</span>
                       </a>
                 </li>
                 <li>
					 <a href="#">
							<span class="icon">
							  <i class="fa fa-user-circle-o"></i>
							</span>
							<span class="title">Users</span>
							<span class="counter">20</span>
                       </a>
                 </li>
                 <li>
					 <a href="#">
							<span class="icon">
							  <i class="fa fa-wifi"></i>
							</span>
							<span class="title">Network</span>
                       </a>
                 </li>
			 </metrovue-sidebar>
		  </div>
		  <div class="column">
			<div class="tabs is-centered">
			  <ul>
				<li class="is-active">
				  <a>
					<span class="icon is-small"><i class="fa fa-image"></i></span>
					<span>Pictures</span>
				  </a>
				</li>
				<li>
				  <a>
					<span class="icon is-small"><i class="fa fa-music"></i></span>
					<span>Music</span>
				  </a>
				</li>
				<li>
				  <a>
					<span class="icon is-small"><i class="fa fa-film"></i></span>
					<span>Videos</span>
				  </a>
				</li>
				<li>
				  <a>
					<span class="icon is-small"><i class="fa fa-file-text-o"></i></span>
					<span>Documents</span>
				  </a>
				</li>
			  </ul>
			</div>
		    <div class="container">
				<metrovue-tile :class="['is-ancestor']">
					<metrovue-tile :class="['is-vertical', 'is-8']">
						<metrovue-tile>
							<metrovue-tile :class="['is-parent', 'is-vertical']">
								<metrovue-tile :class="['is-child ','box', 'is-primary']">
									<p class="title is-5">Vertical...</p>
                                    <p class="subtitle">Top tile</p>
				                </metrovue-tile>
				                <metrovue-tile :class="['is-child ','notification', 'is-warning']">
									<p class="title">...tiles</p>
                                    <p class="subtitle">Bottom tile</p>
				                </metrovue-tile>
				            </metrovue-tile>
				            <metrovue-tile :class="['is-parent']">
								<metrovue-tile :class="['is-child ','notification', 'is-info']">
									<p class="title">Middle tile</p>
                                    <p class="subtitle">With an image</p>
				                </metrovue-tile>
				            </metrovue-tile>
				        </metrovue-tile>
				        <metrovue-tile :class="['is-parent']">
							<metrovue-tile :class="['is-child ','notification', 'is-danger']">
						       <p class="title">Wide tile</p>
                               <p class="subtitle">Aligned with the right tile</p>
				             </metrovue-tile>
				        </metrovue-tile>
				    </metrovue-tile>
				    <metrovue-tile :class="['is-parent']">
					   <metrovue-tile :class="['is-child ','notification', 'is-success']">
						   <div class="content">
							<p class="title">Tall tile</p>
							<p class="subtitle">With even more content</p>
							<div class="content">
							  <!-- Content -->
							</div>
						  </div>
				       </metrovue-tile>
				    </metrovue-tile>
				</metrovue-tile>
			</div>
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

