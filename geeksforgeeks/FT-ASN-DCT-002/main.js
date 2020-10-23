function navNext0()

{

    document.getElementById("canvas0").style.visibility="hidden";

    document.getElementById("canvas1").style.visibility="visible";

    document.getElementById("arrow0").style.visibility="hidden";

    document.getElementById("person").style.visibility="visible";
		document.getElementById("trans_wear_goggle").style.visibility="visible";
		document.getElementById("arrow1aa").style.visibility="visible";

		document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";

	

 }

 function navNext1()

{

    document.getElementById("canvas1").style.visibility="hidden";

    document.getElementById("canvas2").style.visibility="visible";

    document.getElementById("arrow1").style.visibility="hidden";
		document.getElementById("nextButton1").style.visibility="hidden";

		document.getElementById("add_strip_button").style.visibility="visible";

		document.getElementById("arrow2a").style.visibility="visible";
 }


 function navNext2()

 {

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";

        document.getElementById("add_buckle_button").style.visibility="visible";
        document.getElementById("arrow3a").style.visibility="visible";

}

function navNext3()

 {

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";
       

}

function navNext4()

 {

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";

        document.getElementById("add_poleclemp_button").style.visibility="visible";
 }


 function navNext5()

 {

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";


    }

  function navNext6()
  {
  	 document.getElementById("canvas6").style.visibility="hidden";

     document.getElementById("canvas7").style.visibility="visible";
  }

  function navNext7()
  {
  	 document.getElementById("canvas7").style.visibility="hidden";

     document.getElementById("canvas8").style.visibility="visible";
  }

  function navNext8()
  {
  	 document.getElementById("canvas8").style.visibility="hidden";

     document.getElementById("canvas9").style.visibility="visible";
  }

  function navNext9()
  {
  	 document.getElementById("canvas9").style.visibility="hidden";

     document.getElementById("canvas9a").style.visibility="visible";
  }

  function navNext9a()
  {
  	 document.getElementById("canvas9a").style.visibility="hidden";

     document.getElementById("canvas10").style.visibility="visible";
  }




  function navNext10()
  {
  	 document.getElementById("canvas10").style.visibility="hidden";

     document.getElementById("canvas11").style.visibility="visible";
  }

  function navNext11()
  {
  	 document.getElementById("canvas11").style.visibility="hidden";

     document.getElementById("canvas12").style.visibility="visible";
  }


   function navNext12()
  {
  document.getElementById("canvas12").style.visibility="hidden";

  document.getElementById("canvas13").style.visibility="visible";
  document.getElementById("canvas13").style.cursor="url('images/handsmalls.png'),auto";
  }

   function navNext13()
  {
  	 document.getElementById("canvas13").style.visibility="hidden";

     document.getElementById("canvas14").style.visibility="visible";

    document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";
  }













function wear_goggle()
{
document.getElementById("text_goggle").style.visibility="hidden";
document.getElementById("trans_wear_goggle").style.visibility="hidden";
document.getElementById("arrow1aa").style.visibility="hidden";
document.getElementById("wear_goggle").style.visibility="hidden";
document.getElementById("wear_goggle1").style.visibility="visible";
document.getElementById("wear_goggle1").style.animation="wear_goggle1 2s forwards";
setTimeout(function()
        {
      document.getElementById("text_helmet").style.visibility="visible";
			document.getElementById("trans_wear_helmet").style.visibility="visible";
			document.getElementById("step1b").style.visibility="visible";
			document.getElementById("arrow1b").style.visibility="visible";
        },2000);

}



function wear_helmet()
{
document.getElementById("text_helmet").style.visibility="hidden";
document.getElementById("arrow1b").style.visibility="hidden";
document.getElementById("trans_wear_helmet").style.visibility="hidden";
document.getElementById("wear_helmet").style.visibility="hidden";
document.getElementById("wear_helmet1").style.visibility="visible";
document.getElementById("wear_helmet1").style.animation="wear_helmet1 2s forwards";

setTimeout(function()
        {
      document.getElementById("text_harness").style.visibility="visible";
			document.getElementById("trans_wear_harness").style.visibility="visible";
			document.getElementById("step1c").style.visibility="visible";
			document.getElementById("arrow1c").style.visibility="visible";
        },2000);
}



function wear_harness()
{	document.getElementById("text_harness").style.visibility="hidden";
	document.getElementById("arrow1c").style.visibility="hidden";
	document.getElementById("trans_wear_harness").style.visibility="hidden";
	document.getElementById("wear_harness").style.visibility="hidden";
	document.getElementById("wear_harness1").style.visibility="visible";
	document.getElementById("wear_harness1").style.animation="wear_harness1 2s forwards";

	setTimeout(function()
        {
		document.getElementById("text_gloves").style.visibility="visible";
		document.getElementById("trans_wear_right").style.visibility="visible";
		document.getElementById("step1d").style.visibility="visible";
		document.getElementById("arrow1d").style.visibility="visible";

      },2000);

}

function wear_golvesright()
{
document.getElementById("arrow1d").style.visibility="hidden";
document.getElementById("trans_wear_right").style.visibility="hidden";
document.getElementById("wear_handright").style.visibility="hidden";
document.getElementById("wear_handright1").style.visibility="visible";
document.getElementById("wear_handright1").style.animation="wear_golvesright1 2s forwards";

setTimeout(function()
        {
		document.getElementById("trans_wear_left").style.visibility="visible";
		document.getElementById("arrow1e").style.visibility="visible";
		
        },2000);

}

function wear_golvesleft()
{document.getElementById("text_gloves").style.visibility="hidden";
document.getElementById("arrow1e").style.visibility="hidden";
document.getElementById("trans_wear_left").style.visibility="hidden";
document.getElementById("wear_handleft").style.visibility="hidden";
document.getElementById("wear_handleft1").style.visibility="visible";
document.getElementById("wear_handleft1").style.animation="wear_golvesleft1 2s forwards";

setTimeout(function()
        {
    document.getElementById("text_boots").style.visibility="visible";
		document.getElementById("trans_wear_boots").style.visibility="visible";
		document.getElementById("step1e").style.visibility="visible";
		document.getElementById("arrow1f").style.visibility="visible";
        },2000);

}



function wear_boots()
{	document.getElementById("text_boots").style.visibility="hidden";
	document.getElementById("arrow1f").style.visibility="hidden";
	document.getElementById("trans_wear_boots").style.visibility="hidden";
	document.getElementById("wear_boots").style.visibility="hidden";
	document.getElementById("wear_boots1").style.visibility="visible";
	document.getElementById("wear_boots1").style.animation="wear_boots1 2s forwards";

	setTimeout(function()
        {
		
		document.getElementById("arrow1").style.visibility="visible";
		document.getElementById("nextButton1").style.visibility="visible";

        },2000);

}


function add_strip()
{ document.getElementById("add_strip_button").style.visibility="hidden";
	document.getElementById("arrow2a").style.visibility="hidden";
	document.getElementById("strip").style.visibility="visible";
	document.getElementById("strip").style.animation="strip1 4s forwards";
	document.getElementById("cutstrip").style.visibility="visible";
	document.getElementById("cutstrip").style.animation="cutstrip1 4s forwards";

	setTimeout(function()
        {
    document.getElementById("step2b").style.visibility="visible";
    document.getElementById("text_strap_canva2").style.visibility="visible";
		document.getElementById("add_stripcutter_button").style.visibility="visible";
		document.getElementById("arrow2b").style.visibility="visible";
        },4000);
}


function add_stripcutter()
{ document.getElementById("text_strap_canva2").style.visibility="hidden";
	document.getElementById("add_stripcutter_button").style.visibility="hidden";
	document.getElementById("arrow2b").style.visibility="hidden";
	document.getElementById("cutteropen").style.visibility="visible";
	document.getElementById("cutteropen").style.animation="cutteropen1 4s forwards";


	setTimeout(function()
        {
		
		document.getElementById("text_cuttingtool_canva2").style.visibility="visible";
		document.getElementById("transcutteropen").style.visibility="visible";
		document.getElementById("arrow2c").style.visibility="visible";
		document.getElementById("step2c").style.visibility="visible";
        },4000);
}

function transcutteropen()
{ document.getElementById("text_cuttingtool_canva2").style.visibility="hidden";
	document.getElementById("cutteropen").style.visibility="hidden";
  document.getElementById("cutteropen_hand").style.visibility="visible";
	document.getElementById("transcutteropen").style.visibility="hidden";
	document.getElementById("arrow2c").style.visibility="hidden";
  document.getElementById("cutteropen_hand").style.animation="cutteropen11 4s forwards";

	setTimeout(function()
        {
		document.getElementById("cutteropen_hand").style.visibility="hidden";
		document.getElementById("cutterclose").style.visibility="visible";
		setTimeout(function()
        {
        document.getElementById("cutterclose").style.visibility="hidden";
        document.getElementById("cutteropen_hand1").style.visibility="visible";
        document.getElementById("cutstrip").style.animation="cutstrip11 4s forwards";
        document.getElementById("cutteropen_hand1").style.animation="cutteropen11_back 3s forwards";

		setTimeout(function()
        {
		document.getElementById("cutteropen_hand1").style.visibility="hidden";
		document.getElementById("cutteropen").style.visibility="visible";
		},3000);
		},1000);
		setTimeout(function()
        {
    document.getElementById("step2d").style.visibility="visible";
		document.getElementById("arrow2").style.visibility="visible";
		document.getElementById("nextButton2").style.visibility="visible";
		},4000);
},4000);
}


