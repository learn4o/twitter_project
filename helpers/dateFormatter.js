const dateFormatter = (d) => {
  var systemDate = new Date(Date.parse(d));
    var userDate = new Date();
    var diff = Math.floor((userDate - systemDate) / 1000);
    if (diff <= 1) {return 'just now';}
    if (diff < 20) {return diff + 'sec';}
    if (diff < 60) {return 'less than a minute ago';}
    if (diff <= 90) {return '1m';}
    if (diff <= 3540) {return Math.round(diff / 60) + 'm';}
    if (diff <= 5400) {return '1h';}
    if (diff <= 86400) {return Math.round(diff / 3600) + 'h';}
    if (diff <= 129600) {return '1d';}
    if (diff < 604800) {return Math.round(diff / 86400) + 'd';}
    if (diff <= 777600) {return '1w';}
    return 'on ' + systemDate;
};

export default dateFormatter;