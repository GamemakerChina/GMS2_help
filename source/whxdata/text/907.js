rh._.exports({"0":["font_texture_page_size"],"1":["font_texture_page_size"],"2":["font_texture_page_size"],"3":["\n  ","\n  ","\n  ","This ","built-in variable"," can be used to either get or set the texture page size when using the function ","font_add()",". On adding a font using that function, GameMaker Studio 2 will\n    create a texture page cache of the required glyphs up to the size defined by this variable. The process is as follows:","\n  ","\n    ","Each character you use is cached from the font into a texture page","\n    ","When the texture page is full (because you use big characters or a lot of different characters) GameMaker Studio 2 will remove characters from the cache and replace them with new ones you need","\n    ","GameMaker Studio 2 tries not to make the texture too big because not all devices can cope with large textures, and it tries not to make the texture too small because removing and re-adding characters to the texture takes CPU time\n      and causes your game to run slowly","\n  ","\n  ","If you think you require a larger or a smaller texture page size than the default 1024px that GameMaker Studio 2 uses, you can set the value using this built in variable. If you are not using the ","font_add()"," function,\n    then setting this will have no effect on your games performance as fonts added in the IDE are cached on the regular texture pages (which you can control from the ","Font Editor"," and\n    the ","Game Options"," for the target platform).","\n  "," ","\n  ","\n  ","font_texture_page_size;","\n  "," ","\n  ","\n  ","Real (maximum width/height in pixels)","\n  "," ","\n  ","\n  ","font_texture_page_size = 512;"," newfont = font_add(\"Arial\", 24, true, true, 32, 128);","\n  ","The above code sets the font cache texture page to a maximum size of 512px and then adds a new font to the game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fonts","\n        ","Next: ","font_get_name","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["font_texture_page_size"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"907"})