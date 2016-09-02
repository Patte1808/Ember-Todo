import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        remove(id) {
            this.get('store').findRecord('todo', id, { backgroundReload: false }).then(function(todo) {
                todo.destroyRecord();
            });
        }
    }
});
