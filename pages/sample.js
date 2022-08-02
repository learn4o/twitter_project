import HomeIcon from "../images/HomeIcon";
import DateFormatter from "../helpers/DateFormatter"
export default function Sample() {
 
  return (
    <div style={{ backgroundColor: "grey" }}>
      <div>Changes</div>
    
      <DateFormatter postDate={{postHour:"03",
     postmint:"04",
     postSec:"33",
    postday:"03",
     postmonth :"Jul",
     postyear:"2022"}}/>

    </div>
  );
}
