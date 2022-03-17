/*
Author: Shradha Mukherjee
Date: 2022-03-12
*/

//Syntax ;
/*The ; at end of statements in javascript(js) is optional though some require it
but js not strict enough to complain about it. Its good practice to have ;
makes code more organized and clean. Python is another
language does not need ; but Java and PHP are languages that do need ; */

//alert saying this website does not save visitor information
alert("This website does not store visitor information. Please click 'OK' to continue.");

//prepare input data
var y_genotypeA = [14.77590124,10.82484122,9.760271091,9.612073215,11.59931889,8.254291178,
  15.5470584,12.51146861,6.102441088,2.251359131,11.50567765,10.48673956,
  2.533908639,11.58632046,7.604924222,13.29520591,7.796838117,5.027266213,
  13.19070351,10.88881893,7.710290585,16.3219854,9.1360932,10.38216482,
  11.46800693,6.979619461,10.35402458,10.71397143,7.902861679,5.639832517,
  13.30844809,12.01056225,15.16092655,4.116276354,9.557706019,12.77950851,
  10.72849674,5.431627113,11.28641306,7.049466135,14.63994152,12.74304879,
  11.80180496,12.16141493,13.46743639,6.57902335,6.988063596,13.32176575,
  9.885595787,13.15524638,13.33392078,6.919102276,13.65169058,10.48921005,
  9.078252692,9.83954251,8.762792733,10.41043404,9.790172551,4.062617951,
  4.019048486,15.21701555,12.50501934,6.359319119,5.934366475,7.042066565,
  10.30169538,14.3227966,10.30921893,8.205564757,12.27806297,4.08351458,
  13.9895535,14.29277345,8.13885684,9.536856595,7.832615874,7.148327608,
  13.72755167,14.80832209,10.27976367,7.618266793,11.23639642,7.903458022,
  10.50048929,11.50420168,8.168182519,11.17458163,10.43561905,13.39081524,
  7.545948302,9.060752885,17.62158783,16.54776815,11.30390747,7.366305516,
  10.01577143,13.69486701,7.67210736,11.67596682];

var y_genotypeB = [19.87343504,16.11855158,13.61853111,18.6959824,15.41635908,14.45394107,
  23.4807453,15.72242108,8.130808928,21.53974209,20.2352691,30.81124417,
  15.89262136,24.04700159,31.83933066,16.0778541,12.70789795,24.17188189,
  18.10254612,26.04597742,13.65977869,20.1293248,24.53563418,22.87967242,
  21.01815475,3.146702477,19.21184948,17.05603304,18.56099307,18.84382156,
  22.63441556,27.45890341,19.85030053,20.52967051,21.70829621,20.5519833,
  17.13961114,12.60218704,20.7468818,23.52690535,11.56766244,22.49774314,
  23.08484175,19.8272926,27.68221754,19.1396305,23.53147475,25.05733364,
  23.87281405,13.55824645,14.74014464,10.17186114,11.70338766,16.62861766,
  18.2395231,21.50932106,25.95338185,25.7062705,12.67122235,15.24605044,
  11.32612949,20.44539756,11.63375819,22.48426769,20.75574458,21.92653709,
  22.28396706,7.715208771,26.20202021,14.92502347,16.06853829,20.24517373,
  19.86625667,25.55497977,13.0716678,26.16656341,20.16851334,17.31892722,
  9.525989047,16.32022925,20.32556725,17.63742824,23.6071978,26.76300788,
  20.03804361,19.07227122,20.81979974,26.26211647,14.63018824,20.45793589,
  23.85088474,32.81301561,20.21761952,18.98396566,16.2804421,30.833732,
  24.86050217,19.12356591,24.37066839,23.72179655];

var y_genotypeC = [16.89483405,9.891778858,27.62513507,20.15556881,18.60949543,19.99376042,
  12.88733266,19.15612426,14.38126591,7.875345074,15.80190376,13.9206667,
  19.47843515,15.67616843,13.52861916,16.51614862,16.37663779,14.85168862,
  16.96459888,24.28641974,12.35449079,19.40683184,14.19419695,24.10070299,
  12.89592922,21.39947894,19.90898542,13.6545435,17.69842117,13.92394402,
  9.076189907,15.61661695,10.5159167,14.56750455,20.76938937,18.2062833,
  16.92352693,11.91337883,12.70005275,14.95249573,14.3985218,17.47400067,
  16.68921275,17.24778187,22.75073777,9.041940946,14.28161927,21.28339194,
  20.46105192,26.61866217,19.15249196,8.781711078,15.67920923,16.48963435,
  17.56104779,9.800310733,20.76642393,11.16075698,17.97435367,9.656238874,
  18.21509596,11.73330964,10.36490103,25.22607126,12.41917745,17.08282836,
  15.42891862,14.801421,15.34064652,12.1369441,19.47300969,14.41968387,
  15.31688794,9.03906097,7.007612098,17.60702972,10.89749463,14.49857007,
  20.75191054,10.68204691,8.483679056,16.15668883,20.65709196,8.914163297,
  11.47755797,11.42117402,15.44771564,10.86714371,17.99901065,25.86950549,
  7.241742609,9.642759542,11.36545658,13.30387876,13.14070723,15.55518832,
  19.98321107,17.86867358,25.17154859,5.813733821];

//Bar Plot, Plot 1
function draw() {
  try {
    // input data
    var genotypeA = {
      y: y_genotypeA,
      name: 'genotypeA',
      type: 'box'
    };
    var genotypeB = {
      y: y_genotypeB,
      name: 'genotypeB',
      type: 'box'
    };
    var genotypeC = {
      y: y_genotypeC,
      name: 'genotypeC',
      type: 'box'
    };
    //combine series data
    var data = [genotypeA, genotypeB, genotypeC];

    //add general plot labels
    var layout = {
      yaxis: {
        title: 'plant height',
        zeroline: true}
      };

    //display using plotly
    Plotly.newPlot('plot1', data, layout);
  }
  catch (err) {
    console.error(err);
    alert(err);
  }
}
//run function
draw();
