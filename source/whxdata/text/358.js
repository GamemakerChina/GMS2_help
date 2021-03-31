rh._.exports({"0":["Create Map"],"1":["DnD™ Action - Create Map"],"2":["Create Map"],"3":["\n  ","\n  ","\n  ","This action will create a new ","map"," data-structure and return the index value so you can later access the map through the other Data Structure actions. The map index will be returned to the Target Variable that you supply, which can have been created\n    earlier using either ","Assign Variable"," or ","Declare Temp",", or you can flag the \"Temp\" checkbox to name and create a temporary local variable to\n    store the value until the end of the script or event. A newly created map data structure is considered \"empty\", ie: it contains no map key/value entries. Note that you can create additional DS maps by clicking the plus icon"," "," ","beside\n    the action, and selecting another variable to hold the map ID.","\n  ","IMPORTANT!"," Creating any data structure uses up memory on the target platform, and as such all data structures should be free when no longer needed using the action ","Free Data Structure"," otherwise you get a\n    memory leak which can impair your games performance or even cause it to crash. This is particularly relevant when using temporary local variables to store data structure indices, as these variables are removed at the end of the code or event, but\n    that does not mean the data structure is removed too! The data structure will still exist, only you will have no way to reference it, so either use an instance variable and free the structure at a later time, or free the structure before the end of\n    the event or function if its index is stored in a temporary variable.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Target","\n        ","The target variable to store the map index in","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code creates a new instance variable and a new map data structure. The\n    index value of the map is stored in the variable and then used to add two items to the map.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Data Structure Actions","\n        ","Next: ","Create Grid","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Create Map"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"358"})