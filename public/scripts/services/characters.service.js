myApp.service('CharacterService', function($http) {
    console.log ('in CS');

    var self = this;

    self.skillLevel = { level: Math.floor(Math.random() * 10) + 1};
    //self.qualityLevel = { level: Math.floor(Math.random() * 10) + 1};

    self.totalSlaps = { count: 0 };
    
    self.slapCounter = function() {
        self.totalSlaps.count++;
        var quality = Math.floor(Math.random() * 10) + 1;
        if (self.skillLevel.level <= quality) {
            console.log('character wins');
        } else {
            console.log('you win');
        };
    };

    // self.qualityLevel = function() {
        
    // };
   
    self.serverInfo = {list: []};

    self.getServerInfo = function() {
        $http.get('/serverInfo').then(function(response) {
            console.log('response.data:', response.data);

            self.serverInfo.list = response.data;
        });
    }
});