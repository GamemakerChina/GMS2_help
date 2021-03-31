rh._.exports({"0":["xboxlive_stats_setup"],"1":["xboxlive_stats_setup"],"2":["xboxlive_stats_setup"],"3":["\n  ","\n  ","\n  ","This function needs to be called before you can use any of the other Xbox Live stat functions, and simply initialises the required libraries on the system. The \"user_id\" argument is the raw user ID as returned by the function ","xboxlive_get_user()",",\n    while the \"service_config\" and \"title_id\" is the unique ID for your game on the Xbox Live Dev Center.","\n  "," ","\n  ","\n  ","xboxlive_stats_setup(user_id, service_config_id, title_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The ID pointer of the user to check.","\n      ","\n      ","\n        ","service_config_id","\n        ","This is the config_id string for the game.","\n      ","\n      ","\n        ","title_id","\n        ","The unique ID for your game on the Xbox Dev Center.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var user = xboxlive_get_user(0); xboxlive_stats_setup(user, \"4d61a1aa-61ac-4541-badd-31f91244fea6\", $1244FEA6);","\n  ","The above code initialises the stats system for the given user ID.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_add_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_stats_setup"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2552"})