function add_buckle()
{
document.getElementById("add_buckle_button").style.visibility="hidden";
document.getElementById("arrow3a").style.visibility="hidden";
document.getElementById("buckleup1").style.visibility="visible";
document.getElementById("buckleup1").style.animation="buckleup1 2s forwards";

setTimeout(function()
        {
    document.getElementById("text_buckle_canva3").style.visibility="visible";
    document.getElementById("step3b").style.visibility="visible";
		document.getElementById("transbuckleup").style.visibility="visible";
		document.getElementById("arrow3b").style.visibility="visible";

		},2000);
}

function trans_buckleside()
{
document.getElementById("text_buckle_canva3").style.visibility="hidden";
document.getElementById("transbuckleup").style.visibility="hidden";
document.getElementById("arrow3b").style.visibility="hidden";
document.getElementById("buckleup1_hand").style.visibility="visible";
document.getElementById("buckleup1_hand").style.animation="buckleup1_hand 1s forwards";
document.getElementById("buckleup1").style.animation="buckleup1slide 1s forwards";
setTimeout(function()
        {	
        	document.getElementById("buckleup1").style.visibility="hidden";
        	document.getElementById("buckleup1_hand").style.visibility="hidden";
        	document.getElementById("buckleup1_hand1").style.visibility="visible";
        	document.getElementById("buckleup").style.visibility="visible";
        	document.getElementById("buckleup").style.animation="buckleup_slide 1s forwards";
        	document.getElementById("buckleup1_hand1").style.animation="buckleup1_hand1 1s forwards";
        	document.getElementById("step3c").style.visibility="visible";

        	setTimeout(function()
        {
        document.getElementById("text_plier").style.visibility="visible";
		    document.getElementById("canvas3").style.cursor="url('images/stripper.png'),auto";
       	document.getElementById("transpin_close1").style.visibility="visible";
       	document.getElementById("buckleup1_hand1").style.visibility="hidden";

       	
       	},1000);

        },1000);
}



function pin_close1()
{
	document.getElementById("transpin_close1").style.visibility="hidden";
	document.getElementById("buckleup").style.visibility="hidden";		
  document.getElementById("buckleuppin1").style.visibility="visible";	

	setTimeout(function()
        {
			document.getElementById("transpin_close2").style.visibility="visible";
        },1000);
}

function pin_close2()
{
  document.getElementById("text_plier").style.visibility="hidden";
	document.getElementById("transpin_close2").style.visibility="hidden";
	document.getElementById("buckleuppin1").style.visibility="hidden";	
	document.getElementById("buckleuppin2").style.visibility="visible";	
	document.getElementById("canvas3").style.cursor="auto";

	setTimeout(function()
        {
    document.getElementById("arrow3c").style.visibility="visible";
    document.getElementById("step3d").style.visibility="visible";
		document.getElementById("trans_animatestrap").style.visibility="visible";
		document.getElementById("canvas3").style.cursor="url('images/grabhandsmall4.png'),auto";
		
        },1000);
}

function trans_animatestrap()
{	document.getElementById("arrow3c").style.visibility="hidden"; 
	document.getElementById("trans_animatestrap").style.visibility="hidden";
	document.getElementById("canvas3").style.cursor="auto";
	document.getElementById("fullstrap_slidehand").style.visibility="visible";
	document.getElementById("fullstrap_slidehand").style.animation="fullstrap_slidehand 4s forwards";
	document.getElementById("cuttedstrap").style.animation="cutstrip_animate 4s forwards";
	document.getElementById("buckleuppin2").style.animation="buckle_animate 4s forwards";

setTimeout(function()
        {
        document.getElementById("arrow3d").style.visibility="visible";
        document.getElementById("step3e").style.visibility="visible";
        document.getElementById("fullstrap_slidehand").style.visibility="hidden";
		    document.getElementById("add_clemp_button").style.visibility="visible";
        },4000);

}



function add_clemp()
{
document.getElementById("arrow3d").style.visibility="hidden";
document.getElementById("add_clemp_button").style.visibility="hidden";	
document.getElementById("clemp_dummy").style.visibility="visible";
document.getElementById("clemp_dummy").style.animation="clemp_dummy1 4s forwards";
setTimeout(function()
        {
		    document.getElementById("trans_clemp").style.visibility="visible";
	      document.getElementById("text_suspension").style.visibility="visible";
		    document.getElementById("arrow3e").style.visibility="visible";
        document.getElementById("step3f").style.visibility="visible";
        },4000);


}


function trans_clemp()
{	document.getElementById("text_suspension").style.visibility="hidden";
	document.getElementById("arrow3e").style.visibility="hidden";
	document.getElementById("trans_clemp").style.visibility="hidden";
	document.getElementById("clemp_dummy").style.visibility="visible";
	document.getElementById("clemp_dummy").style.animation="clemp_dummy11 2s forwards";

	setTimeout(function()
        {
    document.getElementById("step3g").style.visibility="visible";
		document.getElementById("arrow3").style.visibility="visible";
		document.getElementById("nextButton3").style.visibility="visible";
        },2000);

}

function trans_laststrip()
{
 document.getElementById("arrow4a").style.visibility="hidden";
 document.getElementById("trans_laststrip").style.visibility="hidden";	
 document.getElementById("handsmall1_canva4").style.visibility="visible";	
 document.getElementById("handsmall1_canva4").style.animation="handstrip_width_canva4 1s forwards";
 document.getElementById("laststrip").style.animation="laststrip1 2s forwards";
  setTimeout(function()
        { 
        document.getElementById("handsmall1_canva4").style.visibility="hidden";
        document.getElementById("handsmall2_canva4").style.visibility="visible";
        document.getElementById("handsmall2_canva4").style.animation="handstrip2_width_canva4 1s forwards";
         },1000);
         	

 setTimeout(function()
        {
        document.getElementById("handsmall2_canva4").style.visibility="hidden";
        document.getElementById("step4b").style.visibility="visible";
        document.getElementById("arrow4").style.visibility="visible";
       
		    document.getElementById("nextButton4").style.visibility="visible";

        	  },2000);
}

function pole_clemp()
{ document.getElementById("arrow5a").style.visibility="hidden";
	document.getElementById("add_poleclemp_button").style.visibility="hidden";
	
	// document.getElementById("newpoleclemp").style.animation="newpoleclemp1 2s forwards";

	document.getElementById("poleclemp").style.visibility="visible";
	document.getElementById("poleclemp").style.animation="poleclemp21 2s forwards";

	document.getElementById("scbase1").style.visibility="visible";
	document.getElementById("scbase1").style.animation="scbase11 2s forwards";

	document.getElementById("poleupstrap").style.visibility="visible";
	document.getElementById("poleupstrap").style.animation="poleupstrap22 2s forwards";

	setTimeout(function()
        {	
    document.getElementById("step5b").style.visibility="visible";
		document.getElementById("transpoleclemp").style.visibility="visible";
		document.getElementById("arrow5b").style.visibility="visible";
        },2000);
}

function pole_clamp_animate()
{
document.getElementById("arrow5b").style.visibility="hidden";
document.getElementById("transpoleclemp").style.visibility="hidden";
document.getElementById("text_pole").style.visibility="hidden";
// document.getElementById("newpoleclemp").style.visibility="hidden";
document.getElementById("poleclemp").style.visibility="visible";
document.getElementById("poleclemp").style.animation="poleclemp1 5s forwards";

document.getElementById("scbase1").style.visibility="visible";
document.getElementById("scbase1").style.animation="scbase11_animate 5s forwards";

document.getElementById("poleupstrap").style.visibility="visible";
document.getElementById("poleupstrap").style.animation="poleupstrap1 5s forwards";

document.getElementById("ramhand_left").style.visibility="visible";
document.getElementById("ramhand_left").style.animation="ramhand_left 5s forwards";

document.getElementById("ramhand_right").style.visibility="visible";
document.getElementById("ramhand_right").style.animation="ramhand_right 5s forwards";

setTimeout(function()
        {	
		document.getElementById("strip_upper").style.visibility="visible";
		document.getElementById("trans_strap_width").style.visibility="visible";
		document.getElementById("step5c").style.visibility="visible";
		document.getElementById("arrow5c").style.visibility="visible";

        },5000);
}




function trans_strap_width()
{
document.getElementById("ramhand_left").style.visibility="hidden";
document.getElementById("ramhand_right").style.visibility="hidden";
document.getElementById("trans_strap_width").style.visibility="hidden";
document.getElementById("arrow5c").style.visibility="hidden";
document.getElementById("handsmall").style.visibility="visible";
document.getElementById("handsmall").style.animation="handsmall 2s forwards";
document.getElementById("strip_upper").style.animation="strip_upper_width1 2s forwards";
document.getElementById("scbase_behindpole").style.visibility="visible";
setTimeout(function()
        {

    document.getElementById("handsmall").style.visibility="hidden";
		document.getElementById("poleclemp").style.visibility="hidden";
		document.getElementById("poleupstrap").style.visibility="hidden";
		document.getElementById("strip_upper").style.visibility="hidden";
		document.getElementById("scbase1").style.visibility="hidden";	
		document.getElementById("strip_upper_showing").style.visibility="visible";
		document.getElementById("scbase_behindpole").style.visibility="visible";

		document.getElementById("cut1").style.visibility="visible";
		document.getElementById("add_stripcutter_button2").style.visibility="visible";
		document.getElementById("arrow5d").style.visibility="visible";
		document.getElementById("step5d").style.visibility="visible";


        },2000);


}


