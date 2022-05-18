function receivesAFunction(callback){
   callback();
}
//receivesAFunction();

function returnsANamedFunction(){
    return function namedFn(){
        console.log ("this is a named function");
    };
}

//returnsANameFunction(namedFun);

function returnsAnAnonymousFunction(){
    return function(){
        console.log('this is an anonymous function');
    };
}
