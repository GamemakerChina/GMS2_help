rh._.exports({"0":["ds_grid_width"],"1":["ds_grid_width"],"2":["ds_grid_width"],"3":["\n  ","\n  ","\n  ","This function will return the width of the given grid. This value is the number of cells the grid has along the x-axis and is always an integer, as shown in the image below:","\n  ","\n  ","\n  ","ds_grid_width(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","This index of the grid to find the width of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","for (var i = 0; i < ds_grid_width(grid); ++i;)","    {\n    ","    for (var j = 0; j < ds_grid_height(grid); ++j;)","       {\n    ","       if (ds_grid_get(grid, i, j) == 1)","          {\n    ","          instance_create_layer(i * 32, j * 32, \"Walls\", obj_Wall);","          }\n    ","       }\n    ","    }\n  ","\n  ","The above code will loop through the DS grid indexed in the variable \"grid\" and if the value found in any specific cell is equal to 1, it will then create an instance of \"obj_Wall\" at the appropriate position within the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Grids","\n        ","Next: ","ds_grid_height","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_grid_width"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1790"})