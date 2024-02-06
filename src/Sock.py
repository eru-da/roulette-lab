import tornado.websocket

activeClients=[]

class Handler(tornado.websocket.WebSocketHandler):
    def open(self):
        print("Connection opened")
        activeClients.append(self)

    def on_message(self, msg):
        print("Server recieved: " + msg)
        for c in activeClients[:]:
            try:
                c.write_message(msg)
            except tornado.websocket.WebSocketClosedError:
                activeClients.remove(c)
    
    def on_closed(self):
        print("Connection closed")
        activeClients.remove(self)
    
    def check_origin(self, *args):
        return True #trust everyone!