function add_strip_cut()
{
document.getElementById("add_stripcutter_button2").style.visibility="hidden";
document.getElementById("arrow5d").style.visibility="hidden";
document.getElementById("cutteropenagain_canvas5").style.visibility="visible";
document.getElementById("cutteropenagain_canvas5").style.animation="cutteropenagain111 2s forwards";
setTimeout(function()
        {
          document.getElementById("trans_cuttercut").style.visibility="visible";
          document.getElementById("arrow5e").style.visibility="visible";
          document.getElementById("step5e").style.visibility="visible";
          },2000);


}

function trans_cuttercut()
{	document.getElementById("trans_cuttercut").style.visibility="hidden";
	document.getElementById("cutteropenagain_canvas5").style.visibility="hidden";
	document.getElementById("cutterhand_canvas5").style.visibility="visible";
	document.getElementById("arrow5e").style.visibility="hidden";
	document.getElementById("cutterhand_canvas5").style.animation="cuttter_strap11 2s forwards";

setTimeout(function()
        {
          document.getElementById("cutterhand_canvas5").style.visibility="hidden";
          document.getElementById("cuttercloseagain_canvas5").style.visibility="visible";
          setTimeout(function()
        {
		    document.getElementById("cuttercloseagain_canvas5").style.visibility="hidden";
        document.getElementById("cutterhand_canvas5").style.visibility="visible";
        document.getElementById("strip_upper_showing").style.animation="strip_upper_showing1 2s forwards";
        document.getElementById("cutterhand_canvas5").style.animation="cutteropenagain_back_canvas5 2s forwards";
     
       setTimeout(function()
        {
document.getElementById("cutterhand_canvas5").style.visibility="hidden";
document.getElementById("cutteropenagain_canvas5_show").style.visibility="visible";
document.getElementById("step5f").style.visibility="visible";
document.getElementById("transpole_full").style.visibility="visible";
document.getElementById("arrow5f").style.visibility="visible";
		},2000);
    },1000);
    },2000);
}

function back_pole_view()
{
document.getElementById("transpole_full").style.visibility="hidden";
document.getElementById("arrow5f").style.visibility="hidden";
document.getElementById("pole1").style.visibility="visible";
document.getElementById("cut1_show").style.visibility="visible";
document.getElementById("scfull_canvas5").style.visibility="visible";
document.getElementById("step5g").style.visibility="visible";

document.getElementById("arrow5").style.visibility="visible";
document.getElementById("nextButton5").style.visibility="visible";

}



function add_wire()
{
	document.getElementById("add_wire_button").style.visibility="hidden";
	document.getElementById("arrow6a").style.visibility="hidden";
  document.getElementById("polewire").style.visibility="visible";
  document.getElementById("polewire").style.animation="polewire1 2s forwards";

      setTimeout(function()
		{
    document.getElementById("text_cabel").style.visibility="visible";
        
    document.getElementById("trans_sc_open").style.visibility="visible";
    document.getElementById("canvas6").style.cursor="url('images/handsmall.png'),auto";
		
		document.getElementById("arrow6b").style.visibility="visible";
		document.getElementById("step6b").style.visibility="visible";
		},2000);
}

function trans_sc_open()
{
  document.getElementById("trans_sc_open").style.visibility="hidden";
  document.getElementById("arrow6b").style.visibility="hidden";
  document.getElementById("canvas6").style.cursor="auto";
 
  document.getElementById("handsmall_canvas6").style.visibility="visible";
  document.getElementById("handsmall_canvas6").style.animation="hand_sc_open 2s forwards";
  document.getElementById("suspension_upper").style.visibility="visible";
  document.getElementById("suspension_upper").style.animation="suspension_upper_open 2s forwards";
 setTimeout(function()
        {
        document.getElementById("trans_polewire").style.visibility="visible";
        document.getElementById("arrow6c").style.visibility="visible";
        document.getElementById("handsmall_canvas6").style.visibility="hidden";
        document.getElementById("step6c").style.visibility="visible";
        
        },2000);
}

function trans_polewire()
{	document.getElementById("trans_polewire").style.visibility="hidden";
 	document.getElementById("arrow6c").style.visibility="hidden";
 	document.getElementById("text_cabel").style.visibility="hidden";
	document.getElementById("handsmall_cabel_up").style.visibility="visible";
	document.getElementById("handsmall_cabel_up").style.animation="handsmall_cabel_up 2s forwards";
	document.getElementById("polewire").style.animation="polewire11 2s forwards";

	setTimeout(function()
        {
        document.getElementById("trans_sc_close").style.visibility="visible";
        document.getElementById("arrow6d").style.visibility="visible";
        document.getElementById("step6d").style.visibility="visible";
        document.getElementById("canvas6").style.cursor="url('images/handsmall.png'),auto";

		},2000);
}

function trans_sc_close()
{ document.getElementById("canvas6").style.cursor="auto";
	document.getElementById("trans_sc_close").style.visibility="hidden";
	document.getElementById("arrow6d").style.visibility="hidden";
	document.getElementById("handsmall_canvas6").style.visibility="visible";
  document.getElementById("handsmall_canvas6").style.animation="hand_sc_close 2s forwards";
  document.getElementById("suspension_upper").style.visibility="visible";
  document.getElementById("suspension_upper").style.animation="suspension_upper_close 2s forwards";
	setTimeout(function()
        {
document.getElementById("handsmall_canvas6").style.visibility="hidden";
document.getElementById("handsmall_cabel_up").style.visibility="hidden";
document.getElementById("step6e").style.visibility="visible";
document.getElementById("arrow6").style.visibility="visible";
document.getElementById("nextButton6").style.visibility="visible";
        	},2000);

}


function add_universal_bracket()
{	document.getElementById("add_universal_button").style.visibility="hidden";
	document.getElementById("arrow7a").style.visibility="hidden";
	document.getElementById("universal1").style.visibility="visible";
	document.getElementById("universal1").style.animation="universal1 2s forwards";
	setTimeout(function()
        {
	document.getElementById("universal2").style.visibility="visible";
	document.getElementById("universal2").style.animation="universal2 2s forwards";
	setTimeout(function()
        {
			document.getElementById("trans_universal2").style.visibility="visible";
			document.getElementById("text_universal_bracket").style.visibility="visible";
			document.getElementById("arrow7b").style.visibility="visible";
			document.getElementById("step7b").style.visibility="visible";

        	},2000);
          },2000);
}



function trans_universal2()
{
document.getElementById("arrow7b").style.visibility="hidden";
document.getElementById("universal2_hand").style.visibility="visible";
document.getElementById("universal2_hand").style.animation="universal2_hand 2s forwards";
document.getElementById("trans_universal2").style.visibility="hidden";
document.getElementById("universal2").style.animation="universal2_animate 2s forwards";
setTimeout(function()
        {
	
		document.getElementById("universal2").style.visibility="hidden";
		document.getElementById("universal2_hand").style.visibility="hidden";
		document.getElementById("universal_top").style.visibility="visible";
		document.getElementById("universal_top").style.animation="universal_top_animate 2s forwards";
		document.getElementById("universal2_hand2").style.visibility="visible";
		document.getElementById("universal2_hand2").style.animation="universal2_hand2 2s forwards";
		
setTimeout(function()
        {
	document.getElementById("trans_universal1").style.visibility="visible";
	document.getElementById("universal2_hand2").style.visibility="hidden";
	document.getElementById("arrow7c").style.visibility="visible";
        },2000);
        },2000);
}

function trans_universal1()
{
document.getElementById("text_universal_bracket").style.visibility="hidden";
document.getElementById("arrow7c").style.visibility="hidden";
document.getElementById("trans_universal1").style.visibility="hidden";
document.getElementById("universal1").style.animation="universal1_animate 2s forwards";
document.getElementById("universal1_hand").style.visibility="visible";
document.getElementById("universal1_hand").style.animation="universal1_hand 2s forwards";


setTimeout(function()
        {
        	document.getElementById("universal1").style.visibility="hidden";
        	document.getElementById("universal1_hand").style.visibility="hidden";
        	document.getElementById("universal_top2").style.visibility="visible";
        	document.getElementById("universal1_hand1").style.visibility="visible";
        	document.getElementById("universal1_hand1").style.animation="universal1_hand1 2s forwards";
        	document.getElementById("universal_top2").style.animation="universal_top_animate2 2s forwards";
        setTimeout(function()
        {
		document.getElementById("universal1_hand1").style.visibility="hidden";
    document.getElementById("step7c").style.visibility="visible";
		document.getElementById("arrow7").style.visibility="visible";
		document.getElementById("nextButton7").style.visibility="visible";
 },2000);

},2000);
}

