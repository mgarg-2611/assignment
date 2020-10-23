console.log('hi this is new project');

var answer_score=0;
var total_question=10;
var wrong_answer;
var percent;

var student_name;
var enroll_num;
var course_name;
var semester_name;
var mobile;
var email_id;


var time_start;
var time_end;
var total_time;
var total_time1;
var total_time2;



function step1()
{
    alert('Step-1: Kindly Enter Your Details');

}



function navNext0()

 {

        

		

		student_name=document.getElementById('name_stu').value;
		console.log(student_name);

		enroll_num=document.getElementById('enroll').value;
		console.log(enroll_num);

		course_name=document.getElementById('course').value;
		console.log(course_name);

		semester_name=document.getElementById('semester').value;
		console.log(semester_name);

		mobile=document.getElementById('mob').value;
		console.log(mobile);

        email_id=document.getElementById('email').value;
        console.log(email_id);
if (student_name =="" || enroll_num =="" || course_name =="" || semester_name =="" || mobile =="" || email_id =="")


{
    alert("Please Fill All the Details.");
}		
       
else if (document.getElementById("mob").validity.rangeOverflow)
         {
            alert('Kindly Enter 10 Digits');
         }

else if (document.getElementById("mob").validity.rangeUnderflow)
         {
            alert('Kindly Enter 10 Digits');
         }
         

else {
        document.getElementById("canvas0").style.visibility="hidden";
        document.getElementById("canvas1").style.visibility="visible";
        setTimeout(function()
        {
             alert("Step-2: Please Watch the full video.");
         },1000);

        setTimeout(function()
        {
             document.getElementById('btn9').style.visibility="visible";
         },60000);

}
}



function navNext1()

 {
 document.getElementById('btn9').style.visibility="hidden";
        document.getElementById("canvas1").style.visibility="hidden";
	
        document.getElementById("canvas2").style.visibility="visible";

         time_start = new Date();
     	console.log(time_start);

        setTimeout(function()
        {
             alert(" Step-3: Please Drag Words into Appropiate Blocks.");
         },1000);

         /* setTimeout(function()
        {
            document.getElementById('btn9').style.visibility="visible";
         },60000);*/
       
       
}





function allowDropThis(i)
{
	i.preventDefault();
}


function dragThis(i)
{
	i.dataTransfer.setData("doggo",i.target.id);
   
}


function dropThis(i)
{
	i.preventDefault();
	var data = i.dataTransfer.getData("doggo");


    if(document.getElementById(data).className === "fruit_item")
    {
        if(i.target.className === "fruit")
	{
	document.getElementById(data).style.background="green";
	document.getElementById(data).style.left='20px';
	document.getElementById(data).style.top='20px';
   
	document.getElementById(data).setAttribute('draggable', false);
	document.getElementById('potato').style.visibility="visible";
	answer_score++;

	}
			
	if(i.target.className === "vegetable")
	{
	document.getElementById(data).style.background="red";
	document.getElementById(data).style.left='20px';
	document.getElementById(data).style.top='20px';
  
	 document.getElementById(data).setAttribute('draggable', false);
	 document.getElementById('potato').style.visibility="visible";
}
}



	if(document.getElementById(data).className === "vegetable_item"){

	if(i.target.className === "fruit")
	{
	document.getElementById(data).style.background="red";
	document.getElementById(data).style.left='20px';
	document.getElementById(data).style.top='20px';
   
	document.getElementById(data).setAttribute('draggable', false);
	document.getElementById('banana').style.visibility="visible";
	
	}
			
	if(i.target.className === "vegetable")
	{
	document.getElementById(data).style.background="green";
	document.getElementById(data).style.left='20px';
	document.getElementById(data).style.top='20px';
   
	document.getElementById(data).setAttribute('draggable', false);
	answer_score++;
	document.getElementById('banana').style.visibility="visible";
	}
}
    

if(document.getElementById(data).className === "fruit_banana")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById('cabage').style.visibility="visible";
		
}			
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById('cabage').style.visibility="visible";
}
}



if(document.getElementById(data).className === "vegetable_cabage")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById('blueberry').style.visibility="visible";
}		
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById('blueberry').style.visibility="visible";
}
}



if(document.getElementById(data).className === "fruit_blueberry")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById('broccoli').style.visibility="visible";
		
}			
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById('broccoli').style.visibility="visible";
}
}




if(document.getElementById(data).className === "vegetable_broccoli")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById('beetroot').style.visibility="visible";
}		
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById('beetroot').style.visibility="visible";
}
}



if(document.getElementById(data).className === "vegetable_beetroot")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById('custardapple').style.visibility="visible";
}		
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById('custardapple').style.visibility="visible";
}
}



if(document.getElementById(data).className === "fruit_custardapple")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById('plum').style.visibility="visible";
		
}			
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById('plum').style.visibility="visible";
}
}



if(document.getElementById(data).className === "fruit_plum")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById('mushroom').style.visibility="visible";
		
}			
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById('mushroom').style.visibility="visible";
}
}


