rh._.exports({"0":["xboxlive_read_player_leaderboard"],"1":["xboxlive_read_player_leaderboard,achievement_filter_all_players,achievement_filter_friends_only,achievement_filter_favorites_only,achievement_filter_friends_alt,achievement_filter_favorites_alt,achievement_leaderboard_info"],"2":["xboxlive_read_player_leaderboard,achievement_filter_all_players,achievement_filter_friends_only,achievement_filter_favorites_only,achievement_filter_friends_alt,achievement_filter_favorites_alt,achievement_leaderboard_info"],"3":["\n  ","\n  ","\n  ","The function will return leaderboard information for the given user name. The leaderboard must have been created previously on the XDP dashboard for your game, and callin the function will trigger a callback ","Social Asynchronous Event","    which contains the ","async_load"," map populated with the relevant key/value pairs. The \"id\" key of this DS map is used to identify the correct callback\n    (there can be more than one trigger function for any given asynchronous event), and IT will be paired with the constant ","achievement_leaderboard_info"," as well as a number of other key/value pairs. The exact contents of the map are shown below:","\n  ","\n    ","\"","id","\" - For this function it should be ","achievement_leaderboard_info","\n    ","\"","leaderboardid","\" - The unique ID for the leaderboard as defined on the provider dashboard.","\n    ","\"","numentries","\" - The number of entries in the leaderboard that you have received.","\n    ","\"","PlayerN","\" - The name of the player, where \"N\" is an integer value corresponding to their position within the leaderboard entries list.","\n    ","\"","PlayeridN","\" - The unique user id of the player, \"N\".","\n    ","\"","RankN","\" - The rank of the player \"N\" within the leaderboard.","\n    ","\"","ScoreN","\" - The score of the player \"N\".","\n  ","\n  "," The function requires you to give one of the following constants to set the filter properties:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","achievement_filter_all_players","\n        ","Get all scores.","\n      ","\n      ","\n        ","achievement_filter_friends_only","\n        ","Get only friends scores, in ascending order.","\n      ","\n      ","\n        ","achievement_filter_favorites_only","\n        ","Get only favorites scores, in ascending order","\n      ","\n      ","\n        ","achievement_filter_friends_alt","\n        ","Get only friends scores in descending order.","\n      ","\n      ","\n        ","achievement_filter_favorites_alt","\n        ","Get only favorites scores in descending order.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","xboxlive_read_player_leaderboard(leaderboard_name, user_name, num_items, friend_filter);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","leaderboard_name","\n        ","The name of the leaderboard to read, as set up on XDP.","\n      ","\n      ","\n        ","user_name","\n        ","The name of the user to read from.","\n      ","\n      ","\n        ","num_items","\n        ","The number of items to retrieve.","\n      ","\n      ","\n        ","friend_filter","\n        ","One of the filter constants (see the description, above).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var _user = xboxlive_user_for_pad(0);"," var _uid = xboxlive_user_id_for_user(_user);"," xboxlive_read_player_leaderboard(\"MyLeaderboard\", _uid, 10, achievement_filter_all_players);","\n  ","The above code gets the user ID and then uses that to request all the player data for the first 10 places of the given leaderboard.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_fire_event","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_read_player_leaderboard"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2566"})