rh._.exports({"0":["surface_get_texture"],"1":["surface_get_texture"],"2":["surface_get_texture"],"3":["\n  ","\n  ","\n  ","This function returns a special ","pointer"," for the surface texture. This value can then be used in other draw functions, particularly in general 3D and some of the 2D primitive functions.","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","surface_get_texture(surface_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","surface_id","\n        ","The ID of the surface to get the width of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Pointer","\n  "," ","\n  ","\n  ","var tex;"," tex = surface_get_texture(surf);"," draw_primitive_begin_texture(pr_trianglestrip, tex);"," draw_vertex_texture(0, 480, 0, 0);"," draw_vertex_texture(640, 480, 1, 0);"," draw_vertex_texture(640, 480, 1, 1);"," draw_vertex_texture(0,\n    480, 0, 1);"," draw_primitive_end();\n  ","\n  ","The above code will draw a 4 vertex triangle strip textured with the texture held in the \"tex\" variable, which is itself taken from a previously created surface.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_get_depth_disable","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["surface_get_texture"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1461"})