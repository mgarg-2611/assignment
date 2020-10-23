//var item1 = 0;
//var item2 = 0;
//var item3 = 0;

function changetohindi()
{
    window.location =  "indexhindi.html";
}

function changetoenglish()
{
    window.location =  "index.html";
}


function changehand()
{
	
	//document.getElementById("hand1").style.visibility="visible";
}

function navNext0()

{

        document.getElementById("canvas0").style.visibility="hidden";

        document.getElementById("canvas0b").style.visibility="visible";//0b
         // document.getElementById("transcellcover1").style.visibility="visible";
          // document.getElementById("transcode1").style.visibility="visible";
        // document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";

        // document.getElementById("transsheath").style.visibility="visible";

        // document.getElementById("arrowtrans2").style.visibility="visible";

        // document.getElementById("canvas3").style.cursor="url('images/sheathcut.png'),auto"; 


         // document.getElementById("sleevebutton1").style.visibility="visible";


       // document.getElementById("weararrow").style.visibility="visible"; 

        

}

function navNext0b()

{

        document.getElementById("canvas0b").style.visibility="hidden";

        document.getElementById("canvas0c").style.visibility="visible";
         // document.getElementById("canvas0c").style.cursor="url('images/handsmall.png'),auto";

        document.getElementById("addolt11").style.visibility="visible";

        document.getElementById("arrows1").style.visibility="visible";
        
        //document.getElementById("arrowsample1").style.visibility="visible"; 

}

function navNext0c()

{

        document.getElementById("canvas0c").style.visibility="hidden";

        document.getElementById("canvas0d").style.visibility="visible";
          document.getElementById("transcellcover1").style.visibility="visible";
          document.getElementById("transcode1").style.visibility="visible";

        //document.getElementById("addolt11").style.visibility="visible";

        //document.getElementById("arrows1").style.visibility="visible";
        
        //document.getElementById("arrowsample1").style.visibility="visible"; 

}

function navNext0d()

{

        document.getElementById("canvas0d").style.visibility="hidden";

        document.getElementById("canvas1").style.visibility="visible";  

        //document.getElementById("addwireButton1").style.visibility="visible"; 

}


/////canvas0c-------------------------
function addolt1()

{ 

        document.getElementById("olt1").style.animation="addolt11 4s forwards";
        document.getElementById("olt1").style.visibility="visible";
         document.getElementById("zoomolt1").style.visibility="visible";
         document.getElementById("addolt11").style.visibility="hidden";
         document.getElementById("arrows1").style.visibility="hidden";

        setTimeout(function()
        {
          document.getElementById("step1").style.visibility="hidden";
         document.getElementById("step2").style.visibility="visible";
         document.getElementById("adds1").style.visibility="visible";
         document.getElementById("wireint").style.visibility="visible";
         document.getElementById("arrows2").style.visibility="visible";
           document.getElementById("zoomolt1").style.visibility="hidden";

        },4000);

}

function adds1()

{ 
        document.getElementById("arrows2").style.visibility="hidden";
          // document.getElementById("zoomolt1").style.visibility="hidden";
        document.getElementById("zooms1").style.visibility="visible";
        document.getElementById("s1").style.animation="adds11 4s forwards";
        document.getElementById("s1").style.visibility="visible";
        document.getElementById("adds1").style.visibility="hidden";
        document.getElementById("zoomolt1").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("step2").style.visibility="hidden";
         document.getElementById("step3").style.visibility="visible";
         document.getElementById("arrows3").style.visibility="visible";
         document.getElementById("zooms1").style.visibility="hidden";
         //document.getElementById("adds").style.visibility="visible";

        },4000);
}

function olts1()
{ 
    document.getElementById("arrows3").style.visibility="hidden";
    document.getElementById("wire1").style.animation="movewire11 4s forwards";
        document.getElementById("wire1").style.visibility="visible";
        setTimeout(function()
        {
        document.getElementById("step3").style.visibility="hidden";
        document.getElementById("arrows4").style.visibility="visible";
        document.getElementById("step4").style.visibility="visible";
        document.getElementById("addhtb").style.visibility="visible";

        },4000);

}

function addhtb1()

{ 
        document.getElementById("arrows4").style.visibility="hidden";
        document.getElementById("htb1").style.animation="addhtb11 4s forwards";
        document.getElementById("htb1").style.visibility="visible";
         document.getElementById("zoomhtb1").style.visibility="visible";

         document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("step4").style.visibility="hidden";
         document.getElementById("step5").style.visibility="visible";
         document.getElementById("arrows5").style.visibility="visible";
         document.getElementById("zoomhtb1").style.visibility="hidden";
         //document.getElementById("adds").style.visibility="visible";

        },4000);
}

function s1htb()

{ 
        document.getElementById("arrows5").style.visibility="hidden";
        document.getElementById("wire2").style.animation="movewire21 4s forwards";
        document.getElementById("wire2").style.visibility="visible";
        document.getElementById("wire21").style.animation="movewire211 4s forwards";
        document.getElementById("wire21").style.visibility="visible";
        document.getElementById("city1").style.visibility="visible";
         //document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("step5").style.visibility="hidden";
         document.getElementById("step6").style.visibility="visible";
         document.getElementById("addonu").style.visibility="visible";
         document.getElementById("arrows6").style.visibility="visible";

        },4000);
}

function addonu1()

{ 
        document.getElementById("arrows6").style.visibility="hidden";
        document.getElementById("addonu").style.visibility="hidden";
        document.getElementById("zoomonu1").style.visibility="visible";
        document.getElementById("onu1").style.animation="addonu11 1s forwards";
        document.getElementById("onu1").style.visibility="visible";
        
         //document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("step6").style.visibility="hidden";
         document.getElementById("step7").style.visibility="visible";
         document.getElementById("arrows7").style.visibility="visible";

          setTimeout(function()
        {
          document.getElementById("zoomonu1").style.visibility="hidden";
           },2000);
         //document.getElementById("adds").style.visibility="visible";

        },1000);
}


function htbonu()

{ 
        document.getElementById("arrows7").style.visibility="hidden";
        //document.getElementById("addonu").style.visibility="hidden";
        document.getElementById("wire3").style.animation="movewire31 2s forwards";
        document.getElementById("wire3").style.visibility="visible";
        
         //document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("step7").style.visibility="hidden";
         document.getElementById("step8").style.visibility="visible";
         document.getElementById("addwud").style.visibility="visible";
         document.getElementById("arrows8").style.visibility="visible";

        },2000);
}


function addwud1()

{ 
        document.getElementById("arrows8").style.visibility="hidden";
        document.getElementById("addwud").style.visibility="hidden";
        document.getElementById("lptp1").style.animation="addlptp11 1s forwards";
        document.getElementById("lptp1").style.visibility="visible";
        document.getElementById("zoomlptp1").style.visibility="visible";
        
         //document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("step8").style.visibility="hidden";
          document.getElementById("arrows9").style.visibility="visible";
         document.getElementById("step9").style.visibility="visible";
         document.getElementById("addstb").style.visibility="visible";


        document.getElementById("zoomlptp1").style.visibility="hidden";
          

        },1000);
}

function addstb1()

{ 
        document.getElementById("arrows9").style.visibility="hidden";
        document.getElementById("addstb").style.visibility="hidden";
        document.getElementById("stb1").style.animation="addstb11 1s forwards";
        document.getElementById("stb1").style.visibility="visible";
         document.getElementById("zoomstb1").style.visibility="visible";
        
         //document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("step9").style.visibility="hidden";
         document.getElementById("step10").style.visibility="visible";
         document.getElementById("arrows10").style.visibility="visible";
         //document.getElementById("adds").style.visibility="visible";
         setTimeout(function()
        { 
            document.getElementById("zoomstb1").style.visibility="hidden"; 
         },2000);

        },1000);
}

function onulptpstb1()

{ 
        document.getElementById("arrows10").style.visibility="hidden";
        document.getElementById("wifi1").style.visibility="visible";
       //document.getElementById("stb1").style.animation="addstb11 2s forwards";
        document.getElementById("wifi2").style.visibility="visible";
        
         //document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
          document.getElementById("arrows11").style.visibility="visible";
          document.getElementById("step10").style.visibility="hidden";
         document.getElementById("step11").style.visibility="visible";
         document.getElementById("addtv").style.visibility="visible";

        },2000);
}


