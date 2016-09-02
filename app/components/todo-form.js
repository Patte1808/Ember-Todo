import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    actions: {
        newTodo() {
            var todo = this.get('store').createRecord('todo', {
                title: this.get('title'),
                body: this.get('body')
            });

            todo.save();
        }
    }
});
