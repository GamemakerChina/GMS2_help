rh._.exports({"0":["tilemap_y"],"1":["tilemap_y"],"2":["tilemap_y"],"3":["\n  ","\n  ","\n  ","This function controls the position along the y-axis of the room of the asset tile map element on the layer. You give the tile map element ID (which you get when you create a tile map element using ","layer_tilemap_create()","    or when you use the function ","layer_tilemap_get_id()","), and then set the y value to use (based on the room coordinates).","\n  "," ","\n  ","\n  ","tilemap_y(tilemap_element_id, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tile map element to change","\n      ","\n      ","\n        ","y","\n        ","The y position for the tile map","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Asset_sky\");"," var map_id = layer_tilemap_get_id(lay_id);"," tilemap_y(map_id, irandom(room_height));","\n  ","The above code gets the ID value of the tile map asset assigned to the layer \"Asset_sky\" and then sets its y position to a random value between 0 and the height of the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tilemap_y"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1076"})