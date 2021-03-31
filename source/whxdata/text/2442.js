rh._.exports({"0":["file_bin_rewrite"],"1":["file_bin_rewrite"],"2":["file_bin_rewrite"],"3":["\n  ","\n  ","\n  ","This function takes the filename handle as returned by the function ","file_bin_open()"," and then rewrites the file, clearing it of all previous data to start writing from the beginning of the file.","\n  ","NOTE",": These functions ","do not"," work when the target module is HTML5.","\n  "," ","\n  ","\n  ","file_bin_rewrite(binfile);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","binfile","\n        ","The ID of the file to rewrite.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","file = file_bin_open(\"myfile.bin\", 2);"," file_bin_rewrite(file);\n  ","\n  ","This would open a file from the same directory as the game, and assign its index to the variable \"file\". It would then re-write the file (clearing it of data).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Binary Files","\n        ","Next: ","file_bin_close","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["file_bin_rewrite"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2442"})