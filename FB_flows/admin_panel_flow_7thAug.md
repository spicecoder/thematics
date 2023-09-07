    # User Login Process:

        The user logs in with their credentials (i.e., email and password).

        Upon successful verification of these credentials against the database, the server generates a refresh token and sends it back to the client. This refresh token has a relatively long lifetime (e.g., 7 days).

        The server doesn't  send an access token immediately upon login. Instead, the client has to use the /refresh_token endpoint to get an access token.

    # Access Token Generation:

        When the client needs an access token, it sends the refresh token to the /refresh_token endpoint.
        The server verifies the refresh token and, if it's valid, sends back an access token. This access token has a short lifetime (e.g., 15 minutes).

    # Using the Access Token:
    
        To make a request to a protected endpoint, the client needs to send the access token in the request headers.
        If the access token is valid (i.e., it's not expired and was issued by the server), the server processes the request. If not, it sends back an error.

    # Middleware:
    
        The auth middleware checks the validity of the access token for routes that require authentication. Any route that uses this middleware expects a valid access token in the headers.