var player = require('play-sound')(opts = {})

player.play('fasak-audio.mov', function(err){
    if (err) throw err
})