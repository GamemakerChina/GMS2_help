rh._.exports({"0":["matrix_stack_push"],"1":["matrix_stack_push"],"2":["matrix_stack_push"],"3":["\n\n\n\n\n  ","\n  ","\n  ","This function pushes the specified matrix onto the matrix stack.","\n  "," ","\n  ","\n  ","matrix_stack_push(matrix);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","matrix","\n        ","The matrix index to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var m1 = matrix_build(66, 145, 0, 0, 0, 0, 1, 1, 1);"," var m2 = matrix_build(0, 0, 0, 0, 0, image_angle * 6, 1, 1, 1) ;"," matrix_stack_push(m1);\n    "," matrix_stack_push(m2);\n    "," matrix_set(matrix_world, matrix_stack_top());"," draw_sprite(tyre, 0, 0, 0);"," matrix_stack_pop();\n    "," matrix_stack_pop();\n  ","\n  ","The above code will build two new matrices and then push them onto the matrix stack. The world matrix is then set to the top of the stack, a sprite is drawn and the transforms are then popped from the stack.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Matrix Functions","\n        ","Next: ","matrix_stack_pop","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["matrix_stack_push"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2088"})