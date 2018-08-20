from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

import djang.routing


application = ProtocolTypeRouter({
    # Empty for now (http->django views is added by default)
    "websocket": AuthMiddlewareStack( #websocket route
        URLRouter(
            djang.routing.websocket_urlpatterns
        )
    )
})