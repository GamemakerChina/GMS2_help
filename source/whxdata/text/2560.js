rh._.exports({"0":["xboxlive_stats_get_stat_names"],"1":["xboxlive_stats_get_stat_names"],"2":["xboxlive_stats_get_stat_names"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve all the defined stats from the stat manager for a given user. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",",\n    and the function will return an array of strings containing the statistics for the user. If an error occurs or the user has no stats the array will still be returned but will have an element count of 0.","\n  "," ","\n  ","\n  ","xboxlive_stats_get_stat_names(user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID pointer to get the stat names of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Array","\n  "," ","\n  ","\n  ","var _stat_str = xboxlive_stats_get_stat_names(user_id);"," for (var i = 0; i < array_length(_stat_str); ++i;)","     {\n    ","     xboxlive_stats_delete_stat(user_id, _stat_str[i]);","     }\n  ","\n  ","The above code retrieves all the defined stats for the user ID pointer stored in the given variable, and then loops through the array and deletes the specified stat from the stat manager.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_get_stat","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_stats_get_stat_names"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2560"})