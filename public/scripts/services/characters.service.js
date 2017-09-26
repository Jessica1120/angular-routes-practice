myApp.service('CharacterService', function($http) {
    console.log ('in CS');

    var self = this;

    self.totalSlaps = { count: 0 };
    
    self.slapCounter = function() {
        self.totalSlaps.count++;
    };

    self.serverInfo = {list: []};

    self.getServerInfo = function() {
        $http.get('/serverInfo').then(function(response) {
            console.log('response.data:', response.data);

            self.serverInfo.list = response.data;
        });
    }
});