function addtv1()

{ 
        document.getElementById("arrows11").style.visibility="hidden";
        document.getElementById("tv1").style.visibility="visible";
       document.getElementById("tv1").style.animation="addtv11 1s forwards";
        document.getElementById("addtv").style.visibility="hidden";
        
         //document.getElementById("addhtb").style.visibility="hidden";
         setTimeout(function()
        {
            document.getElementById("arrows12").style.visibility="visible";
          document.getElementById("step11").style.visibility="hidden";
         document.getElementById("step12").style.visibility="visible";
         //document.getElementById("adds").style.visibility="visible";

        },1000);
}

function stbtv1()

{ 
        document.getElementById("arrows12").style.visibility="hidden";
        document.getElementById("wire22").style.visibility="visible";
       document.getElementById("wire22").style.animation="movewire221 2s forwards";
        document.getElementById("arrowcuboxconn1").style.visibility="visible";
       document.getElementById("nextButtonconn1").style.visibility="visible";
}


//===========jyoditya===========//



//=======Color Code Table======//

function transcellcover1()
{
   
 document.getElementById("warning1").style.visibility="visible";

}

function transcellcover2()
{
   
 document.getElementById("warning2").style.visibility="visible";

}

function transcellcover3()
{
   
 document.getElementById("warning3").style.visibility="visible";

}

function transcellcover4()
{
   
 document.getElementById("warning4").style.visibility="visible";

}

function transcellcover5()
{
   
 document.getElementById("warning5").style.visibility="visible";

}

function transcellcover6()
{
   
 document.getElementById("warning6").style.visibility="visible";

}

function transcellcover7()
{
   
 document.getElementById("warning7").style.visibility="visible";

}

function transcellcover8()
{
   
 document.getElementById("warning8").style.visibility="visible";

}

function transcellcover9()
{
   
 document.getElementById("warning9").style.visibility="visible";

}

function transcellcover10()
{
   
 document.getElementById("warning10").style.visibility="visible";

}

function transcellcover11()
{
   
 document.getElementById("warning11").style.visibility="visible";

}



// function transcellcover13()
// {
   
//  document.getElementById("warning12").style.visibility="visible";

// }


function addcode1()

{    document.getElementById("transcellcover1").style.visibility="hidden";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    document.getElementById("handcodemove1").style.visibility="visible";
    document.getElementById("handcodemove1").style.animation="movehandcode1 2s forwards";
    document.getElementById("canvas0d").style.cursor="none";
    document.getElementById("transcode1").style.visibility="hidden";
    // document.getElementById("arcode1").style.visibility="hidden";
    document.getElementById("warning1").innerHTML="";

    document.getElementById("codemove1").style.animation="movecode1 2s forwards";
    setTimeout(function()
            {  
                document.getElementById("handcodemove1").style.visibility="hidden";
               document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";
            // document.getElementById("arcode2").style.visibility="visible";
            document.getElementById("transcode2").style.visibility="visible";
             document.getElementById("transcellcover2").style.visibility="visible";

             // document.getElementById("transcellcover").style.visibility="";
            },2000);
}

function addcode2()

{ document.getElementById("transcellcover2").style.visibility="hidden";
    document.getElementById("handcodemove2").style.visibility="visible";
    document.getElementById("handcodemove2").style.animation="movehandcode2 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode2").style.visibility="hidden";
    // document.getElementById("arcode2").style.visibility="hidden";
     document.getElementById("warning2").innerHTML="";
    document.getElementById("codemove2").style.animation="movecode2 2s forwards"
    setTimeout(function()
            {  
            document.getElementById("handcodemove2").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";
            // document.getElementById("arcode3").style.visibility="visible";
            document.getElementById("transcode3").style.visibility="visible";
             document.getElementById("transcellcover3").style.visibility="visible";
            },2000);
}


function addcode3()

{   document.getElementById("transcellcover3").style.visibility="hidden";
    document.getElementById("handcodemove3").style.visibility="visible";
    document.getElementById("handcodemove3").style.animation="movehandcode3 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode3").style.visibility="hidden";
    // document.getElementById("arcode3").style.visibility="hidden";
     document.getElementById("warning3").innerHTML="";
    document.getElementById("codemove3").style.animation="movecode3 2s forwards"
    setTimeout(function()
            {  document.getElementById("handcodemove3").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto"; 
            // document.getElementById("arcode4").style.visibility="visible";
            document.getElementById("transcode4").style.visibility="visible";
             document.getElementById("transcellcover4").style.visibility="visible";
            },2000);
}

function addcode4()

{ document.getElementById("transcellcover4").style.visibility="hidden";
    document.getElementById("handcodemove4").style.visibility="visible";
    document.getElementById("handcodemove4").style.animation="movehandcode4 2s forwards";
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode4").style.visibility="hidden";
    // document.getElementById("arcode4").style.visibility="hidden";
     document.getElementById("warning4").innerHTML="";
    document.getElementById("codemove4").style.animation="movecode4 2s forwards"
    setTimeout(function()
            {document.getElementById("handcodemove4").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";   
            // document.getElementById("arcode5").style.visibility="visible";
            document.getElementById("transcode5").style.visibility="visible";
             document.getElementById("transcellcover5").style.visibility="visible";
            },2000);
}

function addcode5()

{ document.getElementById("transcellcover5").style.visibility="hidden";
    document.getElementById("handcodemove5").style.visibility="visible";
    document.getElementById("handcodemove5").style.animation="movehandcode5 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode5").style.visibility="hidden";
    // document.getElementById("arcode5").style.visibility="hidden";
     document.getElementById("warning5").innerHTML="";
    document.getElementById("codemove5").style.animation="movecode5 2s forwards"
    setTimeout(function()
            { document.getElementById("handcodemove5").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";   
            // document.getElementById("arcode6").style.visibility="visible";
            document.getElementById("transcode6").style.visibility="visible";
             document.getElementById("transcellcover6").style.visibility="visible";
            },2000);
}

function addcode6()

{ document.getElementById("transcellcover6").style.visibility="hidden";
    document.getElementById("handcodemove6").style.visibility="visible";
    document.getElementById("handcodemove6").style.animation="movehandcode6 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode6").style.visibility="hidden";
    // document.getElementById("arcode6").style.visibility="hidden";
     document.getElementById("warning6").innerHTML="";
    document.getElementById("codemove6").style.animation="movecode6 2s forwards"
    setTimeout(function()
            { document.getElementById("handcodemove6").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";    
            // document.getElementById("arcode7").style.visibility="visible";
            document.getElementById("transcode7").style.visibility="visible";
             document.getElementById("transcellcover7").style.visibility="visible";
            },2000);
}

function addcode7()

{ document.getElementById("transcellcover7").style.visibility="hidden";
    document.getElementById("handcodemove7").style.visibility="visible";
    document.getElementById("handcodemove7").style.animation="movehandcode7 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode7").style.visibility="hidden";
    // document.getElementById("arcode7").style.visibility="hidden";
     document.getElementById("warning7").innerHTML="";
    document.getElementById("codemove7").style.animation="movecode7 2s forwards"
    setTimeout(function()
            {  document.getElementById("handcodemove7").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";    
            // document.getElementById("arcode8").style.visibility="visible";
            document.getElementById("transcode8").style.visibility="visible";
             document.getElementById("transcellcover8").style.visibility="visible";
            },2000);
}

function addcode8()

{ document.getElementById("transcellcover8").style.visibility="hidden";
    document.getElementById("handcodemove8").style.visibility="visible";
    document.getElementById("handcodemove8").style.animation="movehandcode8 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode8").style.visibility="hidden";
    // document.getElementById("arcode8").style.visibility="hidden";
     document.getElementById("warning8").innerHTML="";
    document.getElementById("codemove8").style.animation="movecode8 2s forwards"
    setTimeout(function()
            {  document.getElementById("handcodemove8").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";    
            // document.getElementById("arcode9").style.visibility="visible";
            document.getElementById("transcode9").style.visibility="visible";
             document.getElementById("transcellcover9").style.visibility="visible";
            },2000);
}

function addcode9()

