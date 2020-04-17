# Frontend for the Corporate Hotel Booking

## Server API
* Following the [OpenAPI](https://swagger.io/specification/) specification, a document has been defined with a draft for the Corporate Hotel Booking API: [corporate-hotel-api](./openapi/corporate-hotel-api.yaml)
* The idea is to **improve the collaboration of the work frontend-backend**, creating a common understanding of the interface, with an explicit contract which also shows examples.
* The contract should be kept always **in sync** and reflect the reality.
* Another advantage is that a **stub server** can be automatically created from the API specification, which can run both locally or remotely. 
    * Example with a remote server in Swagger: https://app.swaggerhub.com/apis/islomar/CorporateHotelBooking/1.0.0 
    * Documentation: https://app.swaggerhub.com/apis-docs/islomar/CorporateHotelBooking/1.0.0
    * More info: https://app.swaggerhub.com/help/apis/generating-code/server-stub
* Further integration can be made with **Postman**, e.g. https://habitissimo2030.postman.co/collections/2082328-2486361f-19a7-4aa6-9094-08197ec99cd2
    * The spec file can be synchronized withe the GitHub/Gitlab repo: https://learning.postman.com/docs/integrations/gitlab/ Each time an update is done from Postman, it gets commited to the repo (and viceversa).
    * https://learning.postman.com/docs/postman/collections/examples/
    * Mock servers: https://habitissimo2030.postman.co/workspaces/bebd0212-9d63-4cad-8b33-0cfb9744bb13/mocks
* There are VS code extensions, e.g. https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi
* Other options for the fake server:
    * [MockServer](https://www.mock-server.com/)
    * [Serverous](https://github.com/privacycloud/serverous)
    * [Swagger + Imposter](https://medium.com/@outofcoffee/mocking-apis-with-swagger-and-imposter-3694bd1733c0)

### How to call the remote Server API
#### Example against Swagger stub server
 ```
curl --location --request POST 'https://virtserver.swaggerhub.com/islomar/CorporateHotelBooking/1.0.0/booking' \
-H "accept: application/json" -H "Content-Type: application/json" \
-d '{
    "employeeId": "John Smith",
    "hotelId": "FOUR_SEASONS_HAWAI_BEACH",
    "roomType": "JUNIOR_SUITE"
}' -vvv
 ```

#### Example against Postman stub server
  ```
curl --location --request POST 'https://00f83f5c-c689-41d8-a487-5c403fb1235e.mock.pstmn.io/booking' \
-H "accept: application/json" -H "Content-Type: application/json" \
-d '{
    "employeeId": "John Smith",
    "hotelId": "FOUR_SEASONS_HAWAI_BEACH",
    "roomType": "JUNIOR_SUITE"
}' -vvv
 ```