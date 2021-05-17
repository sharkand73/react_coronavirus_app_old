export const convertDate1 = function(dateString){
        let dateSplit = dateString.split("-");
        let newString = dateSplit[2]+"/"+dateSplit[1]+"/"+dateSplit[0];
        return newString;     
}

export const convertDate2 = function(dateString){
        let months = [' Jan ',' Feb ',' Mar ',' Apr ',' May ',' Jun ',' Jul ',' Aug ',' Sep ',' Oct ',' Nov ',' Dec '];
        let dateSplit = dateString.split("-");
        let newString = parseInt(dateSplit[2]).toString();
        let suffix = 'th';
        if (newString === '1' || newString === '21'){suffix="st"}
        else if (newString === '2' || newString === '22'){suffix='nd'}
        else if (newString === '3' || newString === '23'){suffix='rd'};
        newString += suffix;
        let monthIndex = parseInt(dateSplit[1]) - 1;
        newString += months[monthIndex];
        newString += dateSplit[0];
        return newString;
}

export function nwc(number) {
    if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

// const convertDate = function(date){
    //     let dd = date.getDate();
    //     let mm = date.getMonth()+1;
    //     // if (dd.toString.length === 1) {
    //     //     dd = "0"+dd
    //     // };
    //     if (mm.toString.length === 1) {
    //         mm = "0"+mm
    //     };
    //     let yyyy = date.getFullYear();
    //     return (yyyy+"-"+mm+"-"+dd);
    // }

