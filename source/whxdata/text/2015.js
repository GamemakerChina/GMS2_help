rh._.exports({"0":["Number Functions"],"2":["Number Functions,numbers"],"3":["\n\n\n\n\n  ","\n  ","\n  ","Real numbers in GameMaker Studio 2 are considered ","double-precision floating-point numbers"," - that is to say that they have a decimal point in them with no fixed number of digits either\n    before or after the point - or ","integers"," - that is to say they are whole numbers with no decimal point value. 2, for example, is an integer but 2.01 is a floating point real.","\n  ","NOTE",": On the ","HTML5"," target, all real numbers are doubles.","\n  ","This distinction between integers and floats is very important when dealing with cross platform development as the precision of calculations made on a Windows PC is ","not"," the same as the precision of those same calculations\n    when made on a mobile device. This means that you should pay particular attention when making comparisons, for example:","\n  ","if (image_index == 1)","     {","     do something...","     }","\n  ","In the example above, if we have been setting the ","image_speed"," to 0.25 - for example - then after four steps you may assume that the ","image_index"," value would be 1, but it ","may"," be\n    a value like 1.0000002 due to the way floating point maths works and so the evaluation will not be ","true",". These types of errors can be quite hard to debug and so it is always good to be aware of them and to plan ahead and use\n    other means of checking values or to use the appropriate flooring or rounding functions (listed below) to convert the number to check into an integer (for more information on floating point maths and why this is an issue, please ","see here","). For example the above code could be written as:","\n  ","if (floor(image_index) == 1)","     {","     do something...","     }","\n  ","It is also worth noting that when using the ","YoYo Compiler"," targets, all expressions and functions are ","evaluated from left to right",", while on all other target platforms they are evaluated ","from right to left",",\n    meaning that this - for example - will give different results depending on the platform:","\n  ","val = max(num, ++num, num++);","\n  ","NOTE",": For more informaton, see the section on ","Evaluation Order",".","\n  ","You can also use a special function available in GameMaker Studio 2 to set the ","epsilon"," value for floating point maths. When a real number is rounded to the nearest floating point number,\n    the epsilon (also know as \"machine epsilon\") forms an upper bound on the relative error, and you can get and set the epsilon value using the following functions:","\n  "," ","\n  ","\n    ","math_set_epsilon","\n    ","math_get_epsilon","\n  ","\n  "," ","\n  ","These functions all deal with using random numbers and values:","\n  ","NOTE: ","When using the random functions, GameMaker Studio 2 maintains the same random seed every time you start the game. This makes debugging much easier as you are guaranteed that the random functions will always initially return\n    the same value, however should you not wish this to happen, you must first set a new random seed at the very start of the game, either using ","randomise()"," or \n    ","random_set_seed()",".","\n  "," ","\n  ","\n    ","choose","\n    ","random","\n    ","random_range","\n    ","irandom","\n    ","irandom_range","\n    ","random_set_seed","\n    ","random_get_seed","\n    ","randomise","\n  ","\n  "," ","\n  ","These are all functions that will round values in some way, or select a single value from various given values:","\n  "," ","\n  ","\n    ","round","\n    ","floor","\n    ","frac","\n    ","abs","\n    ","sign","\n    ","ceil","\n    ","max","\n    ","mean","\n    ","median","\n    ","min","\n    ","lerp","\n    ","clamp","\n  ","\n  "," ","\n  ","Finally we a miscellaneous collection of important mathematical functions:","\n  "," ","\n  ","\n    ","exp","\n    ","ln","\n    ","power","\n    ","sqr","\n    ","sqrt","\n    ","log2","\n    ","log10","\n    ","logn","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Maths And Numbers","\n        ","Next: ","Vectors","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Number Functions"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"2015"})