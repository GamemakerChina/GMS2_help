rh._.exports({"0":["choose"],"1":["choose"],"2":["choose"],"3":["\n\n\n\n\n  ","\n  ","\n  ","Sometimes you want to specify something other than numbers for a random selection, or the numbers you want are not in any real order or within any set range. In these cases you would use ","choose()"," to generate a random result. For example, say\n    you want to create an object with a random sprite at the start, then you could use this function to set the sprite index to one of a set of given sprites. Note that you can have as many as you require (note that more arguments will mean that the function\n    will be slower to parse).","\n  ","NOTE",": This function will return the same value every time the game is run afresh due to the fact that GameMaker Studio 2 generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use\n    ","randomise()"," at the start of your game.","\n  "," ","\n  ","\n  ","choose(val0, val1, val2... max_val);","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","val0... max_val","\n        ","An input value that can be string, integer, variable or constant.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","One of the given arguments","\n  "," ","\n  ","\n  ","sprite_index = choose(spr_Cactus, spr_Flower, spr_Tree, spr_Shrub);"," hp = choose(5, 8, 15, 32, 40);"," name = choose(\"John\", \"Steven\", \"Graham\", \"Jack\", \"Emily\", \"Tina\", \"Jill\",\n    \"Helen\");","\n  ","The above code uses choose to set a number of properties for the instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Number Functions","\n        ","Next: ","random","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["choose"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2018"})