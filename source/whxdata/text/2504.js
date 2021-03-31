rh._.exports({"0":["buffer_resize"],"1":["buffer_resize"],"2":["buffer_resize"],"3":["\n  ","\n  ","\n  ","With this function you can resize a given buffer to be the size (in bytes) that you specify.","\n  "," ","\n  ","\n  ","buffer_resize(buffer, newsize);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to change the size of.","\n      ","\n      ","\n        ","newsize","\n        ","The new size of the buffer (in bytes).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (buffer_get_size(buff) < 16384)","     {\n    ","     buffer_resize(buff, 16384);","     }\n  ","\n  ","The above code will check the size of the buffer indexed in the variable \"buff\" and if it is less than the given value, the buffer is resized.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_sizeof","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_resize"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2504"})