function laststrip_width_canvas8()
{
	document.getElementById("translaststrip_canvas8").style.visibility="hidden";
	document.getElementById("arrow8a").style.visibility="hidden";
	document.getElementById("laststrip_canvas8").style.visibility="visible";
	document.getElementById("handsmall1_canva8").style.visibility="visible";
	document.getElementById("handsmall1_canva8").style.animation="handstrip_width_canva8 1s forwards";
	document.getElementById("laststrip_canvas8").style.animation="laststrip_widthcanvas8 2s forwards";
setTimeout(function()
        { 
      document.getElementById("handsmall1_canva8").style.visibility="hidden";
     document.getElementById("handsmall2_canva8").style.visibility="visible";
    document.getElementById("handsmall2_canva8").style.animation="handstrip2_width_canva8 1s forwards";
         },1000);
         	




setTimeout(function()
        {
    document.getElementById("handsmall2_canva8").style.visibility="visible";
		document.getElementById("arrow8").style.visibility="visible";
		document.getElementById("nextButton8").style.visibility="visible";
		document.getElementById("step8b").style.visibility="visible";
        },2000);
}

function add_newpoleclemp_canvas8()

{	document.getElementById("add_newpoleclemp_buttonc8").style.visibility="hidden";
	document.getElementById("arrow94").style.visibility="hidden";
	
	document.getElementById("universal_top1_canvas9").style.visibility="visible";
	document.getElementById("universal_top1_canvas9").style.animation="universal_top1_canvas9 2s forwards";

	document.getElementById("universal_top2_canvas9").style.visibility="visible";
	document.getElementById("universal_top2_canvas9").style.animation="universal_top2_canvas9 2s forwards";
	
	document.getElementById("poleclemp_canvas9").style.visibility="visible";
	document.getElementById("poleclemp_canvas9").style.animation="poleclemp_canvas91 2s forwards";

	document.getElementById("universal_back1_canvas9").style.visibility="visible";
	document.getElementById("universal_back1_canvas9").style.animation="universal_back1_canvas9 2s forwards";

	document.getElementById("universal_back2_canvas9").style.visibility="visible";
	document.getElementById("universal_back2_canvas9").style.animation="universal_back2_canvas9 2s forwards";

	document.getElementById("poleupstrap_canvas9").style.visibility="visible";
	document.getElementById("poleupstrap_canvas9").style.animation="poleupstrap_canvas91 2s forwards";

setTimeout(function()
        {
        document.getElementById("transpoleclemp_canvas8").style.visibility="visible";
        document.getElementById("arrow91").style.visibility="visible";
        document.getElementById("step9b").style.visibility="visible";
        },2000);
}

function pole_clamp_animate_canvas8()
{
document.getElementById("transpoleclemp_canvas8").style.visibility="hidden";
document.getElementById("arrow91").style.visibility="hidden";
document.getElementById("universal_top1_canvas9").style.animation="universal_top1_canvas9_2 2s forwards";
document.getElementById("universal_top2_canvas9").style.animation="universal_top2_canvas9_2 2s forwards";	
document.getElementById("poleclemp_canvas9").style.animation="poleclemp_canvas91_2 2s forwards";
document.getElementById("universal_back1_canvas9").style.animation="universal_back1_canvas9_2 2s forwards";
document.getElementById("universal_back2_canvas9").style.animation="universal_back2_canvas9_2 2s forwards";
document.getElementById("poleupstrap_canvas9").style.animation="poleupstrap_canvas91_2 2s forwards";
document.getElementById("ramhand_left_canvas9").style.visibility="visible";
document.getElementById("ramhand_left_canvas9").style.animation="ramhand_left_canvas9 2s forwards";
document.getElementById("ramhand_right_canvas9").style.visibility="visible";
document.getElementById("ramhand_right_canvas9").style.animation="ramhand_right_canvas9 2s forwards";	
setTimeout(function()
        {	
		document.getElementById("strip_upper_canvas8").style.visibility="visible";
		document.getElementById("trans_strap_width_canvas8").style.visibility="visible";
		document.getElementById("arrow92").style.visibility="visible";
		document.getElementById("step9c").style.visibility="visible";
        },2000);


}

function trans_strap_width_canvas8()
{
document.getElementById("arrow92").style.visibility="hidden";
document.getElementById("trans_strap_width_canvas8").style.visibility="hidden";
document.getElementById("ramhand_left_canvas9").style.visibility="hidden";
document.getElementById("ramhand_right_canvas9").style.visibility="hidden";
document.getElementById("handsmall_canvas8").style.visibility="visible";
document.getElementById("handsmall_canvas8").style.animation="handsmall_canvas8 2s forwards";
document.getElementById("strip_upper_canvas8").style.animation="strip_upper_canvas8 2s forwards";



setTimeout(function()
        {	
    document.getElementById("handsmall_canvas8").style.visibility="hidden";

    document.getElementById("poleclemp_canvas9").style.visibility="hidden";
		document.getElementById("poleupstrap_canvas9").style.visibility="hidden";
		document.getElementById("strip_upper_canvas8").style.visibility="hidden";
		document.getElementById("universal_top1_canvas9").style.visibility="hidden";	
		document.getElementById("universal_top2_canvas9").style.visibility="hidden";
		document.getElementById("universal_back1_canvas9").style.visibility="hidden";
		document.getElementById("universal_back2_canvas9").style.visibility="hidden";
		document.getElementById("step9d").style.visibility="visible";
		document.getElementById("universal_side1_canvas9").style.visibility="visible";
		document.getElementById("universal_side2_canvas9").style.visibility="visible";

		document.getElementById("strip_upper_showing_canvas8").style.visibility="visible";
		document.getElementById("cut1_canvas8").style.visibility="visible";
		setTimeout(function()
        {
        document.getElementById("add_cutter_btn_canvas9").style.visibility="visible";
        document.getElementById("arrow95").style.visibility="visible";
       
            },1000);

        	 },2000);
}



function add_cutter_canvas9()
{
document.getElementById("add_cutter_btn_canvas9").style.visibility="hidden";
document.getElementById("arrow95").style.visibility="hidden";
document.getElementById("cutteropen_canvas9").style.visibility="visible";

document.getElementById("cutteropen_canvas9").style.animation="cutteropen_canvas9 2s forwards";
setTimeout(function()
        {
document.getElementById("trans_stripcut_canvas9").style.visibility="visible";
document.getElementById("step9e").style.visibility="visible";
document.getElementById("arrow93").style.visibility="visible";
 },2000);
}


function trans_stripcut_canvas9()
{
document.getElementById("cutteropen_canvas9").style.visibility="hidden";
document.getElementById("arrow93").style.visibility="hidden";
document.getElementById("trans_stripcut_canvas9").style.visibility="hidden";
document.getElementById("cutteropenhand_canvas9").style.visibility="visible";
document.getElementById("cutteropenhand_canvas9").style.animation="cutterstripcut_canvas9 2s forwards";
setTimeout(function()
  {
document.getElementById("cutteropenhand_canvas9").style.visibility="hidden";
document.getElementById("cutterclose_canvas9").style.visibility="visible";
    setTimeout(function()
      {
	document.getElementById("cutterclose_canvas9").style.visibility="hidden";
  document.getElementById("cutteropenhand_canvas9").style.visibility="visible";

	document.getElementById("cutteropenhand_canvas9").style.animation="cutteropen_backpos_canvas9 2s forwards";
  document.getElementById("strip_upper_showing_canvas8").style.animation="strip_upper_falldown 2s forwards";
setTimeout(function()
      {
document.getElementById("cutteropenhand_canvas9").style.visibility="hidden";
document.getElementById("cutteropen_canvas9_show1").style.visibility="visible";
document.getElementById("step9f").style.visibility="visible";
document.getElementById("arrow9").style.visibility="visible";
document.getElementById("nextButton9").style.visibility="visible";
 },2000);
},1000);
},2000);

}

function add_anchoring()
{
document.getElementById("add_anchoring_btn").style.visibility="hidden";
document.getElementById("arrow9a1").style.visibility="hidden";
document.getElementById("anchor_close").style.visibility="visible";
document.getElementById("anchor_close").style.animation="anchor_close 2s forwards";
setTimeout(function()
      {
document.getElementById("text_anchoring").style.visibility="visible";
document.getElementById("trans_anchor_open").style.visibility="visible";
document.getElementById("canvas9a").style.cursor="url('images/handsmall.png'),auto";
document.getElementById("step9ab").style.visibility="visible";
document.getElementById("arrow9a2").style.visibility="visible";
  },2000);
}

function anchor_open()
{
  document.getElementById("trans_anchor_open").style.visibility="hidden";
  document.getElementById("canvas9a").style.cursor="auto";
	document.getElementById("arrow9a2").style.visibility="hidden";
	document.getElementById("anchor_close").style.visibility="hidden";
	document.getElementById("anchor_wedge").style.visibility="visible";
	document.getElementById("anchor_open").style.visibility="visible";
	document.getElementById("hand_anchor_open").style.visibility="visible";
	document.getElementById("add_anchoringwire_btn").style.visibility="visible";
	document.getElementById("step9ac").style.visibility="visible";
	document.getElementById("arrow9a3").style.visibility="visible";
}

function add_anchoring_wire()

{
	document.getElementById("text_anchoring").style.visibility="hidden";
  document.getElementById("add_anchoringwire_btn").style.visibility="hidden";
	document.getElementById("arrow9a3").style.visibility="hidden";
	document.getElementById("anchoring_wire").style.visibility="visible";
	document.getElementById("anchoring_wire").style.animation="anchoring_wire 2s forwards";
setTimeout(function()
      {
document.getElementById("trans_anchor_wire").style.visibility="visible";
document.getElementById("arrow9a4").style.visibility="visible";
document.getElementById("step9ad").style.visibility="visible";


  },2000);
}


