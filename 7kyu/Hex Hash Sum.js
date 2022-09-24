
// DESCRIPTION:
// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples
// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113

// my solution

function hexHash(code){
    let resultArr = [];
    let resultNum = 0;
    let num;
    for (let i = 0 ; i < code.length ; i++){
        num = Number(code.charCodeAt(i)).toString(16);
        resultArr[i] = num
    }
    resultArr = resultArr.toString().split("");
    for (let i = 0 ; i < resultArr.length ; i++){
        if( Number.isInteger( parseInt(resultArr[i]) ) )
        {
            resultNum += parseInt(resultArr[i])
        }
    }
    return resultNum;
}

    // not mine
    // 1
    const hexHash = (str) => 
    str.length === 0 ? 0 : str.replace( /./g, x=> (x.codePointAt()).toString(16) ).match(/\d/g).reduce((a,b)=> +a + +b,0)
    // 2
    const hexHash = code => code.split('')
                            .map(c => c.charCodeAt().toString(16))
                            .join('')
                            .replace(/[^\d]/g,'')
                            .split('')
                            .reduce((acc, x) => acc + Number(x), 0);