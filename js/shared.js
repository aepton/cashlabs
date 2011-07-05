Number.prototype.formatMoney = function(c, d, t){
var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

function prettifyNumber(amount, abbrev) {
  var divisor = 100;
  var magnitude = 'Hundred';
  
  if (abbrev == 'M') {
    divisor = 1000000;
    magnitude = 'Million';
  } else if (abbrev == 'B') {
    divisor = 1000000000;
    magnitude = 'Billion';
  } else if (abbrev == 'T') {
    divisor = 1000000000000;
    magnitude = 'Trillion';
  }

  return '$' + (Math.round(amount/divisor * 100)/100).formatMoney(2, '.', ',') + ' ' + magnitude;
}