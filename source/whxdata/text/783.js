rh._.exports({"0":["audio_create_buffer_sound"],"1":["audio_create_buffer_sound"],"2":["audio_create_buffer_sound,audio_mono,audio_stereo,audio_3D"],"3":["\n  ","\n  ","\n  ","With this function you can create a new sound from the contents of a buffer. The buffer will have been created previously (see the ","buffer functions"," for details on how to do this), and have had data added or\n    loaded into it. You then pass it to this function with the data format (only ","buffer_u8"," or ","buffer_s16"," are currently supported), the sample rate (which can be between 1000hz and 48000hz), and an offset into the buffer to get the data\n    from. You also need to supply the number of samples in the buffer and the channels that the sound requires. These channels are defined by one of the following constants:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","audio_mono","\n        ","Mono (single channel) audio.","\n      ","\n      ","\n        ","audio_stereo","\n        ","Stereo (dual channel) audio.","\n      ","\n      ","\n        ","audio_3D","\n        ","3D (5.1) audio.","\n      ","\n    ","\n  ","\n  "," ","\n  ","Note that after you have created a sound, you should free the pointer index associated with it when it is no longer required using the function ","audio_free_buffer_sound()",". If you fail to do this and\n    then re-assign the variable or change rooms etc... the sound ID will be lost and you will have a memory leak. Also note that you cannot delete the buffer if any sound has been created from it and the sound has not been freed up first. So you would\n    free the sound (or sounds) first, ","then"," delete the buffer. It is also worth noting that adding anything to the buffer, or changing the buffer size, after it has had a sound created from it will give unexpected results and it is not recommended\n    - once you have started creating sounds from any buffer you should not manipulate it in any other way afterwards.","\n  "," ","\n  ","\n  ","audio_create_buffer_sound(bufferId, bufferFormat, bufferRate, bufferOffset, bufferLength, bufferChannels);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","bufferId","\n        ","The ID of the buffer to use.","\n      ","\n      ","\n        ","bufferFormat","\n        ","The format of the data in the buffer (","buffer_u8"," or ","buffer_s16",").","\n      ","\n      ","\n        ","bufferRate","\n        ","The sample rate of the data in the buffer.","\n      ","\n      ","\n        ","bufferOffset","\n        ","The offset into the buffer to read the sample data from (in bytes).","\n      ","\n      ","\n        ","bufferLength","\n        ","The length of the buffer (the number of bytes of audio data, excluding the header).","\n      ","\n      ","\n        ","bufferChannels","\n        ","The channels to use from one of the constants listed below.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (Sound ID)","\n  "," ","\n  ","\n  ","var rate = 44100;"," var hertz = irandom_range(220, 880);"," var samples = 44100;"," var bufferId = buffer_create(rate, buffer_fast, 1);"," var buffer_seek(bufferId, buffer_seek_start, 0);"," var num_to_write = rate / hertz;"," var length\n    = buffer_get_size(bufferId) ;"," var val_to_write = 1;"," for (var i = 0; i < (samples / num_to_write) + 1; i++;)","    {\n    ","    for (var j = 0; j < num_to_write; j++;)","       {\n    ","       buffer_write(bufferId, buffer_u8, val_to_write * 255);","       }\n    ","    val_to_write = (1 - val_to_write);","    }\n    "," soundId = audio_create_buffer_sound(bufferId, buffer_u8, rate, 0, length, audio_stereo);","\n  ","The above creates a buffer and then procedurally fills it with data. This data is then used to create a new sound, which is stored in the variable \"soundId\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Buffers","\n        ","Next: ","audio_free_buffer_sound","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_create_buffer_sound"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"783"})