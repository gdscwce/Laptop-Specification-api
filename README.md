# Laptop-Specification-api

This is a repository to make a data set of laptops, you can just add the laptop you are using or your dream laptop.

(if you dont know any of the following spec you can google it or use ctrl + shift + esc > performance
still if you are unable to find info you can write NIL)

Add you data in double inverted comma : " ",
(don't use " " for numbers)

template :

{

    "id": ,
    "modelName": "",
    "company": "",
    "operatingSystem": "",
    "processorCompany": "",
    "processorModel": "",
    "graphicsCard": "",
    "display": "",
    "memory": "",
    "storage": "",
    "link": "",
    "price": "",

}

## Important

If somebody messes up the data.json file (for eg: they decided to use a same id which is already present in the file or use a string instead of number for the id field) just start the server with `$ npm start` command and open browser and navigate to http://localhost:3000/fix-order.
This will make everything right without data loss
