
function checkPrime(num){
	let count=0;
	for(let i=2;i<num;i++){
	if(num%i==0){
	count++;
		}
	if(count>0){
	return false;
		}else{
	return true;
		}
	}
	
}

let answer=checkPrime(15);
if(answer==true){
console.log("No. is Prime")
}else{
console.log("No. is not Prime");
}



