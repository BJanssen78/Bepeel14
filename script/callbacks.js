const makeHomework = function(course, callback){
    setTimeout(2500);
    const callbackMsg = `Okay, ok, Im going to do my ${course} homework now`;
    console.log(callbackMsg);
};

// makeHomework();

const doneWithHomework = function(){
    console.log(`Look, Mon/Dad, I'm done with my homework!`)
}

makeHomework('math', doneWithHomework())