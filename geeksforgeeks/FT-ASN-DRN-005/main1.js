function navNext0()

{
        document.getElementById("canvas0").style.visibility="hidden";

        document.getElementById("canvas1").style.visibility="visible";
        // document.getElementById("trans_drone_type").style.visibility="visible";

        document.getElementById("canvas1").style.cursor="url('image/handfinger.png'),auto"; 
}


function swicthon()
{
	 document.getElementById("canvas1").style.cursor="auto";
	 document.getElementById("windows7").style.visibility="visible";
	  document.getElementById("naza_icon").style.visibility="visible";
	   document.getElementById("trans_click_icon").style.visibility="visible";
	   // document.getElementById("arrow2").style.visibility="visible";
	   document.getElementById("step1a").style.visibility="hidden";
	    document.getElementById("step1b").style.visibility="visible";
	  document.getElementById("trans_switchon").style.visibility="hidden";
	   // document.getElementById("arrow1").style.visibility="hidden";
}

function zoomview_monitor()
{
	 document.getElementById("trans_click_icon").style.visibility="hidden";
	  // document.getElementById("arrow2").style.visibility="hidden";
	 document.getElementById("canvas1").style.visibility="hidden";

     document.getElementById("canvas2").style.visibility="visible";
}


function software_open()
{ 
	// document.getElementById("arrow3").style.visibility="hidden";
	document.getElementById("step1c").style.visibility="hidden";
 document.getElementById("step1d").style.visibility="visible";
	 document.getElementById("windows71").style.visibility="hidden";
	 document.getElementById("naza_icon1").style.visibility="hidden";
	  document.getElementById("step1_image").style.visibility="visible";
	  document.getElementById("upper_div").style.visibility="visible";
	  document.getElementById("below_div").style.visibility="visible";
	   document.getElementById("bit1").style.visibility="visible";
	    document.getElementById("bit2").style.visibility="visible";
	     document.getElementById("bit3").style.visibility="visible";
	      document.getElementById("bit4").style.visibility="visible";
	   document.getElementById("add_remote_button").style.visibility="visible";
	   // document.getElementById("arrow7").style.visibility="visible";
	 


}

function add_remote()
{document.getElementById("add_remote_button").style.visibility="hidden";
// document.getElementById("arrow7").style.visibility="hidden";
	   document.getElementById("remote").style.visibility="visible";
	    document.getElementById("remote").style.animation="remote1 2s forwards";


	      setTimeout(function()
        {

	   document.getElementById("remotebutton").style.visibility="visible";

	   document.getElementById("trans_poweron").style.visibility="visible";
	    // document.getElementById("arrow4").style.visibility="visible";

document.getElementById("step1d").style.visibility="hidden";
 document.getElementById("step1e").style.visibility="visible";

	   document.getElementById("canvas2").style.cursor="url('image/handfinger.png'),auto"; 


        	      },2000);
}

function remote_poweron()
{document.getElementById("trans_poweron").style.visibility="hidden";
 // document.getElementById("arrow4").style.visibility="hidden";
document.getElementById("canvas2").style.cursor="auto";
  document.getElementById("remotebutton").style.animation="remote_buttton_on 1s forwards";

   setTimeout(function()
        {
        	document.getElementById("screen").style.visibility="visible";
        	document.getElementById("trans_throttle").style.visibility="visible";
        	// document.getElementById("arrow5").style.visibility="visible";
        	document.getElementById("step1e").style.visibility="hidden";
 			document.getElementById("step1f").style.visibility="visible";
 },500);
}


function throttle_input()
{	 document.getElementById("trans_throttle").style.visibility="hidden";
     // document.getElementById("arrow5").style.visibility="hidden";
	 document.getElementById("bit3").style.animation="bit3_move 1s forwards";

	  setTimeout(function()
        {
document.getElementById("text_throttle").style.visibility="visible";
document.getElementById("trans_r").style.visibility="visible";
// document.getElementById("arrow6").style.visibility="visible";
document.getElementById("step1f").style.visibility="hidden";
 document.getElementById("step1g").style.visibility="visible";
        	 },800);
}

function trans_r()
{
	document.getElementById("trans_r").style.visibility="hidden";
	// document.getElementById("arrow6").style.visibility="hidden";

	 document.getElementById("bit4").style.animation="bit4_move 1s forwards";

	  setTimeout(function()
        {
document.getElementById("text_r").style.visibility="visible";
document.getElementById("trans_e").style.visibility="visible";
// document.getElementById("arrow8").style.visibility="visible";
document.getElementById("step1g").style.visibility="hidden";
 document.getElementById("step1h").style.visibility="visible";
        	 },800);
}

function trans_e()
{
document.getElementById("trans_e").style.visibility="hidden";
// document.getElementById("arrow8").style.visibility="hidden";

 document.getElementById("bit2").style.animation="bit2_move 1s forwards";

	  setTimeout(function()
        {
document.getElementById("text_e").style.visibility="visible";
document.getElementById("trans_a").style.visibility="visible";
// document.getElementById("arrow9").style.visibility="visible";
document.getElementById("step1h").style.visibility="hidden";
document.getElementById("step1i").style.visibility="visible";
        	 },800);
}


