var ForecastView = Backbone.View.extend({
  el: '#forecast', 

  template: require('../../templates/forecast.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function () {
    var context = {}
    context.currently = this.model.get('currently') || {};
    context.today = this.model.get('daily') || {};
    this.$el.html(this.template(context));
    return this;
  }

});

module.exports = ForecastView;