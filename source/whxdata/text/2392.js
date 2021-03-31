rh._.exports({"0":["steam_ugc_download"],"1":["steam_ugc_download"],"2":["steam_ugc_download"],"3":["\n  ","\n  ","\n  ","With this function you can download a preview image for any given UGC item. The ","ugc_handle"," is the unique identifying value for the image (which you can get using the function ","steam_ugc_send_query()","),\n    and the destination filename is the name (and local path within the Steam sandbox) that you wish to give the image file when the download is complete.","\n  ","When using this function it will trigger an ","Steam Asynchronous"," event to report the details of the image file requested containing the following key/value pairs in the\n    ","async_load"," ds_map:","\n  ","\n    ","\"","id","\" - The async ID returned by the calling function","\n    ","\"","result","\" - The result of the operation (a real value). This will either be the GML constant ","ugc_result_success"," or some other real number. So you should check for this constant to ensure that the call was successful, and if\n      otherwise somthing has not worked correctly. The rest of the possible values returned are shown as the result of the Steam \"EResult\" value and you should see ","steamclientpublic.h"," in the SDK headers for all 89 possible values.","\n    ","\"","event_type","\" - This key will hold the value \"","ugc_download","\"","\n    ","\"","original_filename","\" - This key holds the original name of the image file ","on the server"," (a string)","\n    ","\"","dest_filename","\" - This key holds the image file name you passed in (a string)","\n    ","\"","ugc_handle","\" - This key holds the ","ugc_handle"," value that you passed in to the calling function","\n  ","\n  "," ","\n  ","\n  ","steam_ugc_download(ugc_handle, dest_filename);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ugc_handle","\n        ","The unique handle for the preview to be downloaded.","\n      ","\n      ","\n        ","dest_filename","\n        ","The file name to save the preview with.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Async ID","\n  "," ","\n  ","\n  ","In this example we first call the function and store the async ID value in a variable:","\n  ","steam_get = steam_ugc_download(steam_handle, \"\\UGC\\Preview_file.png\");","\n  ","This would then send off a file request to the Steam API, generating an async event which we would deal with as follows:","\n  ","var event_id = async_load[? \"id\"];"," if event_id == steam_get","     {\n    ","     var type = async_load[? \"event_type\"];","     if type == \"ugc_download\"","         {\n    ","         sprite_delete(preview_sprite);         preview_sprite = sprite_add(async_load[? \"dest_filename\"], 0, false, false, 0, 0);","         }\n    ","     }\n  ","\n  ","The above code checks the event type and then creates a sprite from the downloaded image.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_is_screenshot_requested","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_download"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2392"})