myApp.controller('JackController', function (CharacterService) {
    console.log('in JC');

    var vm = this;

    CharacterService.getServerInfo();
    vm.serverInfo = CharacterService.serverInfo;
    
        vm.totalSlaps = CharacterService.totalSlaps
    
        vm.totalSlapUpdate = function() {
            console.log('in slap update');
            CharacterService.slapCounter();
        };//end totalSlapUpdate Function
    
    });//end LC function