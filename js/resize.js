window.onload = function () {
  var r = Raphael("holder");
  
  var budgetAreas = [ // Need better source: http://useconomy.about.com/od/usfederalbudget/p/Discretionary.htm
                      // Total: $0.815T
                     {color: {'h': 201, 's': 36.1, 'v': 91.4},
                      textColor: "black",
                      spendingScaled: 0.815},
                      
                      // Need better source: http://useconomy.about.com/od/usfederalbudget/p/Discretionary.htm
                      // Total: $0.491T
                     {color: {'h': 200, 's': 98.1, 'v': 41.2},
                      textColor: "white",
                      spendingScaled: 0.491},
                      
                      // Mandatory and interest payments for FY 10, p. 468 of FY 12 budget: 
                      // http://www.whitehouse.gov/omb/budget/Analytical_Perspectives
                      // Mandatory: $1.913T Interest: $2.109T Total: $4.022T
                     {color: {'h': 84, 's': 45.6, 'v': 84.3},
                      textColor: "black",
                      spendingScaled: 4.022},
                     
                     // Need better source: http://useconomy.about.com/od/usfederalbudget/p/Discretionary.htm
                     // Total: $0.815T
                     {color: {'h': 90, 's': 100, 'v': 34.1},
                      textColor: "white",
                      spendingScaled: 0.815},
                      
                      // Need better source: http://useconomy.about.com/od/usfederalbudget/p/Discretionary.htm
                      // Total: $0.491T
                     {color: {'h': 45, 's': 49.4, 'v': 93.7},
                      textColor: "black",
                      spendingScaled: 0.491},
                      
                      // Mandatory and interest payments for FY 10, p. 468 of FY 12 budget: 
                      // http://www.whitehouse.gov/omb/budget/Analytical_Perspectives
                      // Mandatory: $1.913T Interest: $2.109T Total: $4.022T
                     {color: {'h': 19, 's': 42.8, 'v': 87.1},
                      textColor: "white",
                      spendingScaled: 4.022},
                     ];
                      
  var budgetScaler = 1000000000000; // Use to translate into trillions
  var totalBudget = 10.656; // Use to set "target" budget amount
  
  function displayBudgetAreas(budget) {
    for (var i = 0; i < budget.length; i++) {
      var amt = document.getElementById(i + ".user.amt");
      var intro = '<div class="result_' + budget[i].textColor + '">';
      var closing = '</div>';
      amt.innerHTML =  intro + prettifyNumber(((budget[i].spendingScaled / total) * totalBudget) * budgetScaler, 'B') + closing;
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