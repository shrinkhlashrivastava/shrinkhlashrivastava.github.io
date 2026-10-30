/* Click-to-enlarge for case study evidence images (img.zoom). */
(function(){
  var lb=document.getElementById('lb'),img=document.getElementById('lbImg'),close=document.getElementById('lbClose'),last=null;
  function open(src,alt,wide){img.src=src;img.alt=alt||'';lb.classList.toggle('wide',!!wide);document.getElementById('lbScroll').className=wide?'lb-scroll':'';lb.hidden=false;close.focus();document.body.style.overflow='hidden'}
  function shut(){lb.hidden=true;img.removeAttribute('src');document.body.style.overflow='';if(last)last.focus()}
  document.querySelectorAll('img.zoom').forEach(function(el){
    el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label','Enlarge: '+(el.alt||'image'));
    function go(){last=el;var w=parseInt(el.getAttribute('width')||'0',10),h=parseInt(el.getAttribute('height')||'1',10);open(el.currentSrc||el.src,el.alt,(w/h>3.2)||(h/w>2.6))}
    el.addEventListener('click',go);
    el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
  });
  close.addEventListener('click',shut);
  lb.addEventListener('click',function(e){if(e.target===lb)shut()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lb.hidden)shut()});
})();
