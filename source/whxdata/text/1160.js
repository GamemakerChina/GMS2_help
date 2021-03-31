rh._.exports({"0":["layer_sequence_exists"],"1":["layer_sequence_exists"],"2":["layer_sequence_exists"],"3":["\n  ","\n  ","\n  ","With this function you can check to see if a sequence element exists on the given layer. You supply the layer ID which can be a string of the layer name - as defined in the room editor - or the unique layer ID - as returned by the function ","layer_get_id()",",\n    as well the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions"," - and it will return\n    ","true"," if the given element exists or ","false"," otherwise.","\n  "," ","\n  ","\n  ","layer_sequence_exists(layer_id, sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_ID","\n        ","The unique ID or name of the layer to check","\n      ","\n      ","\n        ","sequence_element_id","\n        ","The unique ID value of the sequence element to target","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if !layer_sequence_exists(\"Background\", my_seq)","     {\n    ","     my_seq = layer_sequence_create(\"Background\", 0, 0, seq_AnimatedBackground);","     layer_sequence_pause(my_seq);\n    ","     }\n  ","\n  ","The above code checks to see if the given sequence element exists, and if it does not then it creates a new sequence on the given layer then pauses it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sequence_exists"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1160"})