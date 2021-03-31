rh._.exports({"0":["audio_get_recorder_info"],"1":["audio_get_recorder_info"],"2":["audio_get_recorder_info"],"3":["\n  ","\n  ","\n  ","This function will return a ","DS Map"," with information about the given recorder source index. You can find out how many recorder sources are available using the function ","audio_get_recorder_count()",",\n    and the map returned will contain the following key/value pairs:","\n  ","\n    ","\"","name","\" - a name to describe the device","\n    ","\"","index","\" - the index to be used to record","\n    ","\"","data_format","\" - the format data will be returned in (this is currently always ","buffer_s16"," but other formats may be supported in the future)","\n    ","\"","sample_rate","\" - the sample rate (in Hz) of the data returned (currently clamped to 16000hz but this may change in future)","\n    ","\"","channels","\" - the constant ","audio_mono"," (further constants for stereo and 3D may be supported in the future)","\n  ","\n  ","Note that while the function creates a DS map for you, it does ","not"," remove it again later and so you should be destroying the map yourself when it is no longer needed to prevent any memory leaks.","\n  ","NOTE: ","Most platforms ","except HTML5"," support recording audio in some form, but that does not mean that all devices will permit it, even if the platform does, so you should always check that the ","audio_get_recorder_count()","    function returns a value greater than 0 to verify that recording devices are available before using the rest of the recording functions.","\n  "," ","\n  ","\n  ","audio_get_recorder_info(recorder_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","recorder_index","\n        ","The index of the recorder source to get the information from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (DS map ID)","\n  "," ","\n  ","\n  ","len = async_load[? \"data_len\"];"," audio_buff = buffer_create(len, buffer_fast, 1);"," buffer_copy(async_load[? \"buffer_id\"], 0, len, buff, 0);"," audio_queue_sound(audio_queue, audio_buff, 0, len);"," audio_play_sound(audio_queue,\n    10, 0);","\n  ","The above code would be called in the asynchronous ","Audio Recording"," event and assigns some recorded data to a buffer, which is then added to an audio queue.\n    This is then played.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Buffers","\n        ","Next: ","audio_create_buffer_sound","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_get_recorder_info"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"791"})