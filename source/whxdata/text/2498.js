rh._.exports({"0":["buffer_get_type"],"1":["buffer_get_type"],"2":["buffer_get_type,buffer_fixed,buffer_grow,buffer_wrap,buffer_fast,buffer_vbuffer"],"3":["\n  ","\n  ","\n  ","With this function you retrieve the type of buffer that is being referenced by a buffer ID value. The return value will be one of the following constants:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","buffer_fixed","\n        ","A buffer of fixed size.","\n      ","\n      ","\n        ","buffer_grow","\n        ","A buffer that will \"grow\" dynamically as data is added","\n      ","\n      ","\n        ","buffer_wrap","\n        ","A buffer where the data will \"wrap\". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point.","\n      ","\n      ","\n        ","buffer_fast","\n        ","Special \"stripped\" buffer that is extremely fast to read/write to. Can only be used with ","buffer_u8"," ","data types",", and ","must"," be 1 byte aligned.","\n      ","\n      ","\n        ","buffer_vbuffer","\n        ","A vertex buffer","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","buffer_get_type(buffer);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Constant","\n  "," ","\n  ","\n  ","type = buffer_get_type(buff);","\n  ","The above code will get the type of buffer from the value indexed in the variable \"buff\" and store it in a variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_get_alignment","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_get_type"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2498"})