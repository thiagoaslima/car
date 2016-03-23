angular
    .module("carapp")

    .service("MontadorasService", ["$firebaseArray", function($firebaseArray) {
        var service = this;
        var montadoras = new Firebase("https://custodocarro.firebaseio.com/montadoras");

        service.lista = $firebaseArray(montadoras.orderByChild("nome"));

        this.save = function(montadora) {
            return service.lista.$add(montadora).then(function(response) {
                service.lista = $firebaseArray(response.orderByChild("nome"));
                return service.lista;
            });
        }

        this.edit = function(montadora) {
            return service.lista.$save(montadora);
        }

        this.remove = function(montadora) {
            return service.lista.$remove(montadora);
        }
    }])

    .controller("MontadorasController", ["MontadorasService", function(Montadoras) {
        var controller = this;

        var _base = {
            "nome": ""
        };

        controller.novaMontadora = false;

        controller.montadoras = Montadoras.lista;
        controller.nova = angular.extend({}, _base);
        
        controller.checkValue = function () {
            if (controller.montadora === 0) {
                controller.novaMontadora = true;
                return;
            }
        }

        controller.addNova = function() {
            return Montadoras.save(controller.nova).then(controller.cancelNova);
        }

        controller.cancelNova = function() {
            controller.nova = angular.extend({}, _base);
            controller.novaMontadora = false;
        }
    }])
    ;