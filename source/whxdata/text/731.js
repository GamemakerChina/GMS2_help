rh._.exports({"0":["audio_play_sound_on"],"1":["audio_play_sound_on"],"2":["audio_play_sound_on"],"3":["\n  ","\n  ","\n  ","With this function you can play any sound resource through an emitter, with any changes to the emitter gain, position, pitch or velocity affecting how the user hears the final sound being played. You provide the emitter index to use, the sound index\n    of the sound to be played and then specify whether the sound is to loop or not. Finally you can assign a priority, which is then used to determine how sounds are dealt with when the number of sounds playing is over the limit set by the function \n    ","audio_channel_num()",". Lower priority sounds will be stopped in favour of higher priority sounds, and the priority value can be any real number (the actual value is arbitrary, and can be from 0 to 1 or 0 to 100, as GameMaker Studio 2 will\n      prioritize them the same). Note that when dealing with priority, the ","higher"," the number the ","higher"," the priority, such that a sound with priority 100 will be favoured over a sound with\n      priority 1.","\n  ","This function will also return a unique index number for the sound being played which can then be stored in a variable so that you can then pause it or stop it with the appropriate functions. This means that if you have multiple instances of the same\n    sound playing at any one time you can target just one instance of that sound to deal with using the audio functions.","\n  "," ","\n  ","\n  ","audio_play_sound_on(emitter, sound, loop, priority);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","emitter","\n        ","The index of the emitter to use.","\n      ","\n      ","\n        ","sound","\n        ","The index of the sound to use.","\n      ","\n      ","\n        ","loop","\n        ","Flags the sound as looping or not.","\n      ","\n      ","\n        ","priority","\n        ","Set the channel priority for the sound.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Index","\n  "," ","\n  ","\n  ","if global.SFX","    {\n    ","    audio_play_sound_on(s_emit, snd_Explode, false, 1);","    }\n  ","\n  ","The above code checks the global variable \"SFX\" and if it returns ","true"," then the sound indexed in the variable \"snd_Explode\" will be played through the emitter indexed in the variable \"s_emit\"\n    with a low priority and no looping.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Emitters","\n        ","Next: ","audio_emitter_get_gain","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_play_sound_on"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"731"})