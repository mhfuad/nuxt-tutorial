import{_ as u}from"./DmLGO2-b.js";import{_ as p}from"./DlAUqK2U.js";import{o as n,c as m,a as e,r as f,b as a,w as c,p as v,m as _,d as r}from"./cYGXKVsY.js";const h={name:"Fa6SolidUserGroup"},w={xmlns:"http://www.w3.org/2000/svg",width:"1.25em",height:"1em",viewBox:"0 0 640 512"};function g(d,s,i,o,l,t){return n(),m("svg",w,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M609.3 512H471.5c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4c89 0 161.2 72.2 161.2 161.3c0 17-13.8 30.7-30.7 30.7M432 256c-31 0-59-12.6-79.3-32.9c19.7-26.6 31.3-59.5 31.3-95.1c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112"},null,-1)]))}const x=p(h,[["render",g]]),y={class:"pagetitle d-flex align-items-center"},k={class:"breadcrumb"},S={class:"breadcrumb-item"},N={class:"section"},C={class:"row"},B={class:"col-lg-6"},D={class:"card"},M={class:"card-body"},R={__name:"create",setup(d){const s=f({name:"",age:null,marital_status:"",present_address:"",number:"",owner_of_number:"",nid:"",date_of_birth:"",physical_condition:"",height:"",screen_color:""}),i=async()=>{try{const o=await $fetch("https://64a3ffc3c3b509573b56e5f8.mockapi.io/api/v1/users",{method:"POST",body:s.value});console.log("Form submitted successfully:",o),s.value={name:"",age:null,marital_status:"",present_address:"",number:"",owner_of_number:"",nid:"",date_of_birth:"",physical_condition:"",height:"",screen_color:""}}catch(o){console.error("Error submitting form:",o)}};return(o,l)=>{const t=u,b=x;return n(),m("div",null,[e("div",y,[e("div",null,[l[2]||(l[2]=e("h1",null,"Users",-1)),e("nav",null,[e("ol",k,[e("li",S,[a(t,{to:"/"},{default:c(()=>l[0]||(l[0]=[r("Home")])),_:1})]),l[1]||(l[1]=e("li",{class:"breadcrumb-item active"},"User Create",-1))])])]),a(t,{to:"/user",class:"btn btn-primary ms-auto d-flex align-items-center"},{default:c(()=>[a(b),l[3]||(l[3]=r(" User List "))]),_:1})]),e("section",N,[e("div",C,[e("div",B,[e("div",D,[e("div",M,[l[5]||(l[5]=e("h5",{class:"card-title"},"User Form",-1)),e("form",{onSubmit:v(i,["prevent"])},l[4]||(l[4]=[_('<div class="row mb-3"><label for="inputText" class="col-sm-2 col-form-label">Name</label><div class="col-sm-10"><input name="name" type="text" class="form-control"></div></div><div class="row mb-3"><label for="inputEmail" class="col-sm-2 col-form-label">Age</label><div class="col-sm-10"><input name="age" type="number" class="form-control"></div></div><div class="row mb-3"><label for="inputNumber" class="col-sm-2 col-form-label">Marital Status</label><div class="col-sm-10"><select name="marital_status" class="form-select" aria-label="Default select example"><option selected="">Select menu</option><option value="1">Marrid</option><option value="2">Unmarrid</option><option value="3">Divorced</option></select></div></div><div class="row mb-3"><label for="inputNumber" class="col-sm-2 col-form-label">Present Address</label><div class="col-sm-10"><textarea name="present_address" class="form-control" style="height:100px;"></textarea></div></div><div class="row mb-3"><label for="inputDate" class="col-sm-2 col-form-label">Phone Numbeer</label><div class="col-sm-10"><input name="number" type="text" class="form-control"></div></div><div class="row mb-3"><label for="inputTime" class="col-sm-2 col-form-label">Owener of this Phone number</label><div class="col-sm-10"><input name="owener_of_number" type="text" class="form-control"></div></div><div class="row mb-3"><label for="inputColor" class="col-sm-2 col-form-label">NID</label><div class="col-sm-10"><input name="owener_of_number" type="text" class="form-control"></div></div><div class="row mb-3"><label for="inputPassword" class="col-sm-2 col-form-label">Date of Birth</label><div class="col-sm-10"><input name="date_of_birth" type="date" class="form-control"></div></div><fieldset class="row mb-3"><legend class="col-form-label col-sm-2 pt-0">Physical Condition</legend><div class="col-sm-10"><div class="form-check"><input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"><label class="form-check-label" for="gridRadios1"> Sceny </label></div><div class="form-check"><input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"><label class="form-check-label" for="gridRadios2"> Healthy </label></div></div></fieldset><div class="row mb-3"><label for="inputTime" class="col-sm-2 col-form-label">Height</label><div class="col-sm-10"><input name="height" type="text" class="form-control"></div></div><div class="row mb-3"><label class="col-sm-2 col-form-label">Screen Color</label><div class="col-sm-10"><select class="form-select" aria-label="Default select example"><option selected="">Select menu</option><option value="1">Black</option><option value="2">White</option></select></div></div><div class="row mb-3"><label for="inputEmail" class="col-sm-2 col-form-label">Age</label><div class="col-sm-10"><input name="age" type="number" class="form-control"></div></div><div class="row mb-3"><label class="col-sm-2 col-form-label">Submit Button</label><div class="col-sm-10"><button type="submit" class="btn btn-primary">Submit Form</button></div></div>',13)]),32)])])])])])])}}};export{R as default};
