Image not appearing… JS (p5.js)

https://stackoverflow.com/questions/50092753/image-not-appearing-js-p5-js

// // // // // 

Image not appearing… JS (p5.js)
https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome

Stack Overflow
Disable same origin policy in Chrome

// // // // // 

https://teckangaroo.com/chrome-disable-web-security/ 


Disable Chrome Web Security in Mac:
Enter the following command into Mac’s terminal to Run Chrome without CORS policy.

//TERMINAL
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome –args –user-data-dir=”/tmp/chrome_tec_kangaroo” –disable-web-security

//RESULT
Displayed nothing at all


// // // // // 


https://gist.github.com/ricca509/597a5e0f7960ea301d144b9db5e75cec

<script src="https://gist.github.com/ricca509/597a5e0f7960ea301d144b9db5e75cec.js"></script>
  
Chrome: Disable web security [OSX]
 chrome-web-security.sh
// OSX

open -na Google\ Chrome --args --disable-web-security --user-data-dir="/tmp/chrome_dev"

Opens new BROWSER get this message

"You are using an unsupported command-line flag: -- disable-web-security. Stability and security will suffer."

// TERMINAL
open -na Google\ Chrome --args --disable-web-security --user-data-dir="/tmp/chrome_dev"

// RESULT 
Opens new BROWSER get this message

"You are using an unsupported command-line flag: -- disable-web-security. Stability and security will suffer.”

//And then this: 
Propagated  an infinite number of browser windows