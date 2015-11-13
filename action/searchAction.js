var api_key = 'SEM3D53AFC6F735AF2C1542407F5177B1EAD';
var api_secret = 'ZmExNzJiYTIwNmU1YTU2NTk0YjE4NTM3MjAwOTk4MDg';
var options = { base_url:'https://api.semantics3.com/test/v1/'};
var sem3 = require('semantics3-node')(api_key,api_secret,options);
export default function searchAction(actionContext, payload, done) {
    console.log("start to call ");
    sem3.products.products_field( "search", "iphone 6" );
    sem3.products.get_products(
	    function(err, products) {
	      if (err) {
	         console.log("Couldn't execute request: get_products");
	         actionContext.dispatch('SEARCH_FAIL', {aaa:"bbbb"});
	         done();
	      }
	      else{
		      console.log( "Results of request:\n" + JSON.stringify( products ) );
		      actionContext.dispatch('SEARCH_ACTION', products);
		      done();
		  }
	   }
	);
  // actionContext.dispatch('SEARCH_FAIL', {heheh:'heheh'});
}