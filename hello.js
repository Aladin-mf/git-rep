var day=new Date().getDay()
switch(day){
    case 0:
        console.log('today is sunday')
        break

        case 1:
        console.log('today is mon')
        break

        case 2:
        console.log('today is tue')
        break


        case 3:
        console.log('today is wed')
        break


        case 4:
        console.log('today is thurs')
        break


        case 5:
        console.log('today is fry')
        break

        case 6:
        console.log('today is sat')
        break

        default:
            console.log("not a valid number")
}



var n=4
debugger
for(var i=1;i<=n;i++){
    var result = ''
    for(var j=1;j<=i;j++){
        result += ' #$'
    }
console.log(result)
}
