window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.router = new JournalApp.Routers.Posts($('body'))

    JournalApp.allPosts = new JournalApp.Collections.Posts();
    JournalApp.allPosts.fetch();
    var allPostsView = new JournalApp.Views.PostsIndex(JournalApp.allPosts);
    $("#sidebar").html(allPostsView.render().$el)

    Backbone.history.start();

  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
