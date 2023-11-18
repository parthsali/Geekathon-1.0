# Server (Sender)
import socket
import ssl

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 12345))
server_socket.listen(1)

print("Server listening on port 12345")

connection, address = server_socket.accept()

# Wrap the socket with SSL/TLS
ssl_connection = ssl.wrap_socket(connection, keyfile="server-key.pem", certfile="server-cert.pem", server_side=True)

data = ssl_connection.recv(1024)
print(f"Received from client: {data.decode()}")

ssl_connection.close()
server_socket.close()


# Client (Receiver)
import socket
import ssl

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 12345))

# Wrap the socket with SSL/TLS
ssl_socket = ssl.wrap_socket(client_socket, keyfile="client-key.pem", certfile="client-cert.pem", cert_reqs=ssl.CERT_NONE)

message = "Hello, this is a secure message!"
ssl_socket.send(message.encode())

ssl_socket.close()
client_socket.close()
