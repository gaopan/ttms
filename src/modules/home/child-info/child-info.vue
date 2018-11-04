<template>
  <div class="children-info content-wrapper">
    <table class="table outer-table">
      <thead>
          <th v-for = "(parent,parentIndex) in parentTheadConf">
          <!-- <i @click = "toggleAllTr(parentTr)" class="icon" :class = "{'icon-arrow-right': !showAllTr,'icon-arrow-down':showAllTr}"></i> -->
          {{parent.label}}
        </th>
      </thead>
      <tbody v-for = "(parentTr, parentTrIndex) in parentTableData">
        <tr :class = "{'active':parentTr.show}">
          <td>
            <i @click = "toggleTr(parentTr)" class="icon" :class = "{'icon-arrow-right': !parentTr.show,'icon-arrow-down':parentTr.show}"></i>
            {{parentTr.salutation}}
          </td>
          <td>{{parentTr.firstName}}</td>
          <td>{{parentTr.surname}}</td>
          <td>{{parentTr.emailAddress}}</td>
          <td>{{parentTr.mobileNumber}}</td>
          <td>{{parentTr.attendance}}</td>
          <td>{{parentTr.numberOfAttendees}}</td>
          <td>{{parentTr.firstNameOfGuest}}</td>
          <td>{{parentTr.surnameOfGuest}}</td>
          <td>{{parentTr.source}}</td>
        </tr>
        <tr  :class = "{'active':parentTr.show}" v-show = "parentTr.show" v-if = "parentTr.inited">
          <td class="inner-td" :colspan="parentTheadConf.length">
            <table class="table inner-table">
              <thead>
                  <th v-for = "(child, childIndex) in childTheadConf">{{child.label}}</th>
              </thead>
              <tbody>
                <tr v-for = "(childData, childDataIndex) in parentTr.children">
                  <td>{{childData.firstName}}</td>
                  <td>{{childData.surname}}</td>
                  <td>{{childData.gender}}</td>
                  <td>{{childData.national}}</td>
                  <td>{{childData.dataofBirth}}</td>
                  <td>{{childData.IntendedEnrollmentYear}}</td>
                  <td>{{childData.yearGroupAtEntry}}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
import MockData from "./mock-data.js"

export default {
  name:"child-info",
  data(){
    return{
      parentTableData:null,
      parentTheadConf:
      [
        {
          label:"Salutation",
        },{
          label:"First Name",
        },{
          label:"Surname",
        },{
          label:"Email Address",
        },{
          label:"Mobile Number",
        },{
          label:"Attendance",
        },{
          label:"Number of Attendees",
        },{
          label:"Guest's First Name",
        },{
          label:"Guest's Surname",
        },{
          label:"Source",
        }
      ],
      childTheadConf:
      [
        {
          label:"First Name",
        },{
          label:"Surname",
        },{
          label:"Gender",
        },{
          label:"National",
        },{
          label:"Data of Birth",
        },{
          label:"Intended Enrollment Year",
        },{
          label:"Year Group at Entry",
        }
      ],

    }
  },
  created(){
    this.getChildAndParentInfo().then(res=>{
      console.log(res.data);
      this.parentTableData = this.makeParentTableData(res.data);
    })
  },
  methods:{
    getChildAndParentInfo(){
      return Promise.resolve(MockData.getChildAndParentInfo)
    },
    makeParentTableData(data){
      if(data&&data.length){
        return data.map(d=>{
          return{
            salutation:d.salutation,
            firstName:d.firstName,
            surname:d.surname,
            emailAddress:d.emailAddress,
            mobileNumber:d.mobileNumber,
            attendance:d.attendance,
            numberOfAttendees:d.numberOfAttendees,
            firstNameOfGuest:d.firstNameOfGuest,
            surnameOfGuest:d.surnameOfGuest,
            source:d.source,
            children:d.children,
            show:d.show,
            inited:d.inited,
          }
        })
      }
    },
    toggleTr(d){
      d.inited = true;
      d.show = !d.show;
    }
  }
}
</script>

<style>
  .table{
    width: 100%;
  }

  .table thead{
    color: white;
    line-height: 24px;
  }
  .table thead th{
    padding:6px;
    position: relative;
  }
  .table th:not(:last-child):after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    left: 100%;
    top: 6px;
    bottom: 6px;
    background-color: #fff;
  }

  .outer-table thead{
    background: #312B80;
  }


  .inner-table thead{
    background: #575293;
  }

  .outer-table tr.active{
    background-color: #f2f2f2;
  }

  .table tbody tr:hover{
    background: #f2f2f2;
  }

  .table>tbody>tr>td.inner-td{
    padding:20px 20px 0 20px;
  }


  .icon{
    font-weight: bolder;
    vertical-align: top;
    margin-right: 6px;
    line-height: 19px;
    color: #312b80;
    cursor: pointer;
  }

  .icon-arrow-right:before{
    font-size: 24px;
    content: ">"
  }
  .icon-arrow-down:before{
    font-size: 18px;
    content: "V"
    
  }
</style>