function trans_a()
{
document.getElementById("trans_a").style.visibility="hidden";
// document.getElementById("arrow9").style.visibility="hidden";
document.getElementById("bit1").style.animation="bit1_move 1s forwards";
 setTimeout(function()
        {
document.getElementById("text_a").style.visibility="visible";

document.getElementById("trans_basic_optn").style.visibility="visible";
// document.getElementById("arrow10").style.visibility="visible";
document.getElementById("step1i").style.visibility="hidden";
document.getElementById("step1j").style.visibility="visible";

 },800);
}



function trans_basic_optn()
{
document.getElementById("trans_basic_optn").style.visibility="hidden";
// document.getElementById("arrow10").style.visibility="hidden";
document.getElementById("canvas2").style.visibility="hidden";
document.getElementById("windows71").style.visibility="hidden";

document.getElementById("canvas3").style.visibility="visible";
document.getElementById("trans_da").style.visibility="visible";
document.getElementById("trans_db").style.visibility="visible";
document.getElementById("trans_dc").style.visibility="visible";
document.getElementById("trans_dd").style.visibility="visible";
document.getElementById("trans_de").style.visibility="visible";
document.getElementById("trans_df").style.visibility="visible";
document.getElementById("trans_dg").style.visibility="visible";
document.getElementById("trans_dh").style.visibility="visible";
document.getElementById("trans_drone_type").style.visibility="visible";
document.getElementById("step1j").style.visibility="hidden";
document.getElementById("step1k").style.visibility="visible";
}

function trans_da()
{
alert('Please Select the "XFRAME" Drone');
}

function trans_db()
{
	alert('Please Select the "XFRAME" Drone');
}


function trans_dc()
{
	alert('Please Select the "XFRAME" Drone');
}


function trans_dd()
{
	alert('Please Select the "XFRAME" Drone');
}


function trans_de()
{
	alert('Please Select the "XFRAME" Drone');
}


function trans_df()
{
	alert('Please Select the "XFRAME" Drone');
}


function trans_dg()
{
	alert('Please Select the "XFRAME" Drone');
}

function trans_dh()
{
	alert('Please Select the "XFRAME" Drone');
}


function trans_drone_type()
{
document.getElementById("trans_drone_type").style.visibility="hidden";
document.getElementById("trans_drone_type").style.visibility="hidden";
document.getElementById("step2_image").style.visibility="hidden";
document.getElementById("step21_image").style.visibility="visible";
document.getElementById("trans_motor_test").style.visibility="visible";
document.getElementById("step1k").style.visibility="hidden";
document.getElementById("step1l").style.visibility="visible";
}

function trans_motor_test()
{
document.getElementById("trans_motor_test").style.visibility="hidden";
// document.getElementById("trans_motor_test").style.visibility="visible";
document.getElementById("motor_orientation").style.visibility="visible";
document.getElementById("trans_m1").style.visibility="visible";
document.getElementById("step1l").style.visibility="hidden";
document.getElementById("step1m").style.visibility="visible";

}

function trans_m1()
{
document.getElementById("trans_m1").style.visibility="hidden";
document.getElementById("arrow_m1").style.visibility="visible";
document.getElementById("trans_m2").style.visibility="visible";
document.getElementById("step1m").style.visibility="hidden";
document.getElementById("step1n").style.visibility="visible";
}

function trans_m2()
{
	document.getElementById("trans_m2").style.visibility="hidden";
	document.getElementById("arrow_m2").style.visibility="visible";
	document.getElementById("trans_m3").style.visibility="visible";
	document.getElementById("step1n").style.visibility="hidden";
	document.getElementById("step1o").style.visibility="visible";
}

function trans_m3()
{
	document.getElementById("trans_m3").style.visibility="hidden";
	document.getElementById("arrow_m3").style.visibility="visible";
	document.getElementById("trans_m4").style.visibility="visible";
	document.getElementById("step1o").style.visibility="hidden";
	document.getElementById("step1p").style.visibility="visible";
}

function trans_m4()
{
	document.getElementById("trans_m4").style.visibility="hidden";
	document.getElementById("arrow_m4").style.visibility="visible";
	document.getElementById("trans_mounting_optn").style.visibility="visible";
	document.getElementById("step1p").style.visibility="hidden";
	document.getElementById("step1q").style.visibility="visible";
}


function trans_mounting()
{
document.getElementById("trans_mounting_optn").style.visibility="hidden";
document.getElementById("canvas3").style.visibility="hidden";
document.getElementById("step21_image").style.visibility="hidden";
document.getElementById("canvas4").style.visibility="visible";
document.getElementById("step1q").style.visibility="hidden";
document.getElementById("step1r").style.visibility="visible";
}


function trans_default()
{
	document.getElementById("trans_default").style.visibility="hidden";
	document.getElementById("trans_rc").style.visibility="visible";
	document.getElementById("step1r").style.visibility="hidden";
	document.getElementById("step1s").style.visibility="visible";
}

