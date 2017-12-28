module.exports = (function() {
   
    
    const URLS = {  
        production: 'https://ui.antoinebrossault.com', 
        development: 'http://localhost:5555' 
        }
      
    window.API_URL = URLS[process.env.NODE_ENV];


    return window.API_URL;
  
  }());