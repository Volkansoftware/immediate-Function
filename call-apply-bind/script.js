var welcome = function(a,b)
{
    console.log(`Welcome ${this.name} are you interested in ${a} and ${b}`);
}
var volkan = {name: "Volkan"};
var emel = {name : "Emel"};
welcome.call(volkan,"Javascript","React");// call methodu dışarıda tanımlanan değişkenleri içeriye aktarır.
welcome.call(emel,"Javascript","React");

welcome.apply(volkan,["Javascript","React"]);
welcome.apply(emel,["Javascript","React"]);

welcomeVolkan=welcome.bind(volkan);// dediğimiz zaman yeni bir fonksiyon oluşmuş oluyor bizim için
welcomeVolkan("Javascript","React");