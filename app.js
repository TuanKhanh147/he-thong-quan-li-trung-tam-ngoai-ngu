
const DATA = {
 courses:[
  {id:"KH01",name:"Tiếng Anh Giao Tiếp",level:"Cơ bản",duration:"3 tháng",fee:2500000},
  {id:"KH02",name:"IELTS Foundation",level:"Nền tảng",duration:"4 tháng",fee:4200000},
  {id:"KH03",name:"IELTS 6.5+",level:"Nâng cao",duration:"5 tháng",fee:5500000},
  {id:"KH04",name:"TOEIC 650+",level:"Trung cấp",duration:"3 tháng",fee:3200000},
  {id:"KH05",name:"Tiếng Anh Thiếu Nhi",level:"Cơ bản",duration:"3 tháng",fee:2200000},
  {id:"KH06",name:"Tiếng Anh Doanh Nghiệp",level:"Trung cấp",duration:"2 tháng",fee:3800000},
  {id:"KH07",name:"Luyện Thi THPT",level:"Nâng cao",duration:"4 tháng",fee:3600000},
  {id:"KH08",name:"Tiếng Anh 1 Kèm 1",level:"Linh hoạt",duration:"Theo lộ trình",fee:6000000}
 ],
 classes:[
  {id:"LH01",course:"Tiếng Anh Giao Tiếp",teacher:"Nguyễn Minh Anh",schedule:"T2-T4-T6 18:30",room:"P.101",capacity:"20/25"},
  {id:"LH02",course:"IELTS Foundation",teacher:"Trần Hoàng Nam",schedule:"T3-T5 19:00",room:"P.202",capacity:"18/20"},
  {id:"LH03",course:"TOEIC 650+",teacher:"Lê Ngọc Mai",schedule:"T7-CN 08:00",room:"P.103",capacity:"15/25"},
  {id:"LH04",course:"IELTS 6.5+",teacher:"Phạm Thu Hà",schedule:"T2-T4 19:00",room:"P.204",capacity:"12/20"}
 ],
 students:[
  {id:"HV001",name:"Nguyễn Tuấn Khánh",phone:"0901234567",email:"khanh@email.com",className:"LH01"},
  {id:"HV002",name:"Trần Minh Anh",phone:"0912345678",email:"minhanh@email.com",className:"LH02"},
  {id:"HV003",name:"Lê Hoàng Long",phone:"0923456789",email:"long@email.com",className:"LH03"},
  {id:"HV004",name:"Phạm Ngọc Mai",phone:"0934567890",email:"mai@email.com",className:"LH01"}
 ],
 teachers:[
  {id:"GV001",name:"Nguyễn Minh Anh",specialty:"Giao tiếp",phone:"0908881111",email:"anh@ttnn.vn"},
  {id:"GV002",name:"Trần Hoàng Nam",specialty:"IELTS",phone:"0908882222",email:"nam@ttnn.vn"},
  {id:"GV003",name:"Lê Ngọc Mai",specialty:"TOEIC",phone:"0908883333",email:"mai@ttnn.vn"},
  {id:"GV004",name:"Phạm Thu Hà",specialty:"IELTS",phone:"0908884444",email:"ha@ttnn.vn"}
 ],
 enrollments:[
  {id:"DK001",student:"Nguyễn Tuấn Khánh",className:"LH01",date:"2026-09-20",status:"Đang học"},
  {id:"DK002",student:"Trần Minh Anh",className:"LH02",date:"2026-09-22",status:"Đang học"},
  {id:"DK003",student:"Lê Hoàng Long",className:"LH03",date:"2026-09-24",status:"Đang học"}
 ],
 schedule:[
  {id:"LC01",className:"LH01",day:"Thứ 2",time:"18:30 - 20:00",room:"P.101",teacher:"Nguyễn Minh Anh"},
  {id:"LC02",className:"LH01",day:"Thứ 4",time:"18:30 - 20:00",room:"P.101",teacher:"Nguyễn Minh Anh"},
  {id:"LC03",className:"LH02",day:"Thứ 3",time:"19:00 - 20:30",room:"P.202",teacher:"Trần Hoàng Nam"}
 ],
 tuition:[
  {id:"HP001",student:"Nguyễn Tuấn Khánh",className:"LH01",amount:2500000,date:"2026-09-20",status:"Đã thanh toán"},
  {id:"HP002",student:"Trần Minh Anh",className:"LH02",amount:4200000,date:"2026-09-22",status:"Đã thanh toán"},
  {id:"HP003",student:"Lê Hoàng Long",className:"LH03",amount:3200000,date:"2026-09-24",status:"Chưa thanh toán"}
 ],
 attendance:[
  {id:"DD001",student:"Nguyễn Tuấn Khánh",className:"LH01",date:"2026-09-26",status:"Có mặt"},
  {id:"DD002",student:"Trần Minh Anh",className:"LH02",date:"2026-09-27",status:"Có mặt"},
  {id:"DD003",student:"Lê Hoàng Long",className:"LH03",date:"2026-09-27",status:"Vắng"}
 ],
 results:[
  {id:"KQ001",student:"Nguyễn Tuấn Khánh",className:"LH01",score:8.5,grade:"Tốt"},
  {id:"KQ002",student:"Trần Minh Anh",className:"LH02",score:7.8,grade:"Khá"},
  {id:"KQ003",student:"Lê Hoàng Long",className:"LH03",score:6.5,grade:"Khá"}
 ]
};

