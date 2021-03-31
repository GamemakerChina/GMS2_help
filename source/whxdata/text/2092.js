rh._.exports({"0":["Physics"],"2":["Physics"],"3":["\n  ","\n  ","\n  ","The integration of a dedicated physics library to GameMaker Studio 2 means that you can now take control over all aspects of the physical behaviour of objects within your game world, particularly collisions and object interaction. The \"traditional\"\n    collision system (which GameMaker Studio 2 defaults to) is a \"reactive\" system, where you check for a collision and ","then"," react to that collision with code that you place in individual objects. This is fine for simple games,\n    but when you have a large number of objects and have to code how they all react to different situations in the game world, it quickly becomes obvious that this system is just not enough. That's when you have to turn to the GameMaker Studio 2    physics system.","\n  ","The physics system works in a very different way to normal collisions. It is more of a \"passive\" system where you define a series of properties for your objects in the game world, as well as the properties of the game world itself, before\n    any collisions or interactions occur. These coded \"rules\" will then govern the way everything in your game world interacts. In this way, with a few simple code and the correct room setup, you can create very complex interactions between\n    objects and the world which will occur and resolve ","without"," you having to code for every single possible outcome.","\n  ","There are a few things that you should note when working with the GameMaker Studio 2 physics world:","\n  ","\n    ","The physics system exists \"apart\" from the basic room and instance structure of GameMaker Studio 2 meaning that its timings and functions are not necessarily tied into the room speed and step order like everything else.","\n    ","The physics system replaces many of the normal instance functions... for example, rather than set a speed and a direction for an instance, if it has been declared as being a fully simulated physical body, you would use a ","force"," or ","impulse","      to get it to move around in the game world, or if it is not physics enabled you will need to set the x an y positions yourself. This takes a bit of getting used to, so experiment with the physics functions and get to know how everything works before\n      trying to integrate them into your project.","\n    ","You should limit the number of instances that are created, as well as the number of collisions and collision groups that the physics world has to deal with. You ","cannot"," have thousands of instances, all with physical properties and collisions\n      and expect everything to work fine due to the fact that physics requires some pretty intensive calculations, so limit yourself and optimise where possible.","\n    ","When setting up collisions, use parents as much as possible since the collision system has a limited number of ","collision bits"," available to assign to instances for Box2D to detect collisions. For example, if you have five different wall objects,\n      don't check for five collisions, rather, create a parent object and assign it to the five walls then have ONE collision check with the parent. The physical properties of the objects are ","not inherited"," only the collisions. In this way you\n      can keep your game optimised and error free.","\n    ","Try not to move instances from one point of the room to another in any way other than using the physics functions (ie: do not set the x/y coordinates manual). Although this can be done and in some circumstances it may be necessary, this is generally\n      to be avoided due to the unpredictable results that it may have on the physics engine, especially when trying to resolve collisions.","\n    ","Care should be taken when binding fixtures, as they can be bound to objects and instances independently. This means that if you bind a fixture to (for example) \"o_Wall\", ","all"," instances of that object will get the fixture. If you only\n      want to bind a fixture to one instance, then use that instance's id in the appropriate function.","\n    ","Please be aware that due to differences in floating point precision you may find that versions of your game for different target platforms may exhibit subtly different behaviour to the standard Windows version, though each version will be self-consistent\n      across subsequent executions.","\n    ","To prevent instabilities in the physical simulation Box2D constrains to upper limits the amount a body may rotate and translate within a single update. The apparent limitations will vary according to the accuracy of the physical simulation in accordance\n      with the number of updates and update speed of the physics world, and also in accordance with the physics world scaling. This means that (for example) if you have a world update speed of 60, the maximum movement speed would be 20.","\n  ","\n  ","Information on the physics functions can be found on the following pages:","\n  "," ","\n  ","\n    ","The Physics World","\n    ","Forces","\n    ","Fixtures","\n    ","Joints","\n    ","Soft Body Particles","\n    ","Physics Variables","\n  ","\n  "," ","\n  ","Finally, there are a couple of special physics functions which may be useful for more advanced physics simulations. The first is for testing for possible collisions at a specific point in the room, and the second is for generating custom mass and inertia\n    properties within an instance:","\n  "," ","\n  ","\n    ","physics_test_overlap","\n    ","physics_mass_properties","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Reference","\n        ","Next: ","In App Purchases","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Physics"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"2092"})