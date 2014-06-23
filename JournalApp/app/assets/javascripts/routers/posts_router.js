JournalApp.Routers.Posts = Backbone.Router.extend({
  intialize: function(jQObj){
    this.$rootEl = jQObj;
  },

  routes: {
    '': 'index',
    'posts/new' : 'newPost',
    'posts/:id': 'show',
    'posts/:id/edit' : 'edit'
  },

  index: function () {
    JournalApp.allPosts.fetch();
    var allPostsView = new JournalApp.Views.PostsIndex(JournalApp.allPosts);
    $('#js').html(allPostsView.render().$el);
  },

  show: function (id) {
    var somePost = JournalApp.allPosts.getOrAdd(id);
    somePost.fetch({
      success: function(){
        var somePostView = new JournalApp.Views.PostShow(somePost);
        $('#js').html(somePostView.render().$el);
     }
    });
  },

  edit: function(id){
    var editPost = JournalApp.allPosts.getOrAdd(id);
    editPost.fetch({
      success: function(){
        var newForm = new JournalApp.Views.PostForm({model: editPost});
        $('#js').html(newForm.render().$el);
      }
    })
  },

  newPost: function(){
    var nPostObj = new JournalApp.Models.Post();
    JournalApp.allPosts.add(nPostObj)

    var newForm = new JournalApp.Views.PostForm({
      model: nPostObj,
      collection: JournalApp.allPosts
    });
    $('#js').html(newForm.render().$el);
  }

});
