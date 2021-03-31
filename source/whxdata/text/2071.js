rh._.exports({"0":["dot_product_3d_normalised"],"1":["dot_product_3d_normalised"],"2":["dot_product_3d_normalised"],"3":["\n\n\n\n\n  ","\n  ","\n  ","The dot product is a value expressing the angular relationship between two vectors and is found by taking two vectors, multiplying them together and then adding the results. The name \"dot product\" is derived from the centered dot \"·\"\n    that is often used to designate this operation (the alternative name \"scalar product\" emphasizes the scalar rather than vector nature of the result).","\n  ","The actual mathematical formula can be written like this:","\n  ","\n  ","In 2D, the dot product of vectors ","a[x1,y1]"," and ","b[x2,y2]"," is ","x1x2 + y1y2",", so in 3D, the dot product of vectors ","a[x1,y1,z1]"," and ","b[x1,y1,z1]","    is ","x1x2 + y1y2 + z1z2",". So, the dot_product_3d in GameMaker Studio 2 is calculated as:","\n  ","a · b = (x1*x2) + (y1*y2) + (z1*z2);","\n  ","What about the ","normalised"," dot product? The normalised dot product has been corrected in such a way as to bring the return value into the range of -1 and 1 (see ","Vectors"," for more detailed\n    information), which is exceptionally useful in many circumstances, particularly when dealing with lighting and other 3D functions.","\n  "," ","\n  ","\n  ","dot_product_3d_normalised(x1, y1, z1, x2, y2, z2)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the first vector.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the first vector.","\n      ","\n      ","\n        ","z1","\n        ","The z coordinate of the first vector.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the second vector.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the second vector.","\n      ","\n      ","\n        ","z2","\n        ","The z coordinate of the second vector.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var x1, y1, x2, y2;"," x1 = 0;"," y1 = 1;"," z1 = 0;"," x2 = o_Player.x - x;"," y2 = o_Player.y - y;"," z2 = o_Player.z - z;"," if dot_product_3d_normalised(x1, y1, z1, x2, y2, z2) > 0 above=true else above=false;","\n  ","The above code creates a vector normal along the instances y (up) axis, and then gets the vector of the player object \"o_Player\" to itself. Finally it calculates the dot product of these two vectors and if it is greater tan 0 it sets the variable\n    \"above\" to true, and if it is less than or equal to 0 it sets it to \"false\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","angle_difference","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["dot_product_3d_normalised"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2071"})