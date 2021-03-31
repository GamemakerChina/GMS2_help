rh._.exports({"0":["File Actions"],"1":["DnD™ Overview - File Actions Library"],"2":["File Actions"],"3":["\n  ","\n  ","\n  ","\n  ","The ","File Actions"," deal with two different file types - Buffer files and Ini files - and also have certain generic file actions to rename or copy existing files.","\n  ","Buffer files"," are created by saving out the data from a buffer that you have previously created and this data can then be loaded into a buffer again at any time in the future. You can find out more information about buffers here: ","Buffer Actions",".","\n  ","Ini files"," are small, lightweight files which are compatible with most platforms. They are ideal for storing small pieces of information, like interface preferences, local high scores, level data etc... and are very easy to use. Ini files don't\n    have to have been created previously to use these actions, and you can read from a non-existent Ini file and you'll simply get a ","default"," return value (which you specify), however we recommend that you create at least a \"base\"\n    ini file for opening and modifying before using the actions. This base ini file can be created by simply calling the ","Open Ini File"," action followed by the ","Close Ini File",", since closing\n    the file will write it to the disk, or you can include one in the ","Included Files"," of the Asset Browser. If you are using a file included in the Asset Browser as your base Ini, you should also read\n    the section of the manual about ","how the File System works",".","\n  ","NOTE",": For games with localizations it is very important that accented letters can be read from external files. This means that you should create the ini file in ","UTF8 format"," first and then add it into GameMaker Studio 2 as an included file\n    so that it is exported on running the game and used instead of the default ANSI format ini file that is created by the ini functions when none has been previously supplied. In this way, you can read and write to it correctly with all accents and non-roman\n    letters being maintained.","\n  ","The following actions exist for working with files:","\n  "," ","\n  ","\n    ","\n      ","\n        ","\n        ","Load Buffer","\n      ","\n      ","\n        ","\n        ","Save Buffer","\n      ","\n      ","\n        ","\n        ","Rename File","\n      ","\n      ","\n        ","\n        ","Copy File","\n      ","\n      ","\n        ","\n        ","Delete File","\n      ","\n      ","\n        ","\n        ","Open Ini File","\n      ","\n      ","\n        ","\n        ","Close Ini File","\n      ","\n      ","\n        ","\n        ","Write To Ini File","\n      ","\n      ","\n        ","\n        ","Read Ini File","\n      ","\n      ","\n        ","\n        ","If File Exists","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Index","\n        ","Next: ","Data Type Actions","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Files Action Library"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"390"})