rh._.exports({"0":["layer_sprite_get_alpha"],"1":["layer_sprite_get_alpha"],"2":["layer_sprite_get_alpha"],"3":["\n  ","\n  ","\n  ","This function can be used to get the alpha value of the sprite element. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you use the function\n    ","layer_sprite_get_id()","), and the function will return a value between 0 (fully transparent) and 1 (fully opaque).","\n  "," ","\n  ","\n  ","layer_sprite_get_alpha(sprite_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite element to get the information from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (from 0 to 1)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"sprite_sky\");"," var spr_id = layer_sprite_get_id(lay_id, \"Clouds\");"," if layer_sprite_get_alpha(spr_id) < 0.1","     {\n    ","     layer_sprite_destroy(spr_id);\n    ","     }\n  ","\n  ","The above code will get the layer ID for the layer named \"sprite_sky\" and then use that to get the ID of the sprite element on that layer. This ID is then used to check the element alpha and if it is less than 0.1, then the layer element is\n    destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_get_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_get_alpha"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1156"})