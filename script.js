const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const chunks=[];
  for(let i=0;i<arr.length;i++){
	//console.log(i)
        let sum = arr[i];
		let res=[sum]
		if(sum>n){
			continue;
		}
        // console.log(res,"mklll")
		for(let j=i+1,c=0;j<arr.length;j++,c++){
           sum+=arr[j];
		   //console.log(sum,j)
		   if(sum<=n){
			res.push(arr[j]);
			if(j === arr.length-1){
				console.log("end",i,c)
				i+=c+1;
			}
		   }else{
			i+=c;
			break;
		   }
		}
		//console.log(i,"mmm")
		chunks.push(res)
  }
  //console.log(chunks)
  return chunks
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