function anchor_insertwire()
{
	document.getElementById("hand_anchor_open").style.visibility="hidden";
	document.getElementById("trans_anchor_wire").style.visibility="hidden";
	document.getElementById("arrow9a4").style.visibility="hidden";
	document.getElementById("hand_anchor_wire").style.visibility="visible";
	document.getElementById("hand_anchor_wire").style.animation="hand_anchor_wire 3s forwards";
	document.getElementById("anchoring_wire").style.animation="anchoring_wire_insert 3s forwards";

setTimeout(function()
      {
document.getElementById("hand_anchor_wire").style.visibility="hidden";
document.getElementById("trans_wedges").style.visibility="visible";
document.getElementById("arrow9a5").style.visibility="visible";
  },3000);
}

function click_wedges()
{
document.getElementById("trans_wedges").style.visibility="hidden";
document.getElementById("arrow9a5").style.visibility="hidden";
document.getElementById("anchor_wedge").style.animation="anchor_wedge_slide 2s forwards";	

setTimeout(function()
      {
   document.getElementById("trans_bail_close").style.visibility="visible";
  document.getElementById("arrow9a6").style.visibility="visible";
   document.getElementById("canvas9a").style.cursor="url('images/handsmall.png'),auto";


  },2000);


}

function bail_close()
{
	document.getElementById("trans_bail_close").style.visibility="hidden";
	document.getElementById("arrow9a6").style.visibility="hidden";
	document.getElementById("canvas9a").style.cursor="auto";

	document.getElementById("anchor_wedge").style.visibility="hidden";
	document.getElementById("anchor_open").style.visibility="hidden";

	document.getElementById("anchor_close").style.visibility="visible";
	document.getElementById("hand_bail_close").style.visibility="visible";

	document.getElementById("arrow9a").style.visibility="visible";
document.getElementById("nextButton9a").style.visibility="visible";
}










function add_jointclosure()
{
document.getElementById("add_jointclosure_button").style.visibility="hidden";
document.getElementById("arrow10a").style.visibility="hidden";
document.getElementById("joint_closure").style.visibility="visible";
document.getElementById("joint_closure").style.animation="joint_closure 3s forwards";

setTimeout(function()
        {
 document.getElementById("text_jointclosure").style.visibility="visible";
document.getElementById("step10b").style.visibility="visible";
document.getElementById("arrow10b").style.visibility="visible";
document.getElementById("add_ustrap_button").style.visibility="visible";

        },3000);
}

function add_ustrap()
{
document.getElementById("arrow10b").style.visibility="hidden";
document.getElementById("add_ustrap_button").style.visibility="hidden";


document.getElementById("ustrap1").style.visibility="visible";
document.getElementById("ustrap1").style.animation="ustrap1 2s forwards";

document.getElementById("ustrap2").style.visibility="visible";
document.getElementById("ustrap2").style.animation="ustrap2 2s forwards";
setTimeout(function()
        {
   document.getElementById("text_jointclosure").style.visibility="hidden";
 document.getElementById("text_ustrap").style.visibility="visible";
document.getElementById("trans_ustrap1").style.visibility="visible";
document.getElementById("canvas10").style.cursor="url('images/handsmall.png'),auto";
document.getElementById("arrow10c").style.visibility="visible";
document.getElementById("step10c").style.visibility="visible";


       },2000);


}

function trans_ustrap1()
{	document.getElementById("arrow10c").style.visibility="hidden";
	document.getElementById("canvas10").style.cursor="auto";
	document.getElementById("trans_ustrap1").style.visibility="hidden";
	document.getElementById("hand_ustap1").style.visibility="visible";
	document.getElementById("hand_ustap1").style.animation="hand_ustap1 2s forwards";
	document.getElementById("ustrap1").style.visibility="visible";
	document.getElementById("ustrap1").style.animation="ustrap11 2s forwards";
	setTimeout(function()
        {
 			document.getElementById("trans_ustrap2").style.visibility="visible";
 			document.getElementById("hand_ustap1").style.visibility="hidden";
 			document.getElementById("canvas10").style.cursor="url('images/handsmall.png'),auto";
 			document.getElementById("arrow10d").style.visibility="visible";
 			},2000);
}

function trans_ustrap2()
{
 document.getElementById("text_ustrap").style.visibility="hidden";
document.getElementById("canvas10").style.cursor="auto";	
document.getElementById("arrow10d").style.visibility="hidden";
document.getElementById("trans_ustrap2").style.visibility="hidden";
document.getElementById("hand_ustap2").style.visibility="visible";
document.getElementById("hand_ustap2").style.animation="hand_ustap2 2s forwards";
document.getElementById("ustrap2").style.animation="ustrap22 2s forwards";

setTimeout(function()
        {
 			document.getElementById("hand_ustap2").style.visibility="hidden";
 			document.getElementById("step10d").style.visibility="visible";
 			document.getElementById("arrow10e").style.visibility="visible";
 			document.getElementById("trans_full").style.visibility="visible";
 			document.getElementById("arrow10e").style.visibility="visible";

 			},2000);

      
}


function trans_fulljointclosure()
{
document.getElementById("arrow10e").style.visibility="hidden";
document.getElementById("trans_full").style.visibility="hidden";


document.getElementById("joint_closure").style.animation="joint_closureagain 2s forwards";
document.getElementById("ustrap1").style.animation="ustrap1again 2s forwards";
document.getElementById("ustrap2").style.animation="ustrap2again 2s forwards";
document.getElementById("handback_joint_closure").style.visibility="visible";
document.getElementById("handback_joint_closure").style.animation="handback_joint_closure 2s forwards";
document.getElementById("grabhand").style.visibility="visible";
document.getElementById("grabhand").style.animation="grabhand 2s forwards";

setTimeout(function()
        {
    document.getElementById("text_nuts").style.visibility="visible";
 		document.getElementById("trans_nut1").style.visibility="visible";
 		document.getElementById("handback_joint_closure").style.visibility="hidden";
 		document.getElementById("arrow10f").style.visibility="visible";

 		document.getElementById("step10e").style.visibility="visible";
 		
 	  document.getElementById("canvas10").style.cursor="url('images/handsmall.png'),auto";

 			},2000);
}

function nut1()
{
document.getElementById("canvas10").style.cursor="auto";
document.getElementById("trans_nut1").style.visibility="hidden";
document.getElementById("arrow10f").style.visibility="hidden";
document.getElementById("nut1").style.visibility="visible";
document.getElementById("nut1").style.animation="nut1 3s forwards";

document.getElementById("handsmall_nutpickup").style.visibility="visible";
document.getElementById("handsmall_nutpickup").style.animation="hand_nut1 3s forwards";

setTimeout(function()
        {
 		
document.getElementById("handsmall_nutpickup").style.visibility="hidden";
document.getElementById("canvas10").style.cursor="url('images/handsmall.png'),auto";
document.getElementById("trans_nut2").style.visibility="visible";
document.getElementById("arrow10g").style.visibility="visible";
 			},3000);


}

function nut2()
{
document.getElementById("arrow10g").style.visibility="hidden";
document.getElementById("trans_nut2").style.visibility="hidden";
document.getElementById("canvas10").style.cursor="auto";
document.getElementById("nut2").style.animation="nut2 3s forwards";
document.getElementById("handsmall_nutpickup").style.visibility="visible";
document.getElementById("handsmall_nutpickup").style.animation="hand_nut2 3s forwards";

setTimeout(function()
        {
 		
document.getElementById("handsmall_nutpickup").style.visibility="hidden";
document.getElementById("canvas10").style.cursor="url('images/handsmall.png'),auto";
document.getElementById("trans_nut3").style.visibility="visible";
document.getElementById("arrow10h").style.visibility="visible";
 			},3000);

}

function nut3()
{
document.getElementById("arrow10h").style.visibility="hidden";
document.getElementById("trans_nut3").style.visibility="hidden";
document.getElementById("canvas10").style.cursor="auto";
document.getElementById("nut3").style.animation="nut3 3s forwards";
document.getElementById("handsmall_nutpickup").style.visibility="visible";
document.getElementById("handsmall_nutpickup").style.animation="hand_nut3 3s forwards";
setTimeout(function()
        {
 		
document.getElementById("handsmall_nutpickup").style.visibility="hidden";
document.getElementById("canvas10").style.cursor="url('images/handsmall.png'),auto";
document.getElementById("trans_nut4").style.visibility="visible";
document.getElementById("arrow10i").style.visibility="visible";
 			},3000);

}

function nut4()
{
document.getElementById("text_nuts").style.visibility="hidden";
document.getElementById("arrow10i").style.visibility="hidden";
document.getElementById("trans_nut4").style.visibility="hidden";
document.getElementById("canvas10").style.cursor="auto";
document.getElementById("nut4").style.animation="nut4 3s forwards";
document.getElementById("handsmall_nutpickup").style.visibility="visible";
document.getElementById("handsmall_nutpickup").style.animation="hand_nut4 3s forwards";
setTimeout(function()
        {
document.getElementById("handsmall_nutpickup").style.visibility="hidden";
document.getElementById("grabhand").style.visibility="hidden";

document.getElementById("arrow10").style.visibility="visible";
document.getElementById("nextButton10").style.visibility="visible";
document.getElementById("step10f").style.visibility="visible";
        		},3000);
}


