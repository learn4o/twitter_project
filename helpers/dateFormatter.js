

const DateFormatter = () => {
      
/////curent time


var monthName =['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];



//post date //////
var postHour="03"
 var postmint="04"
 var postSec="33"
var postday="03"
 var postmonth ="Jul"
 var postyear="2022"
        //  console.log("Post date = "+ postday+" "+ postmonth+" "+postyear +"  "+" 03:04:33")


//curent date ///
var currentDate= new Date()
var crtYear=new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currentDate);
var crtDay=new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentDate);
var crtMont= new Intl.DateTimeFormat('en', { month: 'short' }).format(currentDate);
var crtHours=(currentDate.getHours())
var crtMints=(currentDate.getMinutes())
var crtSec=(currentDate.getSeconds())
// console.log("Current Time = "+crtDay+" "+crtMont+" "+crtYear+"   "+ crtHours+":"+crtMints+":"+crtSec)







console.log("show post date")
// If date is today - 12h or 2h ago or 1m ago

if (crtDay==postday){
    if(crtHours==postHour&&crtMints==postmint){
         return (crtSec-postSec +"s ago")
    }else if(crtHours==postHour){
         return (crtMints-postmint+"m ago")
    }else {
return (crtHours-postHour+"h ago")
    }
}
////If date is current year - Jul 15 or Jan 1//

else if(crtYear==postyear){
    return (postmonth+' '+postday)
//Else  - July 15 2020 or July 15 2019//
}else{
    return (postmonth+' '+postday+' '+postyear)
}

   
}

export default DateFormatter
