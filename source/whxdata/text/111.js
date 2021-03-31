rh._.exports({"0":["System"],"1":["Objects - Async System Event"],"2":["System,ev_system_event,Gamepad Event,Xbox Live Event,UWP Event,Virtual Keyboard Event,Audio System Event"],"3":["\n  ","\n  ","\n  ","This event can only be triggered by a ","callback"," from a system level event (such as the detection\n    of a gamepad or the automatic signing in to XBox Live) and it will return a ","DS Map"," stored in the variable ","async_load",",\n    containing different key/value pairs depending on the system level event that triggered the call-back. These events are:","\n  "," ","\n  ","\n  ","When this event is triggered for a gamepad being connected or disconnected it will return one of the following key/value pairs in the ","async_load"," map:","\n  ","\n    ","\"","event_type","\" - the type of system event received, which will be one of the following strings:\n      ","\n        ","\"","gamepad discovered","\" - happens when the system reports a new gamepad has been connected","\n        ","\n        ","\"","gamepad lost","\" - happens when the system has lost connection to a gamepad","\n        ","\n      ","\n    ","\n    ","\"","pad_index","\" - the index of the pad that has been added or removed","\n  ","\n  ","This event now permits you to move all your gamepad checking logic from the Step Event or an Alarm event into the System Event and only run it when it's actually required.","\n  ","IMPORTANT!"," This event will NOT be triggered unless you have at least one ","gamepad_*"," function or ","DnD™ action","    in your game code. The runner will only initialise the gamepad sub-system when the functions are used in the project, so if they aren't present, adding/removing gamepads will not trigger the System Event.","\n  "," ","\n  ","\n  ","When this event is triggered for a virtual keyboard being opened or closed it will return the following key/value pairs in the ","async_load"," map:","\n  ","\n    ","\"","event_type","\" - the type of system event received, which will be \"","virtual keyboard status","\" for virtual keyboards.","\n    ","\"","screen_height","\" - the height of the virtual keyboard (in pixels). This will be 0 if the keyboard is invisible.","\n    ","\"","keyboard_status","\" - the current status of the keyboard, returned as one of the following strings:\n      ","\n        ","\"hiding\"","\n        ","\"hidden\"","\n        ","\"showing\"","\n        ","\"visible\"","\n      ","\n    ","\n  ","\n  ","See ","here"," for more information on the virtual keyboard.","\n  "," ","\n  ","\n  ","The asynchronous system event can be triggered when targeting the XBox One using the UWP export and checking the Enable XBox Live option in the ","UWP Game Options",". When you start GameMaker Studio\n    2 UWP project that has Xbox Live enabled the project will automatically try to silently sign-in to Xbox Live. The results of this sign-in attempt will be returned as one of the following key/value pairs in the ","async_load","    map:","\n  ","\n    ","\"","event_type","\" - the type of system event received, which will be one of the following strings:","\n    ","\"","user signed in","\" - the silent user sign-in has been completed successfully","\n    ","\"","user sign in failed","\" - the silent user sign-in has failed (when this happens you can use the function ","xboxlive_show_account_picker()"," to\n      get the user to choose an account to sign in with)","\n    ","\"","user signed out","\" - the user has signed out","\n  ","\n  ","Other functions for XBox Live may also trigger this event, but the different callbacks for those functions are detailed on the relevant function pages. For more information on the specific functions available for XBox Live, please see ","here",".","\n  "," ","\n  ","\n  ","This event type is specifically for use when working with the HTML5 target, as it will be triggered every time the Web Audio context status changes. This means that if you have, for example, a piece of looping background music, then you can pause it\n    or stop and restart it, based on this event triggering. This can be checked by looking for the following key/value pair in the ","async_load"," map:","\n  ","\n    ","\"","event_type","\" - the type of system event received, which will be the string \"","audio_system_status","\" if the audio system has initialised or the context has changed.","\n  ","\n  ","If this event type is triggered, then there will be an additional key in the ","async_load"," map:","\n  ","\n    ","\"","status","\" - The status of the audio system, which will be one of the following two strings","\n    ","\"","available","\" - The audio system is initialised and available to play sounds","\n    ","\"","unavailable","\" - The audio system is not initialised, or the context is not currently running, and so can't play sounds (all sound playing functions will return -1)","\n  ","\n  ","For more information on the specific functions available for Audio, please see ","here",".","\n  ","NOTE",": While this event is designed for use with the HTML5 target, it will also be triggered on all other platforms, but on everything (except HTML5) it will only be triggered once on Game Start when the audio engine is first initialised.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Async Events","\n        ","Next: ","Audio Playback","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["System"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"6":["Game Pads","Virtual Keyboards","XBox Live","Audio System Status"],"id":"111"})