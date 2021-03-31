rh._.exports({"0":["vertex_create_buffer_ext"],"1":["vertex_create_buffer_ext"],"2":["vertex_create_buffer_ext"],"3":["\n  ","\n  ","\n  ","As with the function ","vertex_create_buffer()",", this function will create a new vertex buffer. This is a special ","grow"," buffer created by GameMaker Studio 2 which is pre-formatted for use when\n    building primitives for use with shaders. You can specify an initial starting size for the buffer (in bytes) and it will return a \"handle\" (index) for the buffer which should then be used in all further calls to the buffer.","\n  "," ","\n  ","\n  ","vertex_create_buffer_ext(size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","size","\n        ","The initial size of the buffer (in bytes).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Pointer","\n  "," ","\n  ","\n  ","v_buff = vertex_create_buffer_ext(1024 * 1024);","\n  ","The above code will create a new vertex buffer, initially 1MB in size, and store its handle in the variable \"v_buff\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Primitives And Vertex Formats","\n        ","Next: ","vertex_create_buffer_from_buffer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["vertex_create_buffer_ext"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1424"})