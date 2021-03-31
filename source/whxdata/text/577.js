rh._.exports({"0":["tag_get_asset_ids"],"1":["tag_get_asset_ids,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence"],"2":["tag_get_asset_ids,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_unknown"],"3":["\n  ","\n  ","\n  ","With this function you can get all the assets of a given type that have the given tags assigned to them. You supply either a single tag (as a string) or an array, where each item in the array is a tag (as a string), as well as the type of asset to check.\n    the type of asset should be one of the following constants:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","asset_object","\n        ","The given name refers to an ","object",".","\n      ","\n      ","\n        ","asset_sprite","\n        ","The given name refers to a ","sprite",".","\n      ","\n      ","\n        ","asset_sound","\n        ","The given name refers to a ","sound",".","\n      ","\n      ","\n        ","asset_room","\n        ","The given name refers to a ","room",".","\n      ","\n      ","\n        ","asset_tiles","\n        ","The given name refers to a ","tile set",".","\n      ","\n      ","\n        ","asset_path","\n        ","The given name refers to a ","path",".","\n      ","\n      ","\n        ","asset_script","\n        ","The given name refers to a ","script",".","\n      ","\n      ","\n        ","asset_font","\n        ","The given name refers to a ","font",".","\n      ","\n      ","\n        ","asset_timeline","\n        ","The given name refers to a ","time line",".","\n      ","\n      ","\n        ","asset_shader","\n        ","The given name refers to a ","shader",".","\n      ","\n      ","\n        ","asset_animationcurve","\n        ","The given name refers to an ","Animation Curve",".","\n      ","\n      ","\n        ","asset_sequence","\n        ","The given name refers to a ","Sequence",".","\n      ","\n    ","\n  ","\n  "," ","\n  ","The function will return an array, where each item in the array will be a single asset index value. If there are no assets of the type that have the given tag(s), an empty array will be returned.","\n  "," ","\n  ","\n  ","tag_get_asset_ids(tags, asset_type);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tags","\n        ","A single asset tag string or an array with various asset tags.","\n      ","\n      ","\n        ","asset_type","\n        ","An asset type constant (listed above)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Array","\n  "," ","\n  ","\n  ","var _paths = tag_get_asset_ids(\"enemy\", asset_path);"," var _num = irandom(array_length(_paths) - 1);"," path_start(_paths[_num], 1, path_action_reverse, false);","\n  ","The above code uses the tag \"enemy\" to find all the path assets with that tag, before choosing one at random and assigning it to the instance running the code.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Assets And Tags","\n        ","Next: ","tag_get_assets","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tag_get_asset_ids"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"577"})