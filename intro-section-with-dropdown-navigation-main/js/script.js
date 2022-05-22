var company = document.getElementById("company");

company.addEventListener("click", () => {
  var companyDropdown = document.getElementById("company-dropdown");
  companyDropdown.classList.toggle("show");
  company.classList.toggle("show");
});

var features = document.getElementById("features");

features.addEventListener("click", () => {
  var featuresDropdown = document.getElementById("features-dropdown");
  featuresDropdown.classList.toggle("show");
  features.classList.toggle("show");
});

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

var features_accordion = document.getElementById("features-accordion");

features_accordion.addEventListener("click", () => {
  features_accordion.classList.toggle("show");
  var fets_accordion = document.getElementById("fets-accordion");
  if (fets_accordion.style.height == "270px") {
    fets_accordion.style.height = "40px";
  } else {
    fets_accordion.style.height = "270px";
  }
});

var company_accordion = document.getElementById("company-accordion");

company_accordion.addEventListener("click", () => {
  company_accordion.classList.toggle("show");
  var comp_accordion = document.getElementById("comp-accordion");
  if (comp_accordion.style.height == "170px") {
    comp_accordion.style.height = "40px";
  } else {
    comp_accordion.style.height = "170px";
  }
});
