var removeDuplicates = function(nums) {
    
	for(let i = 0, j=0; i<nums.length; i++){
		 if(nums[i]!=nums[j]){
			  j++;
			  nums[j] = nums[i]
		 }
			  
	}return nums;
};
removeDuplicates([1,1,2,3,4])