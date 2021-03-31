rh._.exports({"0":["xboxlive_matchmaking_session_get_users"],"1":["xboxlive_matchmaking_session_get_users"],"2":["xboxlive_matchmaking_session_get_users"],"3":["\n  ","\n  ","\n  ","This function will create and populate a DS map with the details of the users in the specified session, or -1 if there is an error. You can get the session ID pointer from the ","async_load","    DS map that is returned in the ","Asynchronous Social Event"," when you created or found a session (see ","xboxlive_matchmaking_create()","    for more details). The returned DS map will have the following key/value pairs:","\n  ","\n    ","\"","num_results","\" - contains the number of users in the session","\n    ","\"","userId<","index",">","\" - contains the ID of the user (<","index","> is a value from 0 to \"num_results\" - 1)","\n    ","\"","userIsOwner<","index",">","\" - contains 1 if the user is the host, otherwise 0 (<","index","> is a value from 0 to \"num_results\" - 1)","\n  ","\n  "," ","\n  ","\n  ","xboxlive_matchmaking_session_get_users(session_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","session_id","\n        ","The session ID pointer to use","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Request ID (integer)","\n  "," ","\n  ","\n  ","var session_map = xboxlive_matchmaking_session_get_users(global.SessionID);"," if (session_map != -1)","     {\n    ","     for (var i = 0; i < session_map[? \"num_results\"]; i++)","         {\n    ","         if (session_map[? \"userIsOwner\" + string(i)] == 1)","             {\n    ","             global.OwnerID = session_map[? \"userId\" + string(i)];","             }\n    ","         }\n    ","     }\n  ","\n  ","The above will retrieve the user data for all users participating in the matchmaking session and set a global variable to the ID of the session owner.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Match Making","\n        ","Next: ","xboxlive_matchmaking_join_session","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_matchmaking_session_get_users"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2573"})