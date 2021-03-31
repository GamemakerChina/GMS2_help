rh._.exports({"0":["Set Instance Scale"],"1":["DnD™ Action - Set Instance Scale"],"2":["Set Instance Scale"],"3":["\n  ","\n  ","\n  ","This action block sets the ","image_xscale"," and ","image_yscale"," values for the instance. The input values here are modifiers which will be applied to the sprite assigned to the instance, where a scale of 1 (the default value) indicates no\n    scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the sprite), and larger values will scale up. You can use negative values to flip the sprite and scale it unless the value used is exactly -1 (in which case the\n    sprite is just flipped or mirrored about its origin with no scaling). You can choose to set the horizontal or vertical scale relative to the current values, in which case you will be adding or subtracting the new value from the current scale values.","\n  ","Note that changing these values will also change how the instance detects collisions, unless you have supplied a separate ","mask_index"," (collision mask) in the ","Object Editor",". Please note that\n    for changes in this variable to be visible, the instance should have either ","no"," draw event (and so GameMaker Studio 2 will default draw the sprite) or be drawn using ","Draw Self"," action.","\n  ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Horizontal","\n        ","The vertical scaling factor to use (default is 1).","\n      ","\n      ","\n        ","Vertical","\n        ","The horizontal scaling factor to use (default is 1).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code sets a new sprite as well as a number of other\n    properties for how that sprite is to be displayed, including setting it to scale to three quarters of its base size along both axis.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Actions","\n        ","Next: ","Set Instance Alpha","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Instance Scale"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"235"})