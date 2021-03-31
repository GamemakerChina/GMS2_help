rh._.exports({"0":["layer_sequence_get_x"],"1":["layer_sequence_get_x"],"2":["layer_sequence_get_x"],"3":["\n  ","\n  ","\n  ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions","    - and it will return the current X position in the game room for the sequence.","\n  "," ","\n  ","\n  ","layer_sequence_get_x(sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sequence_element_id","\n        ","The unique ID value of the sequence element to target","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if layer_sequence_get_x(title_sequence) != room_width / 2","     {\n    ","     layer_sequence_x(title_sequence, room_width / 2);","     }\n  ","\n  ","The above code checks the X position of the sequence element ID stored in the variable \"title_sequence\", and if it's not set to half the room width, it is set to this value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_get_y","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sequence_get_x"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1173"})