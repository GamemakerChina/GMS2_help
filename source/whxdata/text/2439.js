rh._.exports({"0":["file_text_eof"],"1":["file_text_eof"],"2":["file_text_eof"],"3":["\n  ","\n  ","\n  ","This function returns ","true"," when the end of a given opened text file has been reached or ","false"," if not.","\n  "," ","\n  ","\n  ","file_text_eof(fileid);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fileid","\n        ","The id of the file to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","var num = 0;"," var file = file_text_open_read(working_directory + \"Game_Data.txt\");"," while (!file_text_eof(file))","     {\n    ","     str[num++] = file_text_readln(file);","     }\n    "," file_text_close(file);\n  ","\n  ","The above code opens a file for writing then loops through the lines of text already written to the file until it reaches the end, storing each line in the array \"str\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text Files","\n        ","Next: ","file_text_close","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["file_text_eof"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2439"})