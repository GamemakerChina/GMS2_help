rh._.exports({"0":["string_width_ext"],"1":["string_width_ext"],"2":["string_width_ext"],"3":["\n  ","\n  ","\n  ","This function will return the maximum width (in pixels) of the input string, taking into account the line separation and line-break width (which is defined as the number of pixels that the string can occupy before a line break is inserted). It is very\n    handy for calculating distances between text elements based on the maximum width of a string that is split over several lines as it would be drawn with ","draw_text_ext()"," using the currently defined\n    font. Separation and width can be set to -1 to get the default spacing.","\n  "," ","\n  ","\n  ","string_width_ext(string, sep, w);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","The string to measure the width of.","\n      ","\n      ","\n        ","sep","\n        ","The distance in pixels between lines of text as if the string was being drawn.","\n      ","\n      ","\n        ","w","\n        ","The maximum width (in pixels) of the string before a line break as if the string was bring drawn.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var ww = string_width_ext(str_Story_Text[1], -1, 100);"," draw_text_ext(32, 32, str_Story_Text[1], -1, 100);"," draw_text_ext(32 + ww, 32, str_Story_Text[2], -1, 100);","\n  ","The above code will get the width of the given string, taking into account the line separation and line-break width, and then draw two lines of text, using the returned total string width as a separator.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Strings","\n        ","Next: ","string_hash_to_newline","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["string_width_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1926"})