rh._.exports({"0":["xboxlive_achievements_set_progress"],"1":["xboxlive_achievements_set_progress"],"2":["xboxlive_achievements_set_progress"],"3":["\n  ","\n  ","\n  ","This function can be used to update the progress of an achievement. You supply the user ID as returned, for example, by the function ","xboxlive_get_user()",", and then the achievement string\n    (this is the achievement id as assigned in the XDP/Windows Dev Center when it was created). Finally you set the progress value to to a value from 0 to 100. Note that the achievement system will refuse updates that are lower than the current progress\n    value.","\n  "," ","\n  ","\n  ","xboxlive_achievements_set_progress(user_id, achievement, progress);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID of the user to set the achievement for","\n      ","\n      ","\n        ","achievement","\n        ","The achievement to set (a string)","\n      ","\n      ","\n        ","progress","\n        ","The progress value to set (from 0 to 100)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","The following is an extended example of how this function can be used. To start with you'd call it in some event like ","Room Start"," or ","Create",":","\n  ","xboxlive_stats_get_social_leaderboard(user_id, \"GlobalTime\", 20, 1, false, false);","\n  ","The above code would be called to get a list of all global leaderboard positions for the game, and will generate a Social Asynchronous Event call back which we would deal with in the following way:","\n  ","var _progress = (global.Level / global.LevelMax) * 100;"," xboxlive_achievements_set_progress(user_id, \"Game_Completed\", _progress);","\n  ","The above code creates a percentage value based on some global variables and then uses it to set the achievement progress for the \"Game_Completed\" achievement.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_get_stats_for_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_achievements_set_progress"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2564"})