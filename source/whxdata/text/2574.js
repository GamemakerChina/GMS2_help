rh._.exports({"0":["xboxlive_matchmaking_join_session"],"1":["xboxlive_matchmaking_join_session,MATCHMAKING_SESSION"],"2":["xboxlive_matchmaking_join_session,MATCHMAKING_SESSION"],"3":["\n  ","\n  ","\n  ","This function permits you to join a specific session via a session handle. This is similar to joining a session invite but is useful when you have your own server performing the matchmaking rather than relying on xbox live matchmaking.","\n  ","The function requires you to provide the user ID - which you can retrieve for a particular game pad by calling the ","xboxlive_user_for_pad()"," function - as well as the Secure Device\n    Association template, which you should have created beforehand in the XDP dashboard.","\n  ","For the session handle, you will need to have first retrieved the \"correlation id\" from the session you wish to join. When the original session is created the Asynchronous Social event will be \"","session_created","\" and it will\n    include a \"","correlationid","\" entry in the returned map (see ","xboxlive_matchmaking_create()","). You will need to have this ID passed back to the server for it to then be passed out when\n    receiving a matchmaking request. Once the joining game has received the \"correlation id\" back from the server they can then call this function passing the correlation ID as the session handle argument.","\n  ","The function will return -1 if there has been an error (in which case there should be console output detailing the issue), or a Request ID value otherwise. The Request ID value can then be used to identify the correct ","Social Asynchronous Event","    for this function. This event will be triggered when the session has been created and will contain a DS Map in the variable ","async_load"," with the following\n    key/value pairs:","\n  ","\n    ","\"","requestid","\" - contains the request ID as returned by the calling function","\n    ","\"","status","\" - contains the string \"session_player_joined\" to inform you of what type of event has been triggered.","\n    ","\"","sessionid","\" - contains the session ID, or -1 in case of failure.","\n    ","\"","sessionOwner<","index",">","\" - contains the ID of the session host if a session has been found (<","index","> is a value from 0 to \"num_results\" - 1)","\n    ","\"","id","\" - contains the constant ","MATCHMAKING_SESSION","\n    ","\"","error","\" - will be 0 if everything is fine, or -1 if something failed","\n  ","\n  ","When a new player joins the session, the DS map will have these key/value pairs:","\n  ","\n    ","\"","id","\" - contains the constant ","MATCHMAKING_SESSION","\n    ","\"","sessionid","\" - contains the session ID","\n    ","\"","status","\" - contains the string \"session_player_joined\"","\n    ","\"","requestid","\" - The ID value that was returned by the function that created the request","\n  ","\n  "," ","\n  ","\n  ","xboxlive_matchmaking_join_session(user_id, session_handle, sdatemplate);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The User ID pointer to use","\n      ","\n      ","\n        ","session_handle","\n        ","The \"correlation id\" to use for the session ID (see description, above)","\n      ","\n      ","\n        ","sdatemplate","\n        ","The name of the secure device association template to use","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Request ID (integer)","\n  "," ","\n  ","\n  ","Request_ID = xboxlive_matchmaking_join_session(global.UserID, global.SessionID, \"PeerServerTraffic\");","\n  ","The above will send a request to join the given multiplayer session, storing the request ID value in a variable so it can be checked in the asynchronous event.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Match Making","\n        ","Next: ","xboxlive_matchmaking_session_leave","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_matchmaking_join_session"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2574"})