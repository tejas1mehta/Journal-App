JournalApp.Views.PostShow = Backbone.View.extend({

  initialize: function(model){
    this.post = model
    this.listenTo(this.post,"remove add change:title change:body reset sync", this.render)
  },

  template: JST['posts/show'],

  render: function(){
    var renderedTemplate = this.template({
      post: this.post
    });
    this.$el.html(renderedTemplate)

    return this
  }
});
