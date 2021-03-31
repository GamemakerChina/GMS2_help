rh._.exports({"0":["Sequences"],"2":["Sequences"],"3":["\n  ","\n  ","\n  ","Sequences are usually created in the IDE using the ","Sequence editor",", but they can also be created and edited using code. However, before looking at the functions available, it's important\n    to understand the way that sequences are defined in GameMaker and the different terms that will be used.","\n  ","To start with, at the top level, you have a ","sequence element",". This is what you place on a layer in a room, either through the Room Editor or in code using the appropriate ","layer functions",".\n    The layer element has no real properties other than an element ID value, but this ID is required to use the above mentioned layer functions to change the sequence playback or to access the sequence data.","\n  ","Next you have ","sequence objects"," and ","sequence instances"," much like you have general objects and instances. A sequence ","object"," is the base resource as you created it in the ","Asset Browser"," or using the function ","sequence_create()",",\n    and the sequence ","instance"," is the \"copy\" of that sequence object that has been placed in a room as an element on a layer. Think of sequence objects as blueprints and sequence instances as the creation from those blueprints. Sequence\n    objects and instances are ","structs"," and - unlike regular objects - a sequence object struct can be edited at runtime, which will affect all further instances of that sequence when you create them as elements\n    (and any editing done to a sequence object will ","not"," be reset by restarting the game or the room using the ","room_restart()"," or ","game_restart()"," functions). The sequence instance struct contains a few parameters to control playback\n    and things (this is explained in more detail below) as well as the ","sequence data"," struct.","\n  ","Finally, as mentioned above, you have the ","sequence data",", which is another struct. This struct contains ","all"," the data about the sequence. The tracks it contains, the properties those tracks have, the playback speed and much more. The exact\n    details of this structs contents are outlined below, but basically consists of ","asset track"," structs and ","parameter track"," structs which use ","keyframe data"," to actually perform actions while the sequence plays.","\n  ","Sequence elements are dealt with using the room ","layer functions",", but for sequence objects, instances and data we have the following functions:","\n  "," ","\n  ","\n    ","sequence_exists","\n    ","sequence_create","\n    ","sequence_destroy","\n    ","sequence_get","\n    ","sequence_track_new","\n    ","sequence_keyframe_new","\n    ","sequence_keyframedata_new","\n    ","sequence_get_objects","\n    ","sequence_instance_override_object","\n  ","\n  "," ","\n  ","There is also a ","built-in variable"," associated with instances that can be used to determine of the instance has been used in a sequence or not:","\n  "," ","\n  ","\n    ","in_sequence","\n  ","\n  ","IMPORTANT!"," If your sequence has any instances in it, these instances shouldn't change their ","image_xscale","  / ","image_yscale"," /\n    ","image_angle"," / ","x"," / ","y"," variables as they will be overwritten when the sequence\n      updates each step after starting to be played.","\n  "," ","\n  ","Before using these functions to create or edit sequences, we recommend that you read the detailed descriptions given below for the struct properties. A general overview of how to create a new sequence would be:","\n  ","\n    ","Create the new sequence object using the function ","seqeunce_create()"," and store the sequence object index in a variable. This index gives you access to the sequence object struct.","\n  ","\n  ","myseq = sequence_create();","\n  ","\n    ","Set the sequence object top level values like length, play mode, play speed, etc... For example:","\n  ","\n  ","myseq.length = 120;"," myseq.loopmode = seqplay_pingpong","\n  ","\n    ","Before you can add tracks to the sequence object, you need to create them, so you'd now create an array of ","asset"," tracks that have been defined with the function ","sequence_track_new()",". Note that\n      in code, there is really no difference between asset tracks and parameter tracks - they are all simply tracks and how they behave will depend on the type of track you create and whether they are assigned as sub-tracks to a top level track or not.\n      So, you would create a track for an asset, and then assign sub-tracks for the different parameters to it and these sub-tracks would act as the ","parameter"," tracks for the asset. The example below creates a single graphics asset track that will\n      be added to the sequence later:","\n  ","\n  ","var mytracks = array_create(1);"," mytracks[0] = sequence_track_new(seqtracktype_graphic);","\n  ","\n    ","Each asset track needs to have some data to tell the sequence how it will look, or its position , etc... and this is added in the form of ","keyframes",". At the top level for an asset track, you can set keyframes for various things (listed in the\n      section on the Track Struct, below), but note that as these are asset track keyframes, they won't be interpolated and will simply change the value they refer to when the given frame is reached. Each keyframe is a struct that is added to an array,\n      and then this array is assigned to the asset track. To create the keyframe struct we would call the function ","sequence_keyframe_new()"," and to populate the keyframe with the required data, we would use\n      the function ","sequence_keyframedata_new()",":","\n  ","\n  ","// Create a new keyframe struct for a graphics asset track and add it to an array (as you can have multiple keys in a frame)"," var graphickeys = array_create(1);"," graphickeys[0] = sequence_keyframe_new(seqtracktype_graphic);"," // Set the graphics\n    keyframe top level data for the keyframe position and length, etc..."," graphickeys[0].frame = 0;"," graphickeys[0].length = 1;"," graphickeys[0].stretch = true;"," graphickeys[0].disabled = false;"," // Create the channel data that will\n    go into this keyframe (again an array, as each key can have multiple channels of keyframe data)"," var graphickeydata = array_create(1);"," graphickeydata[0] = sequence_keyframedata_new(seqtracktype_graphic);"," graphickeydata[0].spriteIndex\n    = spr_Platform;"," graphickeydata[0].channel = 0;"," // Add the keyframe data channels to the graphics track keyframe"," graphickeys[0].channels = graphickeydata;"," // Add the definied keyframes to the track"," mytracks[0].name = \"TestGraphicTrack\";","    mytracks[0].keyframes = graphickeys;","\n  ","\n    ","We now need to create a parameter track which we'll assign as a sub-track to the graphics track we just created. This will be done in a similar way as shown above, only now we need to give the track a name that shows its purpose, in this case\n      \"position\" as we'll be using this track to move the graphics track track over the course of the sequence animation frames:","\n  ","\n  ","// Create a new parameter track struct for the position of the graphic"," var paramtracks = array_create(1);"," paramtracks[0] = sequence_track_new(seqtracktype_real);"," paramtracks[0].name = \"position\";"," paramtracks[0].interpolation\n    = true;"," // Create the keyframe struct to hold the parameter channel data and set the frame position for the keyframe"," var paramkeys = array_create(2);"," paramkeys[0] = sequence_keyframe_new(seqtracktype_real);"," paramkeys[0].frame =\n    0;"," paramkeys[1] = sequence_keyframe_new(seqtracktype_real);"," paramkeys[1].frame = 120;"," // Create the keyframe data structs"," var paramkeydata1 = array_create(2);"," paramkeydata1[0] = sequence_keyframedata_new(seqtracktype_real);","    paramkeydata1[0].channel = 0; // Channel 0 for a position track is the X position"," paramkeydata1[0].value = 0;"," paramkeydata1[1] = sequence_keyframedata_new(seqtracktype_real);"," paramkeydata1[1].channel = 1; // Channel 1 for a position\n    track is the Y position"," paramkeydata1[1].value = 0;"," var paramkeydata2 = array_create(2);"," paramkeydata2[0] = sequence_keyframedata_new(seqtracktype_real);"," paramkeydata2[0].channel = 0;"," paramkeydata2[0].value = room_width;","    paramkeydata2[1] = sequence_keyframedata_new(seqtracktype_real);"," paramkeydata2[1].channel = 1;"," paramkeydata2[1].value = room_height;"," // Assign the keyframe data structs to the channels for each key"," paramkeys[0].channels = paramkeydata1;","    paramkeys[1].channels = paramkeydata2;"," // Assign the keys to the parameter track"," paramtracks[0].keyframes = paramkeys;","\n  ","\n    ","With that done, the final thing to do is assign the parameter track as a sub-track to our main graphics asset track that we created at the beginning and then assign these tracks to the sequence which we can then create an instance of in the room:","\n  ","\n  ","mytracks[0].tracks = paramtracks;"," myseq.tracks = mytracks;"," layer_sequence_create(\"Assets_1\", 0, 0, myseq);","\n  ","The above instructions create a very simple sequence object that draws a sprite at the (0, 0) position ","of the sequence"," and then moves it to the bottom-right corner and back in a loop. As mentioned, there are a number of places where you need\n    to access different structs to give or get data about the sequence, and the sections below list all the different properties that these structs contain:","\n  ","\n    ","The Sequence Object Struct","\n    ","The Sequence Instance Struct","\n    ","The Track Struct","\n    ","The Keyframe Struct","\n    ","The Keyframe Data Struct","\n  ","\n  "," ","\n  ","Finally, it is possible to add code to sequences that can be triggered as either an ","event"," a ","moment"," or as a ","broadcast message",". This is explained fully on the following page:","\n  ","\n    ","Events, Moments and Broadcast Messages","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Asset Management","\n        ","Next: ","Fonts","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Sequences"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"870"})