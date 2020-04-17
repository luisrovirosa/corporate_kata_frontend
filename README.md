# Frontend for the Corporate Hotel Booking

## Server API
* Following the [OpenAPI](https://swagger.io/specification/) specification, a document has been defined with a draft for the Corporate Hotel Booking API: [corporate-hotel-api](./openapi/corporate-hotel-api.yaml)
* The idea is to **improve the collaboration of the work frontend-backend**, creating a common understanding of the interface, with an explicit contract which also shows examples.
* The contract should be kept always **in sync** and reflect the reality.
* Another advantage is that a **stub server** can be automatically created from the API specification, which can run both locally or remotely. E.g. https://app.swaggerhub.com/apis/islomar/CorporateHotelBooking/1.0.0 
    * More info: https://app.swaggerhub.com/help/apis/generating-code/server-stub
* Further integration can be made with **Postman**, e.g. https://habitissimo2030.postman.co/collections/2082328-2486361f-19a7-4aa6-9094-08197ec99cd2
* There are VS code extensions, e.g. https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi
* Other options for the fake server:
    * [MockServer](https://www.mock-server.com/)
    * [Serverous](https://github.com/privacycloud/serverous)
    * [Swagger + Imposter](https://medium.com/@outofcoffee/mocking-apis-with-swagger-and-imposter-3694bd1733c0)