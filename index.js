#!/usr/bin/env node
var path = require('path');
var player = require('play-sound')(opts = {})

player.play(path.join(__dirname + '/fasak-audio.mov'), function(err){
    if (err) throw err
})