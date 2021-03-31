rh._.exports({"0":["tile_get_index"],"1":["tile_get_index"],"2":["tile_get_index"],"3":["\n  ","\n  ","\n  ","This function can be used to get the tile index (the position of the tile within the tile set image) from a set of tile-data. You give the tile-data, which can be retrieved using the function ","tilemap_get()",", and\n    the function will return an integer value for the index or -1 if there is an error.","\n  "," ","\n  ","\n  ","tile_get_index(tiledata)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tiledata","\n        ","the tile-data to check","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_sky\");"," var map_id = layer_tilemap_get_id(lay_id);"," var mx = tilemap_get_cell_x_at_pixel(map_id, mouse_x, mouse_y);"," var my = tilemap_get_cell_y_at_pixel(map_id, mouse_x, mouse_y);"," var data\n    = tilemap_get(map_id, mx, my);"," var ind = tile_get_index(data);"," data = tile_set_index(data, irandom(23));"," tilemap_set(map_id, data, mx, my);","\n  ","The above code gets the tile map ID from the given layer and then uses that to get the tile-data for the cell under the mouse position. This data is then used to set the tile index to a random number.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tile_get_flip","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tile_get_index"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1098"})