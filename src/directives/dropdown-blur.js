let listener = null;

export default{
	bind(ele,binding){
		listener = binding.value;
		document.addEventListener("click",listener,false); 
	},
	unbind(ele,binding){
		document.removeEventListener("click",listener,false); 

	}
}