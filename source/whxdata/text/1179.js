rh._.exports({"0":["layer_sequence_get_headdir"],"1":["layer_sequence_get_headdir"],"2":["layer_sequence_get_headdir,seq_dir_right,seq_dir_left"],"3":["\n  ","\n  ","\n  ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions","    - and it will return the current ","playhead"," direction, which will be one of the constants listed below.","\n  "," ","\n  ","\n  ","layer_sequence_get_headdir(sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sequence_element_id","\n        ","The unique ID value of the sequence element to target","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Constant","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Value","\n      ","\n      ","\n        ","seq_dir_right","\n        ","The sequence is playing frames in an incremental order from left to right","\n        ","1","\n      ","\n      ","\n        ","seq_dir_left","\n        ","The sequence is playing frames in a decremental order from right to left","\n        ","-1","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","if layer_sequence_get_headdir(title_sequence) != seq_dir_left","     {\n    ","     layer_sequence_headdir(title_sequence, seq_dir_left);","     }\n  ","\n  ","The above code checks the the current playhead direction of the sequence element ID stored in the variable \"title_sequence\", and if it's not set to ","seq_dir_left",", it is set to this value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_get_speedscale","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sequence_get_headdir"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1179"})