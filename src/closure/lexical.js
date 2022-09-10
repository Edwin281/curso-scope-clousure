const myGlobal = 0;

function myFunction() {
    const MyNumbre = 1;
    console.log(myGlobal);
    function parent(){//funcion interna
        const inner = 2;
        console.log(MyNumbre,myGlobal);
        function child(){
            console.log(MyNumbre,myGlobal,inner);
        }
        return child;
    }
    return parent;

}

myFunction();