(function(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
     for(var name of names)
     {
        var char1=name.toLowerCase(name.charAt(0));
        if(char1=='j')
        {
            byeSpeaker.speak(name);
        }
        else{
            helloSpeaker.speak(name);
        }
     }
})();