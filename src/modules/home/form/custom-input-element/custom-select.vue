<template>
	<div class="custom-select">
		<label>
			{{label}}<span class="required-element" v-if = "required">*</span>
		</label>	
		<span v-if = "bError" class = "error-info">{{errorMes}}</span>
		<select class="form-control"  v-on:input="emit($event)">
			<option v-for = "(op, index) in options" :value = "op.value">
				{{op.label}}
			</option>
		</select>
	</div>
</template> 
<script type="text/javascript">
	export default{
		name:"custom-select",
		props:{
			value:String,
			options:Array,
			label:String,
			required:Boolean,
	    errorMes:String,
	    beValidata:Boolean			
		},

		data(){
			return{
				selectValue:null,
				bError:false
			}
		},
		watch:{
	    "$props.beValidata":function(newV,oldV){
	      if(newV&&this.$props.required){
	        this.bError = !this.selectValue;
	        let invalid = this.bError ? true:false;
      		this.$emit('invalid', {invalid})
	      }
	    }			
		},

		methods:{
			emit($event){
				this.selectValue = $event.target.value;
				if(this.bError){
					this.bError = !this.selectValue;
	        let invalid = this.bError ? true:false;
      		this.$emit('invalid', {invalid})					
				}
				this.$emit('input', this.selectValue);			
			}
		},

		beforeDestroy(){
			this.$off('input')
		}

	}
</script>
<style type="text/css" scoped>
	.custom-select select{
		width: 100%;
	}
	.form-control:focus{
    border-color: #342e88;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(52,46,136,.6);		
	}
</style>