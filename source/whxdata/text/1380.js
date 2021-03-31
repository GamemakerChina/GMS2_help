rh._.exports({"0":["draw_sprite_part_ext"],"1":["draw_sprite_part_ext"],"2":["draw_sprite_part_ext"],"3":["\n  ","\n  ","\n  ","This function will draw a part of the chosen sprite at the given position following the same rules as per ","draw_sprite_part()",", only now you can scale the part, blend a colour with it, or change its alpha when\n    drawing it to the screen (the same as when drawing a sprite with ","draw_sprite_ext()","). You should note that if the texture page permits automatic cropping then this function may not work as expected, since\n    the extra \"empty\" space around the sprite will have been removed for creating the texture page. To resolve this issue, you will need to set the texture page settings (in the ","Texture Group Editor",")\n    to disable the ","Automatic Crop",".","\n  ","NOTE: ","When drawing with this function, the sprite ","x offset"," and ","y offset","    are ignored and the sprite part will be drawn with the top left corner at the specified x / y position in the room.","\n  ","NOTE",": This function is only useful for ","bitmap"," sprites and will not work with SWF or JSON (Spine) sprites.","\n  ","NOTE",": Colour blending is only recommended for the HTML5 target when WebGL is enabled, although you can still set the blending colour if it is not enabled and it will blend the sprite as normal. However all blending in this way creates a duplicate\n    sprite which is then stored in the cache and used when required. This is far from optimal and if you use multiple colour changes it will slow down your games performance unless you activate WebGL. if you do not wish to use WebGL, then you can set\n    the font cache size to try and limit this should it be necessary using the function ","sprite_set_cache_size()",".","\n  "," ","\n  ","\n  ","draw_sprite_part_ext(sprite, subimg, left, top, width, height, x, y, xscale, yscale, colour, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","subimg","\n        ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object).","\n      ","\n      ","\n        ","left","\n        ","The x position on the sprite of the top left corner of the area to draw.","\n      ","\n      ","\n        ","top","\n        ","The y position on the sprite of the top left corner of the area to draw.","\n      ","\n      ","\n        ","width","\n        ","The width of the area to draw.","\n      ","\n      ","\n        ","height","\n        ","The height of the area to draw.","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling of the sprite, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","colour","\n        ","The colour with which to blend the sprite. c_white is to display it normally.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha of the sprite (from 0 to 1 where 0 is transparent and 1 opaque).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_sprite_part_ext(sprite_index, image_index, 8, 8, sprite_width-16, sprite_height-16, x, y, 2, 0.5, c_black, 1);","\n  ","This will draw the instances assigned sprite (sprite_index) and its current frame of animation (image_index), however it will shave an 8px margin off all four sides of the sprite. It will then be stretched to double its usual width but half its usual\n    height, and although the alpha is still 1, it will be blended with black (turning it into a silhouette).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_sprite_streteched","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_sprite_part_ext"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1380"})