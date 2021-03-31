rh._.exports({"0":["zip_unzip"],"1":["zip_unzip"],"2":["zip_unzip"],"3":["\n  ","\n  ","\n  ","This function will open a stored zip file and extract its contents to the given directory. Note that if you do not supply a full path to the ZIP directory then the current drive ","root"," will be used, and if you want to place it in a relative path\n    to the game bundle working directory then you should use the ","working_directory"," variable as part of the path (relative paths using \".\" or \"..\" will not work as expected\n    so should be avoided). Note too that the zip must be either part of the game bundle (ie: an ","Included File",") or have been downloaded to the storage area using ","http_get_file()",".","\n  ","The function will return a value indicating the number of files extracted, or it will return 0 or less if the extraction has failed.","\n  "," ","\n  ","\n  ","zip_unzip(zip_file, target_directory)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","zip_file","\n        ","The zip file to open","\n      ","\n      ","\n        ","target_directory","\n        ","The target directory to extract the files to","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var num = zip_unzip(\"/downloads/level_data.zip\", working_directory + \"extracted/\");"," if num <= 0","    {\n    ","    show_debug_message(\"Extraction Failed!\");","    }\n  ","\n  ","The above code will open the zip file stored in the directory \"downloads\" and extract its contents to the directory \"extracted\" (creating that directory if it doesn't already exist) and then check to see that the extraction has\n    been correct, showing a debug message should it fail.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Encoding","\n        ","Next: ","load_csv","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["zip_unzip"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2469"})