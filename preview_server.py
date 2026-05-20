import http.server
import socketserver
import webbrowser
import os

PORT = 8000

os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

print("\n🚀 Starting preview server...")
print(f"📂 Serving files from: {os.getcwd()}")
print(f"🌐 Server running at: http://localhost:{PORT}")
print("\n✨ Opening browser automatically...")
print("Press Ctrl+C to stop the server\n")

webbrowser.open(f'http://localhost:{PORT}')

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Goodbye!")
        httpd.shutdown()
