class metal{
    init(params){
        /* this.params = params;
        this.filterState = "Filter Off" */
        this.eGui = document.createElement('div');
        this.eGui.style = "display:flex; flex-direction:column; text-align:center"
        this.eGui.innerHTML = `
        <div class="filter-title"> ${params.title}</div>
 
      ${this.radioBt ("K18",false)}
      ${this.radioBt ("SV925",false)}
      ${this.radioBt ("K18WG",false)}
      ${this.radioBt ("PT950",false)}
      ${this.radioBt ("K18PG",false)}
      ${this.radioBt ("K14",false)}
      ${this.radioBt ("Stainless Steel",false)}
      ${this.radioBt ("Pt900",false)}
      ${this.radioBt ("PT",false)}
      ${this.radioBt ("PM850",false)}
      ${this.radioBt ("PM900",false)}
 
      
      `;
    this.params=params;
    this.filterState='Filter off'

        this.eGui.querySelectorAll('input').forEach(input => {
            input.onchange =() => {
              this.filterState = input.value;
              this.updateFilter();
            };
         })
         
    }
    getGui(){
        return this.eGui;
    }
    updateFilter(value){
    this.params.filterChangeCallback();
  }
  
       isFilterActive(){
        return this.filterState!=='Filter off';
    }
    doesFilterPass(params){
        return params.data.jewellarytype===this.filterState
    }
    getModel(){
        return undefined;
    }
    setModel(){}
    radioBt(value,checked){

return `
<lable for = "metal">
<input type ="radio"
name ="metal"
value ="{value}"
${checked ? "checked" : ""}>
${value}
</lable>
`
    }}
      

export default metal;