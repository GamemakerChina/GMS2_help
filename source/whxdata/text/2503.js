rh._.exports({"0":["buffer_set_surface"],"1":["buffer_set_surface,buffer_surface_copy (Deprecated)"],"2":["buffer_set_surface,buffer_surface_copy"],"3":["\n  ","\n  ","\n  ","With this function you can write the information from a buffer to a given surface. Both the buffer being read from and the surface being written to must have been created previously, and you can provide an offset into the buffer to start reading from.\n    Note that reading will always start at the beginning of the buffer plus the offset value and ","not"," at the current seek position plus the offset value.","\n  ","NOTE",": This function has changed from the GameMaker Studio update 2.3.1 onwards. Previous versions used the constant ","buffer_surface_copy",", which is now deprecated.","\n  "," ","\n  ","\n  ","buffer_set_surface(buffer, surface, offset);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to use.","\n      ","\n      ","\n        ","surface","\n        ","The index of the surface to use.","\n      ","\n      ","\n        ","offset","\n        ","The data offset value.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","buffer_set_surface(buff, application_surface, 0);","\n  ","The above code will copy all the data stored in the buffer indexed in the variable \"buff\" to the application surface with no offset.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_resize","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_set_surface"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2503"})