// asynchronous js
// code do prakaar ka hota he -> asynch , synch

// synch code turant chalta he (direct main thread me jata he)
// asynch code baad mein chalta hai (webAPIs ke pass jata he)

// asych code sabse pehle jata he webAPIs pe,jab waha par ye resolve ho jata hai , tab callback queue 
// and fir event loop check karta he ki main thread me callstack khali hua ya nahi and agr hua to main thread 
// un stack par reh rahe executation context ko execute karta he

// js ek esi language he jo ek time pe ek hi kaam kar sakti he
// event loop ka kaam he check karna ki callstack khali he ki nahi 

// sych -> callstack queue -> main thread execution
// asych -> webAPIs  -> callstack (event loop) -> main thread