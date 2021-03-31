rh._.exports({"0":["uwp_show_help"],"1":["uwp_show_help"],"2":["uwp_show_help"],"3":["\n  ","\n  ","\n  ","This function launches the Xbox One help app which will in-turn display your game's help file (which is an HTML format file that you have previously uploaded to the XBox Developer Portal). Note that a user ID is specified when calling this function\n    so that the user's locale information can be used when displaying it. You can retrieve the user ID with the functions ","xboxlive_get_user()",", ","xboxlive_get_activating_user()",",\n    or ","uwp_license_trial_user()",".","\n  "," ","\n  ","\n  ","uwp_show_help(user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The User ID pointer to open the helpfile for.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if gamepad_button_check_pressed(0, gp_start)","     {\n    ","     if uwp_license_trial_version()","         {\n    ","         var _uid = uwp_license_trial_user;","         uwp_show_help(_uid);\n    ","         }\n    ","     }\n  ","\n  ","The above code checks to see if a button is pressed and then checks the app to see if it is running with a trial licence. If it is, then it gets the User ID for licence and opens the help file for that user.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UWP And XBox Live","\n        ","Next: ","uwp_license_trial_version","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["uwp_show_help"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2518"})