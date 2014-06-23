JournalApp.Collections.Posts = Backbone.Collection.extend({

  model: JournalApp.Models.Post,
  url: "/posts",
  getOrAdd: function(id){
    var retModel = this.get(id);
    if (!retModel){
      retModel = new this.model({id:id})
      this.add(retModel)
    }

    return retModel
  },

});
