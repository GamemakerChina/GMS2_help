rh._.exports({"0":["surface_set_target"],"1":["surface_set_target"],"2":["surface_set_target"],"3":["\n  ","\n  ","\n  ","With this function you set all further drawing to the target surface rather than the screen and in this way you can tell GameMaker Studio 2 to only draw specific things to the specified surface. Please note that if you do not call ","surface_reset_target()","    after you have finished, nothing will be drawn on the screen as all further drawing (even in other instances) will be done on the surface. You should also realise that nothing will be seen if the surface itself is not drawn on the screen in the draw\n    event of an instance. You can check the return value of this function too as a debug tool to check whether the surface target was set or not, with a return value of 0 being a failure to set the target and any other positive value being a success.","\n  ","One thing that should be noted is that surfaces are ","stacked"," so you cannot jump from target to target and then reset to the normal draw target at the end, but rather you must open and close rendering targets. For example, this will ","not","    work correctly:","\n  ","surface_set_target(surf1);"," draw_text(32, 32, \"surface1\");"," surface_set_target(surf2);\n    "," draw_text(32, 64, \"surface2\");"," surface_reset_target();\n  ","\n  ","Instead, you must reset the target for each of the surfaces that you set, much like you must use opening and closing brackets {} for code blocks. So the above should be written as either this:","\n  ","surface_set_target(surf1);"," draw_text(32, 32, \"surface1\");"," surface_reset_target();\n    "," surface_set_target(surf2);\n    "," draw_text(32, 64, \"surface2\");"," surface_reset_target();\n  ","\n  ","or as this:","\n  ","surface_set_target(surf1);"," draw_text(32, 32, \"surface1\");"," surface_set_target(surf2);\n    "," draw_text(32, 64, \"surface2\");"," surface_reset_target();\n    "," surface_reset_target();\n  ","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","surface_set_target(surface_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","surface_id","\n        ","The ID of the surface to set as the drawing target.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if view_current = 0","     {\n    ","     surface_set_target(surf);\n    ","     with (obj_Effect)","         {\n    ","         draw_self();\n    ","         }\n    ","     surface_reset_target();\n    ","     }\n    "," else\n    ","     {\n    ","     draw_surface(surf, 0, 0);","     }\n  ","\n  ","The above code will check to see which view is currently being drawn, and if it is view[0] it sets the draw target to a surface and draws all instances of the object \"obj_Effect\" before resetting the draw target again. If the view is not view[0]\n    the surface is drawn to the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","surface_set_target_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["surface_set_target"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1451"})