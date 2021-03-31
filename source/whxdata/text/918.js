rh._.exports({"0":["timeline_max_moment"],"1":["timeline_max_moment"],"2":["timeline_max_moment"],"3":["\n  ","\n  ","\n  ","This function will return the value of the moment in which the timeline performs its final action. So, if you have a timeline with 8 different actions placed 20 moments apart, this function would return the moment value of the last action in that timeline,\n    which would be 160. This function is a good way to test whether a timeline has passed the last active moment when running, since the timeline position will continue incrementing every step of the game whether there are further actions or not.","\n  "," ","\n  ","\n  ","timeline_max_moment(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the timeline to get the last moment of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if timeline_position > timeline_max_moment(timeline_index)","     {\n    ","     timeline_running = false;","     }\n  ","\n  ","The above code will check the current timeline position against the maximum active moment, and if it is greater the timeline will be stopped.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Timelines","\n        ","Next: ","timeline_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["timeline_max_moment"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"918"})