const labels={course:"courses",class:"classes",student:"students",teacher:"teachers",enrollment:"enrollments",schedule:"schedule",tuition:"tuition",attendance:"attendance",result:"results"};
const titles={course:"Khóa học",class:"Lớp học",student:"Học viên",teacher:"Giảng viên",enrollment:"Đăng ký học",schedule:"Lịch học",tuition:"Thu học phí",attendance:"Điểm danh",result:"Kết quả học tập"};

function seedData(){
  if(!localStorage.getItem("language_center_data")){
    localStorage.setItem("language_center_data",JSON.stringify(DATA));
  }
}
function getDB(){seedData();return JSON.parse(localStorage.getItem("language_center_data"))}
function saveDB(db){localStorage.setItem("language_center_data",JSON.stringify(db))}
function requireAdmin(){if(sessionStorage.getItem("admin_logged")!=="1"){location.href="../login.html"}}
function initLogin(){
 document.getElementById("loginForm").addEventListener("submit",e=>{
  e.preventDefault(); const u=document.getElementById("username").value.trim(),p=document.getElementById("password").value;
  if(u==="admin"&&p==="123456"){sessionStorage.setItem("admin_logged","1");location.href="admin/index.html"}
  else document.getElementById("loginError").textContent="Sai tài khoản hoặc mật khẩu.";
 });
}
function logout(){sessionStorage.removeItem("admin_logged");location.href="../login.html"}
function toggleSidebar(){document.getElementById("sidebar").classList.toggle("open")}
function renderSidebar(active){
 const items=[
  ["dashboard","📊","Bảng điều khiển","index.html"],
  ["courses","📚","Quản lý Khóa học","courses.html"],
  ["classes","📋","Quản lý Lớp","classes.html"],
  ["students","🎓","Quản lý Học viên","students.html"],
  ["teachers","👩‍🏫","Quản lý Giảng viên","teachers.html"],
  ["enrollments","📝","Đăng ký Học","enrollments.html"],
  ["schedule","🗓️","Lịch Học","schedule.html"],
  ["tuition","💰","Thu Học Phí","tuition.html"],
  ["attendance","✅","Điểm Danh","attendance.html"],
  ["results","📈","Kết Quả Học Tập","results.html"]
 ];
 document.getElementById("sidebar").innerHTML=`<div class="sidebar-title">🏫 Quản Trị Hệ Thống</div>`+
 items.map(x=>`<a class="sidebar-link ${active===x[0]?"active":""}" href="${x[3]}">${x[1]} ${x[2]}</a>`).join("")+
 `<a class="sidebar-link" href="../index.html">🌐 Xem trang công khai</a><a class="sidebar-link" href="#" onclick="logout()">🚪 Đăng Xuất</a>`;
}
function money(n){return Number(n||0).toLocaleString("vi-VN")+" đ"}
function renderFeaturedCourses(){
 seedData();const d=getDB();document.getElementById("featuredCourses").innerHTML=d.courses.slice(0,3).map(c=>`<div class="card"><span class="badge">${c.level}</span><h3>${c.name}</h3><p>⏱ ${c.duration}</p><b>${money(c.fee)}</b></div>`).join("");
}
function renderPublicCourses(){
 const d=getDB();document.getElementById("courseList").innerHTML=d.courses.map(c=>`<div class="card"><span class="badge">${c.level}</span><h3>${c.name}</h3><p>Thời lượng: ${c.duration}</p><p>Học phí: <b>${money(c.fee)}</b></p><a class="primary-btn" href="classes.html">Xem lớp mở</a></div>`).join("");
}
function renderPublicClasses(){
 const d=getDB();document.getElementById("publicClassList").innerHTML=d.classes.map(c=>`<tr><td><b>${c.id}</b></td><td>${c.course}</td><td>${c.teacher}</td><td>${c.schedule}</td><td>${c.capacity}</td><td><span class="badge">Đang mở</span></td></tr>`).join("");
}
function renderDashboard(){
 const d=getDB(), stats=[
 ["👨‍🎓",d.students.length,"Học viên"],["📋",d.classes.length,"Lớp học"],["👩‍🏫",d.teachers.length,"Giảng viên"],["📚",d.courses.length,"Khóa học"],["📝",d.enrollments.length,"Đăng ký học"],["💰",money(d.tuition.filter(x=>x.status==="Đã thanh toán").reduce((s,x)=>s+Number(x.amount),0)),"Tổng thu học phí"]
 ];
 document.getElementById("stats").innerHTML=stats.map(s=>`<div class="stat-card"><div>${s[0]}</div><div class="stat-value">${s[1]}</div><div class="stat-label">${s[2]}</div></div>`).join("");
 const q=[["📚","Quản lý Khóa học","courses.html"],["📋","Quản lý Lớp","classes.html"],["🎓","Quản lý Học viên","students.html"],["👩‍🏫","Quản lý Giảng viên","teachers.html"],["📝","Đăng ký học","enrollments.html"],["🗓️","Lịch học","schedule.html"],["💰","Thu học phí","tuition.html"],["📈","Kết quả học tập","results.html"]];
 document.getElementById("quickLinks").innerHTML=q.map(x=>`<a class="quick-card" href="${x[2]}"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><span class="muted">Thêm / sửa / xóa →</span></a>`).join("");
 document.getElementById("recentEnrollments").innerHTML=d.enrollments.slice(-5).reverse().map(e=>`<tr><td>${e.student}</td><td>${e.className}</td><td>${e.date}</td><td><span class="badge">${e.status}</span></td></tr>`).join("");
}
let currentType="", currentKeys=[], editingId=null;
function initCrud(type,keys){
 currentType=type;currentKeys=keys;seedData();renderTable();
 document.getElementById("dataForm").addEventListener("submit",e=>{
  e.preventDefault();const form=new FormData(e.target),obj={};
  currentKeys.forEach(k=>obj[k]=(form.get(k)||"").trim());
  if(!obj.id) obj.id=makeId(type);
  const db=getDB(), arr=db[labels[type]];
  if(editingId){const i=arr.findIndex(x=>x.id===editingId);if(i>=0)arr[i]=obj}else arr.push(obj);
  saveDB(db);closeForm();renderTable();alert("Đã lưu dữ liệu thành công!");
 });
}
function makeId(type){return type.toUpperCase().slice(0,2)+Date.now().toString().slice(-5)}
function renderTable(){
 const db=getDB(),arr=db[labels[currentType]]||[],q=(document.getElementById("searchBox")?.value||"").toLowerCase();
 const rows=arr.filter(o=>currentKeys.some(k=>String(o[k]??"").toLowerCase().includes(q)));
 document.getElementById("dataTable").innerHTML=rows.length?rows.map(o=>`<tr>${currentKeys.map(k=>`<td>${k==="amount"?money(o[k]):o[k]}</td>`).join("")}<td><button class="action-btn edit" onclick="editRow('${String(o.id).replace(/'/g,"\\'")}')">Sửa</button><button class="action-btn delete" onclick="deleteRow('${String(o.id).replace(/'/g,"\\'")}')">Xóa</button></td></tr>`).join(""):`<tr><td class="empty" colspan="${currentKeys.length+1}">Không có dữ liệu phù hợp.</td></tr>`;
}
function openForm(){
 editingId=null;document.getElementById("modalTitle").textContent="Thêm "+titles[currentType];
 document.getElementById("dataForm").reset();document.querySelector('#dataForm input[name="id"]').value="";document.getElementById("modal").classList.add("show");
}
function closeForm(){document.getElementById("modal").classList.remove("show")}
function editRow(id){
 const o=getDB()[labels[currentType]].find(x=>x.id===id);if(!o)return;editingId=id;
 document.getElementById("modalTitle").textContent="Sửa "+titles[currentType];
 currentKeys.forEach(k=>{const el=document.querySelector(`#dataForm [name="${k}"]`);if(el)el.value=o[k]??""});document.getElementById("modal").classList.add("show");
}
function deleteRow(id){
 if(!confirm("Bạn có chắc muốn xóa dữ liệu này?"))return;
 const db=getDB();db[labels[currentType]]=db[labels[currentType]].filter(x=>x.id!==id);saveDB(db);renderTable();
}
function resetData(){if(confirm("Khôi phục toàn bộ dữ liệu mẫu? Dữ liệu bạn đã nhập sẽ bị thay thế.")){localStorage.removeItem("language_center_data");seedData();renderTable();alert("Đã khôi phục dữ liệu mẫu.")}}
function exportCSV(){
 const arr=getDB()[labels[currentType]]||[];let csv=currentKeys.join(",")+"\n";
 csv+=arr.map(o=>currentKeys.map(k=>`"${String(o[k]??"").replaceAll('"','""')}"`).join(",")).join("\n");
 const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=labels[currentType]+".csv";a.click();URL.revokeObjectURL(a.href);
}
seedData();
