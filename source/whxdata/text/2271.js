rh._.exports({"0":["network_create_server_raw"],"1":["network_create_server_raw,network_socket_tcp,network_socket_udp,network_socket_ws"],"2":["network_create_server_raw,network_socket_tcp,network_socket_udp,network_socket_ws"],"3":["\n  ","\n  ","\n  ","This function is used to create a new network server for your game, using one of the permitted connection protocols (see the constants listed below). You supply the server type, then give it a port to use, and finally the number of maximum connections\n    that should be permitted at any one time to the server (note that this number is up to you, but too many connected clients will saturate the network or the device CPU won't be able to handle the processing of that number of players, so use with\n    care). The function returns a unique ","id"," which should be used stored in a variable and used to identify the server in all further network functions, or a value of less than 0 if the connection fails.","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","network_socket_tcp","\n        ","Create a socket using TCP.","\n      ","\n      ","\n        ","network_socket_udp","\n        ","Create a socket using UDP.","\n      ","\n      ","\n        ","network_socket_ws","\n        ","Create a web socket (","only"," for connecting ","to"," HTML5 projects), using TCP.","\n      ","\n    ","\n  ","\n  ","\n    "," As this creates a \"raw\" server, it will not accept nor use any of the built in GameMaker data headers for communitation, and so you should be using the functions ","network_send_raw()"," and\n    ","network_send_udp_raw()"," to send unformatted data to the server created.","\n  "," ","\n  ","\n  ","network_create_server_raw(type, port, max_client);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","type","\n        ","The type of server to create (see the constants listed below).","\n      ","\n      ","\n        ","port","\n        ","The port that the server will use.","\n      ","\n      ","\n        ","max_client","\n        ","The maximum number of clients that can connect at once.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var port = 6510;"," server = network_create_server_raw(network_socket_tcp, port, 32);"," while (server < 0 && port < 65535)","     {\n    ","     port++\n    ","     server = network_create_server(network_socket_tcp, port, 32);","     }\n  ","\n  ","The above code will try and create a server using TCP through port 6510. If that port is unavailable, it will then loop through the ports to find one that is.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Networking","\n        ","Next: ","network_create_socket","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["network_create_server_raw"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2271"})