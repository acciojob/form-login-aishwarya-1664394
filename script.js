function getFormvalue(e) {
    //Write your code here
	e.preventDefault()
	let form=document.getElementbyId('form1');
	let fname=form.target[0].value;
	let lname=form.target[1].value;
	let fullname=fname+" "+lname;
	alert(fullname)
	

}
