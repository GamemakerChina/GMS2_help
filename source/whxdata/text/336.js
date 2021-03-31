rh._.exports({"0":["Set Audio Position"],"1":["DnD™ Action - Set Audio Position"],"2":["Set Audio Position"],"3":["\n  ","\n  ","\n  ","With this action you can set a sound to play at a specific time. You give the sound to play, and the time to start it from, but this action will ","not"," play the sound for you, it will simply set the play position for the sound. To use this action\n    you must ","first"," set the position ","then"," play the sound using the action ","Play Audio",", otherwise you will here no change in position until the next time you play the same sound resource (which will start at the\n    new position). The position is set in seconds - you can use decimal values - and you can get the total sound length using the action ","Get Audio Length",", although if you provide a value greater than the length of the\n    desired sound this will be wrapped so if the sound is 10 seconds long and you give 12 seconds as the start position, the sound will start at 2 second in.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Sound","\n        ","The sound resource to set the play position of","\n      ","\n      ","\n        ","Time","\n        ","The time to set (in seconds)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code gets the playing length of the given sound resource and stores\n    it in a temporary local variable. This is then used to generate a random value between 0 and the length of the sound, which is then stored in a different temporary local variable. This new random value is then used to set the start position for the\n    sound and the sound is then played.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Actions","\n        ","Next: ","Get Audio Length","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Audio Position"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"336"})