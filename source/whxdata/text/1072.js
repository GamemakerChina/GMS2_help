rh._.exports({"0":["layer_tilemap_destroy"],"1":["layer_tilemap_destroy"],"2":["layer_tilemap_destroy"],"3":["\n  ","\n  ","\n  ","This function will destroy the given tile map element. You supply the tile map ID (which you get when you create the tile map using ","layer_tilemap_create()"," or when you use the layer ID along with ","layer_get_tilemap_id()",")\n    and this will remove it. Note that this does ","not"," remove the layer, only the tile map from it, and if the tile map is one that has been added in the room editor, then the next time you leave the room and then return, the tile map will be recreated\n    again. However if the room is persistent, the tile map will be removed unless room persistence is switched off again.","\n  "," ","\n  ","\n  ","layer_tilemap_destroy(tilemap_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tile map to be destroyed","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_trees\");"," var tile_id = layer_tilemap_get_id(lay_id);"," if layer_tilemap_exists(lay_id, tile_id)","     {\n    ","     layer_tilemap_destroy(tile_id);\n    ","     }\n  ","\n  ","The above code checks the layer \"Tiles_trees\" to see if the given tile map element exists and if it does, then it is destroyed (but not the layer).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_tileset","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_tilemap_destroy"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1072"})