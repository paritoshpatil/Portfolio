// set up text to print, each item in array is new line
var aText = new Array(
    "🙋‍♂️ 21 year old <span class='pink-text'>{</span> <strong class='dark-text'>developer</strong><span class='pink-text'> }</span> based in pune", 
    "💻 pursuing my bachelor's in computer-science",
    "🎓 @ vishwakarma institute of technology",
    "💪 currently interning for <span class='pink-text'>{</span> <strong class='dark-text'>TomTom</strong><span class='pink-text'> }</span>",
    "🔥 set to join <span class='pink-text'>{</span> <strong class='dark-text'>Veritas</strong><span class='pink-text'> }</span> in summer 2021"

    );
    var iSpeed = 20; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    typewriter();
