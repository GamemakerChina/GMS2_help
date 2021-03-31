rh._.exports({"0":["gpu_set_tex_max_aniso"],"1":["gpu_set_tex_max_aniso"],"2":["gpu_set_tex_max_aniso"],"3":["\n  ","\n  ","\n  ","With this function you can set the current maximum level of anisotropy when using the ","tf_anisotropic"," filter mode (see ","gpu_get_tex_mip_filter()"," for more information). The input value must range\n    between 1 and 16.","\n  "," ","\n  ","\n  ","gpu_set_tex_max_aniso(maxaniso);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","maxaniso","\n        ","The maximum level for anisotropic filtering (default: 16)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if gpu_get_tex_max_aniso() != 8","     {\n    ","     gpu_set_tex_max_aniso(8);\n    ","     }\n  ","\n  ","The above code will check the current maximum anisotropic filtering level and if it is not 8 it is set to 8.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_set_tex_max_aniso_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_set_tex_max_aniso"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1346"})