new Vue({
   el: '#appVue',
   data:{
       lists: [ //lists nombres a gusto
       ], 
       newKeep: ''
   }, //la data son los datos que tiene un array vacio
   //el metodo son las funciones que llamamos
   methods: {
       addKeep: function(){
           this.lists.push({keep: this.newKeep, completed: false});
           this.newKeep = '';
       }//la funcion addkeep ingresa a la lsita el valor tomado del input newKeep y el complted a false 
   }
});