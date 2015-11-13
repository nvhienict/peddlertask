var api_key = 'SEM3D53AFC6F735AF2C1542407F5177B1EAD';
var api_secret = 'ZmExNzJiYTIwNmU1YTU2NTk0YjE4NTM3MjAwOTk4MDg';
var sem3 = require('semantics3-node')(api_key,api_secret);

// Build the request
sem3.products.products_field( "search", "iphone 6" );

// Run the request
sem3.products.get_products(
   function(err, products) {
      if (err) {
         console.log("Couldn't execute request: get_products");
         return;
      }

      // View results of the request
      console.log( "Results of request:\n" + JSON.stringify( products ) );

      // Go to the next page
      sem3.products.iterate_products(
         function(err, products) {
            if (err) {
               console.log("Couldn't execute request: iterate_products");
               return;
            }
            console.log( "Successfully retrieved next page of products:\n", JSON.stringify( products ) );
         }
      );
   }
);