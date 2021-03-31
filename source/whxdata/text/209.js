rh._.exports({"0":["If Variable"],"1":["DnD™ Action - If Variable"],"3":["\n  ","\n  ","\n  ","This action is used to check the state of a given variable against a given value using a specific expression. An \"if\" statement will always return either ","true"," or ","false"," and the expressions for checking can be any one of the\n    following:","\n  ","\n    ","Equals to"," - The variable and the value are both exactly equal","\n    ","Less than"," - The variable is less than the value","\n    ","Greater than"," - The variable is greater than the value","\n    ","Less than or Equal to"," - The variable is less than ","or"," equal to the value","\n    ","Greater than or Equal to"," - The variable is greater than ","or"," equal to the value","\n  ","\n  ","If you flag the \"Not\" argument, then the above will be negated expressions, for example \"equals to\" becomes \"","not"," equals to\". Also note that neither the variable nor the value arguments are limited to numeric values\n    and can be a string, a pointer, a resource ID or anything else that a function can return or use (see the section on ","data types"," for more information), but you cannot compare two\n    different data types without getting an error - for example if the variable holds a string and you try to check if it is equal to a number then you will get a syntax error.","\n  ","IMPORTANT NOTE",": Due to ","floating point precision issues",", checking to see if two values are exactly equal may return ","false",", since one may be exactly 1, while\n    the other may be 1.00000000000001. This can be avoided by using the ","Decimal to Integer"," action before checking or using the \"greater than\" or \"less than\" expressions.","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","These actions will now be run if the \"if\" evaluates to ","true",", while any\n    actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Variable","\n        ","The name of the variable to check.","\n      ","\n      ","\n        ","Not","\n        ","Set to check if the expression does ","not"," evaluate to true.","\n      ","\n      ","\n        ","Expression","\n        ","The type of expression to use for the check.","\n      ","\n      ","\n        ","Value","\n        ","The value to check the variable against.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code checks a variable \"dir\" to see if it is equal to 10, and if\n    it is it creates an instance of \"","obj_Squirrel","\" and if it isn't then it destroys the instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Common Actions","\n        ","Next: ","If Expression","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Variable"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"209"})