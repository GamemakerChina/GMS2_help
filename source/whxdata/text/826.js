rh._.exports({"0":["path_append"],"1":["path_append"],"2":["path_append"],"3":["\n  ","\n  ","\n  ","With this code you can append one path onto another one, effectively joining them together, and for this to work, both paths must previously exist. In general you would want to use this function on paths created using ","path_add()",",\n    since if you use it on a path asset, ","it will permanently affect the path for instances in the game"," from the moment the function is used until the end of the game.","\n  ","NOTE",": This will not remove the path being appended from the game. It is still there, only it now has no points in it and if you no longer wish to use it you should remove it with the function ","path_delete()",".","\n  "," ","\n  ","\n  ","path_append(index, path);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The new index of the path.","\n      ","\n      ","\n        ","path","\n        ","The index of the path that will be appended to 'index'.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","path_append(mypath, mppath);"," path_delete(mppath);\n  ","\n  ","The above code appends the path data indexed in the variable \"mppath\" to the path indexed in the variable \"mypath\" and then deletes the \"mppath\" from memory.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_assign","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_append"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"826"})