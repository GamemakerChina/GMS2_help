rh._.exports({"0":["file_text_readln"],"1":["file_text_readln"],"2":["file_text_readln"],"3":["\n  ","\n  ","\n  ","With this function you can skip the remainder of the current line from a given opened text file and move to the start of the next one. The function will also return the full line as a string, making it an easy way to read complete \"chunks\"\n    of data for parsing later.","\n  "," ","\n  ","\n  ","file_text_readln(fileid);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fileid","\n        ","The id of the file to read from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","string","\n  "," ","\n  ","\n  ","var file = file_text_open_read(working_directory + \"hiscore.txt\");"," for (var i = 0; i < 10; ++i;)","    {\n    ","    scr[i] = file_text_read_real(file);","    file_text_readln(file);\n    ","    scr_name[i] = file_text_read_string(file);","    file_text_readln(file);\n    ","    }\n    "," file_text_close(file);\n  ","\n  ","The above code opens a file for reading and then loops through the lines of the file reading alternately a real number value and a string into two different arrays for future use. The file is then closed when the loop has finished.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text Files","\n        ","Next: ","file_text_write_real","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["file_text_readln"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2402"})