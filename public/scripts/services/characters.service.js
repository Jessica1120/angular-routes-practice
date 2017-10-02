myApp.service('CharacterService', function($http) {
    console.log ('in CS');

    var self = this;

   self.skillLevel = { level: [Math.floor(Math.random() * 10) + 1]};
   self.winner = {status: []}
   self.totalSlaps = { count: 0 };
 
    self.slapCounter = function() {
        self.totalSlaps.count++;
        self.whoWins()
    };
    self.whoWins = function() {
        var quality = Math.floor(Math.random() * 10) + 1
       
        if (self.skillLevel.level <= quality) {
            console.log('character wins', self.skillLevel.level, quality);
            self.winner.status.push('You Lose.')
        } else {
            console.log('you win');
            self.winner.status.push('You Win', self.skillLevel.level, quality);
        };
    };
   
    self.serverInfo = {list: []};

    self.getServerInfo = function() {
        $http.get('/serverInfo').then(function(response) {
            console.log('response.data:', response.data);

            self.serverInfo.list = response.data;
        });
    }
});