{ document.getElementById("transcellcover9").style.visibility="hidden";
    document.getElementById("handcodemove9").style.visibility="visible";
    document.getElementById("handcodemove9").style.animation="movehandcode9 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode9").style.visibility="hidden";
    // document.getElementById("arcode9").style.visibility="hidden";
     document.getElementById("warning9").innerHTML="";
    document.getElementById("codemove9").style.animation="movecode9 2s forwards"
    setTimeout(function()
            {  document.getElementById("handcodemove9").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";    
            // document.getElementById("arcode10").style.visibility="visible";
            document.getElementById("transcode10").style.visibility="visible";
             document.getElementById("transcellcover10").style.visibility="visible";
            },2000);
}

function addcode10()

{ document.getElementById("transcellcover10").style.visibility="hidden";
    document.getElementById("handcodemove10").style.visibility="visible";
    document.getElementById("handcodemove10").style.animation="movehandcode10 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode10").style.visibility="hidden";
    // document.getElementById("arcode10").style.visibility="hidden";
     document.getElementById("warning10").innerHTML="";
    document.getElementById("codemove10").style.animation="movecode10 2s forwards"
    setTimeout(function()
            {  document.getElementById("handcodemove10").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";    
            // document.getElementById("arcode11").style.visibility="visible";
            document.getElementById("transcode11").style.visibility="visible";
             document.getElementById("transcellcover11").style.visibility="visible";
            },2000);
}

function addcode11()

{ document.getElementById("transcellcover11").style.visibility="hidden";
    document.getElementById("handcodemove11").style.visibility="visible";
    document.getElementById("handcodemove11").style.animation="movehandcode11 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    //document.getElementById("matbutton1").style.visibility="hidden"; 
    //document.getElementById("mat1").style.visibility="visible";
    document.getElementById("transcode11").style.visibility="hidden";
    // document.getElementById("arcode11").style.visibility="hidden";
     document.getElementById("warning11").innerHTML="";
    document.getElementById("codemove11").style.animation="movecode11 2s forwards"
    setTimeout(function()
            {  document.getElementById("handcodemove11").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="url('images/handsmall.png'),auto";    
            // document.getElementById("arcode12").style.visibility="visible";
            document.getElementById("transcode12").style.visibility="visible";
             document.getElementById("transcellcover12").style.visibility="visible";
            },2000);
}

function addcode12()

{ document.getElementById("transcellcover12").style.visibility="hidden";
    document.getElementById("handcodemove12").style.visibility="visible";
    document.getElementById("codemove12").style.animation="movecode12 2s forwards";
    document.getElementById("handcodemove12").style.animation="movehandcode12 2s forwards"
    document.getElementById("canvas0d").style.cursor="none";
    document.getElementById("transcode12").style.visibility="hidden";
  
    setTimeout(function()
            { 
              document.getElementById("handcodemove12").style.visibility="hidden";
            document.getElementById("canvas0d").style.cursor="auto";     
            document.getElementById("lastcodefit").style.visibility="visible";
            document.getElementById("arrowcolorcode1").style.visibility="visible";
            document.getElementById("nextButtoncolorcode1").style.visibility="visible";
             // document.getElementById("transcellcover12").style.visibility="visible";
            },2000);
}


//============================meenakshi========//



function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";  

        document.getElementById("addwireButton1").style.visibility="visible";
        document.getElementById("arrowaddwire").style.visibility="visible"; 

}

function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible"; 

        document.getElementById("transsheath").style.visibility="visible";

        document.getElementById("arrowtrans2").style.visibility="visible";

        document.getElementById("canvas3").style.cursor="url('images/sheathcut.png'),auto"; 

        //document.getElementById("addwireButton1").style.visibility="visible"; 

}

function navNext3()

{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";

        document.getElementById("sleevebutton1").style.visibility="visible";
        document.getElementById("arrowaddsleeve").style.visibility="visible";  


}

function navNext4()

{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";
        // document.getElementById("machinebottombutton").style.visibility="visible";
        document.getElementById("machinebottombutton").style.visibility="visible";
        document.getElementById("arrowaddmachine").style.visibility="visible";

        

        // document.getElementById("sleevebutton1").style.visibility="visible";  
}

function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";
        document.getElementById("arrow5").style.visibility="hidden";
        document.getElementById("nextButton6").style.visibility="hidden";
        document.getElementById("machinebottombutton").style.visibility="hidden";
        document.getElementById("addsplicerbutton").style.visibility="visible";
        document.getElementById("arrowaddsplicer").style.visibility="visible";
        document.getElementById("placewireopen1").style.visibility="visible";
         document.getElementById("placewireopen2").style.visibility="visible";



}
function navNext6()
{
   document.getElementById("splicer1second").style.visibility="visible";
   document.getElementById("arrowsplicerclosed").style.visibility="visible";
   document.getElementById("canvas6").style.visibility="hidden";
 document.getElementById("canvas7").style.visibility="visible"; 
  document.getElementById("addsplicerbutton").style.visibility="visible"; 
  document.getElementById("sleevecanvas7").style.visibility="visible";

}

function navNext7()
{
 document.getElementById("canvas7").style.visibility="hidden";
 document.getElementById("canvas8").style.visibility="visible";
 document.getElementById("addtray").style.visibility="visible";
 document.getElementById("arrowaddtray").style.visibility="visible" ;
 document.getElementById("splicedwirefull1").style.visibility="visible"; 
 document.getElementById("splicedwirefull2").style.visibility="visible"; 
 document.getElementById("splicedwirefull3").style.visibility="visible"; 
 document.getElementById("splicedwirefull4").style.visibility="visible"; 
 document.getElementById("splicedwirefull5").style.visibility="visible"; 
 document.getElementById("splicedwirefull6").style.visibility="visible"; 
 document.getElementById("splicedwirefull7").style.visibility="visible"; 
 document.getElementById("splicedwirefull8").style.visibility="visible"; 
 document.getElementById("splicedwirefull9").style.visibility="visible"; 
 document.getElementById("splicedwirefull10").style.visibility="visible";  
}
























function wearg1()

{
    document.getElementById("goggle").style.animation="movegoggle11 2s forwards"
    document.getElementById("weararrow").style.visibility="hidden";
    setTimeout(function()
            {
            document.getElementById("canvas1").style.cursor="url('images/handgrab.png'),auto";   
            document.getElementById("arrowcloth").style.visibility="visible";    
            document.getElementById("step1b").style.visibility="visible";
            document.getElementById("transcloth").style.visibility="visible"; 
            },2000);
}

function movecloth()

{document.getElementById("clothhandgrab1").style.visibility="visible"; 
 document.getElementById("transcloth").style.visibility="hidden"; 
document.getElementById("clothhandgrab1").style.animation="movehandcloth1 4s forwards"
document.getElementById("canvas1").style.cursor="none";   
document.getElementById("arrowcloth").style.visibility="hidden"; 
document.getElementById("cloth").style.animation="movecloth1 4s forwards"
setTimeout(function()
            {
            document.getElementById("canvas1").style.cursor="auto";
            document.getElementById("clothhandgrab1").style.visibility="hidden";   
            document.getElementById("matbutton1").style.visibility="visible"; 
            document.getElementById("addmat").style.visibility="visible";    
            document.getElementById("step1c").style.visibility="visible";
            },4000);
}


function addmat1()

{
    document.getElementById("matbutton1").style.visibility="hidden"; 
    document.getElementById("mat1").style.visibility="visible";
     document.getElementById("addmat").style.visibility="hidden"; 
    document.getElementById("mat1").style.animation="movemat1 4s forwards"
    setTimeout(function()
            {
            document.getElementById("arrow1").style.visibility="visible";    
            document.getElementById("nextButton2").style.visibility="visible";
            },4000);
}

function addwire()

{   
    document.getElementById("canvas2").style.cursor="url('images/handscrew.png'),auto";
    document.getElementById("addwire").style.visibility="visible";
    document.getElementById("addwire").style.animation="movewire1 2s forwards"
    document.getElementById("addcutwire").style.visibility="visible";
    document.getElementById("addcutwire").style.animation="movecutwire1 2s forwards"
    
 
     

     document.getElementById("addwireButton1").style.visibility="hidden";
     document.getElementById("arrowaddwire").style.visibility="hidden";
     setTimeout(function()
            {
                document.getElementById("step2b").style.visibility="visible";
                document.getElementById("zoomscr1").style.visibility="visible";
                document.getElementById("movecutwiretrans").style.visibility="visible";
                document.getElementById("arrowmovecutwiretrans").style.visibility="visible";
            },2000);
}

