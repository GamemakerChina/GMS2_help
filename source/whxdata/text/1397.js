rh._.exports({"0":["draw_get_valign"],"1":["draw_get_valign,fa_top,fa_middle,fa_bottom"],"2":["draw_get_valign,fa_top,fa_middle,fa_bottom"],"3":["\n  ","\n  ","\n  ","This function is used to get the text alignment setting along the vertical axis, and will return one of the constants listed below.","\n  "," ","\n  ","\n  ","draw_get_valign();","\n  "," ","\n  ","\n  ","Constant","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Alignment","\n      ","\n      ","\n        ","fa_top","\n        ","\n      ","\n      ","\n        ","fa_middle","\n        ","\n      ","\n      ","\n        ","fa_bottom","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","if draw_get_valign() != fa_top","     {\n    ","     draw_set_valign(fa_top);\n    ","     }\n    "," draw_text(100, 32, \"Score: \" + string(score));","\n  ","The above code will check to see if the current text alignment is top-aligned, and if it's not then it will be set and then some text is drawn.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text","\n        ","Next: ","draw_text","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_get_valign"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1397"})