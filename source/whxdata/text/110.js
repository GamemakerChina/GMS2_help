rh._.exports({"0":["Steam"],"1":["Objects - Async Steam Event"],"2":["Steam,ev_web_steam,ugc_item_installed,ugc_item_subscribed,ugc_item_unsubscribed"],"3":["\n  ","\n  ","\n  ","This event can only be triggered by ","callback","s"," from some of\n    the ","Steam API"," functions and will return a ","DS Map"," stored in the variable ","async_load",",\n    containing different key/value pairs depending on the call-back from the function that has triggered the event. The map will always contain the key \"","event_type","\" which can then be parsed to find the type of function\n    that triggered the event and change the code required to suit.","\n  ","When calling any function that triggers this event, it will generate a unique async ID value which should be stored in a variable and checked, as the async_load map will always contain an ID key which you can then parse and ensure that you are responding\n    to the correct event. In fact, the map will always hold the following keys, regardless of the Steam function used to generate the async response:","\n  ","\n    ","\"","id","\" - The async ID returned by the function that triggered the event","\n    ","\"","result","\" - The result of the operation (a real value). This will either be the GML constant ","ugc_result_success"," or some other real number. You should check for this constant to ensure\n      that the call was successful, and if another value is returned something has not worked correctly. The rest of the possible values returned are shown as the result of the Steam \"","EResult","\" value and you should\n      see ","steamclientpublic.h"," in the SDK headers for all possible values.","\n    ","\"","event_type","\" - A string denoting the type of event (see below for the details)","\n  ","\n  "," ","\n  ","\n  ","When using the Steam functions for uploading a leaderboard (either ","steam_upload_score()"," or ","steam_upload_score_buffer()",")\n    the returned DS map will have the following key/value pairs:","\n  ","\n    ","\"","event_type","\" - This key will hold the value \"","leaderboard_upload","\"","\n    ","\"","post_id","\" - This key should match the ID value returned by the upload calling function","\n    ","\"","lb_name","\" - This key holds the name of the leaderboard which was posted to","\n    ","\"","success","\" - Will be 1 if the post succeeded, 0 failed","\n    ","\"","updated","\" - Will be 1 if the leaderboard score was actually updated (ie: the new score was better) or 0 otherwise","\n    ","\"","score","\" - This key holds the score which was posted","\n  ","\n  ","You can see examples of this on the pages for the score upload functions.","\n  "," ","\n  ","\n  ","When using the Steam functions for downloading a leaderboard (","steam_download_scores()",", ","steam_download_scores_around_user()"," or\n    ","steam_download_friends_scores()",") the returned DS map will have the following key/value pairs:","\n  ","\n    ","\"","event_type","\" - This key will hold the value \"","leaderboard_download","\"","\n    ","\"","id","\" - This key should match the ID value returned by the download calling function","\n    ","\"","status","\" - The status of the callback, where -1 equals a failure or that no results were returned, and 0 equals a success.","\n    ","\"","lb_name","\" - This key holds the name of the leaderboard which was posted to","\n    ","\"","numEntries","\" - The number of \"rows\" of leaderboard data that is being returned.","\n    ","\"","entries","\" - A JSON object string that contains another DS map, which will either contain the key \"","default","\" (signifying that no results are contained within) or the key \"\n      ","entries","\", which you can then get the value of. This returned value for \"","entries","\" will be a ","DS list","      containing each of the ranks from the leaderboard, where each entry in the list will itself reference another DS Map which will contain the keys \"","name","\", \"","score","\" and \"\n      ","rank","\", and it may also contain a \"","data","\" key depending on the function used to upload.","\n  ","\n  ","We will show an example of how downloading score data works by requesting the top ten ranking for the given leaderboard and parsing its results in the Steam Async Event (for uploading examples, please see the appropriate function pages). To start with\n    we need to request the scores with the following code:","\n  ","score_get = steam_download_scores(\"Game Scores\", 1, 10);","\n  ","This will send off a request to the Steam Server for the scores from the leaderboard \"Game Scores\", storing the async ID of the request in the variable \"","score_get","\". This will then be handled in the ","Steam Async Event","    in the following way:","\n  ","var async_id = ds_map_find_value(async_load, \"id\");"," if async_id == score_get","    {","    var entries = ds_map_find_value(async_load, \"entries\");","    var map = json_decode(entries);","    if ds_map_exists(map, \"default\")","        {","       ds_map_destroy(map);","       exit;","       }","    else","       {","       var list = ds_map_find_value(map, \"entries\");","       var len = ds_list_size(list);","       var entry;","       for(var i =\n    0; i < len; i++;)","          {","          entry = ds_list_find_value(list, i );","          steam_name[i] = ds_map_find_value(entry, \"name\");","          steam_score[i] = ds_map_find_value(entry, \"score\");","    steam_rank[i]\n    = ds_map_find_value(entry, \"rank\");","          if (ds_map_exists(entry, \"data\"))","             {","             var data = ds_map_find_value(entry, \"data\");","             var buffId = buffer_base64_decode(data);","              var message = buffer_read(buffId, buffer_string);","             show_debug_message( \" -- attached message: \" + string(message));","             buffer_delete(buffId);","             }","          ds_map_destroy(entry);","           }","       ds_list_destroy(list)","       }","    ds_map_destroy(map)","    }","\n  ","What we do here is first check the \"","id","\" key of the special async_load map. If this value is the same as the value of the original callback function (stored in the \"","score_get","\"\n    variable) we then continue to process the data. The first thing we do is parse the ","async_load"," DS Map for the key \"","entries","\" which will contain a JSON object containing the leaderboard\n    data. This JSON object is then decoded (see ","json_decode()",") as another DS Map, and this new map ID is stored in the\n    variable \"","map","\".","\n  ","This map is checked for the key \"","default","\" and if that is found then the map is destroyed and the event is exited. If no \"","default","\" key is found, the code will then parse the\n    map to extract the necessary information about the leaderboard, by first extracting a DS List from the \"","entries","\" key of the DS Map, and then looping through each entry of the list to get another DS Map with the\n    ","name",", ","score"," and ","rank"," of each entry. These values are then stored in arrays and then we check to see if there is an additional \"","data","\"\n    key. If there is (ie: the score was uploaded with an additional data package) then we also parse that and send it to the compiler console for debugging, before destroying the buffer and then continuing on to destroy the map. Note that if the \"\n    ","data","\" key is included, it needs to be decoded using the ","buffer_base64_decode()"," function before it\n    can be correctly read.","\n  ","Once the loop has finished, the entries list is destroyed as is the map that it was taken from. There is no need to destroy the ","async_load"," DS Map as this is handled for you by GameMaker Studio 2.","\n  "," ","\n  ","\n  ","When using the Steam functions for downloading ","User Generated Content (UGC)",", a number of them will trigger this event. However, each function will generate an\n    ","async_load"," DS Map with differing key/value pairs (although they will always contain the general \"","id","\", \"","result","\" and \"","event_type","\"\n      keys), so please see the page specific to the function being used for details and examples.","\n  "," ","\n  ","\n  ","The Steam Async Event can also be triggered when a user subscribes to an item outside of the game - for example, they tab away to a browser and subscribe to a new item then tab back to the game. In these cases the ","async_load","    map will only contain the following details (and none of the default values listed at the top of this page):","\n  ","\n    ","\"","event_type","\" - This key will hold the constant ","ugc_item_installed",".","\n    ","\"","published_file_id","\" - the ID of the newly installed UGC item (you can use the function ","steam_ugc_get_item_install_info()"," to\n      get the path to the installed item)","\n  ","\n  ","The Steam Async event can also be triggered when a workshop item is subscribed to - either from within the app, or externally from a workshop browser - and in these cases the ","async_load"," map will contain the following key/value\n    pairs:","\n  ","\n    ","\"","event_type","\" - This key will hold the constant ","ugc_item_subscribed",".","\n    ","\"","published_file_id","\" : This key has the published file ID of the newly subscribed item","\n  ","\n  ","The event will be triggered should any item be un-subscribed too, with the DS map holding the following:","\n  ","\n    ","\"","event_type","\" - This key will hold the constant ","ugc_item_unsubscribed",".","\n    ","\"","published_file_id","\" : This key has the published file ID of the un-subscribed item","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Async Events","\n        ","Next: ","System","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Steam"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"6":["Uploading Data","Downloading Leaderboards","Downloading UGC (user Generated Content)","Unique UGC Events"],"id":"110"})