function cut1scr()

{   
    document.getElementById("canvas2").style.cursor="none";
    document.getElementById("scr1").style.visibility="visible";
    document.getElementById("movecutwiretrans").style.visibility="hidden";
    document.getElementById("arrowmovecutwiretrans").style.visibility="hidden";
    setTimeout(function()
            {
            document.getElementById("scr2").style.visibility="visible";
            document.getElementById("addcutwire").style.visibility="hidden";
            document.getElementById("addcutwire2").style.visibility="visible";
            document.getElementById("scr1").style.visibility="hidden";
             setTimeout(function()
            {
            document.getElementById("scr2").style.visibility="hidden";
            document.getElementById("wireup").style.visibility="visible";
            document.getElementById("addcutwire2").style.animation="movecutwire21 2s forwards"
            document.getElementById("scr3").style.visibility="visible";
             setTimeout(function()
            {
                document.getElementById("canvas2").style.cursor="url('images/cursorroundcutter.png'),auto";
                document.getElementById("scr3").style.visibility="hidden";
                document.getElementById("arrowtrans1").style.visibility="visible";
                document.getElementById("transcutter").style.visibility="visible";
                document.getElementById("step2c").style.visibility="visible";
                document.getElementById("zoomscr1").style.visibility="hidden";
                document.getElementById("zoomroundcutter").style.visibility="visible";
                     },1000);
                 },1000);
            },1000);
    
}

function roundcut1()

{  
  document.getElementById("transcutter").style.visibility="hidden";  
  document.getElementById("arrowtrans1").style.visibility="hidden";   
  document.getElementById("canvas2").style.cursor="none";
  document.getElementById("roundcutter").style.visibility="visible";
  document.getElementById("roundcutter").style.animation="moveroundcutter1 6s forwards"
  setTimeout(function()
            {
                document.getElementById("roundcutter").style.visibility="hidden";
                document.getElementById("canvas2").style.cursor="auto";
                document.getElementById("arrow2").style.visibility="visible";    
                document.getElementById("nextButton3").style.visibility="visible";
                document.getElementById("roundcuttermark").style.visibility="visible";
                document.getElementById("zoomroundcutter").style.visibility="hidden";
        },6000);
}

function movesheat()

{
    document.getElementById("arrowtrans2").style.visibility="hidden";
    document.getElementById("canvas3").style.cursor="none";
    document.getElementById("SC1").style.visibility="visible";
    document.getElementById("SC1").style.animation="moveSC11 6s forwards"
    document.getElementById("transsheath").style.visibility="hidden";
    setTimeout(function()
            {
            document.getElementById("canvas3").style.cursor="auto";
            document.getElementById("SC1").style.visibility="hidden";
            document.getElementById("hidewire").style.visibility="hidden";
            document.getElementById("openwire1").style.visibility="visible";
            document.getElementById("transbluewire").style.visibility="visible";
            document.getElementById("arrowtrans3").style.visibility="visible";
            document.getElementById("step3b").style.visibility="visible";
             document.getElementById("transbluewire").style.visibility="visible";
            },6000);
}

function showbluewire()

{
    document.getElementById("arrowtrans3").style.visibility="hidden";
    document.getElementById("arrowtissue").style.visibility="visible";
    document.getElementById("transbluewire").style.visibility="hidden";
    document.getElementById("openwire1").style.visibility="hidden";
    document.getElementById("bluewire1").style.visibility="visible";
    document.getElementById("step3c").style.visibility="visible";
    document.getElementById("transtissue1").style.visibility="visible";
    document.getElementById("canvas3").style.cursor="url('images/handgrab.png'),auto";

}

function cleanblue1()

{document.getElementById("transtissue1").style.visibility="hidden";
document.getElementById("clothbluegrab").style.visibility="visible";
document.getElementById("clothbluegrab").style.animation="cleanbluegrab11 6s forwards";
document.getElementById("canvas3").style.cursor="none";
    document.getElementById("arrowtissue").style.visibility="hidden";
    document.getElementById("clothblue").style.animation="cleanblue11 6s forwards";
    setTimeout(function()
            {document.getElementById("clothbluegrab").style.visibility="hidden";
                document.getElementById("canvas3").style.cursor="auto";
                document.getElementById("step3d").style.visibility="visible"; 
                document.getElementById("arrow3").style.visibility="visible";
                document.getElementById("nextButton4").style.visibility="visible";
        },6000);
    
}


function addsleeve1()

{
    document.getElementById("sleeve1").style.visibility="visible";
    document.getElementById("sleevebutton1").style.visibility="hidden";
    document.getElementById("arrowaddsleeve").style.visibility="hidden";
    document.getElementById("sleeve1").style.animation="movesleeve11 2s forwards";
    setTimeout(function()
    {
        document.getElementById("step4b").style.visibility="visible";
        document.getElementById("arrowsleeve1").style.visibility="visible";
        document.getElementById("canvas4").style.cursor="url('images/handsmall.png'),auto";
        document.getElementById("transsleeve1").style.visibility="visible";

    },2000);
}

function coversleeve1()

{ document.getElementById("transsleeve1").style.visibility="hidden";
  document.getElementById("sleevehand1").style.visibility="visible";
  document.getElementById("sleevehand1").style.animation="coverhandsleeve1 4s forwards";
  document.getElementById("canvas4").style.cursor="none";
  document.getElementById("sleeve1").style.animation="coversleeve1 4s forwards";
  document.getElementById("arrowsleeve1").style.visibility="hidden";
setTimeout(function()
            {
            document.getElementById("sleevehand1").style.visibility="hidden";
            document.getElementById("canvas4").style.cursor="url('images/stripper.png'),auto";
            document.getElementById("transstripper").style.visibility="visible"; 
            document.getElementById("arrowscene4").style.visibility="visible"; 
            document.getElementById("zoom").style.visibility="visible"; 
            document.getElementById("step4c").style.visibility="visible"; 
              
            },4000);
}


function cuttransstripper()
{
document.getElementById("wirecover").style.visibility="visible";
document.getElementById("stripper1").style.visibility="visible";
document.getElementById("canvas4").style.cursor="none";
document.getElementById("stripper1").style.animation="movestripper1 2s forwards";
document.getElementById("transstripper").style.visibility="hidden";
document.getElementById("arrowscene4").style.visibility="hidden";
document.getElementById("zoom").style.visibility="hidden";
document.getElementById("wireafter").style.visibility="visible";
document.getElementById("blueline").style.visibility="hidden";
document.getElementById("wirecover").style.animation="wirecover1 4s forwards";
setTimeout(function()
            {
                document.getElementById("stripper1").style.visibility="hidden";
                document.getElementById("canvas4").style.cursor="url('images/handgrab.png'),auto";
                document.getElementById("step4d").style.visibility="visible";
                document.getElementById("arrowtissue41").style.visibility="visible";
                document.getElementById("transtissue2").style.visibility="visible";
            },2000);


}

function cleanfiber1()
{
document.getElementById("transtissue2").style.visibility="hidden";
document.getElementById("canvas4").style.cursor="none";
document.getElementById("tissuehand2").style.visibility="visible";
document.getElementById("tissuehand2").style.animation="cleanfiberhand21 6s forwards";
document.getElementById("arrowtissue41").style.visibility="hidden";
document.getElementById("clothfiber").style.animation="cleanfiber11 6s forwards";

 setTimeout(function()
            {
            document.getElementById("canvas4").style.cursor="auto";
            document.getElementById("tissuehand2").style.visibility="hidden";
            document.getElementById("arrow4").style.visibility="visible";
            document.getElementById("nextButton5").style.visibility="visible";
            },6000);   
}


