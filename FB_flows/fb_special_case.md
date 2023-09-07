   # User Logsin thru firebase


    When a user logs in through Firebase on the client side, the client can request an access token from app server,while presenting the access token from firebase.


    App server verifies the Firebase authentication token (server calls Firebase's REST API for this) and, if valid, issues servers own JWT access token to the client.

    The client then uses this access token to make secure API calls to app server. This way, app API calls remain secured with JWT, but the initial authentication happens through Firebase.