//Scroll cod
 var body = document.querySelector('body');
 var nav = document.querySelector('nav');


 var scrollFunction = function() {
  var neko =  scrollY / (body.scrollHeight - innerHeight);
  return Math.floor(neko * 100);
};

 addEventListener('scroll',function(){
   nav.style.setProperty('background' , scrollFunction() > 11  ? "var(--color2)" : "var(--color1)");});
