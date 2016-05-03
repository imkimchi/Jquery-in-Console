(function(){
  var head = document.getElementsByTagName('head')[0];
  var headChild = head.childNodes;
  var checkJquery = /jquery(-[1-2]\.[0-9]{1,2}\.[0-9]{1,2}|-latest|)\.min\.js/ig;

  //Check whether Jquery included
  for(var i=0; i<headChild.length; i++){
    if(headChild[i].tagName === 'SCRIPT'){
          if(checkJquery.test(headChild[i].src)){
            console.log("Jquery already exists.");
            return false;
          }
    }
  }

  console.log("Success to include Jquery.");
  var jq = document.createElement('script');
  jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
  head.appendChild(jq);
  
  // jQuery.noConflict() error occurred
})();
