myApp.controller('LecterController', function (CharacterService){
    console.log('in LC');

    var vm = this;

    CharacterService.getServerInfo();
    
    vm.serverInfo = CharacterService.serverInfo;

    vm.totalSlaps = CharacterService.totalSlaps;

    vm.skillLevel = CharacterService.skillLevel;
    

    vm.totalSlapUpdate = function() {
        console.log('in slap update');
        CharacterService.slapCounter();
    };//end totalSlapUpdate Function

});//end LC function