function addmachinebottom()
{   
    document.getElementById("machinebottombutton").style.visibility="hidden";
    document.getElementById("arrowaddmachine").style.visibility="hidden";

    document.getElementById("cleaverfull").style.visibility="visible";
    document.getElementById("cleaverfull").style.animation="cleaverfull11 2s forwards";
    setTimeout(function()
            {
    document.getElementById("canvas5").style.cursor="url('images/handsmall.png'),auto";
    document.getElementById("machinebottom").style.visibility="visible";
    document.getElementById("machineupcover").style.visibility="visible";
    document.getElementById("pin2").style.visibility="visible";

    document.getElementById("cleaverfull").style.visibility="hidden";
    document.getElementById("transmachineopencover").style.visibility="visible";
    document.getElementById("arrow5b").style.visibility="visible";
    document.getElementById("step5b").style.visibility="visible";
       },2000);  
}



function machineopencover()
{  
document.getElementById("arrow5b").style.visibility="hidden";
document.getElementById("canvas5").style.cursor="none";
document.getElementById("handopenmachine").style.visibility="visible";
document.getElementById("handopenmachine").style.animation="handopenmachinecover11 5s forwards";
setTimeout(function()
            { 
            document.getElementById("handopenmachine").style.visibility="hidden";
            },5000);

document.getElementById("transmachineopencover").style.visibility="hidden";
document.getElementById("machineupcover").style.animation="machineopencover11 4s forwards";
setTimeout(function()
            { 
            document.getElementById("canvas5").style.cursor="url('images/handsmall.png'),auto";
            document.getElementById("transpinopen").style.visibility="visible"; 
            document.getElementById("arrow5c").style.visibility="visible"; 
            document.getElementById("step5c").style.visibility="visible";
            },4000);
}
 

 function pinopen()
 {
document.getElementById("canvas5").style.cursor="none";
document.getElementById("arrow5c").style.visibility="hidden";
document.getElementById("transpinopen").style.visibility="hidden";
document.getElementById("handpinopen1").style.visibility="visible";
document.getElementById("handpinopen1").style.animation="handpinopen11 4s forwards";
document.getElementById("pin2").style.animation="pinopen11 4s forwards";
 setTimeout(function()
            { 
            document.getElementById("step5d").style.visibility="visible";
            document.getElementById("transwireopen1").style.visibility="visible";
            document.getElementById("arrow5d").style.visibility="visible";
            document.getElementById("handpinopen1").style.visibility="hidden";

            document.getElementById("canvas5").style.cursor="auto";
            },4000);
 }

function attachwireopen()
{
document.getElementById("arrow5d").style.visibility="hidden";
document.getElementById("canvas5").style.cursor="none";
document.getElementById("handwireattach").style.visibility="visible";
document.getElementById("handwireattach").style.animation="handwireattach11 4s forwards";
document.getElementById("transwireopen1").style.visibility="hidden"

document.getElementById("wireopenattach").style.animation="wireopenattach11 4s forwards";
setTimeout(function()
            { 
            document.getElementById("step5e").style.visibility="visible";
            document.getElementById("handwireattach").style.visibility="hidden";
            document.getElementById("transpinclose").style.visibility="visible";
            document.getElementById("arrow5e").style.visibility="visible";
            document.getElementById("canvas5").style.cursor="url('images/handsmall.png'),auto";
            },4000);
}

function transpinclose()
{document.getElementById("canvas5").style.cursor="none";
document.getElementById("arrow5e").style.visibility="hidden";
document.getElementById("transpinclose").style.visibility="hidden";
document.getElementById("handpinclose1").style.visibility="visible";
document.getElementById("handpinclose1").style.animation="handpinclose111 4s forwards";
document.getElementById("pin2").style.animation="transpinclose11 4s forwards";
setTimeout(function()
            { 
            document.getElementById("step5f").style.visibility="visible";
            document.getElementById("handpinclose1").style.visibility="hidden";
            document.getElementById("transmachineclosecover").style.visibility="visible";
            document.getElementById("arrow5f").style.visibility="visible";
            document.getElementById("canvas5").style.cursor="url('images/handsmall.png'),auto";
            },4000);

}

function transmachineclosecover()
{ 
document.getElementById("canvas5").style.cursor="none";
document.getElementById("arrow5f").style.visibility="hidden";
document.getElementById("transmachineclosecover").style.visibility="hidden";
document.getElementById("handclosemachinecover").style.visibility="visible";
document.getElementById("handclosemachinecover").style.animation="handclosemachinecover11 4s forwards";

document.getElementById("machineupcover").style.animation="transmachineclosecover11 4s forwards";
setTimeout(function()
            {
            document.getElementById("transmachineopencoveragain").style.visibility="visible";
            document.getElementById("step5g").style.visibility="visible";
            document.getElementById("arrow5g").style.visibility="visible";
            document.getElementById("handclosemachinecover").style.visibility="hidden";
            document.getElementById("canvas5").style.cursor="url('images/handsmall.png'),auto";
            },4000);

}

function machineopencoveragain()
{   document.getElementById("canvas5").style.cursor="none";
    document.getElementById("arrow5g").style.visibility="hidden";
    document.getElementById("handopenmachinecoveragain").style.visibility="visible";
    document.getElementById("transmachineopencoveragain").style.visibility="hidden";
    document.getElementById("handopenmachinecoveragain").style.animation="handopenmachinecoveragain11 4s forwards";
    document.getElementById("machineupcover").style.animation="machineopencoveragain11 4s forwards";
    setTimeout(function()
            {   
            document.getElementById("handopenmachinecoveragain").style.visibility="hidden";
            document.getElementById("transpinopenagain").style.visibility="visible"; 
            document.getElementById("step5h").style.visibility="visible";
            document.getElementById("arrow5h").style.visibility="visible";
            document.getElementById("canvas5").style.cursor="url('images/handsmall.png'),auto";
            },4000);
}

function pinopenagain()
{ 
document.getElementById("canvas5").style.cursor="none";
document.getElementById("arrow5h").style.visibility="hidden";
document.getElementById("handpinopenagain1").style.visibility="visible";
document.getElementById("handpinopenagain1").style.animation="handpinopenagain11 4s forwards";
document.getElementById("transpinopenagain").style.visibility="hidden";
document.getElementById("pin2").style.animation="pinopenagain11 4s forwards";
setTimeout(function()
            { 
            document.getElementById("transremovewireopen1").style.visibility="visible";
            document.getElementById("step5i").style.visibility="visible";
            document.getElementById("arrow5i").style.visibility="visible";
            document.getElementById("handpinopenagain1").style.visibility="hidden";
            document.getElementById("canvas5").style.cursor="auto";
            },4000);

}

function removewireopen()
{
document.getElementById("canvas5").style.cursor="none";
document.getElementById("step5i").style.visibility="hidden";
document.getElementById("arrow5i").style.visibility="hidden";
document.getElementById("handwireremoveagain").style.visibility="visible";
document.getElementById("handwireremoveagain").style.animation="handwireremoveagain11 4s forwards"; 
document.getElementById("transremovewireopen1").style.visibility="hidden";
document.getElementById("wireopenattach").style.animation="removewireopen11 4s forwards";
setTimeout(function()
            {
                document.getElementById("arrow5").style.visibility="visible";
                document.getElementById("nextButton6").style.visibility="visible";
                document.getElementById("handwireattach").style.visibility="hidden";
                document.getElementById("canvas5").style.cursor="auto";
            },4000);
}


function openmachinecover()
{
document.getElementById("arrowopenmcvr").style.visibility="hidden";
   
document.getElementById("machinecover").style.animation="openmachinecover11 3s forwards"; 
    setTimeout(function()
            {  
            document.getElementById("machinecover").style.visibility="hidden";
            document.getElementById("machineupcover").style.visibility="visible";
            document.getElementById("machineupcover").style.animation="machineupcoveropen11 3s forwards";
             setTimeout(function()
            { 
            document.getElementById("step5f").style.visibility="visible";
            document.getElementById("arrowpin2").style.visibility="visible";
            document.getElementById("pin2").style.visibility="hidden"; 
            document.getElementById("pinclickopen").style.visibility="visible"; 
             
            },2000);    
           
            },2000); 
}

