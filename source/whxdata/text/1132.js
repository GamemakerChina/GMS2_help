rh._.exports({"0":["layer_background_get_yscale"],"1":["layer_background_get_yscale"],"2":["layer_background_get_yscale"],"3":["\n  ","\n  ","\n  ","This function can be used to get the current scale multiplier value of the background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and the function will return real value that represents the scale multiplier being used to draw the sprite. Default value is 1.","\n  "," ","\n  ","\n  ","layer_background_get_yscale(background_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to get the information from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_sky\");"," var back_id = layer_background_get_id(lay_id);"," if layer_background_get_yscale(back_id) != -1","     {\n    ","     layer_background_yscale(back_id, -1);","     }\n  ","\n  ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check the y scale for the element and if it is not -1, it is set to\n    -1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_get_id","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_get_yscale"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1132"})