if(document.getElementById(data).className === "vegetable_mushroom")
{

if(i.target.className === "fruit")
{
document.getElementById(data).style.background="red";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
document.getElementById("btn2").style.visibility="visible";
}		
if(i.target.className === "vegetable")
{
document.getElementById(data).style.background="green";
document.getElementById(data).style.left='20px';
document.getElementById(data).style.top='20px';
document.getElementById(data).setAttribute('draggable', false);
answer_score++;
document.getElementById("btn2").style.visibility="visible";
}
}




i.target.appendChild(document.getElementById(data));


}



function navNext2()

 { time_end = new Date();
 console.log(time_end);
document.getElementById("btn2").style.visibility="hidden";
        document.getElementById("canvas2").style.visibility="hidden";

		document.getElementById("canvas3").style.visibility="visible";

		document.getElementById('apple').style.visibility="hidden";
		document.getElementById('potato').style.visibility="hidden";
		document.getElementById('banana').style.visibility="hidden";
		document.getElementById('cabage').style.visibility="hidden";
		document.getElementById('blueberry').style.visibility="hidden";
		document.getElementById('broccoli').style.visibility="hidden";
		document.getElementById('beetroot').style.visibility="hidden";
		document.getElementById('custardapple').style.visibility="hidden";
		document.getElementById('plum').style.visibility="hidden";
		document.getElementById('mushroom').style.visibility="hidden";



		document.getElementById('total_question').innerHTML=total_question;

		document.getElementById('correct_answer').innerHTML=answer_score;
		document.getElementById('score001').innerHTML=(answer_score);
		
		wrong_answer=(total_question-answer_score);
		document.getElementById('wrong_answer').innerHTML=wrong_answer;

		percent=((answer_score/total_question)*100);



		if(percent===10)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='10%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='red';
		document.getElementById('progress_text_heading').innerHTML="Oops! Very poor performance";
		document.getElementById('progess_text').innerHTML="You need to do Very hard work.We wish for your bright carrer!"
		}

		if(percent===20)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='20%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='red';
		document.getElementById('progress_text_heading').innerHTML="Oops! Very poor performance";
		document.getElementById('progess_text').innerHTML="You need to do Very hard work.We wish for your bright carrer!"
		}

		if(percent===30)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='30%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='red';
		document.getElementById('progress_text_heading').innerHTML="Oops! Very poor performance";
		document.getElementById('progess_text').innerHTML="You need to do Very hard work.We wish for your bright carrer!"
		}

		if(percent===40)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='40%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='red';
		document.getElementById('progress_text_heading').innerHTML="Oops! Very Poor performance";
		document.getElementById('progess_text').innerHTML="You need to do Very hard work.We wish for your bright carrer!"
		}

		if(percent===50)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='50%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='brown';
		document.getElementById('progress_text_heading').innerHTML=" Average performance";
		document.getElementById('progess_text').innerHTML="You need to do Very hard work.We wish for your bright carrer!"
		}


		if(percent===60)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='60%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='brown';
		document.getElementById('progress_text_heading').innerHTML=" Average performance";
		document.getElementById('progess_text').innerHTML="You still need to do hard work.We wish for your bright carrer!"
		}

		if(percent===70)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='70%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='blue';
		document.getElementById('progress_text_heading').innerHTML="Great! Good performance";
		document.getElementById('progess_text').innerHTML="You can do better.We wish for your bright carrer!"
		}

		if(percent===80)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='80%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='blue';
		document.getElementById('progress_text_heading').innerHTML="Great! Good performance";
		document.getElementById('progess_text').innerHTML="You can do better.We wish for your bright carrer!"
		}

		if(percent===90)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='90%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='green';
		document.getElementById('progress_text_heading').innerHTML="Excellent! Very Good performance";
		document.getElementById('progess_text').innerHTML="You performed well.We wish for your bright carrer!"
		}

		if(percent===100)
		{

		document.getElementById('progress_percent').innerHTML=percent+"%";
		document.getElementById('progress_percent').style.width='100%';
		document.getElementById('progress_percent').style.color='#FFF';
		document.getElementById('progress_percent').style.backgroundColor='green';
		document.getElementById('progress_text_heading').innerHTML="Excellent! Very Good performance";
		document.getElementById('progess_text').innerHTML="You performed well.We wish for your bright carrer!"
		}

         total_time = (time_end-time_start);
         total_time1=(total_time/1000);
         total_time2=Math.trunc(total_time1);

         console.log(total_time+"in  miliseconds" );
         console.log(total_time1+" in seconds");

        document.getElementById('time001').innerHTML=total_time2+" "+"seconds";


	    document.getElementById('name').innerHTML=student_name;
        document.getElementById('e_name').innerHTML=enroll_num;
        document.getElementById('c_name').innerHTML=course_name;
        document.getElementById('sm_name').innerHTML=semester_name;
        document.getElementById('num').innerHTML=mobile;
        document.getElementById('mail').innerHTML=email_id;





	
		console.log(total_question);
		console.log(answer_score);
		console.log(wrong_answer);
		console.log(percent);
       

}