function trans_rc()
{
	document.getElementById("trans_rc").style.visibility="hidden";
	document.getElementById("step3_image").style.visibility="hidden";
	document.getElementById("step4_image").style.visibility="visible";
	document.getElementById("trans_1").style.visibility="visible";
	document.getElementById("trans_2").style.visibility="visible";
		document.getElementById("gps").style.visibility="visible";
	document.getElementById("upper_div1").style.visibility="visible";
	document.getElementById("below_div1").style.visibility="visible";

	document.getElementById("bit11").style.visibility="visible";
	document.getElementById("bit21").style.visibility="visible";
	document.getElementById("bit31").style.visibility="visible";
	document.getElementById("bit41").style.visibility="visible";
	document.getElementById("bit_black").style.visibility="visible";


	document.getElementById("add_remote_button_again").style.visibility="visible";
	document.getElementById("step1s").style.visibility="hidden";
	document.getElementById("step1t").style.visibility="visible";

}

function trans_1()
{
	alert('You Clicked on Wrong Option!');
}

function trans_2()
{
	alert('You Clicked on Wrong Option!');
}

function add_remote_again()
{
	document.getElementById("add_remote_button_again").style.visibility="hidden";

	document.getElementById("remote1").style.visibility="visible";
	document.getElementById("remote1").style.animation="remote11 2s forwards";

setTimeout(function()
        {
document.getElementById("trans_start").style.visibility="visible";
document.getElementById("step1t").style.visibility="hidden";
document.getElementById("step1u").style.visibility="visible";

 },2000);
}


function trans_start(){
	document.getElementById("trans_start").style.visibility="hidden";
	document.getElementById("start").style.visibility="visible";
	document.getElementById("trans_throttle_up").style.visibility="visible";
	document.getElementById("step1u").style.visibility="hidden";
	document.getElementById("step1v").style.visibility="visible";
}

function throttle_up()
{
	document.getElementById("trans_throttle_up").style.visibility="hidden";
	document.getElementById("bit31").style.animation="bit31_move_up 1s forwards";
	document.getElementById("bit41").style.animation="bit41_move_up 1s forwards";

	setTimeout(function()
        {
document.getElementById("trans_throttle_down").style.visibility="visible";
},1000);
}

function throttle_down()
{
	document.getElementById("trans_throttle_down").style.visibility="hidden";
	document.getElementById("bit31").style.animation="bit31_move_down 1s forwards";
	document.getElementById("bit41").style.animation="bit41_move_down 1s forwards";
		setTimeout(function()
        {
document.getElementById("trans_throttle_neutral").style.visibility="visible";
},1000);
}

function throttle_neutral()
{
	document.getElementById("trans_throttle_neutral").style.visibility="hidden";
	document.getElementById("bit31").style.animation="bit31_move_neutral 1s forwards";
	document.getElementById("bit41").style.animation="bit41_move_neutral 1s forwards";
	document.getElementById("trans_pitch_up").style.visibility="visible";
	document.getElementById("step1v").style.visibility="hidden";
	document.getElementById("step1w").style.visibility="visible";
}

function pitch_up()
{
document.getElementById("trans_pitch_up").style.visibility="hidden";

	document.getElementById("bit11").style.animation="bit11_move_up 1s forwards";
	document.getElementById("bit21").style.animation="bit21_move_up 1s forwards";
setTimeout(function()
 {
document.getElementById("trans_pitch_down").style.visibility="visible";
},1000);
}

function pitch_down()
{
document.getElementById("trans_pitch_down").style.visibility="hidden";
	document.getElementById("bit11").style.animation="bit11_move_down 1s forwards";
	document.getElementById("bit21").style.animation="bit21_move_down 1s forwards";
	setTimeout(function()
 {
document.getElementById("trans_pitch_neutral").style.visibility="visible";
},1000);
}

function pitch_neutral()
{
 
document.getElementById("trans_pitch_neutral").style.visibility="hidden";
document.getElementById("bit11").style.animation="bit11_move_neutral 1s forwards";
document.getElementById("bit21").style.animation="bit21_move_neutral 1s forwards";
	setTimeout(function()
 {
document.getElementById("trans_altitude").style.visibility="visible";
document.getElementById("step1w").style.visibility="hidden";
	document.getElementById("step1x").style.visibility="visible";
},1000);
}

function trans_altitude()
{
	document.getElementById("trans_altitude").style.visibility="hidden";
	document.getElementById("gps").style.visibility="hidden";
   document.getElementById("alt").style.visibility="visible";
   document.getElementById("bit_black").style.animation="bit_black_move 1s forwards";
   	setTimeout(function()
 {
document.getElementById("trans_manual").style.visibility="visible";
},1000);
}

function trans_manual()
{
document.getElementById("trans_manual").style.visibility="hidden";
document.getElementById("alt").style.visibility="hidden";
document.getElementById("manual").style.visibility="visible";
 document.getElementById("bit_black").style.animation="bit_black_move1 1s forwards";

	setTimeout(function()
 {
 	 document.getElementById("trans_gain_optn").style.visibility="visible";
 	 document.getElementById("step1x").style.visibility="hidden";
	document.getElementById("step1y").style.visibility="visible";
 // document.getElementById("trans_start1").style.visibility="visible";
 },1000);
}

