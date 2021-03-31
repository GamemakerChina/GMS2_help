rh._.exports({"0":["for"],"1":["for"],"2":["for"],"3":["\n  ","\n  ","\n  ","One of the most used ways to iterate over a ","statement"," (or statements) multiple times is to use a ","for"," loop, which has this form:","\n  ","for (<assignment>; <expression>; <operation>;)","     {","     <statement>;","     <statement>;","     ...","     }","\n  ","This works as follows - First the assignment is executed which assigns a value to a variable, then the ","expression","  is evaluated and, if it is ","true",", the statements in the curly brackets{}\n    are executed executed. Next the operation is performed on the assigned variable and then the expression is evaluated again. This loop will continue until the expression is found to be ","false",".","\n  ","Now, this may sound complicated when written like that, but you should interpret it as:","\n  ","\n    ","The first assignment initializes the for-loop","\n    ","The expression tests whether the loop should be ended","\n    ","The statement is performed","\n    ","The operation is performed","\n    ","Go back to step 2 and perform the expression again and continue or exit the loop","\n  ","\n  ","This is extremely useful for doing repetitive tasks that would involve multiple lines of code in any other way, and is commonly used as a counter for evaluating arrays, drawing things, setting incremental values, etc... The following code example illustrates\n    a typical use for this type of statement:","\n  ","for (var i = 0; i < 10; i += 1)","     {\n    ","     draw_text(32, 32 + (i * 32), string(i) + \". \"+ string(scr[i]));","     }\n  ","\n  ","The above code initialises a ","for"," loop, starting at 0 and counting up to (and including) 9, and then uses the loop value of ","i"," to draw the values stored in an array down the screen. Note how the ","for"," loop variable\n    ","i"," is used to not only loop through the array, but to draw a number as well as tell GameMaker Studio 2 where to draw the values to in the room. This flexibility is one of the main reasons why ","for"," loops are so important in programming.","\n  ","When should you use a ","for"," loop?"," Anytime you need to perform a fixed number of iterations over one or more statements while keeping track of the ","iteration"," that is\n    currently being run and using that iteration value.","\n  ","NOTE",": You will see multiple examples when working with other people of the variables \"","i","\" and \"","j","\" being used for the loop counter variable. These are ","not"," obligatory variable names and you can use anything\n    like \"","a","\" or \"","foo","\" or whatever. The use of \"","i","\" and \"","j","\" is simply a standard convention in programming.","\n  ","It is worth noting that you can use the special ","break"," and ","continue"," statements within a ","for"," loop too. Using ","break","    will immediately exit the loop and move on to any code that is in the event or function after the loop should have finished, eg:","\n  ","var _inst = noone;"," for (var i = 0; i < 10; i += 1)","     {\n    ","     _inst = instance_find(obj_Enemy_Parent, i);","     if instance_exists(_inst)","         {","         if _inst.object_index == obj_Enemy_Melee","             {","             break;","             }","         }","     }","    target = _inst;","\n  ","The above code loops through the 10 nearest instances of the given \"parent\" object, and if an instance is found it checks the instance object ID, and if it is an instance of ","obj_Enemy_Melee"," then the loop is ended\n    using ","break"," and the ID value assigned to a variable (if no instance is found, then the keyword ","noone"," will be added to the variable).","\n  ","An example of using ","continue"," in a ","for"," loop would be:","\n  ","var _val = 0;"," for (var i = 0; i < 10; i += 1)","     {\n    ","     if (val_array[i] <= 0)","         {","         continue;","         }","     _val += val_array[i];","     }\n    "," draw_text(32, 32, \"Positive Values Total = \" + string(_val));","\n  ","This code will check the value stored in each array position of a 10 length 1D ","array",", and if any are less than or equal to 0 it will ","continue"," the loop, meaning that the current iteration will end,\n    ","i"," will be incremented, and the next loop iteration will be started. If the value is greater than 0, then it is added to the local variable ","_val",", and after the loop is finished the total value\n    is drawn to the screen.","\n  ","For more examples of loop keywords please see the sections on ","repeat",", ","while",", and ","do / until",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Language Features","\n        ","Next: ","switch","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["for"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"506"})