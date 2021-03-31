rh._.exports({"0":["room_get_viewport"],"1":["room_get_viewport"],"2":["room_get_viewport"],"3":["\n  ","\n  ","\n  ","With this function you can retrieve the details of a view port in a room other than the current one. You give the room ID and the index of the view port to retrieve (from 0 to 7) and the function will return an ","array","    of 5 indices, where:","\n  ","\n    ","[0] = visible (Boolean: ","true"," / ","false",")","\n    ","[1] = x position (real)","\n    ","[2] = y position (real)","\n    ","[3] = width (real)","\n    ","[4] = height (real)","\n  ","\n  "," ","\n  ","\n  ","room_get_viewport(rm, vind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","rm","\n        ","The index of the room to get viewport data from","\n      ","\n      ","\n        ","vind","\n        ","The index of the view port to get","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Array (5 elements: visible, x, y, width, height)","\n  "," ","\n  ","\n  ","v_vals = room_get_viewport(rm_Game, 0);"," if v_vals[0] == false","     {\n    ","     room_set_view(rm_Game, true, v_vals[1], v_vals[2], v_vals[3], v_vals[4]);","     }\n  ","\n  ","The above code retrieves the view port data for the given room then checks to see if the port is flagged as visible. If it is not, the view port data is set to make it visible.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_set_camera","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_get_viewport"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1024"})