function add_ustrap_canvas11()
{
document.getElementById("add_ustrap_button_canvas11").style.visibility="hidden";
document.getElementById("arrow11a").style.visibility="hidden";
document.getElementById("ustrap1_canvas11").style.visibility="visible";
document.getElementById("ustrap1_canvas11").style.animation="ustrap1_canvas11 3s forwards";
setTimeout(function()
        {	document.getElementById("arrow11b").style.visibility="visible";
        	document.getElementById("text_poleclamp").style.visibility="visible";
        	document.getElementById("step11b").style.visibility="visible";
			document.getElementById("trans_ustrap1_canvas11").style.visibility="visible";
        	document.getElementById("canvas11").style.cursor="url('images/handsmall.png'),auto";
        	},3000);

}

function trans_ustrap1_canvas11()
{	
	document.getElementById("canvas11").style.cursor="auto";
	document.getElementById("arrow11b").style.visibility="hidden";
	document.getElementById("text_poleclamp").style.visibility="hidden";
	document.getElementById("trans_ustrap1_canvas11").style.visibility="hidden";
	document.getElementById("ustrap1_canvas11").style.visibility="visible";
	document.getElementById("hand_ustrap_canvas11").style.visibility="visible";
	document.getElementById("hand_ustrap_canvas11").style.animation="hand_ustrap_canvas11 3s forwards";
	
	document.getElementById("ustrap1_canvas11").style.animation="ustrap1_canvas11_again 3s forwards";
setTimeout(function()
        {
        document.getElementById("trans_nut1_canvas11").style.visibility="visible";
        document.getElementById("arrow11c").style.visibility="visible";
        document.getElementById("step11c").style.visibility="visible";
        // document.getElementById("canvas11").style.cursor="url('images/ramhand_left.png'),auto";
		
        },3000);


}



function nut1_canvas11()
{
// document.getElementById("canvas11").style.cursor="auto";
document.getElementById("trans_nut1_canvas11").style.visibility="hidden";
document.getElementById("arrow11c").style.visibility="hidden";
document.getElementById("nut1_canvas11").style.animation="nut1_canvas11 3s forwards";
document.getElementById("handsmall_nut_canvas11").style.visibility="visible";
document.getElementById("handsmall_nut_canvas11").style.animation="hand_nut1_canvas11 3s forwards";

setTimeout(function()
        {
        
    document.getElementById("hand_ustrap_canvas11").style.visibility="hidden";
    document.getElementById("handsmall_nutpickup_canvas11").style.visibility="hidden";
		document.getElementById("trans_nut2_canvas11").style.visibility="visible";
		document.getElementById("arrow11d").style.visibility="visible";
		document.getElementById("canvas11").style.cursor="url('images/handsmall.png'),auto";
		
		},3000);

}



function nut2_canvas11()
{
document.getElementById("arrow11d").style.visibility="hidden";
document.getElementById("canvas11").style.cursor="auto";
document.getElementById("trans_nut2_canvas11").style.visibility="hidden";
document.getElementById("nut2_canvas11").style.animation="nut2_canvas11 3s forwards";
document.getElementById("handsmall_nutpickup_canvas11").style.visibility="visible";
document.getElementById("handsmall_nutpickup_canvas11").style.animation="hand_nut2_canvas11 3s forwards";

setTimeout(function()
        {
		document.getElementById("handsmall_nut_canvas11").style.visibility="hidden";
    document.getElementById("handsmall_nutpickup_canvas11").style.visibility="hidden";

    document.getElementById("add_loopframe_button").style.visibility="visible";

    document.getElementById("step11d").style.visibility="visible";
    document.getElementById("arrow11e").style.visibility="visible";
		// document.getElementById("trans_nut3_canvas11").style.visibility="visible";
		// document.getElementById("canvas11").style.cursor="url('images/handsmall.png'),auto";
		
		},3000);

}


function add_loopframe()
{
document.getElementById("arrow11e").style.visibility="hidden";
document.getElementById("add_loopframe_button").style.visibility="hidden";
document.getElementById("loopframe").style.visibility="visible";
document.getElementById("loopframe").style.animation="loopframe 3s forwards";

setTimeout(function()
        {
    document.getElementById("text_loopframe").style.visibility="visible";
		document.getElementById("trans_loopframe").style.visibility="visible";
		document.getElementById("arrow11f").style.visibility="visible";
		document.getElementById("step11e").style.visibility="visible";
        },3000);

}

function trans_loopframe()
{
document.getElementById("trans_loopframe").style.visibility="hidden";
document.getElementById("text_loopframe").style.visibility="hidden";
document.getElementById("arrow11f").style.visibility="hidden";
document.getElementById("loopframe").style.visibility="visible";
document.getElementById("loopframe").style.animation="loopframe11 3s forwards";
document.getElementById("loopframe_handleft").style.visibility="visible";
document.getElementById("loopframe_handleft").style.animation="loopframe_handleft 3s forwards";
setTimeout(function()
        {
		document.getElementById("trans_nut3_canvas11").style.visibility="visible";
		document.getElementById("arrow11g").style.visibility="visible";
		document.getElementById("step11f").style.visibility="visible";
		document.getElementById("canvas11").style.cursor="url('images/handsmall.png'),auto";
		
		},3000);
}





function nut3_canvas11()
{
document.getElementById("canvas11").style.cursor="auto";
document.getElementById("trans_nut3_canvas11").style.visibility="hidden";
document.getElementById("arrow11g").style.visibility="hidden";
document.getElementById("nut3_canvas11").style.animation="nut3_canvas11 3s forwards";
document.getElementById("handsmall_nutpickup_canvas11").style.visibility="visible";
document.getElementById("handsmall_nutpickup_canvas11").style.animation="hand_nut3_canvas11 3s forwards";

setTimeout(function()
        {
        document.getElementById("handsmall_nutpickup_canvas11").style.visibility="hidden";
        document.getElementById("add_cabel_button").style.visibility="visible";
        document.getElementById("loopframe_handleft").style.visibility="hidden";

        document.getElementById("arrow11h").style.visibility="visible";
        document.getElementById("step11g").style.visibility="visible";

		// document.getElementById("trans_nut4_canvas11").style.visibility="visible";
		// document.getElementById("canvas11").style.cursor="url('images/handsmall.png'),auto";
		
		},3000);

}

function add_cabel()
{
	   document.getElementById("add_cabel_button").style.visibility="hidden";
	   document.getElementById("arrow11h").style.visibility="hidden";
	   document.getElementById("cabel").style.visibility="visible";

    document.getElementById("cabel").style.animation="cabel1 3s forwards";

        setTimeout(function()
        {
    document.getElementById("text_cabelloop").style.visibility="visible";
    document.getElementById("trans_loopframe_animate").style.visibility="visible";
 		document.getElementById("arrow11i").style.visibility="visible";
 		document.getElementById("step11h").style.visibility="visible";
},3000);

}


function trans_loopframe_animate()
{
document.getElementById("text_cabelloop").style.visibility="hidden";
document.getElementById("trans_loopframe_animate").style.visibility="hidden";
document.getElementById("arrow11i").style.visibility="hidden";
document.getElementById("cabel_handleft").style.visibility="visible";
document.getElementById("cabel_handleft").style.animation="cabel_handleft 3s forwards";
document.getElementById("cabel_handright").style.visibility="visible";
document.getElementById("cabel_handright").style.animation="cabel_handright 3s forwards";
document.getElementById("cabel").style.animation="cabel1_animate 3s forwards";
    setTimeout(function()
        {
        	document.getElementById("cabel_handleft").style.visibility="hidden";
          document.getElementById("cabel_handright").style.visibility="hidden";

          document.getElementById("loopframe1").style.visibility="visible";
          document.getElementById("step11i").style.visibility="visible";
          document.getElementById("arrow11").style.visibility="visible";
          document.getElementById("nextButton11").style.visibility="visible";

},3000);

}


function add_drill()
{
	document.getElementById("add_drill_button").style.visibility="hidden";
	document.getElementById("arrow12a").style.visibility="hidden";

	document.getElementById("drill").style.visibility="visible";

  document.getElementById("drill").style.animation="drill 3s forwards";

  setTimeout(function()
        {
  document.getElementById("text_drillmachine").style.visibility="visible";
	document.getElementById("add_bit_button").style.visibility="visible";
	document.getElementById("arrow12b").style.visibility="visible";
	document.getElementById("step12b").style.visibility="visible";

 	},3000);
}

function add_bit()
{
	document.getElementById("add_bit_button").style.visibility="hidden";
	document.getElementById("text_drillmachine").style.visibility="hidden";

	document.getElementById("arrow12b").style.visibility="hidden";
	document.getElementById("bit").style.visibility="visible";

  document.getElementById("bit").style.animation="bit 3s forwards";

  setTimeout(function()
  {
    document.getElementById("text_masonrybit").style.visibility="visible";
    document.getElementById("add_chuck_key_button").style.visibility="visible";
		document.getElementById("arrow12c").style.visibility="visible";
		document.getElementById("step12c").style.visibility="visible";
	},3000);

}

