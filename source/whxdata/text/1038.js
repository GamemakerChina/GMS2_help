rh._.exports({"0":["layer_get_x"],"1":["layer_get_x"],"2":["layer_get_x"],"3":["\n  ","\n  ","\n  ","You can use this function to retrieve the x position of the layer within the currently scoped room. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as\n    a string - this will have a performance impact) and the function returns a real number for the x position of the layer, relative to the (0,0) position of the room. Default is 0.","\n  "," ","\n  ","\n  ","layer_get_x(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to get the x position of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Sprites\");"," if layer_get_x(lay_id) != 0 || layer_get_y(lay_id) != 0","     {\n    ","     layer_x(lay_id, 0);","     layer_y(lay_id, 0);","     }\n  ","\n  ","The above code checks the given layer position and if it is not set to (0, 0) then it is set to that position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_get_y","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_get_x"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1038"})