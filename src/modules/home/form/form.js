import CustomeSelect from "./custom-input-element/custom-select.vue"
import CustomeInput from "./custom-input-element/custom-input.vue"
import optionData from "./option-data.js"
import errorInfo from "./error-info.js"

console.log(optionData)

export default{
	name:"form",
	data(){
		return {
			parent_salutation_option: optionData.parent_salutation_option,
			child_gender_option: optionData.child_gender_option,
			child_group_option: optionData.child_group_option,
			child_enrollmentYear_option: optionData.child_enrollmentYear_option,
			guest_number_option: optionData.guest_number_option,
			source_option: optionData.source_option,
			errorInfo:errorInfo,

			toValidate:false,
			validateField:{
				'parentFirstname':false,
				'parentSurname':false,
				'parentEmail':false,
				'parentMobil':false,
				'childFirstname0':false,
				'childSurname0':false,
				'childGender0':false,
				'childNationality0':false,
				'childBirth0':false,
				'childEnrollmentYear0':false,
				'guestNumber':false,
				'source':false

			},
			pattern:{
				name:null/*/^[A-Z]{1}[a-z]+$/*/,
				nationality:null/*/^[A-Z]{1}[a-z]+$/*/,
				email:/^[0-9|A-z|_]{1,17}[@][0-9|A-z]{1,7}.(com)$/,
				mobile:/^[1-9]{1}[0-9]{10}$/,
				ddmmyyyy:/^(0[1-9]|[1-2][0-9]|3[0-1]|[1-9]{1})-(0[1-9]|1[0-2]|[1-9]{1})-([1-9]\d{3})$/
			},

			parent:{
				salutation:null,
				firstname:null,
				surname:null,
				email:null,
				mobile:null,
			},

			childList:[{
				firstname:null,
				surname:null,
				gender:null,
				nationality:null,
				birth:null,
				enrollmentYear:null,
				group:null
			}],
			guest:{
				available:false,
				number:null,
				firstname:null,
				surname:null
			},
			source:null,
			anotherChildPartial:false
		}
	},
	created(){

	},
	watch:{
		parent:{
			handler(newV,oldV){
				console.log("new parent",newV)
				this.toValidate = false;
			},
			deep:true
		},
		childList:{
			handler(newV,oldV){
				console.log("new childList",newV)
				this.toValidate = false;
			},
			deep:true
		},
		guest:{
			handler(newV,oldV){
				console.log("new guest",newV)
				this.toValidate = false;
			},
			deep:true
		},
		source:{
			handler(newV,oldV){
				console.log("new source",newV)
				this.toValidate = false;
			},
			deep:true
		}
	},
	components:{ CustomeSelect,CustomeInput },
	methods:{
		fnValidate(arg,field,index){
			this.validateField[field] = arg[0].invalid
		},

		addChildInfo(event){
			event.preventDefault();
			this.childList.push({
				firstname:null,
				surname:null,
				gender:null,
				nationality:null,
				birth:null,
				enrollmentYear:null,
				group:null
			})
		},

		deleteChildInfo(index){
			this.childList.splice(index,1)
		},

		submitInfo(event){
			event.preventDefault();
			this.toValidate = true;
			let partialEmpty_1  = false;
			let partialEmpty_2  = false;

			if(this.childList[1]){
				partialEmpty_1 = checkOptionalChild(this.childList[1])
			}
			if(this.childList[2]){
				partialEmpty_2 = checkOptionalChild(this.childList[2])
			}


			this.anotherChildPartial = partialEmpty_1 || partialEmpty_2;

			if(!this.anotherChildPartial){
				let validateFieldValue = Object.values(this.validateField);
				let bdisabledPost = validateFieldValue.some(d=>{
					return d;
				})

				if(!bdisabledPost){
						console.log("post data", this.parent,this.childList,this.guest,this.source)
				}

			}

			function checkOptionalChild(data){

				let childValues = Object.values(data);
				partialEmpty = childValues.some(d=>{
					return !d;
				})
				return partialEmpt;

			}			
			console.log(this.validateField)


		}
	}
}