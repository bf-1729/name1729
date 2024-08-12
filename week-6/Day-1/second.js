student={
    name:'Spider Man',
    designation:'Marvel'
}
function smartwork(){
    console.log("Smartwork");
    return 8;
}
function hardwork(){
    console.log("Hardwork");
}
// module.exports = {smartwork,student,hardwork};
module.exports = [smartwork,student,hardwork];

