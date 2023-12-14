import { columnDefs, DiamondData } from './Data.js';

document.querySelector(".nav").addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "70px";
  document.getElementById("main").style.marginLeft = "70px";
  document.querySelector(".logo").style.visibility = "hidden";
  document.querySelector(".logo span").style.visibility = "visible";
  document.querySelector(".logo span").style.marginLeft = "-10px";
  document.querySelector(".icon-a").style.visibility = "hidden";
  document.querySelector(".icons").style.visibility = "visible";
  document.querySelector(".icons").style.marginLeft = "-8px";
  document.querySelector(".nav").style.display = "none";
  document.querySelector(".nav2").style.display = "block";
});

document.querySelector(".nav2").addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.querySelector(".logo").style.visibility = "visible";
  document.querySelector(".icon-a").style.visibility = "visible";
  document.querySelector(".icons").style.visibility = "visible";
  document.querySelector(".nav").style.display = "block";
  document.querySelector(".nav2").style.display = "none";
});

// Grid Options: Contains all of the grid configurations
const gridOptions = {
  rowData: rowData,
  columnDefs: colDefs,
};

// Your Javascript code to create the grid
const myGridElement = document.querySelector('#myGrid');
const grid = grid.createGrid(myGridElement, gridOptions);
console.log("grid",grid);

function createFilter(data, containerSelector, checkboxClass) {
  const allItems = [...new Set(data.map(item => item))];
  const filterContainer = document.querySelector(containerSelector);

  filterContainer.innerHTML = allItems.map(item => `
    <input type="checkbox" class="${checkboxClass}-checkbox" name="${checkboxClass}" value="${item}" id="${item}">
    <label for="${item}">${item}</label>
  `).join('');

  // Add event listener to checkboxes
  const checkboxes = filterContainer.querySelectorAll(`.${checkboxClass}-checkbox`);
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
}

function applyFilters() {
  const shapeFilters = getCheckedValues('.Jewelry-checkbox');
  const BrandFilters = getCheckedValues('.Brand-checkbox');
  const sizeFilters = getCheckedValues('.size-checkbox');
  const metalFilters = getCheckedValues('.metal-checkbox');
  const grosswtFilters = getCheckedValues('.grosswt-checkbox');

  console.log('Shape Filters:', shapeFilters);
  console.log('Brand Filters:', BrandFilters);
  console.log('size Filters:', sizeFilters);
  console.log('metal Filters:', metalFilters);
  console.log('grosswt Filters:', grosswtFilters);

  const combinedFilters = {
    Jewelry: shapeFilters,
    Brand: BrandFilters,
    size: sizeFilters,
    metal: metalFilters,
    grosswt: grosswtFilters,
  };

  console.log('Combined Filters:', combinedFilters);

  // Apply filters to the grid
  grid.setFilterModel(combinedFilters);
  grid.onFilterChanged();
}

function getCheckedValues(checkboxClass) {
  const checkboxes = document.querySelectorAll(checkboxClass);
  const checkedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

  console.log(`Checked ${checkboxClass}:`, checkedValues);

  return checkedValues;
}

createFilter(DiamondData.map(item => item.Jewelry), ".Jewelry-filter", "Jewelry");
createFilter(DiamondData.map(item => item.Brand), ".Brand-filter", "Brand");
createFilter(DiamondData.map(item => item.size), ".size-filter", "size");
createFilter(DiamondData.map(item => item.metal), ".metal-filter", "metal");
createFilter(DiamondData.map(item => item.grosswt), ".grosswt-filter", "grosswt");