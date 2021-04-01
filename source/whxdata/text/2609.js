rh._.exports({"0":["debug_event"],"1":["debug_event"],"2":["debug_event"],"3":["\n  ","\n  ","\n  ","This function generates a custom debug event that will be shown in the Graph View of the debugger when a game is being run in ","Debug Mode",". If you require messages to be displayed when ","not"," in debug\n    mode, then you should be using ","show_debug_message()",". It is worth noting that the function will also take two reserved strings to help perform debugging using external applications like Visual Studio. These\n    strings are:","\n  ","\n    ","\"","OutputDebugOn","\" - This enables a call to ","OutputDebugString"," for the ","Windows"," target, which means that all debug output - everything you see in the Output window - can be viewed by Visual Studio or by 3rd party apps.","\n    ","\"","BreakOnError","\" - This option is for ","Windows YYC"," builds only, and means that projects will ","not"," display the usual code error screen if the runtime detects an error, but instead just carry on and crash. This allows you\n      to see the stacktrace within Visual Studio if debugging.","\n  ","\n  "," ","\n  ","\n  ","debug_event(string)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","The custom debug event string to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if !surface_exists(global.EffectsSurface)","    {\n    ","    debug_event(\"Recreating Effects Surface\");","    global.EffectsSurface = surface_create(room_width, room_height);","    }","\n  ","The above code checks to see if an surface exists and if it does not, a debug event is triggered in the graph view of the debugger (the game must have been run in Debug Mode for this to be visible) and the surface is recreated.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Debugging","\n        ","Next: ","debug_get_callstack","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["debug_event"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2609"})