/*function trans_start1()
{
document.getElementById("trans_start1").style.visibility="hidden";
 document.getElementById("finish_image").style.visibility="visible";	
 document.getElementById("trans_gain_optn").style.visibility="visible";
}*/

function trans_gain()
{
	 document.getElementById("trans_gain_optn").style.visibility="hidden";
	 document.getElementById("step4_image").style.visibility="hidden";
	 document.getElementById("step5_image").style.visibility="visible";
	
	  document.getElementById("trans_step5_pitch").style.visibility="visible";
	
	    // document.getElementById("trans_step5_roll").style.visibility="visible";


	   document.getElementById("step1y").style.visibility="hidden";
	document.getElementById("step1z").style.visibility="visible";
}



function trans_step5_pitch()
{
 document.getElementById("trans_step5_pitch").style.visibility="hidden";
 document.getElementById("step5_input").style.visibility="visible";
  document.getElementById("trans_step5_roll").style.visibility="visible";


  // document.getElementById("pitch_text").style.visibility="visible";


  // document.getElementById("trans_step5_roll").style.visibility="visible";
}

/*function check()
{
	var pitch;
 pitch=document.getElementById("step5_input").value;
 console.log(pitch);

 if(pitch==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("trans_step5_roll").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 120');
 }
}*/

function trans_step5_roll()
{
	 var pitch;
 pitch=document.getElementById("step5_input").value;
 console.log(pitch);

 if(pitch==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_roll").style.visibility="visible";
 	  document.getElementById("trans_step5_yaw").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 120');
 }
 // document.getElementById("trans_step5_roll").style.visibility="hidden";
 // document.getElementById("step5_input_roll").style.visibility="visible";

 // document.getElementById("roll_text").style.visibility="visible";
 // document.getElementById("trans_step5_yaw").style.visibility="visible";
}

/*function check2()
{
	var roll;
 roll=document.getElementById("step5_input_roll").value;
 console.log(roll);

 if(roll==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("trans_step5_yaw").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 120');
 }
}*/

function trans_step5_yaw()
{

	 var roll;
 roll=document.getElementById("step5_input_roll").value;
 console.log(roll);

 if(roll==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_yaw").style.visibility="visible";
 	  document.getElementById("trans_step5_vertical").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 120');
 }
 // document.getElementById("trans_step5_yaw").style.visibility="hidden";
 // document.getElementById("yaw_text").style.visibility="visible";
  // document.getElementById("trans_step5_vertical").style.visibility="visible";
}

function trans_step5_vertical()
{

		 var yaw;
 yaw=document.getElementById("step5_input_yaw").value;
 console.log(yaw);

 if(yaw==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_vertical").style.visibility="visible";
 	  document.getElementById("trans_step5_alt1").style.visibility="visible";
 	   document.getElementById("step1z").style.visibility="hidden";
	document.getElementById("stepa1").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 120');
 }
 // document.getElementById("trans_step5_vertical").style.visibility="hidden";
 // document.getElementById("vertical_text").style.visibility="visible";
  // document.getElementById("trans_step5_alt1").style.visibility="visible";
   // document.getElementById("step1z").style.visibility="hidden";
	// document.getElementById("stepa1").style.visibility="visible";
}

function trans_step5_alt1()
{

	 var vertical;
 vartical=document.getElementById("step5_input_vertical").value;
 console.log(vertical);

 if(vartical==200)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_alt1").style.visibility="visible";
 	 document.getElementById("trans_step5_alt2").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 200');
 }
 // document.getElementById("trans_step5_alt1").style.visibility="hidden";
  // document.getElementById("alt_pitch_text").style.visibility="visible";
   // document.getElementById("trans_step5_alt2").style.visibility="visible";
}

function trans_step5_alt2()
{

	var alt1;
 alt1=document.getElementById("step5_input_alt1").value;
 console.log(alt1);

 if(alt1==220)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_alt2").style.visibility="visible";
 	 document.getElementById("trans_advance_optn").style.visibility="visible";
 	    document.getElementById("stepa1").style.visibility="hidden";
	document.getElementById("stepb1").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 220');
 }
 // document.getElementById("trans_step5_alt2").style.visibility="hidden";
  // document.getElementById("alt_roll_text").style.visibility="visible";
   // document.getElementById("trans_advance_optn").style.visibility="visible";
    // document.getElementById("stepa1").style.visibility="hidden";
	// document.getElementById("stepb1").style.visibility="visible";
}

