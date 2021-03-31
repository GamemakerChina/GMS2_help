rh._.exports({"0":["tilemap_set_width"],"1":["tilemap_set_width"],"2":["tilemap_set_width"],"3":["\n  ","\n  ","\n  ","This function can be used to resize a tile map element. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","),\n    and the new width of the tile map in tile cells.","\n  "," ","\n  ","\n  ","tilemap_set_width(tilemap_element_id, width)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tile map element to set the width of","\n      ","\n      ","\n        ","width","\n        ","The width value (in \"cells\")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_Walls\");"," var map_id = layer_tilemap_get_id(lay_id);"," if tilemap_get_width(map_id) != room_width div 16","     {\n    ","     tilemap_set_width(map_id, room_width div 16);","     }\n  ","\n  ","The above code checks the width of a specific tile map and if it is not the correct size then the width is set.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_set_height","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tilemap_set_width"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1081"})