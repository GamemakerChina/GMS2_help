rh._.exports({"0":["matrix_build_projection_perspective"],"1":["matrix_build_projection_perspective"],"2":["matrix_build_projection_perspective"],"3":["\n\n\n\n\n  ","\n  ","\n  ","This function builds a perspective projection matrix matrix based on the dimensions of the near plane, using the specified parameters listed below.","\n  "," ","\n  ","\n  ","matrix_build_projection_perspective(width, height, znear, zfar);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","w","\n        ","The width of the projection.","\n      ","\n      ","\n        ","h","\n        ","The height of the projection.","\n      ","\n      ","\n        ","znear","\n        ","The near clipping plane.","\n      ","\n      ","\n        ","zfar","\n        ","The far clipping plane.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Matrix index","\n  "," ","\n  ","\n  ","var projmat = matrix_build_projection_perspective(640, 480, 1.0, 32000.0);"," camera_set_proj_mat(view_camera[0], projmat);","\n  ","The above code creates a perspective projection and then uses the matrix returned to set the camera assigned to view port[0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Matrix Functions","\n        ","Next: ","matrix_build_projection_perspective_fov","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["matrix_build_projection_perspective"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2083"})