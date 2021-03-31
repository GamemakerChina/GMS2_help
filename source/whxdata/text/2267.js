rh._.exports({"0":["achievement_send_challenge"],"1":["achievement_send_challenge,achievement_type_score_challenge ,achievement_type_achievement_challenge ,achievement_leaderboard_info"],"2":["achievement_send_challenge,achievement_type_score_challenge ,achievement_type_achievement_challenge ,achievement_leaderboard_info"],"3":["\n  ","\n  ","\n  ","This function will send a challenge across the network to the chosen player. You can get the ","playerid"," using the ","achievement_load_friends()"," or the ","achievement_load_leaderboard()","    functions and you must also supply the ","challengeid"," which is the unique value given the challenge when you created it on your iTunes Connect or Google Play dashboard. You must also supply a score, and a short text message as well as set the\n    challenge ","type",". This can be one of the following ","constants",":","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","achievement_type_score_challenge ","\n        ","A challenge based on the score value.","\n      ","\n      ","\n        ","achievement_type_achievement_challenge ","\n        ","A challenge based on an achievement.","\n      ","\n    ","\n  ","\n  "," ","\n  ","This function will trigger a callback ","Social Asynchronous Event"," for the player that is to receive the challenge, and in this event you will have a DS map referenced\n    in the variable ","async_load",". The ","id"," key of this ","DS Map"," is used to identify the correct callback (there can be more than one trigger function for any given asynchronous event), and will be paired with the ","constant"," ","achievement_challenge_received","    as well as a number of other key/value pairs for each player. The exact contents of the map are shown below:","\n  ","NOTE",": that the user can also receive toast notifications for challenges received, but this will depend on the values you have chosen using the function ","achievement_show_challenge_notifications()",".","\n  ","\n    ","\"","id","\" - For this function it should be ","achievement_leaderboard_info","\n    ","\"","playerid","\" - The player ID for the challenge.","\n    ","\"","issuerid","\" - The issuer ID for the challenge.","\n    ","\"","state","\" - The state of the challenge, which will have a value of 0 - 3 (as a string) for ","invalid",", ","pending",", ","completed"," or ","declined",".","\n    ","\"","message","\" - The text message for challenge.","\n    ","\"","completeddate","\" - The completion date for challenge.","\n    ","\"","issueddate","\" - The issue date for challenge.","\n    ","\"","type","\" - The type of challenge given. Can be one of the two constants listed above","\n    ","\"","identifier","\" - The identifying string for the challenge, as set on the provider dashboard","\n    ","\"","score","\" - The score tied in with the challenge (if applicable).","\n  ","\n  "," ","\n  ","\n  ","achievement_send_challenge(playerid, challengeid, score, type, message)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","playerid","\n        ","The unique ID of the player to challenge.","\n      ","\n      ","\n        ","challengeid","\n        ","The unique challenge ID (as found on the provider dashboard).","\n      ","\n      ","\n        ","score","\n        ","The score to beat.","\n      ","\n      ","\n        ","type","\n        ","the type of challenge to be issued - one of two ","constants"," given below.","\n      ","\n      ","\n        ","message","\n        ","The message to attach to the challenge.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","To send a challenge over the network you would have this code:","\n  ","achievement_send_challenge(global.playerid[0], global.challengeid[0], score, achievement_type_score_challenge, \"Beat that sucker!\");","\n  ","This request will then trigger the ","Social Event"," in your game for the player that the challenge was directed at, and this can be dealt with in the following way:","\n  ","var ident = ds_map_find_value(async_load, \"id\");"," if ident == achievement_challenge_received","     {\n    ","     player_id = ds_map_find_value(async_load, \"playerid\");","     issuer_id = ds_map_find_value(async_load, \"issuerid\");","     state = ds_map_find_value(async_load, \"state\");","     message = ds_map_find_value(async_load,\n    \"message\");","     date_completed = ds_map_find_value(async_load, \"completeddate\");","     date_issued = ds_map_find_value(async_load, \"issueddate\");","     ach_type = ds_map_find_value(async_load, \"type\");","        ach_ident = ds_map_find_value(async_load, \"identifier\");","     ach_score = ds_map_find_value(async_load, \"score\");","     }\n  ","\n  ","The above code checks the returned ","DS Map"," in the ","Social Asynchronous Event"," and if its \"id\" matches the constant being checked, it then extracts the relevant values for each of the keys in the map and stores them in variables\n    for future use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Leaderboards","\n        ","Next: ","achievement_reset","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["achievement_send_challenge"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2267"})