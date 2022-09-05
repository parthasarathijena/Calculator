var ans = 0;
var op='';
var dotest ='';
var first=0;
var dot = 0;
var second='';
function valassign(a){
        // console.log('input'+a);
        if(dotest==='.'){
            dot++;
            // console.log("first"+first);
            for(var i=0;i<dot;i++)
            a/=10;
            // console.log("second dot"+a);
            first = first+a;
            // console.log("first"+first);
    }
    else
    first = (first*10)+a;
    document.getElementById('ans').innerHTML=second+op+first;
    // console.log(a);
}
function operate(a){
    // console.log('first' +first);
    // console.log('second' +second);
    // console.log("operator"+op);
    if(a!=='.'){
        if(op===''){
            second =first;
        }
        else{
                if(op==='-')
                second -= first;
                else if(op==='+')
                second += first;
                else if(op==='*')
                second *= first;
                else if(op==='/')
                second /= first;
            }
        first=0;
        op=a;
        dotest='';
        dot=0;
    }
        else{
            dotest='.';
        }
    if(op==='=')
    document.getElementById('ans').innerHTML=second;
    else if(dotest==='.')
    document.getElementById('ans').innerHTML=second+op+first+'.';
    else
    document.getElementById('ans').innerHTML=second+op;
    // console.log(a);
}