function pinclickopen()
{
    // document.getElementById("pin2").style.visibility="hidden";
    document.getElementById("arrowpin2").style.visibility="hidden";
    document.getElementById("pinclickopen").style.visibility="visible";
    document.getElementById("pinclickopen").style.animation="pinclickopen11 4s forwards";
      setTimeout(function()
            { 
            document.getElementById("step5g").style.visibility="visible";
            document.getElementById("wireopen1").style.visibility="hidden"; 
            document.getElementById("wireopenremove").style.visibility="visible";
            document.getElementById("arrowwireopen1").style.visibility="visible";

            },4000); 
}

function wireopenremove()
{
    
    document.getElementById("arrowwireopen1").style.visibility="hidden";
    document.getElementById("wireopenremove").style.animation="wireopenremove11 4s forwards";
    setTimeout(function()
            { 
                document.getElementById("arrow5").style.visibility="visible";
                document.getElementById("nextButton6").style.visibility="visible";
            },4000); 
}


function addsplicer()
{
    document.getElementById("splicer1").style.visibility="visible";
    document.getElementById("addsplicerbutton").style.visibility="hidden";
    document.getElementById("arrowaddsplicer").style.visibility="hidden";
    document.getElementById("splicer1").style.animation="splicer11 4s forwards";
    setTimeout(function()
            {
            document.getElementById("step6b").style.visibility="visible";
            document.getElementById("arrowspl1").style.visibility="visible";

            
            },4000);
}

function zoom_splicer()
{
document.getElementById("arrowspl1").style.visibility="hidden";
document.getElementById("closetop_zoom").style.visibility="visible";
document.getElementById("p2").style.visibility="visible";
document.getElementById("p1").style.visibility="visible";
document.getElementById("transsplice").style.visibility="visible";
document.getElementById("arrowscene6").style.visibility="visible";


 setTimeout(function()
            {
                document.getElementById("step6c").style.visibility="visible"


            },1000);

}

function opentop_zoom()

{
document.getElementById("pininsideleft").style.visibility="visible";
document.getElementById("pininsideright").style.visibility="visible";
document.getElementById("p2").style.animation="p2open11 4s forwards";
document.getElementById("p1").style.animation="p1open11 4s forwards";
setTimeout(function()
            {
            // document.getElementById("canvas6").style.cursor="url('images/handsmall.png'),auto";
            document.getElementById("step6e").style.visibility="visible";
            document.getElementById("p2close").style.visibility="visible";
            document.getElementById("p1close").style.visibility="visible";
            document.getElementById("arrowspin61").style.visibility="visible";

            },4000);
setTimeout(function()
            { 
                document.getElementById("canvas6").style.cursor="url('images/handsmall.png'),auto";
            },2000);
document.getElementById("transsplice").style.visibility="hidden";
document.getElementById("arrowscene6").style.visibility="hidden";
             
}

function plcaewire1()
{
document.getElementById("handwireplace1").style.visibility="visible";
document.getElementById("arrowwire61").style.visibility="hidden";
document.getElementById("placewireopen1").style.animation="placewireopen11 4s forwards";
document.getElementById("handwireplace1").style.animation="handwireplace111 4s forwards";
 setTimeout(function()
            {
            document.getElementById("handwireplace1").style.visibility="hidden";
            document.getElementById("arrowwire62").style.visibility="visible" ;
            },4000);
}

function placewire2()
{
    document.getElementById("handwireplace2").style.visibility="visible";
    document.getElementById("arrowwire62").style.visibility="hidden" ;
    document.getElementById("handwireplace2").style.animation="handwireplace222 4s forwards";
    document.getElementById("placewireopen2").style.animation="placewireopen22 4s forwards";
    setTimeout(function()
            {
            document.getElementById("canvas6").style.cursor="url('images/handsmall.png'),auto";
            document.getElementById("handwireplace2").style.visibility="hidden";
            document.getElementById("arrowspin63").style.visibility="visible" 
            document.getElementById("step6g").style.visibility="visible" 
            },4000);
}

function openpinleft()
{
document.getElementById("canvas6").style.cursor="none";
document.getElementById("handpinopenleft").style.visibility="visible";
document.getElementById("handpinopenleft").style.animation="handpinopenleft11 2s forwards";


document.getElementById("arrowspin61").style.visibility="hidden";
document.getElementById("pininsideleft").style.animation="pininsideleft11 2s forwards";
setTimeout(function()
            {
                document.getElementById("arrowspin62").style.visibility="visible";
                document.getElementById("pininsideleft").style.visibility="hidden";
                document.getElementById("pininsideleftclose").style.visibility="visible";
                document.getElementById("canvas6").style.cursor="url('images/handsmall.png'),auto";
                document.getElementById("handpinopenleft").style.visibility="hidden";
                 },2000);
}

function openpinright()
{
document.getElementById("canvas6").style.cursor="none";
document.getElementById("handpinopenright").style.visibility="visible";
document.getElementById("arrowspin62").style.visibility="hidden";
document.getElementById("handpinopenright").style.animation="handpinopenright11 2s forwards";

// setTimeout(function()

            // {
// document.getElementById("handpinopenright").style.visibility="hidden";
   // },4000);
document.getElementById("pininsideright").style.animation="pininsideright11 2s forwards";
// document.getElementById("handpinopenright").style.animation="handpinopenright11 2s forwards";

setTimeout(function()

            {
        document.getElementById("canvas6").style.cursor="auto";
        document.getElementById("handpinopenright").style.visibility="hidden";
        document.getElementById("step6f").style.visibility="visible";
        document.getElementById("arrowwire61").style.visibility="visible";
        document.getElementById("pininsideright").style.visibility="hidden";
        document.getElementById("pininsiderightclose").style.visibility="visible";
        document.getElementById("handpinopenright").style.visibility="hidden";
                  // document.getElementById("pininsideleftclose").style.visibility="visible";
                 },2000);
}


function closepinleft()
{
document.getElementById("canvas6").style.cursor="none";
document.getElementById("handpincloseleft").style.visibility="visible";
document.getElementById("arrowspin63").style.visibility="hidden";
document.getElementById("handpincloseleft").style.animation="handpincloseleft11 4s forwards";
document.getElementById("pininsideleftclose").style.animation="pininsideleftclose11 4s forwards";
setTimeout(function()
            { 
            document.getElementById("arrowspin64").style.visibility="visible";
            document.getElementById("handpincloseleft").style.visibility="hidden";
            document.getElementById("canvas6").style.cursor="url('images/handsmall.png'),auto";
            },4000);
     
}

function closepinright()
{
document.getElementById("canvas6").style.cursor="none";
document.getElementById("handpincloseright").style.visibility="visible";
document.getElementById("arrowspin64").style.visibility="hidden";
document.getElementById("handpincloseright").style.animation="handpincloseright11 4s forwards";
document.getElementById("pininsiderightclose").style.animation="pininsiderightclose11 4s forwards";

setTimeout(function()
            {
                document.getElementById("canvas6").style.cursor="auto";
                document.getElementById("handpincloseright").style.visibility="hidden";
                document.getElementById("step6h").style.visibility="visible";
                document.getElementById("transspliceclose").style.visibility="visible";
                document.getElementById("arrowscene6close").style.visibility="visible";
            },4000);
}

function closetop_zoom()
{
document.getElementById("transspliceclose").style.visibility="hidden";
document.getElementById("arrowscene6close").style.visibility="hidden";
document.getElementById("p2close").style.animation="p2close11 4s forwards";
document.getElementById("p1close").style.animation="p1close11 4s forwards";
setTimeout(function()
            {
            document.getElementById("transscreenoff").style.visibility="visible";
            document.getElementById("arrowscreenoff").style.visibility="visible";
            document.getElementById("step6i").style.visibility="visible";

        
            },4000);
}

function screenoffview()
{
document.getElementById("mattop").style.visibility="visible";
document.getElementById("screenoff1").style.visibility="visible";
document.getElementById("transscreenoff").style.visibility="hidden";
document.getElementById("arrowscreenoff").style.visibility="hidden";

document.getElementById("transscreenon").style.visibility="visible";
document.getElementById("arrowscreenon").style.visibility="visible";
document.getElementById("step6j").style.visibility="visible";
document.getElementById("canvas6").style.cursor="url('images/handfinger.png'),auto";
}

