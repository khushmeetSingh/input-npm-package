/*
KEY FOR FORMAT:
    # stands for a alphabet
    @ stands for special character
    9 stands for a number

Nice to have:
    1. support for vowels
    2. having distinction in non zero and a zero
    3. special characters in different scenarios
    4. preset formats
    
*/

import { FORMAT_PLACEHOLDERS } from "../constants/formatValues";

const isFormatted = (val: string, format: string) => {
    let res=true;
    for (var i = 0; i < val.length && i < format.length && res; i++) {
        if(!FORMAT_PLACEHOLDERS.includes(format[i])){
            res = res && (format[i] === val[i]);
        }  
    }
    return res;
}

export const format = (val: string, format: string, caretPos: number) => {
    let res = val;
    for(var i=caretPos ; i < val.length && i < format.length ; i++){
        if(!FORMAT_PLACEHOLDERS.includes(format[i])){
            res = `${res.substring(0,caretPos)}${res.substring(caretPos).replaceAll(format[i],'')}`;
        }
    }
    for (var i = 0; i < val.length && i < format.length; i++) {
        if (!FORMAT_PLACEHOLDERS.includes(format[i]) && format[i] !== res[i]) {
            res = `${res.substring(0,i)}${format[i]}${res.substring(i)}`;
        }
    }

    //code for caret position:

    let caretCorr = 0;
    // this is the postion for the caret ot correct itself
    if(val.length === caretPos)
        for(let i=0;i<caretPos;i++)
        {
            if(!FORMAT_PLACEHOLDERS.includes(format[i])){
                caretCorr++;
            }
        }
    let newCaretPos = caretPos + caretCorr;
    return {res , newCaretPos};
}