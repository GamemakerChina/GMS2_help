rh._.exports({"0":["Local Variables"],"1":["var,Local Variables"],"2":["local variables,local,var,local scope"],"3":["\n  ","\n  ","\n  ","A ","local"," variable is one that we create for a specific ","event"," or ","function"," ","only"," and then discard when the event or function has finished. If it is created in a custom function then the local variable\n    is only available to the function and then discarded when the function has finished. Why would we need them? Well, variables take up space in memory and it may be that we are only going to use them for one operation or function in which case we only\n    need to have it in memory for that short time that it's used. This keeps your code base clean and tidy as well as keeping memory space optimised for the things that really need it. To declare a local variable we use the ","var"," operator\n    like this:","\n  ","var _i, _num, _str;"," _i = 0;"," _num = 24.5;"," _str = \"Hello World\";","\n    "," // or","\n    "," var _i = 0, _num = 24.5, _str = \"Hello World\";","\n    "," // or","\n    "," var _i = 0;"," var _num = 24.5;"," var _str = \"Hello World\";","\n  ","All of the variables created in this way will be \"forgotten\" (ie: removed from memory) at the end of the event (or function) in which they were created. You should be careful that the name you give all ","var"," declared variables does\n    not coincide with another instance variable within the object running the code, and also make sure that you have no intention of using the value stored in that variable outside of the event or function you declare it in (in the examples above, all\n    the ","var"," declared variables have been defined with the underscore \"_\" preceding the variable name, but this is not required and is done simply to make it more obvious in the code that we are dealing with a local variable). That said,\n    if you find yourself in a situation where you think a local variable ","should"," be the same as an instance variable, then you can use the ","self"," ","keyword"," to identify the instance\n    variable as separate, for example:","\n  ","var hp = 10;"," with (obj_Enemy)"," {\n    "," self.hp -= hp;"," }\n  ","\n  ","Local variables are used a lot in programs, especially in loops for counting ","iteration","s",", or when using a value several times in one operation that is not going\n    to be repeated again. Here are another couple of examples:","\n  ","var _i = 0;"," repeat (10)","     {\n    ","     inventory[_i] = 0;","     _i += 1;","     }\n  ","\n  ","The above code creates a local variable called \"","_i","\" and sets it to 0, all in the same line. Note that in previous versions of ","GameMaker"," you had to declare your local variables first and ","then"," assign\n    them values, but in this version you can declare ","and"," assign them a value at the same time. The above code then uses this variable to initialize an ","array",". As the variable \"","_i","\"\n    is not going to be used for any further functions in the instance other than this, it can be local in scope. Here is one more example:","\n  ","var _x, _y;"," _x = x - 32 + irandom(64);"," _y = y - 32 + irandom(64);"," instance_create_layer(_x, _y, \"Effects\", obj_blood);","\n  ","Here we have used the local variables \"","_x","\" and \"","_y","\" to store some random coordinates that we then use to create an instance. In this example you can see that it is not strictly\n    necessary that we use these variables but for the sake of readability and ease of use, we do. It is MUCH clearer and obvious what we are doing there than if we used this code:","\n  ","instance_create_layer(x - 32 + irandom(64), y - 32 + irandom(64), \"Effects\", obj_guts);","\n  ","One other thing about ","var"," declared local variables should be noted... Since they are unique to the event or function that runs them, they can be used in any other instances through code too! This means that we can use these variables to set\n    and change things in other instances using the \"","with()","\" construct (see the section on ","variable scope"," for more information). The actual code itself would look something\n    like this:","\n  ","var num = instance_number(obj_Enemy);"," with (obj_Enemy)","     {\n    ","     if num>10 instance_destroy();","     }\n  ","\n  ","The above code works because the ","var"," declared variable is local to the ","event"," (or function) it is contained in, not the instance, nor the game world, and so can be used in any function in any object as long as it is in the same code block.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variables And Variables Scope","\n        ","Next: ","Instance Variables","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Local Variables"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"480"})