function trans_advance()
{

		var alt2;
 alt2=document.getElementById("step5_input_alt2").value;
 console.log(alt2);

 if(alt2==220)
 {
 	console.log('you input correct value');
 	 document.getElementById("step61_image").style.visibility="visible";
 	 document.getElementById("trans_recommand_optn").style.visibility="visible";
 	 document.getElementById("trans_recommand_optn1").style.visibility="visible";
 	 document.getElementById("trans_recommand_optn2").style.visibility="visible";
 	 document.getElementById("trans_recommand_optn3").style.visibility="visible";
 	 document.getElementById("trans_recommand_optn4").style.visibility="visible";
 	 document.getElementById("trans_recommand_optn5").style.visibility="visible";
 	 document.getElementById("trans_recommand_optn6").style.visibility="visible";
 	 document.getElementById("stepb1").style.visibility="hidden";
	document.getElementById("stepc1").style.visibility="visible";
 }
 else
 {
 	alert('please enter the value 220');
 }
 /*document.getElementById("trans_advance_optn").style.visibility="hidden";
  document.getElementById("step5_image").style.visibility="hidden";
 document.getElementById("step61_image").style.visibility="visible";
  document.getElementById("trans_recommand_optn").style.visibility="visible";
   document.getElementById("stepb1").style.visibility="hidden";
	document.getElementById("stepc1").style.visibility="visible";*/
}

function trans_recommand1()
{
alert('You Clicked on Wrong Option!');
}

function trans_recommand2()
{
alert('You Clicked on Wrong Option!');
}


function trans_recommand3()
{
alert('You Clicked on Wrong Option!');
}


function trans_recommand4()
{
alert('You Clicked on Wrong Option!');
}


function trans_recommand5()
{
alert('You Clicked on Wrong Option!');
}


function trans_recommand6()
{
alert('You Clicked on Wrong Option!');
}


 
function trans_recommand()
{
 document.getElementById("trans_recommand_optn").style.visibility="hidden";
  document.getElementById("step61_image").style.visibility="hidden";
 document.getElementById("step6_recommand").style.visibility="visible";
  document.getElementById("trans_filesave_optn").style.visibility="visible";
   document.getElementById("stepc1").style.visibility="hidden";
	document.getElementById("stepd1").style.visibility="visible";
}

function trans_filesave()
{
 	document.getElementById("trans_filesave_optn").style.visibility="hidden";
 	 document.getElementById("step6_recommand").style.visibility="hidden";
   document.getElementById("file_save_image").style.visibility="visible";
   document.getElementById("trans_gohome_landing_optn").style.visibility="visible";
   document.getElementById("trans_landing_optn").style.visibility="visible";
      document.getElementById("stepd1").style.visibility="hidden";
	document.getElementById("stepe1").style.visibility="visible";
}

function trans_landing()
{
	alert('You Clicked on Wrong Option!');
}

function trans_gohome_landing()
{
	document.getElementById("trans_gohome_landing_optn").style.visibility="hidden";
	 document.getElementById("file_save_image").style.visibility="hidden";
	 document.getElementById("gohome_landing_image").style.visibility="visible";
	  document.getElementById("trans_ioc_optn").style.visibility="visible";
	   document.getElementById("stepe1").style.visibility="hidden";
	document.getElementById("stepf1").style.visibility="visible";
}

function trans_ioc()
{
 document.getElementById("trans_ioc_optn").style.visibility="hidden";
 document.getElementById("gohome_landing_image").style.visibility="hidden";
 document.getElementById("ioc_image").style.visibility="visible";
 document.getElementById("trans_ioc_click").style.visibility="visible";
    document.getElementById("stepf1").style.visibility="hidden";
	document.getElementById("stepg1").style.visibility="visible";
}

function trans_ioc_click()
{
document.getElementById("trans_ioc_click").style.visibility="hidden";
 document.getElementById("ioc_image").style.visibility="hidden";
document.getElementById("ioc_click_image").style.visibility="visible";
document.getElementById("trans_gimbal_optn").style.visibility="visible";

document.getElementById("stepg1").style.visibility="hidden";
document.getElementById("steph1").style.visibility="visible";

}

function trans_gimbal()
{
document.getElementById("trans_gimbal_optn").style.visibility="hidden";
document.getElementById("ioc_click_image").style.visibility="hidden";
document.getElementById("gimbal_image").style.visibility="visible";
document.getElementById("trans_gimbal_optn1").style.visibility="visible";
document.getElementById("trans_gimbal_default").style.visibility="visible";

document.getElementById("steph1").style.visibility="hidden";
document.getElementById("stepi1").style.visibility="visible";
}

function trans_gimbal1()
{
	alert('You Clicked on Wrong Option! Set Gimbal as Default');
}

function trans_gimbal_default()
{
document.getElementById("trans_gimbal_default").style.visibility="hidden";

document.getElementById("trans_h3/43d_optn").style.visibility="visible";
document.getElementById("stepi1").style.visibility="hidden";
document.getElementById("stepj1").style.visibility="visible";
}

function trans_3d_optn()
{
document.getElementById("trans_h3/43d_optn").style.visibility="hidden";
document.getElementById("gimbal_image").style.visibility="hidden";
document.getElementById("3d_image").style.visibility="visible";
document.getElementById("fpv_mode").style.visibility="visible";
document.getElementById("trans_voltage_optn").style.visibility="visible";
document.getElementById("stepj1").style.visibility="hidden";
document.getElementById("stepk1").style.visibility="visible";
}

function fpv_mode()
{
	alert('You Clicked on Wrong Option!');
}

