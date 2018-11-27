export function isvalidDate(date){

    if(date === ''){
        return false;
    }

    var splittableDate = date.split('/');
    if(splittableDate[0] !== '' && splittableDate[1] !== '' && splittableDate[2] !== ''){
        return true;
    }

    return false;
}