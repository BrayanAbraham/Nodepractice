const url = require('url').URL;

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`));