rh._.exports({"0":["layer_sprite_change"],"1":["layer_sprite_change"],"2":["layer_sprite_change"],"3":["\n  ","\n  ","\n  ","Using this function you can change the sprite resource assigned to a given sprite element on a layer. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()","    or when you use the function ","layer_sprite_get_id()","), and then supply a sprite index element asset will be changed. Note that if the sprite has sub-images then it will animate too (this can be controlled\n    using the ","layer_sprite_index()"," and ","layer_sprite_speed()"," functions). Note that you can assign a value of -1 as the new sprite index and no sprite will be shown,\n    although the element will still exist and can still be changed again later.","\n  "," ","\n  ","\n  ","layer_sprite_change(sprite_element_id, sprite_index)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite element to change","\n      ","\n      ","\n        ","sprite_index","\n        ","The new sprite index to use","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var s = layer_sprite_get_id(layer, global.Asset_sprite);"," if layer_sprite_get_sprite(s) != spr_Nighttime","     {\n    ","     layer_sprite_change(s, spr_nighttime);","     }\n  ","\n  ","The above code checks the sprite index of the element with the ID stored in the global variable ","global.Asset_sprite"," and if it is not \"spr_Nighttime\" then that sprite is assigned to the element.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_change"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1139"})