rh._.exports({"0":["Brush Builder"],"1":["Tile Sets - Brush Builder"],"2":["brush builder,brushes,tile brushes"],"3":["\n  ","\n  ","\n  ","By default when you \"paint\" tiles onto a ","tile map"," layer in the room editor, you select a single tile and paint with that. However, tile sets are almost always designed to have sections\n    that fit together in different ways to form whole areas or items. For example, an RPG tile set may have landscape feature tiles that can be connected to create larger or smaller features - like trees and buildings - depending on the number of tiles\n    used. Now, placing multiple features like this on a room layer would require you to go back and forth many times to change tile, which is not good for your workflow. To resolve this, GameMaker Studio 2 enables you to create tile ","Brushes ","in\n    the Tile Set editor, available when you click "," on the ","Brush Builder"," button:","\n  ","In the ","Brush Builder"," you have the original tile set on the left and a blank \"canvas\" on the right. You can now select\n    any tile from the left and paint it on the right to create custom \"brushes\" which you can then use in the room editor. Note that you can click and hold the left mouse button "," then drag on the tile set to select multiple tiles to paint into the brush canvas and you can also hold down "," / "," + "," to add specific individual tiles or hold down "," + "," to remove specific tiles.","\n  ","The following image shows our previously mentioned landscape features as an example of three custom brushes made from a single tile set:","\n  ","On the right you can see three features that we've made (highlighted with an orange box\n    in the image). Notice how we've left a gap of one tile between each feature - this is because ","any touching group of tiles will be treated as a single brush"," in the room editor, so we leave a gap of one tile to show that each set is a distinct\n    brush we want to create. While creating your brushes, you paint with the left mouse button "," and delete with the right mouse button ",". You can also zoom the tile sheet or the brush canvas using "," / "," and the mouse wheel "," when the mouse\n    is over one of the windows, or you can pan around using "," + "," or\n    the middle mouse button "," and dragging. Note that you can also use the zoom tools in the ","Toolbox"," within the editor windows to change\n    the zoom levels of either window as well as toggle the grid visibility and colour.","\n  ","At the top right you can see the currently selected tool, and you can also set the size of the brush that you want to paint with. The default size is 1, which is a single tile, but if you set it to higher values then you can paint (and erase) with a\n    larger brush composed of the selected tile repeated, as shown in the image below:","\n  ","The toolbox is where you can select the tool to use for many different tasks in the Tile Set editor, some of which will depend on whether\n    you have anything defined in your ","auto tile"," library. A brief outline of each tool is given below (note that when you have selected a tile layer in the Room Editor, then this toolbox is displayed at the top of the room\n    workspace, along with additional drawing tools):","\n  ","\n    ","\n      ","\n        ","\n        ","Pencil","\n        ","This is the pencil tool. It uses the selected tile to paint in the Brushes window with the left mouse button "," and you can erase with the right mouse button ",".","\n      ","\n      ","\n        ","\n        ","Eraser","\n        ","With the eraser tool you can use the left mouse button "," to erase a given tile in the Brushes window. Essentially, all this does is set the tile index to 0, which is\n          the reserved \"empty\" tile.","\n      ","\n      ","\n        ","\n        ","Selection","\n        ","This is the selection tool, which can be used to define an area of the Brushes window for working on. You can click the left mouse button "," and then drag the mouse\n          to create a rectangular area, or you can press "," / "," + "," to add multiple selections and "," + "," to clear a part of the selection. To clear the whole selection you can press ",". When you have an area of a Brushes window selected, the rest of the tools (Pencil, Flip, Rotate, etc...) will only work within the selected area. Note that you can also select tiles in the window then copy ( "," / ","+ \"","C","\"), cut ( "," / "," + \"","X","\") and paste\n          ( "," / "," + \"\n          ","V","\") them, which will then switch the tool to the Pencil and permit you to \"paint\" with them.","\n      ","\n      ","\n        ","\n        ","AutoTile","\n        ","Clicking this tool enables the ","Auto tiling"," paint style. When this is active you can select any tile from the Autotile Libraries tab, and then paint it into the Brushes window and GameMaker Studio 2 will automatically change it\n          to match the surrounding tiles, as long as you have correctly set up the ","Auto Tile Tab",". Note that selecting a tile from the tile set that is not part of the autotile libraries will reset the drawing tool to the standard\n          Pencil tool.","\n      ","\n      ","\n        ","\n        ","Flip","\n        ","Clicking the Flip tool with the left mouse button "," (or using the keyboard shortcut \"","X","\" ) will flip the tile or tiles currently\n          selected for drawing along the ","horizontal ","axis, without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will flip). If you have no tile selected for drawing, but do have a group of tiles selected\n          in the brush window, then the flip tool will Flip the selected tiles.","\n      ","\n      ","\n        ","\n        ","Mirror","\n        ","Clicking the Mirror tool with the left mouse button "," (or using the keyboard shortcut \" ","Y","\" ) will mirror the tile(s) currently\n          selected for drawing along the ","vertical ","axis, without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will mirror). If you have no tile selected for drawing, but do have a group of tiles selected\n          in the brush window, then the Mirror tool will mirror the selected tiles.","\n      ","\n      ","\n        ","\n        ","Rotate","\n        ","Clicking the Rotate tool with the left mouse button "," (or using the keyboard shortcut \" ","Z","\" ) will rotate the tile(s) currently\n          selected for drawing 90° ","clockwise",", without changing drawing tool (if you have a custom brush selected for drawing, the whole brush will rotate). If you have no tile selected for drawing, but do have a group of tiles selected in the\n          brush window, then the Rotate tool will rotate the selected tiles.","\n      ","\n    ","\n  ","\n  ","Below the tools, you can find two different sections for selecting any ","auto tile"," or ","animated"," tiles"," that have been created using the current tile set image.\n    A single sprite that is used for a tile set can have many, many, single cell images in it, and these can be combined in the Animation or Autotile editor to create custom brushes which will show up in these sections and can be used in conjunction with\n    regular static tiles to create brushes (note that an animated tile will animate regardless of whether you have selected it from the library or from the base tile set).","\n  ","Once you have set up all the brushes you require, you can then use them to paint tiles onto any tile map layer within the ","Room Editor",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Sets","\n        ","Next: ","Animated Tiles","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Tile Set Brush Builder"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"135"})