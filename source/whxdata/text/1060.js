rh._.exports({"0":["layer_script_end"],"1":["layer_script_end"],"2":["layer_script_end"],"3":["\n  ","\n  ","\n  ","With this function you can assign a ","script function"," to a layer and it will be called after the layer is rendered. When adding a function to a layer in this way, it will be run at the end of\n    ","each of the different draw events"," so you may want to check in the function assigned which event is currently finished rendering and adapt the code to suit. This can be done by checking the ","event_type","    and/or the ","event_number"," (see the extended example below). Note that the function is ","not"," meant to be called in any draw events or step events, but rather only needs to be called\n    at the start of the room in the ","Room Creation Code"," or in the ","Create Event ","/ ","Room Start Event"," of an instance.","\n  "," ","\n  ","\n  ","layer_script_end(layer_id, script)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n      ","\n        ","script","\n        ","The script function index to assign to the layer","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","In this extended example, we will first show you how a simple script function is structured to set some shader uniform data so that when the given layer is drawn, this function will be run and the shader will work correctly. In the example, it is worth\n    noting how we check which event is being called so that the rest of the function is only run on the specific event that we require it to work on - in this case, only on the main draw event:","\n  ","/// @function layer_shader_start();"," function layer_shader_start()\n    "," {\n    "," if event_type == ev_draw","    {\n    ","    if event_number == 0","       {\n    ","       colour_to_find = shader_get_uniform(sShaderDemo5, \"f_Colour1\");","       colour_to_set = shader_get_uniform(sShaderDemo5, \"f_Colour2\");","       shader_set(s_ColourChanger);\n    ","       shader_set_uniform_f(colour_to_find, 1,1,1 );","       shader_set_uniform_f(colour_to_set, 1,0,0 );","       }\n    ","    }\n    "," }\n  ","\n  ","We would then have a companion function to reset the shader after all the drawing is done:","\n  ","/// @function layer_shader_end();"," function layer_shader_end()\n    "," {\n    "," if event_type == ev_draw","    {\n    ","    if event_number == 0","       {\n    ","       shader_reset();\n    ","       }\n    ","    }\n    "," }\n  ","\n  ","Now that we have defined our script functions for setting the shader, we then have to assign them to a specific layer so that the layer knows to call them. This would be done in the room creation code, or in the create event or room start event of some\n    controller object (they do not need to be set every step, but rather once at the start of the room, or when the layer is initially created):","\n  ","var lay_id = layer_get_id(\"Instances\");"," layer_script_begin(lay_id, layer_shader_start);"," layer_script_end(lay_id, layer_shader_end);","\n  ","This final code block assigns the scripts to the layer.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_shader","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_script_end"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"1060"})