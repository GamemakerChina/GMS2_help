rh._.exports({"0":["steam_is_cloud_enabled_for_account"],"1":["steam_is_cloud_enabled_for_account"],"2":["steam_is_cloud_enabled_for_account"],"3":["\n  ","\n  ","\n  ","With this function you can check to make sure that the Steam Cloud service is enabled by the user in their Steam Client settings. It will return ","true"," if it is and ","false"," otherwise. Note that this does not automatically mean that you\n    can store data to the Cloud, as it will also have to have been enabled for your game (you can check this using the function ","steam_is_cloud_enabled_for_app()","). If the Steam Cloud is enabled\n    for your game, but the user has it switched off locally, you can still use the Cloud functions to store and retrieve data from a local copy of all files, it will just not upload them to the cloud on the game end, nor synchronise on the game start.","\n  "," ","\n  ","\n  ","steam_is_cloud_enabled_for_account();","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if steam_is_cloud_enabled_for_account","     {\n    ","     steam_file_share(\"Save.txt\");\n    ","     }\n  ","\n  ","The above code checks to see if the user has the Steam Cloud enabled and if it returns ","true",", it will then synchronise the given file.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Steam Cloud","\n        ","Next: ","steam_get_quota_total","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_is_cloud_enabled_for_account"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2345"})