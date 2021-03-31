rh._.exports({"0":["Room Properties"],"1":["Rooms - Room Settings"],"2":["room settings,cameras,viewports,room size,room properties,view cameras"],"3":["\n  ","\n  ","\n  ","The room properties section is where you can set the inheritance toggle for the settings, as well as name the room and whether it\n    is ","persistent ","or not. Normally, when you leave a room and return to the same room later, that room is reset to its initial settings. This is usually fine for most games but it may not be what you want in, for example, an RPG or any\n    non-linear game, where you want to come and go between rooms and have them be the way you left it the last time. Checking the box labelled ","Persistent ","will do exactly that. The room status will be remembered and when you return to\n    it later, it will be exactly the same as you left it, with it only being reset to the start state when the game is restarted. Note that there is ","one ","exception to this - if you marked certain objects as being persistent, instances of this\n    object will ","not ","stay in the room but move to the next room.","\n  ","After that you have the option to ","Clear Display Buffer",". This option, when checked, fills the ","display buffer"," with a colour. If you know that the views are going to be\n    covering the whole screen at all times or that you have a fullscreen background being drawn, then you can un-check this (which saves a redraw and so helps optimise your game), but if you have overlapping views that, when on the screen leave open spaces,\n    or your background has any transparency, you should check this so that those area where there is no view are filled in with the draw colour of your choice. Currently this colour can only be set through code using ","window_set_colour()",".","\n  ","NOTE",": If you are using automatic aspect ratio correction (as set in the ","Game Options","), then you should ","always ","have this checked otherwise you can get odd effects over the\n    \"letterbox\" that your game is drawn in. If you do not use this option then you can un-check this and get a small boost to your games performance (especially noticeable on Android and other mobile platforms).","\n  ","A room has to have a size and this is defined by the values that you input for its width and height in pixels, and once that has been set you can then go on to add ","Creation Code",", should you require it. Creation code is added from the\n    button at the bottom (along with the inherit toggle to say whether the room should inherit it's creation code or not), and if you click it you will open a code or DnD™ editor. This editor allows you to input functions/actions and code that will\n    be run at the ","start ","of the room, after the create event of all instances but before their room start event (for more information on event order, please see ","here","). This code will run every\n    time you enter the room, unless the room is flagged as persistent, in which case it will only be run once when the room is first entered, but not on subsequent visits to the room.","\n  ","The final button in the Room Properties permits you to open the ","Instance Creation Order"," window:","\n  ","This window lists all the instances in the room in the order that they will be created (from top to bottom). Should you\n    require a specific instance to be created before any other, you can simply click "," and drag it to the position your require. Note that instances will be created in the\n    order given from top to bottom of the list.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n  ","The next set of properties for the room that you can define are those relating to the room ","Camera"," and ","Viewports",". Camera views give a mechanism for drawing different parts of your room at different places on the screen,\n    or for drawing just a part of your room to cover the whole screen. For example, in most platform games, the camera view follows the main character, as, if you could see the whole level on the screen, your character would be too small to see and there\n    would be no surprises for the player. Camera views can also be used in multi-player games or co-op games, as they permit you to create a split-screen setup in which in one part of the screen you see one player and in another part you see the other\n    player. This can all be easily achieved in GameMaker Studio 2 using camera views.","\n  ","At the top of the views properties you can toggle the view inheritance on or off, then there is a box labeled ","Enable Viewports",".\n    This ","must be flagged"," before any of the camera views can be active in your game.","\n  ","NOTE",": You can toggle inheritance on or off for the three main view port settings, and then you toggle inheritance on or off for each individual camera view.","\n  ","The next checkbox is the one that says ","Clear Viewport Background",", which clears the ","application surface"," with the window colour, and can be unchecked if you know that\n    you are drawing to cover the whole surface.","\n  ","A camera view is defined by two different sets of values, the camera view itself and the port on the screen where this view is to be drawn. This can sometimes cause confusion so let's explain this a bit before explaining how we define each of them:","\n  ","\n    ","The Camera",": A point within the room that will be used to set how the room is displayed on screen (this is an abstract piont in the room editor and its position is set automatically based on the view and view port settings)","\n    ","The View",": What the camera sees, based on the position, projection and rotation of the camera","\n    ","The View Port",": The area of the physical screen where the camera view will be displayed","\n  ","\n  ","So, for example, this means that you can have a 640x480 camera view into your room, and then set the port to 320x240, which will display the view\n    scaled down to that sized port on the screen, and you can also do the same and set the view to a smaller value and the port to larger making the image scale up to fit the port size and be shown on the screen larger than it is. In this way you can\n    maintain a screen (port) size while changing the camera view to display more or less of the room in the same area of the screen.","\n  ","The camera view is always defined as a rectangular area in the room, where you specify the position of the top-left corner, the width and the height of this area. Then you must specify where this area is shown in the window on the screen by defining\n    the view port, where again you specify the position of the top-left corner and the size (note that anything other than 0,0 for the top left corner can give strange results). You can have more than one port and they can overlap, in which case they\n    are drawn in the indicated order one on top of the other.","\n  ","Please realise that the overall screen area is ","always defined as a rectangular area",", so your ports, even when offset, will form a rectangle, with any empty spaces being filled in by the window colour of the ","display buffer",", meaning that in these circumstances you should always have ","Clear Display Buffer"," checked or else you will get odd artefacts drawn in the spaces between ports. The image below illustrates this, where there\n    are two offset view ports visible, yet they make a square window, and \"underneath\" there are lines being drawn to the display buffer:","\n  ","Cameras also have the ","Object Following ","option. This is for when you want the camera to \"follow\" (ie: maintain\n    the view focused on) a certain object. To do this you must click "," on the menu icon and select an object from the list that pops up (if there are multiple instances of\n    this object in the room, only one of them is followed by the camera).","\n  ","The normal behaviour for a camera is to only move when the instance being followed gets too close to a \"buffer\" zone that makes an invisible boundary around the edge of the view. This zone can be defined by you using the ","Horizontal Border ","and\n    ","Vertical Border ","values, so - for example - setting these values to 64 will mean that the view will not start to move and follow the character until it reaches 64 pixels from the edge of the view.","\n  ","Finally you can indicate the ","horizontal"," and ","vertical speed ","at which the camera moves when the character has reached the buffer zone, and this has a default value of -1. This default value is basically \"instantaneous\"\n    and means that the moment the follow instance is outside the horizontal border or vertical border buffer zone, the view will skip to its current position. Now, this is not always what you want and so you can set the vertical and horizontal scrolling\n    speed for the camera by setting the values to something other than -1. Note that a value of 0 will cause the view to not move at all, and any other positive value is how many pixels it will move in any frame, so setting the horizontal speed to 5 will\n    have the view follow the object at 5 pixels per frame horizontally.","\n  "," ","\n  "," ","\n  ","\n  ","Before you can use the built in physics functions in your games, you must tell GameMaker Studio 2 that the room is a physics room. To do this, you must tick the option to ","Enable Physics ","at the top of the ","Room Physics"," section\n    (you can also toggle the inheritance of this section independently of the rest of the room settings). Once you have done that you can then continue on to set up the physics world properties, which are some basic properties that you must have pre-defined\n    before your room will allow physics instances to work as such. For a more precise control over the world you can use code (see the ","Physics Functions"," for more information).","\n  ","The next thing you must do is set up the ","Gravity ","of the world. The strength and direction of this is calculated\n    as a ","vector"," of the x/y position that you set around a (0, 0) point. So, an x of 0 and a y of 1 will set the gravity direction as being ","down ","with a force of 1 meter per second (for\n    a more detailed explanation see - ","The Physics World",").","\n  ","Finally you must set the ratio of"," Pixels To Meters"," for GameMaker Studio 2 to use as a base for all its physics calculations. This is because the physics functions work on real-world measurements, which is why we must set this value,\n    and you'll want to adjust this setting until the average pixel size of the objects you are using translates roughly into simulated physics objects of an appropriate size.","\n  ","It should be noted that enabling physics in a room means that all instances in the room ","must use the physics functios and variables to move",". Basically, you have \"traditional\" movement, where you can set the X/Y position of an instance\n    or set its speed and direction, and then you have the \"physics\" movement, which requires physical forces and impulses to move around. These systems are ","mutually exlusive",", and you cannot move a physics instance using non-physics\n    functions and you cannot move a non-physics instance using the physics funtions.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Room Editor","\n        ","Next: ","Room Inheritance","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Room Properties","Cameras And Viewports","Room Physics"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"119"})