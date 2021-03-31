rh._.exports({"0":["instanceof"],"1":["instanceof"],"3":["\n  ","\n  ","\n  ","This function can be used to get the name of the function that was used to create a struct when the struct was created using a ","constructor function"," and the ","    ","new"," operator. You supply the variable with the struct reference to check and the function will return either a string with the function name or ","undefined",". Note that if you\n    pass the function a struct literal (ie: a struct that was created without using a constructor function) then it will simply return the string \"struct\". This function can also be used to check if a struct reference is a ","weak reference"," or\n    not, in which case the function will return the string \"","weakref","\" instead of the name of the function that created the struct for more information, see the function ","weak_ref_create()",").","\n  "," ","\n  ","\n  ","instanceof(struct_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","struct","\n        ","The struct reference to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String or ","undefined","\n  "," ","\n  ","\n  ","In this example we must first define the function that will be used as the constructor for the struct:","\n  ","function init_struct(_a, _b, _c) constructor","     {\n    ","     a = _a;","     b = _b;","     c = _c;","     }\n  ","\n  ","This function can then be used along with the ","new"," operator to create a struct and populate it with the variables set to the values of the arguments used in the function:","\n  ","mystruct = new init_struct(10, 100, \"Hello World\");","\n  ","We can then get the name of the function that was used like this:","\n  ","var _name = instanceof(mystruct);"," if is_string(_name)","     {\n    ","     show_debug_message(_name);\n    ","     }\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","array_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instanceof"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"534"})