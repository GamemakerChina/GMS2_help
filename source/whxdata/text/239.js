rh._.exports({"0":["If Instance Exists"],"1":["DnD™ Action - If Instance Exists"],"2":["If Instance Exists"],"3":["\n  ","\n  ","\n  ","This action can be used to check if an instance of a specific object exists in the game room, or if a specific instance itself exists. You give the object from the asset explorer, and if any instance exists in the room then the action will return ","true","    otherwise it will return ","false",". Note that you can use a variable here with the unique ID for specific instance (for example as returned by the action ","Create Object Instance",") or even the instance ID\n    value as returned by the room editor when you added the instance.","\n  ","If you flag the \"Not\" argument, then the action will check to see if ","no"," instance exists and if none are found it will return ","true"," and if even one exists it will return ","false",".","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","\n  ","These actions will now be run if the \"if\" evaluates to ","true",", while any actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Object","\n        ","The name of the object to check for an instance of (or an instance ID).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code checks for a collision and returns the unique ID value of the instance\n    that is being collided with. This value is stored in a temporary variable and then checked to see if the value corresponds to an instance that is currently within the room (if no collision is found then the variable will hold the keyword \"","noone","\"),\n    and if it does, then a variable is set in the instance being collided with.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Actions","\n        ","Next: ","Call Parent Event","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Instance Exists"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"239"})