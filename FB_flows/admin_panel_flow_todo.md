#  Including Access Token in Requests:

    The client side should include the access token in the header for every request to a protected endpoint. This can be done using JavaScript's fetch API or any HTTP client library like Axios. The header typically looks like this:
## headers: {
  "Authorization": "Bearer ACCESS_TOKEN_HERE"
}
# Securing Endpoints:

    To secure an endpoint on the server, you should add the auth middleware to it. For example, if you want to secure a route , you'd do something like:
    router.get("/alldish", auth, (req, res) => {
         // .... code here
             });
