angular
    .module("custodocarro")
    
    .service("MontadorasService", ["$firebaseArray", function($firebaseArray) {
        var service = this;
        var montadoras = new Firebase("https://custodocarro.firebaseio.com/montadoras");
        
        service.lista = $firebaseArray(montadoras).orderByChild("nome");
        
        this.save = function(montadora) {
            return montadoras.$add(montadora);
        }
        
        this.edit = function(montadora) {
            return montadoras.$save(montadora);
        }
        
        this.remove = function(montadora) {
            return montadoras.$remove(montadora);
        }
    }])
    
    .controller("MontadorasController", ["MontadorasService", function(Montadoras) {
        var controller = this; 
        
        controller.novaMontadora = false;
        
        controller.montadoras = Montadoras.lista;
        controller.nova = '';
        
        controller.addNova = function() {
            Montadoras.save(controller.nova);
        }
        
        controller.cancelNova = function() {
            controller.nova = '';
            controller.novaMontadora = false;
        }
    }])
    ;