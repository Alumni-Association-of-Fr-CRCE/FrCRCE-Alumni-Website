myBlurFunction = function(state) {
    /* state can be 1 or 0 */
    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');
    var overlayEle2=document.getElementById('overlay2');
    var overlayEle3=document.getElementById('overlay3');
    var overlayEle4=document.getElementById('overlay4');
    var overlayEle5=document.getElementById('overlay5');
    var overlayEle6=document.getElementById('overlay6');
  
    if (state==1) {
        overlayEle.style.display = 'block';
    }
  
    else if(state==2){
        overlayEle2.style.display = 'block';
    }
    else if(state==3){
      overlayEle3.style.display = 'block';
  }
  else if(state==4){
      overlayEle4.style.display = 'block';
  }
  else if(state==5){
      overlayEle5.style.display = 'block';
  }
  
  else if(state==6){
      overlayEle6.style.display = 'block';
  }
  
    else {
        overlayEle.style.display = 'none';
        overlayEle2.style.display = 'none';
        overlayEle3.style.display = 'none';
        overlayEle4.style.display = 'none';
        overlayEle5.style.display = 'none';
        overlayEle6.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
  };