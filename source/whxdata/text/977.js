rh._.exports({"0":["instance_deactivate_region"],"1":["instance_deactivate_region"],"2":["instance_deactivate_region"],"3":["\n  ","\n  ","\n  ","With this function you can define a region within the room to deactivate instances that have previously been activated. This region can either be flagged as \"inside\" or \"outside\" as demonstrated in the following image:","\n  ","You can see in the image above that the \"apple\" instance is always\n    inactive because, even if the sprite itself doesn't overlap the region, the bounding box does. So, instances are considered to be within the region specified when their ","bounding box"," overlaps with it, and the state of the collision mask\n    (precise or not) is ","not"," taken into consideration. Note that deactivation is not instantaneous, and an instance that has been deactivated in this way will not be considered to be inactive until the end of the event in which the function was\n    called.","\n  ","NOTE",": If you deactivate an instance on room start (ie:from the room creation code, or from an instance create event of an instance within the room) all instances that are placed within the room from the room editor ","will still run their create event","    before being deactivated.","\n  ","WARNING",": Deactivating instances that have physics enabled will ","NOT"," stop their fixtures from interacting within the physics simulation. For that you should set their ","phy_active"," variable\n    to ","true"," or ","false"," as you activate/deactivate the instances.","\n  "," ","\n  ","\n  ","instance_deactivate_region(left, top, width, height, inside, notme);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","left","\n        ","The x coordinate of the left of the rectangular region to deactivate.","\n      ","\n      ","\n        ","top","\n        ","The y coordinate of the top of the rectangular region to deactivate.","\n      ","\n      ","\n        ","width","\n        ","The width of the region to deactivate.","\n      ","\n      ","\n        ","height","\n        ","The height of the region to deactivate.","\n      ","\n      ","\n        ","inside","\n        ","Whether to deactivate instances on the inside of the region (true) or the outside (false).","\n      ","\n      ","\n        ","notme","\n        ","Whether to exclude the calling instance from deactivation (true) or not (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","instance_activate_all();"," var _vx = camera_get_view_x(view_camera[0]);"," var _vy = camera_get_view_y(view_camera[0]);"," var _vw = camera_get_view_width(view_camera[0]);"," var _vh = camera_get_view_height(view_camera[0]);"," instance_deactivate_region(_vx\n    - 64, _vy - 64, _vw + 128, _vh + 128, false, false);","\n  ","The above code activates all instances and then deactivates a region within the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Deactivating Instances","\n        ","Next: ","instance_deactivate_layer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_deactivate_region"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"977"})