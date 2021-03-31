rh._.exports({"0":["file_text_write_string"],"1":["file_text_write_string"],"2":["file_text_write_string"],"3":["\n  ","\n  ","\n  ","With this function you can write a string to a previously opened text file. If the file already contains information, this information will be erased and the string will be written at the beginning of the file, unless you have opened the file with the\n    ","file_text_open_append()",". You can also avoid this by using the ","file_text_readln()"," function along with the ","file_text_eof()","    function to loop through the contents of the file until you get to the end and then start writing.","\n  "," ","\n  ","\n  ","file_text_write_string(fileid, str);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fileid","\n        ","The id of the file to edit.","\n      ","\n      ","\n        ","str","\n        ","The string to write to the file.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var file = file_text_open_write(working_directory + \"hiscore.txt\");"," for (var i = 0; i < 10; ++i;)","     {\n    ","     file_text_write_real(file, scr[i]);","     file_text_writeln(file);\n    ","     file_text_write_string(file, scr_name[i]);","     file_text_writeln(file);\n    ","     }\n    "," file_text_close(file);\n  ","\n  ","The above code opens a file for writing and then loops through two arrays, writing each array value to a new line of the file. The file is then closed when the loop has finished.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text Files","\n        ","Next: ","file_text_writeln","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["file_text_write_string"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2435"})