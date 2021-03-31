rh._.exports({"0":["layer"],"1":["layer"],"2":["layer"],"3":["\n  ","\n  ","\n  ","This ","built-in variable"," is created for every instance in a room and contains the layer ID value of the layer that the instance is assigned to. This value can then be used in other functions like ","layer_get_depth()"," or\n    it can be changed to move the instance to another layer, but note that if the layer being assigned does not exist in the current room, then you will get an error that will force your game to close. When assigning a layer, you must supply the unique\n    ","layer ID"," as returned by the function ","layer_get_id()"," (when using named room layers), or as returned by the function ","layer_create()"," (when\n    you create your own layers at run time).","\n  ","IMPORTANT!"," if you have created the instance using the ","instance_create_depth()"," function, or have manually changed the ","depth","    variable, the layer assigned to the instance becomes a \"managed\" layer, which is one that GameMaker Studio 2 controls and manages automatically. In these cases the ","layer"," variable will return -1.","\n  "," ","\n  ","\n  ","layer;","\n  "," ","\n  ","\n  ","Real (integer - resource index value)","\n  "," ","\n  ","\n  ","layer = layer_create(-1000);","\n  ","The above code will create a new layer with a depth of -1000 and then set the instance ","layer"," variable to the returned layer ID, moving the instance from the layer it is currently on to the new layer being created.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Variables","\n        ","Next: ","alarm","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"956"})