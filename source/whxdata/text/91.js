rh._.exports({"0":["iOS Extensions"],"1":["Extensions - Creating iOS / tvOS Extensions"],"2":["iOS Extensions,iOS, tvOS Extensions, tvOS"],"3":["\n  ","\n  ","\n  ","To create an extension for iOS or tvOS you have to do it in two parts. The first part would be to add the extension itself, along with the required files etc... and the second is to create the functions and macros/constants that the extension requires.\n    The functions and constants are added using ","placeholder ","files to group them together, so you'd add a placeholder and then define the functions and macros as explained in the section ","here",".\n    To add the rest of the files though you need to first tick the ","iOS ","and/or the ","tvOS ","check-box in the ","Additional Features"," section of the editor to open up the relevant ","Extension Properties"," window (the\n    image below shows the iOS properties window, but the tvOS window is exactly the same):","\n  ","\n  ","Here you give the following details:","\n  ","\n    ","Linker Flags / Compiler Flags",": Some frameworks and third party SDKs require the addition of extra linker flags and compiler flags to work which can be specified here (see the documentation that accompanies the SDK or framework in\n      question for details).","\n    ","Class Name",": Your extension can have multiple classes, with each class having its own functions and constants, so you should give it a name that reflects its purpose","\n    ","App Delegate Class Name",": The name of your custom app delegate class. Setting this allows the extension to override/extend core app functionality. To use this feature you need to do the following:\n      ","\n        ","Ensure that the delegate source files have the same name as the delegate class (e.g. ","@interface MyCustomAppDelegate"," should be defined in \" ","MyCustomAppDelegate.h","\")","\n        ","Add the ","${YYExtAppDelegateIncludes}"," environment variable at the top of your app delegate header file. This will be replaced at compile-time with the relevant include files for the parent delegate class.","\n        ","Use the ","${YYExtAppDelegateBaseClass}"," environment variable as the base class for your custom app delegate. This will be replaced at compile-time with the correct base delegate class.","\n          "," To ensure your extension works with any other extensions that use custom app delegates, you should call any base class methods from overridden methods in your child class. Before calling the superclass method, you need to make sure it\n          is implemented in the class hierarchy to avoid errors, for e.g.:","\n      ","\n      ","- (BOOL)application:(UIApplication *)application willFinishLaunchingWithOptions:(NSDictionary *)launchOptions"," {\n        ","     // Check if any superclasses implement this method and call it","     if([[self superclass] instancesRespondToSelector:@selector(application:willFinishLaunchingWithOptions:)])","       return [super application:application willFinishLaunchingWithOptions:launchOptions];","            else","         return TRUE;"," }\n      ","\n    ","\n    ","System Frameworks",": Here you can add in any iOS system ","framework","s"," to your extension. These are added by clicking the "," button which will add a placeholder framework, which you can then edit by slow clicking "," on it. You can find out more about available system frameworks ","here",". To remove a system framework, simply select it and then click the "," button.","\n    ","Inject to Info.plist",": Here you can add any code to be a injected into the ","info.plist"," file.","\n    ","3rd Party Frameworks and Bundles",": This section is for adding third party and SDK bundles. As with system frame works you click the "," button to add them and then slow click "," to edit, and selecting them then clicking "," will remove them (see the documentation that came with your chosen SDK for info on the framework name). If the framework/SDK bundle is on your development Mac then you need to add the path into \" ","Enter framework path on Mac","\"\n      and click the "," button, or if the SDK or source code is on your PC use the ","Add Source"," button.","\n    ","CocoaPods",": Here you can give the name of any CocoaPods that the extension is going to use instead of (or as well as) any SDKs and frameworks that have been added. Note that there is a Game Option ","for iOS","      and ","for tvOS"," to add a Podfile to GameMaker Studio2 which is required if you are adding CocoaPods in this secton.","\n    ","CocoaPods Dependencies",": This section is where you can list the different dependencies required by the CocoaPods added in the previous section. Note that there is a Game Option ","for iOS","      and ","for tvOS"," to add a Podfile.lock to GameMaker Studio2 which is required if you are adding CocoaPod Dependencies in this secton.","\n  ","\n  ","If your extension has had any System Frameworks or 3rd Party Frameworks added, these will now be listed in the ","Extension Properties ","window, with each one having a check-box beside it. If you mark the check-box, you are enabling weak\n    linking, which is useful should you need to \"over-ride\" any symbol from the included library with your own value, but it should be noted that doing so will slow linking down.","\n  ","For more information on creating iOS and tvOS extensions, please see the ","YoYo Games Knowledge Base",", and for information on using CocoaPods\n    in extensions, please see the following guide:","\n  ","\n    ","iOS and tvOS: Using Cocoa Pods","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Extension Editor","\n        ","Next: ","Creating An Extension","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["iOS / tvOS Extensions"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"91"})