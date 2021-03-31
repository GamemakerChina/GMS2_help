rh._.exports({"0":["Set Timeline Speed"],"1":["DnD™ Action - Set Timeline Speed"],"2":["Set Timeline Speed"],"3":["\n  ","\n  ","\n  ","This action can be used to set the speed at which a timeline will move through the moments it contains. Normally, in each game frame you'd want the position in the timeline to be increased by 1, however you can change this amount by setting this\n    action to a different value. The value you choose will be treated as a ","multiplier"," so a value of 2, for example, will make the timeline run at twice the speed, while a value of 0.5 would make it run at half the speed.\n    What this means for the moments is that if the value is greater than one, then several moments could occur within the same game frame (no moments are ever skipped), and if the speed is less than one, then after a moment has run, there will be frames\n    where nothing happens until the next moment runs - if you set the timeline speed to 0.1, for example, you will get a moment on one game frame, then 9 game frames with no moments, and on the tenth game frame the next moment will be run.","\n  ","If you set a timeline to start using the actions ","Set Instance Timeline"," or ","Set Timeline State"," but ","don't"," set\n    the speed, then the timeline will default to 1 moment per game frame.","\n  "," ","\n  ","\n  ","\n  ","\n  \n    ","\n      ","\n        ","\n          ","Argument","\n          ","Description","\n        ","\n        ","\n          ","Speed","\n          ","The speed - as a multiplier - for the timeline to run at (default is 1)","\n        ","\n      ","\n    ","\n  \n  "," ","\n  ","\n  ","The above action block code will assign a timeline\n    to the instance calling the actions as well as set the initial moment to 10 and then the timeline speed to 2.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Timeline Actions","\n        ","Next: ","Set Timeline State","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Timeline Speed"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"430"})