function add_chuck_key()
{
  document.getElementById("text_masonrybit").style.visibility="hidden";
	document.getElementById("add_chuck_key_button").style.visibility="hidden";
	document.getElementById("arrow12c").style.visibility="hidden";

	document.getElementById("chuck_key").style.visibility="visible";

  document.getElementById("chuck_key").style.animation="chuck_key 3s forwards";

  setTimeout(function()
        {
document.getElementById("text_chuckkey").style.visibility="visible";
document.getElementById("trans_bit").style.visibility="visible";
document.getElementById("arrow12d").style.visibility="visible";
document.getElementById("step12d").style.visibility="visible";
        		},3000);
}

function bit_animate()
{
	document.getElementById("trans_bit").style.visibility="hidden";
	document.getElementById("arrow12d").style.visibility="hidden";

	document.getElementById("bit").style.visibility="visible";
	document.getElementById("hand_drill").style.visibility="visible";

  document.getElementById("bit").style.animation="bit_animate 3s forwards";
  document.getElementById("hand_drill").style.animation="hand_drill 3s forwards";

  setTimeout(function()
  {
document.getElementById("hand_drill").style.visibility="hidden";
document.getElementById("trans_chuck_key").style.visibility="visible";
document.getElementById("arrow12e").style.visibility="visible";
document.getElementById("step12e").style.visibility="visible";
        		},3000);
}



function chuck_key_animate()
{
document.getElementById("text_chuckkey").style.visibility="hidden";
document.getElementById("trans_chuck_key").style.visibility="hidden";
document.getElementById("arrow12e").style.visibility="hidden";
document.getElementById("chuck_key").style.visibility="visible";

document.getElementById("chuck_key").style.animation="chuck_key_again 3s forwards";

setTimeout(function()
{
document.getElementById("trans_chuck_key_rotate").style.visibility="visible";
document.getElementById("step12f").style.visibility="visible";
document.getElementById("arrow12f").style.visibility="visible";
},3000);
}

function chuck_key_rotate()
{
	document.getElementById("trans_chuck_key_rotate").style.visibility="hidden";
	document.getElementById("arrow12f").style.visibility="hidden";
	document.getElementById("chuck_key").style.animation="chuck_key_rotate 3s forwards";

setTimeout(function()
 {
document.getElementById("trans_chuck_key_put").style.visibility="visible";
document.getElementById("step12g").style.visibility="visible";
document.getElementById("arrow12g").style.visibility="visible";
},3000);
}

function chuck_key_put()
{
	document.getElementById("trans_chuck_key_put").style.visibility="hidden";
	document.getElementById("arrow12g").style.visibility="hidden";
	document.getElementById("chuck_key").style.animation="chuck_key_put 3s forwards";
	  setTimeout(function()
        {
	document.getElementById("step12h").style.visibility="visible";
	document.getElementById("arrow12").style.visibility="visible";
	document.getElementById("nextButton12").style.visibility="visible";

	},3000);
}



function mark1()
{
  document.getElementById("canvas13").style.cursor="auto";
	document.getElementById("trans_mark1").style.visibility="hidden";
	document.getElementById("text_marker").style.visibility="hidden";
	document.getElementById("marker").style.visibility="hidden";
	document.getElementById("arrow13a").style.visibility="hidden";
	document.getElementById("marker1_wh").style.visibility="visible";
	document.getElementById("marker1_wh").style.animation="mark1_hand_move1 4s forwards";
	
	 setTimeout(function()
        {
document.getElementById("mark1").style.visibility="visible";
document.getElementById("text_mark1").style.visibility="visible";
},3500);
 setTimeout(function()
        {

	document.getElementById("marker1_wh").style.visibility="hidden";
	document.getElementById("marker").style.visibility="visible";
	document.getElementById("trans_mark2").style.visibility="visible";
	document.getElementById("arrow13b").style.visibility="visible";
	document.getElementById("canvas13").style.cursor="url('images/handsmalls.png'),auto";
	},4000);
	
}




function mark2()
{
  document.getElementById("marker").style.visibility="hidden";
	document.getElementById("canvas13").style.cursor="auto";
	document.getElementById("arrow13b").style.visibility="hidden";
	document.getElementById("trans_mark2").style.visibility="hidden";
  document.getElementById("marker1_wh").style.visibility="visible";
  document.getElementById("marker1_wh").style.animation="mark2_hand_move2 4s forwards";

 setTimeout(function()
        {
document.getElementById("mark2").style.visibility="visible";
document.getElementById("text_mark2").style.visibility="visible";
},3500);
 setTimeout(function()
        {

	document.getElementById("marker1_wh").style.visibility="hidden";
	document.getElementById("marker").style.visibility="visible";
	document.getElementById("trans_mark3").style.visibility="visible";
  document.getElementById("arrow13c").style.visibility="visible";
	document.getElementById("canvas13").style.cursor="url('images/handsmalls.png'),auto";
	},4000);
   
}


function mark3()
{
document.getElementById("marker").style.visibility="hidden";
document.getElementById("canvas13").style.cursor="auto";
document.getElementById("arrow13c").style.visibility="hidden";
document.getElementById("trans_mark3").style.visibility="hidden";
document.getElementById("marker1_wh").style.visibility="visible";
document.getElementById("marker1_wh").style.animation="mark3_hand_move3 4s forwards";
setTimeout(function()
        {
document.getElementById("mark3").style.visibility="visible";
document.getElementById("text_mark3").style.visibility="visible";
},3500);
 setTimeout(function()
        {

	document.getElementById("marker1_wh").style.visibility="hidden";
	document.getElementById("marker").style.visibility="visible";
	document.getElementById("trans_drill_bit1").style.visibility="visible";
	document.getElementById("arrow13d").style.visibility="visible";
	document.getElementById("step13b").style.visibility="visible";
	},4000);
}


   



function drill_bit_move1()
{document.getElementById("trans_drill_bit1").style.visibility="hidden";
document.getElementById("arrow13d").style.visibility="hidden";
document.getElementById("drill_with_bit").style.visibility="hidden";
document.getElementById("drill_with_hand").style.visibility="visible";
	document.getElementById("drill_with_hand").style.animation="drill_with_bit1 4s forwards";

 setTimeout(function()
        {
 document.getElementById("mark1").style.visibility="hidden";
document.getElementById("hole1").style.visibility="visible";
document.getElementById("text_mark1").style.visibility="hidden";
document.getElementById("text_hole1").style.visibility="visible";
        },2000);
  setTimeout(function()
        {
   
document.getElementById("drill_with_hand").style.visibility="hidden";
  document.getElementById("drill_with_bit").style.visibility="visible";
	document.getElementById("trans_drill_bit2").style.visibility="visible";
	document.getElementById("arrow13e").style.visibility="visible";
        	   },4000);

}

function drill_bit_move2()
{   document.getElementById("drill_with_bit").style.visibility="hidden";
	document.getElementById("drill_with_hand").style.visibility="visible";
	document.getElementById("arrow13e").style.visibility="hidden";
	document.getElementById("trans_drill_bit2").style.visibility="hidden";
	document.getElementById("drill_with_hand").style.animation="drill_with_bit12 4s forwards";

 setTimeout(function()
        {
document.getElementById("mark2").style.visibility="hidden";
document.getElementById("hole2").style.visibility="visible";
document.getElementById("text_mark2").style.visibility="hidden";
document.getElementById("text_hole2").style.visibility="visible";
        },2000);

 setTimeout(function()
        {
       
	document.getElementById("drill_with_hand").style.visibility="hidden";
	 document.getElementById("drill_with_bit").style.visibility="visible";
	document.getElementById("trans_drill_bit3").style.visibility="visible";
	document.getElementById("arrow13f").style.visibility="visible";
        	   },4000);

}

function drill_bit_move3()
{	document.getElementById("arrow13f").style.visibility="hidden";
	document.getElementById("trans_drill_bit3").style.visibility="hidden";
 document.getElementById("drill_with_bit").style.visibility="hidden";
	document.getElementById("drill_with_hand").style.visibility="visible";
	document.getElementById("drill_with_hand").style.animation="drill_with_bit123 4s forwards";
 setTimeout(function()
        {
document.getElementById("mark3").style.visibility="hidden";
document.getElementById("hole3").style.visibility="visible";
document.getElementById("text_mark3").style.visibility="hidden";
document.getElementById("text_hole3").style.visibility="visible";
document.getElementById("arrow13").style.visibility="visible";
document.getElementById("nextButton13").style.visibility="visible";
        },2000);
 setTimeout(function()
        {
        
	document.getElementById("drill_with_hand").style.visibility="hidden";
	document.getElementById("drill_with_bit").style.visibility="visible";
	
        	   },4000);

}

function gitti1()
{	document.getElementById("canvas14").style.cursor="auto";
	document.getElementById("trans_gitti1").style.visibility="hidden";
	document.getElementById("arrow14a").style.visibility="hidden";

	document.getElementById("gitti1").style.animation="gitti1 3s forwards";
	document.getElementById("hand_gitti1").style.visibility="visible";
	document.getElementById("hand_gitti1").style.animation="hand_gitti1 3s forwards";

	setTimeout(function()
        {
document.getElementById("hand_gitti1").style.visibility="hidden";
document.getElementById("trans_gitti2").style.visibility="visible";
document.getElementById("arrow14b").style.visibility="visible";
document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";
        	},3000);
}