function trans_voltage_optn()
{
document.getElementById("trans_voltage_optn").style.visibility="hidden";
document.getElementById("3d_image").style.visibility="hidden";
document.getElementById("voltage_image").style.visibility="visible";
document.getElementById("trans_on").style.visibility="visible";
document.getElementById("trans_off").style.visibility="visible";
document.getElementById("mySelect").style.visibility="visible";
document.getElementById("trans_v1").style.visibility="visible";
document.getElementById("trans_limit_optn").style.visibility="visible";
document.getElementById("stepk1").style.visibility="hidden";
document.getElementById("stepl1").style.visibility="visible";
}

function trans_on()
{
alert('You Clicked on Wrong Option!');
}

function trans_off()
{
	alert('You Clicked on Wrong Option!');
}
/*function myFunction(){
	var select;
	select=document.getElementById('mySelect').value;
	if (select==s1LiPo)
	{
		console.log('right');
	}

	else
	{
		alert('Please Select 2S LiPo Option');
	}
}*/

function trans_v1()
{document.getElementById("trans_v1").style.visibility="hidden";
document.getElementById("input_v1").style.visibility="visible";
document.getElementById("trans_v2").style.visibility="visible";
}

function trans_v2()
{
	var v1;
	v1= document.getElementById('input_v1').value;
	if(v1==0)
	{document.getElementById("trans_v2").style.visibility="hidden";
		document.getElementById("input_v2").style.visibility="visible";
		document.getElementById("trans_v3").style.visibility="visible";
	}
	else{
		alert('please Enter Input Voltage 0.00')
	}
}

function trans_v3()
{
	var v2;
	v2= document.getElementById('input_v2').value;
	if(v2==0)
	{
		document.getElementById("trans_v3").style.visibility="hidden";
		document.getElementById("input_v3").style.visibility="visible";
		document.getElementById("trans_v4").style.visibility="visible";
	}
	else{
		alert('please Enter Input Voltage 0.00')
	}
}

function trans_v4()
{
	var v3;
	v3= document.getElementById('input_v3').value;
	if(v3==0)
	{
		document.getElementById("trans_v4").style.visibility="hidden";
		document.getElementById("input_v4").style.visibility="visible";
		document.getElementById("trans_limit_optn1").style.visibility="visible";
		
	}
	else{
		alert('please Enter Input Voltage 0.00')
	}
}

function trans_limit_optn1(){
	var v4;

	v4= document.getElementById('input_v4').value;
	if(v4==0)
	{
		
	
		document.getElementById("trans_limit_optn1").style.visibility="hidden";
		document.getElementById("trans_limit_optn").style.visibility="hidden";
		document.getElementById("limit_image").style.visibility="visible";
	}
	else{
		
		alert('please Enter Input Voltage 0.00');
		// document.getElementById('input_v4').innerHTML=v5;
	}
}
function trans_limit_optn()
{
document.getElementById("trans_limit_optn").style.visibility="hidden";
document.getElementById("voltage_image").style.visibility="hidden";
document.getElementById("limit_image").style.visibility="visible";
document.getElementById("trans_max_height").style.visibility="visible";
document.getElementById("trans_min_height").style.visibility="visible";
document.getElementById("trans_limit_default").style.visibility="visible";
document.getElementById("stepl1").style.visibility="hidden";
document.getElementById("stepm1").style.visibility="visible";
}

function trans_max_height()
{
alert('Please Set Limit as Default! ');
}

function trans_min_height()
{
alert('Please Set Limit as Default! ');
}

function trans_limit_default()
{
document.getElementById("trans_limit_default").style.visibility="hidden";
document.getElementById("trans_tools_optn").style.visibility="visible";
document.getElementById("stepm1").style.visibility="hidden";
document.getElementById("stepn1").style.visibility="visible";
}

function trans_tools_optn()
{
document.getElementById("trans_tools_optn").style.visibility="hidden";
document.getElementById("limit_image").style.visibility="hidden";
document.getElementById("tools_image").style.visibility="visible";
document.getElementById("trans_advance1").style.visibility="visible";
document.getElementById("stepn1").style.visibility="hidden";
document.getElementById("stepo1").style.visibility="visible";
}

function trans_advance1()
{
document.getElementById("trans_advance1").style.visibility="hidden";
document.getElementById("tools_image").style.visibility="hidden";
document.getElementById("tools_advance_image").style.visibility="visible";
document.getElementById("trans_upgrade_optn").style.visibility="visible";
document.getElementById("stepo1").style.visibility="hidden";
document.getElementById("stepp1").style.visibility="visible";
}

function trans_upgrade()
{
document.getElementById("trans_upgrade_optn").style.visibility="hidden";
document.getElementById("tools_advance_image").style.visibility="hidden";
document.getElementById("upgrade_image").style.visibility="visible";
document.getElementById("trans_info_optn").style.visibility="visible";
document.getElementById("stepp1").style.visibility="hidden";
document.getElementById("stepq1").style.visibility="visible";
}

function trans_info()
{
document.getElementById("trans_info_optn").style.visibility="hidden";
document.getElementById("upgrade_image").style.visibility="hidden";
document.getElementById("info_image").style.visibility="visible";
document.getElementById("arrowcubox2").style.visibility="visible";
document.getElementById("nextButton2").style.visibility="visible";
document.getElementById("stepq1").style.visibility="hidden";
document.getElementById("stepr1").style.visibility="visible";
}

