JournalApp.Views.PostsIndex = Backbone.View.extend({

  initialize: function(posts){
    this.posts = posts
    this.listenTo(this.posts, "add change remove", this.render);
  },

  events: {"click .delete-btn": 'removePost'},
  template: JST['posts/index'],

  removePost: function(event){
    var $target = $(event.target);
    var postId = $target.attr('data-id');

    this.posts.get(postId).destroy()
  },

  render: function(){
    var renderedTemplate = this.template({
      posts: this.posts
    })

    this.$el.html(renderedTemplate)

    return this
  }
});