function transscreenon()
{
document.getElementById("transscreenon").style.visibility="hidden";
document.getElementById("arrowscreenon").style.visibility="hidden";
document.getElementById("display1").style.visibility="visible";
document.getElementById("transviewclick").style.visibility="visible";
document.getElementById("arrowsetkey").style.visibility="visible";
document.getElementById("step6k").style.visibility="visible";
}

function transviewclick()
{
document.getElementById("transviewclick").style.visibility="hidden";
document.getElementById("arrowsetkey").style.visibility="hidden";
document.getElementById("screenon1").style.visibility="visible";

setTimeout(function()
            {
              document.getElementById("setclickimage1").style.visibility="visible";
              document.getElementById("arrow6").style.visibility="visible";
              document.getElementById("nextButton7").style.visibility="visible";
              document.getElementById("canvas6").style.cursor="auto";  
            },2000);
}











/*
*/


function addsplicersecond()
{
      document.getElementById("splicer1second").style.visibility="visible";
     
      document.getElementById("splicer1second").style.animation="splicer11second 4s forwards";
      setTimeout(function()
            { 
              document.getElementById("step7b").style.visibility="visible";    
            },4000);
}



function zoom_splicersecond()
{
document.getElementById("arrowsplicerclosed").style.visibility="hidden";
document.getElementById("step7c").style.visibility="visible";
document.getElementById("closetop_zoomsecond").style.visibility="visible";
document.getElementById("bluewirejoint").style.visibility="visible";
document.getElementById("arrowspin633").style.visibility="visible";
document.getElementById("pininsideleftclosesecond").style.visibility="visible";
document.getElementById("pininsiderightclosesecond").style.visibility="visible";
document.getElementById("p2closesecond").style.visibility="visible";
document.getElementById("p1closesecond").style.visibility="visible";
document.getElementById("transsplicesecond").style.visibility="visible";
document.getElementById("arrowsplicedclosed").style.visibility="visible";



}

function opentop_zoomsecond(){

document.getElementById("p2closesecond").style.animation="p2open112 4s forwards";
document.getElementById("p1closesecond").style.animation="p1open112 4s forwards";
document.getElementById("transsplicesecond").style.visibility="hidden";
document.getElementById("arrowsplicedclosed").style.visibility="hidden";
setTimeout(function()
            { 
            document.getElementById("step7d").style.visibility="visible"; 
            // document.getElementById("canvas7").style.cursor="url('images/handsmall.png'),auto";  
            },4000);
setTimeout(function()
            { 
             document.getElementById("canvas7").style.cursor="url('images/handsmall.png'),auto";
            },2000);

             
}


function openpinleftsecond()
{
 document.getElementById("canvas7").style.cursor="none";
 document.getElementById("handpinopenleft2").style.visibility="visible";
 document.getElementById("handpinopenleft2").style.animation="handpinopenleft22 4s forwards";

document.getElementById("pininsideleftclosesecond").style.animation="pininsideleft112 4s forwards";
setTimeout(function()
            { 
            document.getElementById("handpinopenleft2").style.visibility="hidden"; 
            document.getElementById("canvas7").style.cursor="url('images/handsmall.png'),auto";  
            },4000);
document.getElementById("arrowspin633").style.visibility="hidden";
document.getElementById("arrowspin644").style.visibility="visible";
}

function openpinrightsecond()
{

document.getElementById("canvas7").style.cursor="none";
document.getElementById("handpinopenright2").style.visibility="visible";
document.getElementById("handpinopenright2").style.animation="handpinopenright22 4s forwards";

document.getElementById("pininsiderightclosesecond").style.animation="pininsideright112 4s forwards";
document.getElementById("arrowspin644").style.visibility="hidden";
setTimeout(function()
            { 
            document.getElementById("step7e").style.visibility="visible";   
            document.getElementById("arrowsbluewirejoint").style.visibility="visible";
            document.getElementById("handpinopenright2").style.visibility="hidden";
            document.getElementById("transbluewirejoint").style.visibility="visible";
            document.getElementById("canvas7").style.cursor="url('images/handsmall.png'),auto"; 
        },4000);
}

function putbluewirejoint()

{   document.getElementById("transbluewirejoint").style.visibility="hidden";
    document.getElementById("canvas7").style.cursor="none"; 
    document.getElementById("handputjointwire").style.visibility="visible";
    document.getElementById("handputjointwire").style.animation="handputjointwire11 4s forwards";
    document.getElementById("bluewirejoint").style.animation="putbluewirejoint11 4s forwards";
    document.getElementById("arrowsbluewirejoint").style.visibility="hidden";
     setTimeout(function()
            { 
            document.getElementById("canvas7").style.cursor="url('images/handsmall.png'),auto"; 
            document.getElementById("handputjointwire").style.visibility="hidden";
            document.getElementById("step7f").style.visibility="visible";
            document.getElementById("sleevecanvas7").style.visibility="visible";
            document.getElementById("transsleevecanvas7").style.visibility="visible";
            document.getElementById("arrowsleevecanvas7").style.visibility="visible";
        },4000);
}


function sleevecanva7animation(){
        document.getElementById("canvas7").style.cursor="none"; 
     // document.getElementById("handputsleeve").style.visibility="visible";
        document.getElementById("arrowsleevecanvas7").style.visibility="hidden";
        document.getElementById("transsleevecanvas7").style.visibility="hidden";
        document.getElementById("handputsleeve").style.visibility="visible";
        document.getElementById("handputsleeve").style.animation="handputsleeve11 4s forwards";
        document.getElementById("sleevecanvas7").style.animation="sleevecanvas711 4s forwards";
        setTimeout(function()
        {
            document.getElementById("handputsleeve").style.visibility="hidden";
            document.getElementById("canvas7").style.cursor="auto"; 
            document.getElementById("step7g").style.visibility="visible";
            document.getElementById("transheatview").style.visibility="visible";
            document.getElementById("arrowtransheatview").style.visibility="visible";
            document.getElementById("canvas7").style.cursor="auto"; 

          
            },4000);
}

function transheatview(){
    document.getElementById("transheatview").style.visibility="hidden";
    document.getElementById("arrowtransheatview").style.visibility="hidden";
    document.getElementById("mattopcanvas7").style.visibility="visible";
    document.getElementById("heaterzoom").style.visibility="visible";
    document.getElementById("step7h").style.visibility="visible";
    document.getElementById("bluewirejointhide").style.visibility="visible";
    document.getElementById("sleevecanvas7hide").style.visibility="visible";
    document.getElementById("transwiresleeveanimation").style.visibility="visible";
    document.getElementById("arrowstranswiresleeveanimation").style.visibility="visible";
    document.getElementById("bluewirejoint").style.visibility="hidden";
    document.getElementById("sleevecanvas7").style.visibility="hidden";
    document.getElementById("canvas7").style.cursor="url('images/handsmall.png'),auto"; 
        // document.getElementById("step7c").style.visibility="visible";
}


function transwiresleeveanimation(){
    document.getElementById("canvas7").style.cursor="none"; 
   
    document.getElementById("transwiresleeveanimation").style.visibility="hidden";
    document.getElementById("arrowstranswiresleeveanimation").style.visibility="hidden";
    document.getElementById("handputwiresleeve").style.visibility="visible";
    document.getElementById("handputwiresleeve").style.animation="handputwiresleeve11 4s forwards";
    document.getElementById("bluewirejointhide").style.animation="bluewireheat11 4s forwards";
   
    document.getElementById("sleevecanvas7hide").style.animation="sleeveheat11 4s forwards";
    setTimeout(function()
            { 
            document.getElementById("canvas7").style.cursor="url('images/handfinger.png'),auto"; 
            document.getElementById("handputwiresleeve").style.visibility="hidden";
            document.getElementById("step7i").style.visibility="visible";
            document.getElementById("transclickheat").style.visibility="visible";
            document.getElementById("arrowstransheat").style.visibility="visible";
            // document.getElementById("arrowstransclick").style.visibility="visible";
            },4000);
}


