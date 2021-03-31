rh._.exports({"0":["draw_sprite_ext"],"1":["draw_sprite_ext"],"2":["draw_sprite_ext"],"3":["\n  ","\n  ","\n  ","This function will draw the given sprite as in the function ","draw_sprite()"," but with additional options to change the scale, blending, rotation and alpha of the sprite being drawn. Changing these values does ","not","    modify the resource in any way (only how it is drawn), and you can use any of the available ","sprite variables"," instead of direct values for all the\n    arguments in the function. The image below illustrates how different values affect the drawing of the sprite:","\n  ","\n  ","NOTE",": Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate\n    sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set\n    the font cache size to try and limit this should it be necessary using the function ","sprite_set_cache_size()",".","\n  ","NOTE",": This function may not work as expected when using skeleton animation sprites, and you may find that the function only draws the first frame of the default pose. You should be using the ","draw_skeleton_*"," functions instead.","\n  "," ","\n  ","\n  ","draw_sprite_ext( sprite, subimg, x, y, xscale, yscale, rot, colour, alpha );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","subimg","\n        ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object).","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling of the sprite as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","rot","\n        ","The rotation of the sprite. 0=right way up, 90=rotated 90 degrees counter-clockwise etc...","\n      ","\n      ","\n        ","colour","\n        ","The colour with which to blend the sprite. ","c_white"," is to display it normally.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_sprite_ext(sprite_index, image_index, x, y, image_xscale, image_yscale, image_angle, image_blend, image_alpha);","\n  ","This will draw the instances assigned sprite with all its default values (essentially the same as using ","draw_self",").","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_sprite_general","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_sprite_ext"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1378"})