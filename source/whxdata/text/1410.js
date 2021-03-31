rh._.exports({"0":["draw_primitive_end"],"1":["draw_primitive_end"],"2":["draw_primitive_end"],"3":["\n  ","\n  ","\n  ","This function must be called when you have finished defining the points of your primitive. If you do not call this function, ","nothing will be drawn"," as this effectively tells GameMaker Studio 2 that you have finished and that it can now\n    draw the defined primitive.","\n  "," ","\n  ","\n  ","draw_primitive_end()","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_colour(c_white);"," var tex = sprite_get_texture(spr_Background, 0);"," draw_primitive_begin_texture(pr_trianglestrip, tex);"," draw_vertex_texture(0, 0, 0, 0);"," draw_vertex_texture(640, 0, 1, 0);"," draw_vertex_texture(0, 480,\n    0, 1);"," draw_vertex_texture(640, 480, 1, 1);"," draw_primitive_end();\n  ","\n  ","The above code will draw a 4 vertex triangle strip textured with the texture held in the \"tex\" variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Primitives And Vertex Formats","\n        ","Next: ","draw_vertex","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_primitive_end"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1410"})