function navNext2()
{
document.getElementById("canvas4").style.visibility="hidden";
document.getElementById("canvas5").style.visibility="visible";

}

function add_drone()
{
document.getElementById("add_drone_button").style.visibility="hidden";
document.getElementById("drone").style.visibility="visible";
 document.getElementById("drone").style.animation="drone_move1 4s forwards";

setTimeout(function()
 {
document.getElementById("add_remote_button_canvas5").style.visibility="visible";
document.getElementById("step2_1").style.visibility="hidden";
document.getElementById("step2_2").style.visibility="visible";
},3000);
}

function add_remote_canvas5()
{
document.getElementById("add_remote_button_canvas5").style.visibility="hidden";
document.getElementById("remote1_canvas5").style.visibility="visible";
document.getElementById("remote1_canvas5").style.animation="remote1_canvas5 2s forwards";

setTimeout(function()
 {
document.getElementById("remotebutton_canvas5").style.visibility="visible";

document.getElementById("trans_remote_poweron").style.visibility="visible";
document.getElementById("step2_2").style.visibility="hidden";
document.getElementById("step2_3").style.visibility="visible";
document.getElementById("canvas5").style.cursor="url('image/handfinger.png'),auto"; 
},2000);
}

function remote_poweron_canvas5()
{
document.getElementById("canvas5").style.cursor="auto";
document.getElementById("trans_remote_poweron").style.visibility="hidden";
 document.getElementById("remotebutton_canvas5").style.animation="remote_poweron_canvas5 1s forwards";

  setTimeout(function()
 {
 document.getElementById("naza_led").style.visibility="visible";
  document.getElementById("yellow_light").style.visibility="visible";
 document.getElementById("screen_canvas5").style.visibility="visible";
  document.getElementById("gps_poweron_off1").style.visibility="visible";
   document.getElementById("one").style.visibility="visible";
  document.getElementById("step2_3").style.visibility="hidden";
document.getElementById("step2_4").style.visibility="visible";
 },1000);
}

function gps_poweron_off1()
{
 document.getElementById("gps_poweron_off1").style.visibility="hidden";
  document.getElementById("gps_poweron_off2").style.visibility="visible";
  document.getElementById("one").style.visibility="hidden";
  document.getElementById("two").style.visibility="visible";
}

function gps_poweron_off2()
{
 document.getElementById("gps_poweron_off2").style.visibility="hidden";
  document.getElementById("gps_poweron_off3").style.visibility="visible";
   document.getElementById("two").style.visibility="hidden";
  document.getElementById("three").style.visibility="visible";
}

function gps_poweron_off3()
{
 document.getElementById("gps_poweron_off3").style.visibility="hidden";
  document.getElementById("gps_poweron_off4").style.visibility="visible";
    document.getElementById("three").style.visibility="hidden";
  document.getElementById("four").style.visibility="visible";
}

function gps_poweron_off4()
{
 document.getElementById("gps_poweron_off4").style.visibility="hidden";
  document.getElementById("gps_poweron_off5").style.visibility="visible";
   document.getElementById("four").style.visibility="hidden";
  document.getElementById("five").style.visibility="visible";
}

function gps_poweron_off5()
{
 document.getElementById("gps_poweron_off5").style.visibility="hidden";
 document.getElementById("gps_poweron_off6").style.visibility="visible";
 document.getElementById("five").style.visibility="hidden";
  document.getElementById("six").style.visibility="visible";
}

function gps_poweron_off6()
{
 document.getElementById("gps_poweron_off6").style.visibility="hidden";
  document.getElementById("gps_poweron_off7").style.visibility="visible";
   document.getElementById("six").style.visibility="hidden";
  document.getElementById("seven").style.visibility="visible";
}

function gps_poweron_off7()
{
 document.getElementById("gps_poweron_off7").style.visibility="hidden";
  document.getElementById("gps_poweron_off8").style.visibility="visible";
   document.getElementById("seven").style.visibility="hidden";
  document.getElementById("eight").style.visibility="visible";
}

function gps_poweron_off8()
{
 document.getElementById("gps_poweron_off8").style.visibility="hidden";
  document.getElementById("gps_poweron_off9").style.visibility="visible";
     document.getElementById("eight").style.visibility="hidden";
  document.getElementById("nine").style.visibility="visible";
}


function gps_poweron_off9()
{
 document.getElementById("gps_poweron_off9").style.visibility="hidden";
  document.getElementById("gps_poweron_off10").style.visibility="visible";
     document.getElementById("nine").style.visibility="hidden";
  document.getElementById("ten").style.visibility="visible";
}


function gps_poweron_off10()
{
 document.getElementById("gps_poweron_off10").style.visibility="hidden";
 document.getElementById("ten").style.visibility="hidden";
   document.getElementById("yellow_light").style.visibility="hidden";
  document.getElementById("yellow_light1").style.visibility="visible";
  document.getElementById("trans_horizontally_flip").style.visibility="visible";
   document.getElementById("step2_4").style.visibility="hidden";
document.getElementById("step2_5").style.visibility="visible";
}

