function Question(hobby)
{
    switch(hobby)
    {
        case "car":
            return function(name)
            {
                console.log(`Hey ${name} do you have a car ?`);
            }
        
        break;

        case "software":
            return function(name,type)
            {
                console.log(`Hey ${name} what is your skills at software and  are you interested in  ${type} `);
            }
        
            break;

        case "book":
            return function(name)
            {
                console.log(`Hey ${name} which do you prefer to subject mostly ? `);
            }
        
        break;

        default:
            return function(name)
            {
                console.log(`Hey ${name} Wrong keyword `);
            }
        
        
        break;
    }

}
var carQuestion = Question("car");
var bookQuesiton = Question("book");
var softwareQuestion = Question("software");
carQuestion("Volkan");
softwareQuestion("Volkan","Javascript")
bookQuesiton("Volkan");