function gitti2()
{   document.getElementById("canvas14").style.cursor="auto";
	document.getElementById("trans_gitti2").style.visibility="hidden";
	document.getElementById("arrow14b").style.visibility="hidden";

	document.getElementById("gitti2").style.animation="gitti2 3s forwards";
	document.getElementById("hand_gitti1").style.visibility="visible";
	document.getElementById("hand_gitti1").style.animation="hand_gitti2 3s forwards";

	setTimeout(function()
        {
document.getElementById("hand_gitti1").style.visibility="hidden";
document.getElementById("trans_gitti3").style.visibility="visible";
document.getElementById("arrow14c").style.visibility="visible";
document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";
        	},3000);
}

function gitti3()
{document.getElementById("canvas14").style.cursor="auto";
	document.getElementById("trans_gitti3").style.visibility="hidden";
  document.getElementById("text_wall_plug").style.visibility="hidden";
	document.getElementById("arrow14c").style.visibility="hidden";

	document.getElementById("gitti3").style.animation="gitti3 3s forwards";
	document.getElementById("hand_gitti1").style.visibility="visible";
	document.getElementById("hand_gitti1").style.animation="hand_gitti31 3s forwards";

	setTimeout(function()
        {
document.getElementById("hand_gitti1").style.visibility="hidden";

document.getElementById("add_cabelcanvas14_button").style.visibility="visible";
document.getElementById("arrow14d").style.visibility="visible";
document.getElementById("step14b").style.visibility="visible";
        	},3000);
}

function add_cabel_canvas14()
{
	document.getElementById("add_cabelcanvas14_button").style.visibility="hidden";
	document.getElementById("arrow14d").style.visibility="hidden";

	document.getElementById("cabel_canvas14").style.visibility="visible";
	document.getElementById("cabel_canvas14").style.animation="cabel_canvas14 3s forwards";
setTimeout(function()
        {
document.getElementById("trans_cabel_canvas14").style.visibility="visible";
document.getElementById("arrow14e").style.visibility="visible";
document.getElementById("step14c").style.visibility="visible";
document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";
},3000);

}

function cabel_canvas14_animate()
{
document.getElementById("arrow14e").style.visibility="hidden";
document.getElementById("canvas14").style.cursor="auto";
document.getElementById("trans_cabel_canvas14").style.visibility="hidden";

document.getElementById("cabel_canvas14").style.animation="cabel_canvas14_animate 3s forwards";	

document.getElementById("hand_cabel").style.visibility="visible";
document.getElementById("hand_cabel").style.animation="hand_cabel_1 3s forwards";

setTimeout(function()
        {
document.getElementById("clip1").style.visibility="visible";
document.getElementById("clip2").style.visibility="visible";

document.getElementById("clip3").style.visibility="visible";
document.getElementById("text_wall_clip").style.visibility="visible";

document.getElementById("add_hammer_button_canvas14").style.visibility="visible";
document.getElementById("arrow14f").style.visibility="visible";
document.getElementById("step14d").style.visibility="visible";




        	},3000);

}

function add_hammer_canvas14()
{
document.getElementById("arrow14f").style.visibility="hidden";
document.getElementById("text_wall_clip").style.visibility="hidden";
document.getElementById("add_hammer_button_canvas14").style.visibility="hidden";
document.getElementById("hammer").style.visibility="visible";
document.getElementById("hammer").style.animation="hammer 2s forwards";
setTimeout(function()
        {
document.getElementById("text_hammer").style.visibility="visible";
document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";
document.getElementById("trans_clip1").style.visibility="visible";
document.getElementById("arrow14g").style.visibility="visible";
document.getElementById("step14e").style.visibility="visible";
},2000);
}


function clip1_move()
{
document.getElementById("canvas14").style.cursor="auto";
document.getElementById("trans_clip1").style.visibility="hidden";
document.getElementById("arrow14g").style.visibility="hidden";
document.getElementById("hand_clip").style.visibility="visible";
document.getElementById("hand_clip").style.animation="hand_clip1 3s forwards";
document.getElementById("clip1").style.animation="clip1 3s forwards";
setTimeout(function()
        {
document.getElementById("hand_clip").style.visibility="hidden";
        	document.getElementById("trans_hammer1").style.visibility="visible";
        	document.getElementById("arrow14j").style.visibility="visible";
        	document.getElementById("step14f").style.visibility="visible";
        	},3000);

}


function hammer1()
{document.getElementById("text_hammer").style.visibility="hidden";
  document.getElementById("trans_hammer1").style.visibility="hidden";
document.getElementById("arrow14j").style.visibility="hidden";
document.getElementById("hammer").style.visibility="hidden";
document.getElementById("hammer_hand").style.visibility="visible";
document.getElementById("hammer_hand").style.animation="hammer1 2s forwards";

setTimeout(function()
        {
     document.getElementById("clip1").style.visibility="hidden";

     document.getElementById("gitti1").style.visibility="hidden";
     document.getElementById("clip1_show").style.visibility="visible";
 },1500);
setTimeout(function()
        {
 document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";

document.getElementById("hammer_hand").style.visibility="hidden";
 document.getElementById("hammer").style.visibility="visible";
document.getElementById("trans_clip2").style.visibility="visible";
document.getElementById("arrow14h").style.visibility="visible";
document.getElementById("step14g").style.visibility="visible";
         },2000);	
        	

}

function clip2_move()
{
document.getElementById("canvas14").style.cursor="auto";
document.getElementById("trans_clip2").style.visibility="hidden";
document.getElementById("arrow14h").style.visibility="hidden";
document.getElementById("hand_clip").style.visibility="visible";
document.getElementById("hand_clip").style.animation="hand_clip2 3s forwards";
document.getElementById("clip2").style.animation="clip2 3s forwards";
document.getElementById("hand_cabel").style.animation="hand_cabel_1_1 3s forwards";
setTimeout(function()
        {
document.getElementById("hand_clip").style.visibility="hidden";

document.getElementById("trans_hammer2").style.visibility="visible";
document.getElementById("arrow14k").style.visibility="visible";
        		},3000);



}


function hammer2()
{
document.getElementById("trans_hammer2").style.visibility="hidden";
document.getElementById("arrow14k").style.visibility="hidden";

 document.getElementById("hammer").style.visibility="hidden";
document.getElementById("hammer_hand").style.visibility="visible";
document.getElementById("hammer_hand").style.animation="hammer2 2s forwards";
setTimeout(function()
        {
document.getElementById("clip2").style.visibility="hidden";
document.getElementById("gitti2").style.visibility="hidden";
document.getElementById("clip2_show").style.visibility="visible";
document.getElementById("hand_cabel").style.visibility="hidden";
},1500);
setTimeout(function()
        {
document.getElementById("trans_clip3").style.visibility="visible";
document.getElementById("arrow14i").style.visibility="visible";

document.getElementById("hammer_hand").style.visibility="hidden";
 document.getElementById("hammer").style.visibility="visible";

 document.getElementById("canvas14").style.cursor="url('images/handsmall.png'),auto";
        	},2000);

}

function clip3_move()
{
document.getElementById("canvas14").style.cursor="auto";
document.getElementById("trans_clip3").style.visibility="hidden";
document.getElementById("arrow14i").style.visibility="hidden";

document.getElementById("hand_clip").style.visibility="visible";
document.getElementById("hand_clip").style.animation="hand_clip3 3s forwards";
document.getElementById("clip3").style.animation="clip3 3s forwards";

setTimeout(function()
        {
document.getElementById("hand_clip").style.visibility="hidden";

document.getElementById("trans_hammer3").style.visibility="visible";
document.getElementById("arrow14l").style.visibility="visible";
        		},3000);

}

function hammer3()
{
	document.getElementById("trans_hammer3").style.visibility="hidden";
	document.getElementById("arrow14l").style.visibility="hidden";
 document.getElementById("hammer").style.visibility="hidden";
document.getElementById("hammer_hand").style.visibility="visible";
	document.getElementById("hammer_hand").style.animation="hammer3 2s forwards";

setTimeout(function()
        {

document.getElementById("clip3").style.visibility="hidden";
document.getElementById("gitti3").style.visibility="hidden";
document.getElementById("clip3_show").style.visibility="visible";

},1500);
setTimeout(function()
{
 document.getElementById("hammer_hand").style.visibility="hidden";
document.getElementById("hammer").style.visibility="visible";
},2000);

}



/*

function add_hammer()
{
	document.getElementById("add_hammer_button").style.visibility="hidden";
	// document.getElementById("hand_gitti1").style.visibility="hidden";
}

*/


/*
function nut4_canvas11()
{
document.getElementById("canvas11").style.cursor="auto";
document.getElementById("trans_nut4_canvas11").style.visibility="hidden";
document.getElementById("nut4_canvas11").style.animation="nut4_canvas11 3s forwards";
document.getElementById("handsmall_nutpickup_canvas11").style.visibility="visible";
document.getElementById("handsmall_nutpickup_canvas11").style.animation="hand_nut4_canvas11 3s forwards";

setTimeout(function()
        {
        document.getElementById("handsmall_nutpickup_canvas11").style.visibility="hidden";
         document.getElementById("add_cabel_button").style.visibility="visible";

       
		
		
		},3000);
}


function add_cabel()
{
	   document.getElementById("add_cabel_button").style.visibility="hidden";
	  

	    document.getElementById("cabel").style.visibility="visible";

        document.getElementById("cabel").style.animation="cabel1 3s forwards";

}*/