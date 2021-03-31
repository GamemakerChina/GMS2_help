rh._.exports({"0":["skeleton_get_num_bounds"],"1":["skeleton_get_num_bounds"],"2":["skeleton_get_num_bounds"],"3":["\n  ","\n  ","\n  ","This function will return the number of bounding boxes associated with the skeleton animation sprite assigned to the instance running the code. This can then be used along with the function ","skeleton_get_bounds()"," to\n    retrieve data about each of the bounding boxes.","\n  "," ","\n  ","\n  ","skeleton_get_num_bounds();","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","var num = skeleton_get_num_bounds();"," var yy = 60;"," for(var i = 0; i < num; i++;)","     {\n    ","     var b_info = skeleton_get_bounds(i);","     if b_info[0] > 0","         {\n    ","         var data = b_info[1] + \":\";","         for(var j = 0; j < b_info[0]; j++;)","             {\n    ","             data += \" (\" + string(b_info[(j * 2) + 2]) + \", \" + string(b_info[(j * 2) + 2 + 1]) + \")\";","             }\n    ","         draw_text(20, yy, data);","         yy += 20;","         }\n    ","     }\n  ","\n  ","The above code will loop through each of the bounding boxes associated with the currently assigned sprite and then draw that data as a string to the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing And Miscellaneous","\n        ","Next: ","skeleton_get_bounds","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_get_num_bounds"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"696"})