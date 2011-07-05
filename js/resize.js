window.onload = function () {
  var r = Raphael("holder");
  
  var budgetAreas = [ // Need better source: http://useconomy.about.com/od/usfederalbudget/p/Discretionary.htm
                      // Total: $0.815T
                     {name: "Defense Discretionary",
                      id: "dd",
                      color: {'h': 65, 's': 46.5, 'v': 39.6},
                      spendingScaled: 0.815},
                      
                      // Need better source: http://useconomy.about.com/od/usfederalbudget/p/Discretionary.htm
                      // Total: $0.491T
                     {name: "Non-defense Discretionary",
                      id: "ndd",
                      color: {'h': 91, 's': 55.7, 'v': 90.2},
                      spendingScaled: 0.491},
                      
                      // Mandatory and interest payments for FY 10, p. 468 of FY 12 budget: 
                      // http://www.whitehouse.gov/omb/budget/Analytical_Perspectives
                      // Mandatory: $1.913T Interest: $2.109T Total: $4.022T
                     {name: "Mandatory",
                      id: "m",
                      color: {'h': 147, 's': 73.5, 'v': 72.5},
                      spendingScaled: 4.022}];
                      
  var budgetScaler = 1000000000000; // Use to translate into trillions
  var totalBudget = 5.328; // Use to set "target" budget amount
  
  function displayBudgetAreas(budget) {
    for (var i = 0; i < budget.length; i++) {
      var cat = document.getElementById(budget[i].id + "_cat");
      var amt = document.getElementById(budget[i].id + "_amt");
      cat.innerHTML = budget[i].name;
      amt.innerHTML = prettifyNumber(((budget[i].spendingScaled / total) * totalBudget) * budgetScaler, 'B');
    }
  }
  
  r.customAttributes.segment = function (x, y, r, a1, a2, color) {
      var flag = (a2 - a1) > 180;
      a1 = (a1 % 360) * Math.PI / 180;
      a2 = (a2 % 360) * Math.PI / 180;
      return {
          path: [["M", x, y],
                 ["l", r * Math.cos(a1), r * Math.sin(a1)],
                 ["A", r, r, 0, +flag, 1, x + r * Math.cos(a2), y + r * Math.sin(a2)],
                 ["z"]],
          fill: "hsb(" + color.h + ", " + color.s + ", " + color.v + ")"
      };
  };

  function animate(ms) {
      var start = 0,
          val;
      for (i = 0; i < ii; i++) {
          val = 360 / total * budgetAreas[i].spendingScaled;
          paths[i].animate({segment: [200, 200, 150, start, start += val, budgetAreas[i].color]}, ms, "bounce");
          paths[i].angle = start - val / 2;
          
      }
      displayBudgetAreas(budgetAreas);
  }

  var paths = r.set(),
      total,
      start,
      bg = r.circle(200, 200, 0).attr({stroke: "#fff", "stroke-width": 4});

  total = 0;
  for (var i = 0, ii = budgetAreas.length; i < ii; i++) {
      total += budgetAreas[i].spendingScaled;
  }
  
  start = 0;
  for (i = 0; i < ii; i++) {
      var val = 360 / total * budgetAreas[i].spendingScaled;
      (function (i, val) {
          paths.push(r.path().attr({segment: [200, 200, 1, start, start + val, budgetAreas[i].color], stroke: "#fff"}).click(function () {
              total += budgetAreas[i].spendingScaled;
              budgetAreas[i].spendingScaled *= 2;
              animate();
          }));
      })(i, val);
      start += val;
  }
  
  bg.animate({r: 151}, 1000, "bounce");
  animate(1000);
};