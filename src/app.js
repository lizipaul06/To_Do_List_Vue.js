import Vue from 'vue';

document.addEventListener('DOMContentLoaded',()=> {

new Vue ({
  el:"#app",
  data: {
    items:[
    {name: "Buy shopping", priority: "High", isDone: false},
    {name: "Clean bathroom", priority:"Low", isDone:false },
    {name: "Car's MOT", priority: "High", isDone:false }
],
  newItem: "",
  priority: ""
  },

  methods: {
    saveNewItem: function() {
      this.items.push({
        name: this.newItem,
        priority: this.priority,
        isDone: false
      });
      this.newItem= "";
    },
    finishItem: function(index) {
      this.items[index].isDone = true
    }

  }
});
});
