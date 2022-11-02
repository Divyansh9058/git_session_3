function checkPrime(num){
	let factor=0;
	for(let i=1;i<=num;i++){
	if(num%i==0){
	factor++
		}
}
  if(factor==2){
	return true;
		}else{
	return false;
		}
	
}

let answer=checkPrime(15);
if(answer==true){
console.log("No. is Prime");
}else{
console.log("No. is not Prime");
}




