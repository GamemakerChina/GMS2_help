rh._.exports({"0":["iOS"],"1":["Game Options - iOS"],"2":["iOS Game Options"],"3":["\n  ","\n  ","\n  ","This section outlines the different options available to you that control how your iOS game projects will be compiled. The different sections are:","\n  "," ","\n  ","\n  ","The first part of the General section covers ","Build Settings"," for your game. To start with you set the ","Orientations ","that\n    your game can be run on for the best user experience. The available options are:","\n  ","\n    ","Portrait","\n    ","Flipped Portrait","\n    ","Landscape","\n    ","Flipped Landscape","\n  ","\n  ","You can then go to the ","Device Support"," section, with the following options available for setting what type of device to target:","\n  ","\n    ","iPhone or iPod Touch",": iPhone 6 and above or iPod Touch devices","\n    ","iPad",": iPad devices","\n    ","Both",": Both iPhone/iPod and iPad","\n  ","\n  ","The second thing to do is fill in the ","Product Information"," about your game, including its ","Display Name",", its ","Bundle ID"," and the ","Version"," info. Note that the Bundle ID must be in the correct\n    reverse URL format for the final build of the game to work correctly, EG: ","com.[Company].[GameName]",". Here you can also give the ","Team Identifier"," that you wish to use for signing the final application that\n    GameMaker Studio 2 creates for you. Setting it here will override the Team ID that you have supplied in the ","iOS Preferences",".","\n  ","Finally, you can check or un-check the option to ","Defer Home Indicator Output",". When this is checked, the home bar will always be shown at low a alpha, and the first swipe wakes the bar and the second swipe takes you home. If the option\n    is un-checked, then the bar is not shown in-game, but the first edge swipe will take you home. Default is un-checked.","\n  "," ","\n  ","\n  ","Here you can change the following details related to how your game will be displayed, with the following options available:","\n  ","\n    ","Interpolate colours between pixels",": Turns on ","linear interpolation",", which basically \"smooths\" pixels. For crisp pixel graphics, it should be\n      off, but if you have nice alpha blends and smoothed edged graphics it is better left on. This is off by default.","\n    ","Half iPad 1 Textures:"," The iPad 1 has much less texture memory than more recent devices so you can enable this option to reduce the size of textures by half if you want to target this device or get maximum compatibility.","\n    ","Scaling",": Here you can select to scale the draw canvas maintaining the aspect ratio within the device screen - adding \"padding\" around the edges to fit the screen - or you can select to have the draw canvas stretched to fit\n      the device screen.","\n  ","\n  ","Finally there is the option to set the size of the ","texture page",". The default (and most compatible) size is 2048x2048, but you can choose from anywhere between 256x256 up to 8192x8192. There\n    is also a button marked ","Preview ","which will generate the texture pages for this platform and then open a window so that you can see how they look. This can be very useful if you wish to see how the texture pages are structured and\n    to prevent having texture pages larger (or smaller) than necessary. For more information on texture pages, please see ","here",".","\n  ","NOTE",": Be aware that the larger the size of the texture page, the less compatible your game will be with different browsers and devices.","\n  "," ","\n  ","\n  ","This section permits you to add the various different icons required by the various iPhone and iPad devices and the different parts of the\n    iOS App Store. These icons should be authored as 24bit ","*.png"," images at the size specified for each one.","\n  ","It is worth noting that GameMaker Studio 2 has a ","Project Image Generator"," tool which can be used to automatically create all the images required for all the different target platforms your game\n    is being compiled to. If you use this tool, you should revise the images created to ensure that they are what you require. The tool will generate Icons as well as Images (see the section below).","\n  ","NOTE: On importing an older project you may be presented with the following warning:","This comes up because the current iOS target\n    version has changed the format of the required icons since the project was previously loaded. You will be required to re-create all the icons, as they will have been replaced with the generic GameMaker Studio 2 icons (you can use the above mentioned\n    Project Image Generator tool to do this quickly).","\n  "," ","\n  ","\n  ","This section permits you to add separate graphics as ","Launch Screens"," (the image that will be shown briefly while\n    your app loads) for each of the device orientations, as well as the ","Border Colour"," that will be used as the background for launch screens that are not set to fill the full screen. These images must be authored as individual 24bit\n    ","*.png"," images with no transparencies and at an appropriate size. Note that this is ","not"," considered a splash screen and Apple have some fairly strict guidlines on how this should be set up and used. See the developer page on ","Human Interface Guidelines","      for more information.","\n  ","You can also set how the launch screen should be displayed from the following options:","\n  ","\n    ","Keep Aspect Ratio",": This will maintain the aspect ratio of the image compared to the device screen, adding \"padding\" around the edges where required.","\n    ","Crop To Fit",": This will keep the image 1:1 with the device screen and crop (or pad) the edges as required.","\n    ","Stretch",": This will stretch the image to fill the device screen (and may distort the image shown).","\n  ","\n  "," ","\n  ","\n  ","This section is for enabling different ","Social ","features in your iOS game. The following options can be chosen:","\n  ","\n    ","Facebook",": If you require the Facebook functions, you need to select this checkbox and then supply the ","Facebook App ID"," and ","Facebook App Name",". Note that all Facebook functionality is accessed via an\n      extension, and when you first check the Use Facebook box you will be prompted to download and install the Facebook extension from the ","Marketplace",".","\n    ","Enable Push Notifications",": In order for your game to use Push Notifications they must be enabled here first otherwise they will not work.","\n    ","Enable Sign In With Apple",": This option is for using the ","Apple Sign In Extension"," on iOS. You can get this extension from the ","YoYo Games Marketplace",",\n      and the extension itself contains full instructions for use. If you are not using this extension then you should not tick this option.","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Game Options","\n        ","Next: ","tvOS","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["iOS Game Options"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"6":["General","Graphics","Icons","Images","Social"],"id":"156"})