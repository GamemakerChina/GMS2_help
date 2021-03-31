rh._.exports({"0":["layer_tilemap_exists"],"1":["layer_tilemap_exists"],"2":["layer_tilemap_exists"],"3":["\n  ","\n  ","\n  ","You can use this function to check and see if a tile map element exists on any given layer. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or\n    the layer name (as a string - this will have a performance impact) and the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function\n    ","layer_tilemap_get_id()",") and the function will return either ","true"," if the element exists, or ","false"," if it does not.","\n  ","NOTE",": This function works within the scope of the current target room - by default the room in which the function is called - which can be set using the function ","layer_set_target_room()",".","\n  "," ","\n  ","\n  ","layer_tilemap_exists(layer_id, tilemap_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tile map element to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"tilemap_trees\");"," if layer_tilemap_exists(lay_id, global.Treestilemap)","     {\n    ","     layer_tilemap_destroy(lay_id, global.Treestilemap);","     }\n  ","\n  ","The above code checks the layer \"tilemap_trees\" to see if the given tile map element exists and if it does, then it is destroyed (but not the layer).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","layer_tilemap_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_tilemap_exists"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1070"})