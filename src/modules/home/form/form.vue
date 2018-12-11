<template>
		<div class="form-container-wrapper content-wrapper">
			
			<div class="form-container">

				<div class = "form-explanation">
						<p>我们邀请未来的家长参加一个小组会议，以了解更多关于崇正牛津國際中學，并与经验丰富的教育家和学校的高级管理人员交谈：</p>

						<p>时间：星期一，2018年11月12日，下午6:30PM-8:00</p>

						<p>地点：香港中心冰雪街16号卢西塔诺俱乐部14楼招生办公室</p>

						<p>着装规范：商务休闲</p>


						<p>会议将以英语进行；</p>
						
						<p>需要注册，请填写以下报名表格。由于座位有限，以先到先得的方式保留座位。如果您的位置被确认，将发送电子邮件确认给您；</p>

						<p>请注意，本课程为“父母”的内容和讨论的目的是对未来的父母。因此不允许儿童入学。谢谢你的理解。</p>		
				</div>

				<form>

					<!-- parent-info -->
					<div class="parent-info">
						<h4 class="info-title">A. Parents Information</h4>
							<p class="info-block">
								<custome-select v-model = "parent.salutation" :label = "'Salutation'" :options = "parent_salutation_option" ></custome-select>							
							</p>
							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'parentFirstname')" v-model = "parent.firstname" :pattern = "pattern.name" :beValidata = "toValidate" :label = "'First Name'" :required = "true" :errorMes = "errorInfo.parent.firstName"></custome-input>
							</div>

							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'parentSurname')" v-model = "parent.surname"  :pattern = "pattern.name" :beValidata = "toValidate" :label = "'Surname'" :required = "true" :errorMes = "errorInfo.parent.surname"></custome-input>
							</div>

							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'parentEmail')" v-model = "parent.email"  :pattern = "pattern.email" :beValidata = "toValidate" :label = "'Email Address'" :required = "true" :errorMes = "errorInfo.parent.email"></custome-input>
							</div>

							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'parentMobil')" v-model = "parent.mobile"  :pattern = "pattern.mobile" :beValidata = "toValidate" :label = "'Mobile Number'" :required = "true" :errorMes = "errorInfo.parent.mobile"></custome-input>
							</div>

					</div>
					<!-- child-info-container -->
					<div class="child-info-container">
						<h4 class="info-title">B.Information about your child(ren)</h4>
						<div class="child-info" :class = "{'noPaddingTop':index===0}" v-for = "(child,index) in childList">
							<h4 class="child-info-title">
								Child {{index + 1}} Details 
								<span class = "delete-child-member" @click = "deleteChildInfo" v-if = "index > 0">X</span>
							</h4>

							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'childFirstname'+index)" v-model = "child.firstname"  :pattern = "pattern.name" :beValidata = "toValidate" :label = "'First Name'" :required = "index === 0" :errorMes = "errorInfo.child.firstName"></custome-input>
							</div>
							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'childSurname'+index)" v-model = "child.surname"  :pattern = "pattern.name" :beValidata = "toValidate" :label = "'Surname'" :required = "index === 0" :errorMes = "errorInfo.child.surname"></custome-input>
							</div>
							
							<p class="info-block">
								<custome-select @invalid = "fnValidate(arguments, 'childGender'+index)" :label = "'Gender'" :beValidata = "toValidate" :options = "child_gender_option" v-model = "child.gender" :required = "index === 0" :errorMes = "errorInfo.child.gender"></custome-select>										
							</p>

							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'childNationality'+index)" v-model = "child.nationality" :pattern = "pattern.nationality" :beValidata = "toValidate" :label = "'Nationality'" :required = "index === 0" :errorMes = "errorInfo.child.nationality"></custome-input>
							</div>
							
							<div class="info-block">
								<custome-input @invalid = "fnValidate(arguments, 'childBirth'+index)" v-model = "child.birth"  :pattern = "pattern.ddmmyyyy" :beValidata = "toValidate" :label = "'Date of Birth (DD-MM-YYYY)'" :required = "index === 0" :errorMes = "errorInfo.child.birth"></custome-input>
							</div>
														
							<p class="info-block">
								<custome-select @invalid = "fnValidate(arguments, 'childEnrollmentYear'+index)" v-model = "child.enrollmentYear" :beValidata = "toValidate" :label = "'Intended Enrollment Year'" :options = "child_enrollmentYear_option" :required = "index === 0" :errorMes = "errorInfo.child.enrollment"></custome-select>								
							</p>
							
							
							<p class="info-block">
								<custome-select @invalid = "fnValidate(arguments, 'childGroup'+index)" v-model = "child.group" :beValidata = "toValidate" :label = "'Year Group at Entry'" :options = "child_group_option" :required = "index === 0" :errorMes = "errorInfo.child.group"></custome-select>																
							</p>
						</div>		
						<p class="add-child" v-if = "childList.length < 3">
							<button class="add-child-btn" @click = "addChildInfo($event)">添加</button>
							<span class="error-info" v-if = "anotherChildPartial">* 请将孩子的信息填写完整</span>
						</p>
					</div>

					<div class="parent-preference-info">
						<h4 class="info-title">C. Select your preference</h4>
						<div class="preference-checkbox">
							<label>
								Select your preference <span class="required-element">*</span>
							</label>
							<span class="error-info" v-if = "!(guest.available||guest.unavailable)&&toValidate">{{errorInfo.preference.available}}</span>
				      <p class="preference-content">
				      	<input type="radio" name="preference" v-model = "guest.available" value = "1">
				      	Monday, 12th November 2018, 6:30 p.m. - 8:00 p.m.
				      </p>
				      <p class="preference-content">
				      	<input type="radio"  name="preference" v-model = "guest.available" value = "2">
				      	I can't attend this session, please keep me informed of future events
				    	</p>
						</div>

						<p class="info-block">
								<custome-select @invalid = "fnValidate(arguments, 'guestNumber')" v-model = "guest.number" :label = "'Number of Attendees'" :beValidata = "toValidate" :options = "guest_number_option" :required = "true" :errorMes = "errorInfo.preference.number"></custome-select>														
						</p>

						<div class="info-block">
							<custome-input v-model = "guest.firstname" :pattern = "pattern.name" :beValidata = "toValidate" :label = "'Guest\'s First Name'"></custome-input>
						</div>

						<div class="info-block">
							<custome-input v-model = "guest.surname"  :pattern = "pattern.name" :beValidata = "toValidate" :label = "'Guest\'s Surname'"></custome-input>
						</div>
						
					</div>

					<div class="how-to-know">
						<h4 class="info-title">D. 您是通过什么途径了解到崇正牛津國際中學的?</h4>
						<p class="info-block">
								<custome-select @invalid = "fnValidate(arguments, 'source')" v-model = "source" :beValidata = "toValidate" :label = "'Source'" :options = "source_option"  :required = "true" :errorMes = "errorInfo.source"></custome-select>								
						</p>		
					</div>

					<div class="submit-info"><button @click = "submitInfo($event)">提交</button></div>
				</form>	
				
			</div>
		
	</div>
</template>
<script type="text/javascript" src="./form.js"></script>
<style type="text/css" src="./form.css"></style>