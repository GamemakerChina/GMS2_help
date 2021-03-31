rh._.exports({"0":["The Keyframe Struct"],"1":["Sequence Keyframe Struct"],"2":["The Keyframe Struct,frame,length,stretch,channels"],"3":["\n  ","\n  ","\n  ","Each track (as defined on the page covering ","track structs",") will have one or more keyframe ","struct"," assigned to it (which you can get from the ","keyframes"," property\n    of the track struct), and each one will have the following properties:","\n  ","\n    ","frame",": The position (in frames) along the timeline for the keyframe. Default value is 0.","\n    ","length",": The length of the keyframe. Default value is 1, and when set to larger values then the track property that the keyframe refers to will be maintained at the initial value for the duration of the length given. Note that the ","stretch"," property\n      will override this if set to ","true",".","\n    ","stretch",": If this property is set to ","true"," then the keyframe stretches to either the next keyframe for the track or to the end of the track if it's the last keyframe. You can get or set this value, and\n      the default value is ","false",".","\n    ","channels",": This property allows access to the list of ","keyframe data structs"," for the channels of the track. When getting this property an ","array"," of\n      keyframe data structs is returned, and when setting this property an array of keyframe data structs should be specified.","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","The Keyframe Data Struct","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Keyframe Struct"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"882"})