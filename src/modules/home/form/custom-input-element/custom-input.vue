<template>
  <p class="custome-input">
    <label>
      {{label}}<span class="required-element" v-if = "required">*</span>
    </label>
    <span v-if = "bError" class = "error-info">{{errorMes}}</span>
    <input type="text" class="form-control text-input" v-on:input="emit($event)"/>              
  </p>  
</template>

<script>


export default {
  name: 'custome-input',
  props:{
    iptText:String,
    label:String,
    errorMes:String,
    required:Boolean,
    pattern:RegExp,
    beValidata:Boolean
  },
  data(){
    return {
      inputValue:null,
      bError:false
    }
  },
  watch:{
    "$props.beValidata":function(newV,oldV){
      if(newV/*&&this.label == "Guest's Surname"*/){
        this.fnValidate();        
      }

    }
  },
  methods:{
    emit($event){
      this.inputValue = $event.target.value;
      this.$emit('input', this.inputValue)

      if(this.bError){
        // if(!!this.inputValue)this.bError = false;
        this.fnValidate();
      }
    },
    fnValidate(){
      if(!!this.$props.pattern){  // to be pattern
        if(this.$props.required){
          this.bError = !this.$props.pattern.test(this.inputValue);
        }else{
          if(!!this.inputValue)this.bError = !this.$props.pattern.test(this.inputValue);
        }
      }else{
        if(this.$props.required)this.bError = !this.inputValue;
      } 
      let invalid = this.bError ? true:false;
      this.$emit('invalid', {invalid})       
    }
  },
  beforeDestroy(){
    this.$off("input")
  }


}
</script>

<style>
  .error-info,
  .required-element{
    color:red;
    margin-left: 5px;
  }
  .text-input{
    display: block;
  }

</style>
