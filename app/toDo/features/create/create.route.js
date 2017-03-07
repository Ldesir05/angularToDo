angular
    .module('toDo.create')
    .config(createConfig);

  function createConfig($stateProvider) {

    $stateProvider.state({
        name: 'create', // name of the route
        url: '/create', // url endpoint for the route
        templateUrl: '/toDo/features/create/create.html', // The url to the view template
        controller: 'CreateCtrl', // The name of the controller to use for this route
        controllerAs: 'CreateVM' // The namespace for the view to access the view model
    });
}

