rh._.exports({"0":["mp_grid_draw"],"1":["mp_grid_draw"],"2":["mp_grid_draw"],"3":["\n  ","\n  ","\n  ","This function will draw the specified MP grid (as defined by ","mp_grid_create()","), marking free cells as green and forbidden cells as red. This function is essential as a debug tool but it should\n    be noted that it is ","very"," slow and only works when used in the ","draw"," event of the instance, and that you can set the draw alpha to change the opacity of the grid, permitting you to draw it as an overlay and see what is actually in the\n    room at the same time.","\n  "," ","\n  ","\n  ","mp_grid_draw(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","Index of the mp_grid that is to be drawn","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","draw_set_alpha(0.3);"," mp_grid_draw(grid);\n    "," draw_set_alpha(1);\n  ","\n  ","The above code will draw the mp_grid indexed in the variable \"grid\" as a semi-transparent overlay (but only if the instance running the code has a depth lower than all the rest).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_linear_step","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["mp_grid_draw"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1240"})