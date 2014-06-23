JournalApp.Views.PostForm = Backbone.View.extend({
  events: {"submit #edit-form": 'editPost'},
  template: JST['posts/new_form'],

  editPost: function(event){
    event.preventDefault();
    var that = this;
    var $form = $(event.currentTarget);
    this.formData = $form.serializeJSON();

    if (this.model.isNew()) {
      this.collection.create(this.formData,{
        success: function(res) {
          this.router.navigate("", {trigger: true} );
        }
      })
    } else {
      this.model.save(this.formData, {
        success: function() {
          this.router.navigate("", {trigger: true} );
        }
      });
    }
  },

  render: function(){
    var renderedTemplate = this.template({
      post: this.model
    })

    this.$el.html(renderedTemplate)

    return this
  }
});
