var Relay = require("omega_gpio").Relay; /*Import knihovny kvuli funkcnosti rele..*/
var util    = require('util'); /*Import knihovny kvuli pouziti time, setTimeout...*/

var relay = new Relay(0); /*Instance tridy Relay na pinu 0*/
relay.on(); /*metoda, ktera zapne rele...*/
setTimeout(()=>{relay.off();relay.toggle();
relay.destroy();},5000);


/*relay.off();
relay.toggle();
relay.destroy();
*/