function trans_horizontally_flip()
{ document.getElementById("trans_horizontally_flip").style.visibility="hidden";
  document.getElementById("drone").style.animation="drone_flip 10s forwards";

   setTimeout(function()
 {

 	 document.getElementById("trans_vertically_flip").style.visibility="visible";
 	   document.getElementById("step2_5").style.visibility="hidden";
		document.getElementById("step2_6").style.visibility="visible";
 	  document.getElementById("yellow_light1").style.visibility="hidden";
 	 document.getElementById("green_light1").style.visibility="visible";
 },10000);
}

function trans_vertically_flip()
{
 document.getElementById("trans_vertically_flip").style.visibility="hidden";
  document.getElementById("drone").style.animation="drone_flip_vertically 10s forwards";

    setTimeout(function()
 {
  
 	 document.getElementById("green_light1").style.visibility="hidden";
 	 document.getElementById("green_light2").style.visibility="visible";
 	 document.getElementById("arrowcubox3").style.visibility="visible";
 	 document.getElementById("nextButton3").style.visibility="visible";
 	   document.getElementById("step2_6").style.visibility="hidden";
		document.getElementById("step2_7").style.visibility="visible";
 },10000);
}

function navNext3()
{
	 document.getElementById("canvas5").style.visibility="hidden";
 	 document.getElementById("canvas6").style.visibility="visible";
 	 // document.getElementById("add_remote_button_canvas6").style.visibility="visible";
}

function add_remote_canvas6()
{
	 document.getElementById("add_remote_button_canvas6").style.visibility="hidden";
	 document.getElementById("remote1_canvas6").style.visibility="visible";
 document.getElementById("remote1_canvas6").style.animation="remote1_canvas6 2s forwards";

     setTimeout(function()
 {
 document.getElementById("remotebutton_canvas6").style.visibility="visible";

document.getElementById("trans_remote_poweron_canvas6").style.visibility="visible";

document.getElementById("step3_1").style.visibility="hidden";
document.getElementById("step3_2").style.visibility="visible";
document.getElementById("canvas6").style.cursor="url('image/handfinger.png'),auto";

 	 },2000);
}

function remote_poweron_canvas6()
{
document.getElementById("canvas6").style.cursor="auto";
document.getElementById("trans_remote_poweron_canvas6").style.visibility="hidden";
 document.getElementById("remotebutton_canvas6").style.animation="remote_poweron_canvas6 1s forwards";
    setTimeout(function()
 {
 	document.getElementById("screen_canvas6").style.visibility="visible";
 	document.getElementById("trans_arm_pos1").style.visibility="visible";
 	document.getElementById("step3_2").style.visibility="hidden";
	document.getElementById("step3_3").style.visibility="visible";
 },1000);
}

function trans_arm_pos1()
{
document.getElementById("trans_arm_pos1").style.visibility="hidden";
document.getElementById("trans_arm_pos2").style.visibility="visible";
document.getElementById("step3_3").style.visibility="hidden";
document.getElementById("step3_4").style.visibility="visible";
}

function trans_arm_pos2()
{
document.getElementById("trans_arm_pos2").style.visibility="hidden";
document.getElementById("trans_arm_pos3").style.visibility="visible";
document.getElementById("step3_4").style.visibility="hidden";
document.getElementById("step3_5").style.visibility="visible";
}

function trans_arm_pos3()
{
document.getElementById("trans_arm_pos3").style.visibility="hidden";
 document.getElementById("drone_canvas6").style.animation="drone_canvas6 5.5s forwards";

  document.getElementById("fan1").style.animation="fan1 4s forwards";
  document.getElementById("fan2").style.animation="fan2 4s forwards";
    document.getElementById("fan3").style.animation="fan3 4s forwards";
     document.getElementById("fan4").style.animation="fan4 4s forwards";
     setTimeout(function()
 {
 	document.getElementById("trans_arm_pos4").style.visibility="visible";
 	document.getElementById("step3_5").style.visibility="hidden";
	document.getElementById("step3_6").style.visibility="visible";

 },3000);

}

function trans_arm_pos4()
{
	document.getElementById("trans_arm_pos4").style.visibility="hidden";
	document.getElementById("drone_canvas6").style.animation="drone__down_canvas6 5.5s forwards";
	  	document.getElementById("fan1").style.animation="fan1_down 4s forwards";
  		document.getElementById("fan2").style.animation="fan2_down 4s forwards";
    	document.getElementById("fan3").style.animation="fan3_down 4s forwards";
     	document.getElementById("fan4").style.animation="fan4_down 4s forwards";

	   setTimeout(function()
 {document.getElementById("step3_6").style.visibility="hidden";
 document.getElementById("step3_7").style.visibility="visible";
 	document.getElementById("trans_arm_pos5").style.visibility="visible";
 	
 },5000);
}

function trans_arm_pos5()
{ document.getElementById("step3_7").style.visibility="hidden";
 document.getElementById("step3_8").style.visibility="visible";
	document.getElementById("trans_arm_pos5").style.visibility="hidden";
}

/*function rotate()
{
	 document.getElementById("rotate").style.animation="rotate 7s linear";
}*/