function transclickheat1(){
    document.getElementById("canvas7").style.cursor="url('images/handsmall.png'),auto";
    document.getElementById("step7j").style.visibility="visible";
    document.getElementById("transclickheat").style.visibility="hidden";
    document.getElementById("arrowstransheat").style.visibility="hidden";
    // document.getElementById("arrowstransclick").style.visibility="hidden";
    document.getElementById("bluewirejointhide").style.visibility="hidden";
    document.getElementById("sleevecanvas7hide").style.visibility="hidden";
    document.getElementById("bluewirejointhideheat").style.visibility="visible";

    document.getElementById("sleevecanvas7hideheat").style.visibility="visible";
    document.getElementById("transclickheatwire").style.visibility="visible";
    document.getElementById("arrowstransclickheatwire").style.visibility="visible";

}
function transclickheatwire()
{
document.getElementById("canvas7").style.cursor="none";
document.getElementById("handputwiresleevefromheater").style.visibility="visible";
document.getElementById("transclickheatwire").style.visibility="hidden";
document.getElementById("arrowstransclickheatwire").style.visibility="hidden";
document.getElementById("handputwiresleevefromheater").style.visibility="visible";
document.getElementById("handputwiresleevefromheater").style.animation="handputwiresleevefromheater11 4s forwards";
document.getElementById("bluewirejointhideheat").style.animation="bluewirejointhideheat11 4s forwards"; document.getElementById("sleevecanvas7hideheat").style.animation="sleevecanvas7hideheat11 4s forwards";
setTimeout(function()
            {
            document.getElementById("canvas7").style.cursor="auto";
            document.getElementById("handputwiresleevefromheater").style.visibility="hidden";
            document.getElementById("arrow7").style.visibility="visible"; 
            document.getElementById("nextButton8").style.visibility="visible"; 
             },4000);
}



function  addtray()
{

document.getElementById("addtray").style.visibility="hidden" ;
document.getElementById("arrowaddtray").style.visibility="hidden" ;
document.getElementById("tray").style.visibility="visible" ;
document.getElementById("tray").style.animation="tray1 2s forwards";
setTimeout(function()
            {   document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;
                document.getElementById("step8b").style.visibility="visible";
                document.getElementById("transsplicedwirefull10").style.visibility="visible";
                document.getElementById("arrowssplicedwirefull1").style.visibility="visible";
        },2000);
}

function put1()
{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("arrowssplicedwirefull10").style.visibility="hidden"; 
    document.getElementById("transsplicedwirefull11").style.visibility="hidden";
    document.getElementById("handwire1").style.visibility="visible";
    document.getElementById("handwire1").style.animation="handwire1 4s forwards";
    document.getElementById("splicedwirefull1").style.animation="trayput1 4s forwards";
    setTimeout(function()
            {   
                document.getElementById("step8c").style.visibility="visible";
                document.getElementById("handwire1").style.visibility="hidden";
                document.getElementById("canvas8").style.cursor="auto";
               
        },4000);
   
}

function put2()
{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("transsplicedwirefull12").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull9").style.visibility="hidden";
    document.getElementById("handwire2").style.visibility="visible";
    document.getElementById("handwire2").style.animation="handwire2 4s forwards";
    document.getElementById("splicedwirefull2").style.animation="trayput2 4s forwards"; 
    setTimeout(function()
    { 
    document.getElementById("handwire2").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull10").style.visibility="visible";
    document.getElementById("transsplicedwirefull11").style.visibility="visible"; 
    document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;    
    },4000);

    
}

function put3()
{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("transsplicedwirefull13").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull8").style.visibility="hidden";
    document.getElementById("handwire3").style.visibility="visible";
    document.getElementById("handwire3").style.animation="handwire3 4s forwards";
    document.getElementById("splicedwirefull3").style.animation="trayput3 4s forwards"; 
    setTimeout(function()
    {
    document.getElementById("arrowssplicedwirefull9").style.visibility="visible"; 
    document.getElementById("handwire3").style.visibility="hidden";
    document.getElementById("transsplicedwirefull12").style.visibility="visible"; 
    document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;  
    },4000);
   
}


function put4()
{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("transsplicedwirefull14").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull7").style.visibility="hidden";
    document.getElementById("handwire4").style.visibility="visible";
    document.getElementById("handwire4").style.animation="handwire4 4s forwards";
    document.getElementById("splicedwirefull4").style.animation="trayput4 4s forwards"; 
    setTimeout(function()
    {   
    document.getElementById("handwire4").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull8").style.visibility="visible";
    document.getElementById("transsplicedwirefull13").style.visibility="visible"; 
    document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;   
    },4000);
    
}

function put5(){
document.getElementById("canvas8").style.cursor="none";
document.getElementById("transsplicedwirefull15").style.visibility="hidden";
document.getElementById("arrowssplicedwirefull6").style.visibility="hidden";
document.getElementById("handwire5").style.visibility="visible";
document.getElementById("handwire5").style.animation="handwire5 4s forwards";
document.getElementById("splicedwirefull5").style.animation="trayput5 4s forwards"; 
    setTimeout(function()
    {
        document.getElementById("arrowssplicedwirefull7").style.visibility="visible";
        document.getElementById("handwire5").style.visibility="hidden";
        document.getElementById("transsplicedwirefull14").style.visibility="visible"; 
        document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;     
    },4000);
    
}

function put6()
{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("transsplicedwirefull16").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull5").style.visibility="hidden";
    document.getElementById("handwire6").style.visibility="visible";
    document.getElementById("handwire6").style.animation="handwire6 4s forwards";
    document.getElementById("splicedwirefull6").style.animation="trayput6 4s forwards"; 
    setTimeout(function()
    {
        document.getElementById("handwire6").style.visibility="hidden";
        document.getElementById("arrowssplicedwirefull6").style.visibility="visible";
        document.getElementById("transsplicedwirefull15").style.visibility="visible"; 
        document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;   
    },4000);
  
}

function put7()

{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("transsplicedwirefull17").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull4").style.visibility="hidden";
    document.getElementById("handwire7").style.visibility="visible";
    document.getElementById("handwire7").style.animation="handwire7 4s forwards";
    document.getElementById("splicedwirefull7").style.animation="trayput7 4s forwards";
    setTimeout(function()
    {
        document.getElementById("arrowssplicedwirefull5").style.visibility="visible";
        document.getElementById("transsplicedwirefull16").style.visibility="visible";
        document.getElementById("handwire7").style.visibility="hidden";
        document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;   
    },4000);

    
}

function put8()

{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("transsplicedwirefull18").style.visibility="hidden";
    document.getElementById("handwire8").style.visibility="visible";
    document.getElementById("handwire8").style.animation="handwire8 4s forwards";
    document.getElementById("arrowssplicedwirefull3").style.visibility="hidden";
    document.getElementById("splicedwirefull8").style.animation="trayput8 4s forwards"; 
    setTimeout(function()
    {
        document.getElementById("arrowssplicedwirefull4").style.visibility="visible";
        document.getElementById("handwire8").style.visibility="hidden";
        document.getElementById("transsplicedwirefull17").style.visibility="visible";
        document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;
    },4000);
   
}

function put9()
{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("transsplicedwirefull19").style.visibility="hidden";
    document.getElementById("arrowssplicedwirefull2").style.visibility="hidden";
    document.getElementById("handwire9").style.visibility="visible";
    document.getElementById("handwire9").style.animation="handwire9 4s forwards";
    document.getElementById("splicedwirefull9").style.animation="trayput9 4s forwards";
    setTimeout(function()
    {   document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;
        document.getElementById("transsplicedwirefull18").style.visibility="visible";
        document.getElementById("handwire9").style.visibility="hidden"; 
        document.getElementById("arrowssplicedwirefull3").style.visibility="visible"; 
    },4000);
}

function put10()
{   document.getElementById("canvas8").style.cursor="none";
    document.getElementById("arrowssplicedwirefull1").style.visibility="hidden";
    document.getElementById("transsplicedwirefull10").style.visibility="hidden";
    document.getElementById("handwire10").style.visibility="visible";
    document.getElementById("handwire10").style.animation="handwire10 4s forwards";
    document.getElementById("splicedwirefull10").style.animation="trayput10 4s forwards";
    setTimeout(function()
    {   document.getElementById("canvas8").style.cursor="url('images/handsmall.png'),auto" ;
        document.getElementById("handwire10").style.visibility="hidden";
        document.getElementById("transsplicedwirefull19").style.visibility="visible";
        document.getElementById("arrowssplicedwirefull2").style.visibility="visible";   
    },4000);
    
}




























































