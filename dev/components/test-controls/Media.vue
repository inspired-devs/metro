<template>
 <metrovue-layout>
   <div class="columns">
	  <div class="column">
        <metrovue-media>
          <figure class="media-left">
			<p class="image is-64x64">
			  <img src="http://placehold.it/128x128">
			</p>
		  </figure>
		  <div class="media-content">
			<div class="content">
			  <p>
				<strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
				<br>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
			  </p>
			</div>
			<nav class="level">
			  <div class="level-left">
				<a class="level-item">
				  <span class="icon is-small"><i class="fa fa-reply"></i></span>
				</a>
				<a class="level-item">
				  <span class="icon is-small"><i class="fa fa-retweet"></i></span>
				</a>
				<a class="level-item">
				  <span class="icon is-small"><i class="fa fa-heart"></i></span>
				</a>
			  </div>
			</nav>
		  </div>
		  <div class="media-right">
			<button class="delete"></button>
		  </div>
        <metrovue-media>
     </div>
     <div class="column">
        <metrovue-media>
          <figure class="media-left">
			<p class="image is-64x64">
			  <img src="http://placehold.it/128x128">
			</p>
		  </figure>
		  <div class="media-content">
			<p class="control">
			  <textarea class="textarea" placeholder="Add a comment..."></textarea>
			</p>
			<nav class="level">
			  <div class="level-left">
				<div class="level-item">
				  <a class="button is-info">Post comment</a>
				</div>
			  </div>
			  <div class="level-right">
				<div class="level-item">
				  <label class="checkbox">
					<input type="checkbox"> Press enter to submit
				  </label>
				</div>
			  </div>
			</nav>
		  </div>
        <metrovue-media>
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





