rh._.exports({"0":["network_send_broadcast"],"1":["network_send_broadcast"],"2":["network_send_broadcast"],"3":["\n  ","\n  ","\n  ","With this function you can broadcast the data from a buffer locally to a range of IP addresses (for more information on buffers see ","Reference - Buffers","). The range is limited to that of the device running the server,\n    such that if the device has an IP of 92.168.11.130, then the data will be broadcast over the range 92.168.11.*. The function will return the number of bytes of data sent, or a number less than 0 if the send has failed.","\n  ","NOTE",": This function will only work when used with UDP - your server needs to be TCP and your client needs to have a UDP client socket created with ","network_create_socket_ext()","    in order to receive any broadcasts sent from the server.","\n  ","NOTE",": This function will not work when used in a project running on the HTML5 target.","\n  "," ","\n  ","\n  ","network_send_broadcast(socket, port, buffer, size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","socket","\n        ","The id of the socket to use.","\n      ","\n      ","\n        ","port","\n        ","The port that the server will use.","\n      ","\n      ","\n        ","buffer","\n        ","The id of the buffer to get the data from.","\n      ","\n      ","\n        ","size","\n        ","The size (in bytes) of the data.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","buffer_seek(broadcast_buffer, buffer_seek_start, 0);"," buffer_write(broadcast_buffer, buffer_string, global.ServerName);"," network_send_broadcast(server, 6511, broadcast_buffer, buffer_tell(broadcast_buffer));","\n  ","The above code writes the name string of the current server (stored in \"global.ServerName\"), then writes it to a binary buffer with the id \"broadcast_buffer\". This data is then broadcast locally to a range of IPs (the device IP is\n    currently implied as the broadcast base range) to port 6511.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Networking","\n        ","Next: ","network_send_packet","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["network_send_broadcast"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2281"})