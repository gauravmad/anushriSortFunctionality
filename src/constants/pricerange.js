class pricerange{
    init(params){
        /* this.params = params;
        this.filterState = "Filter Off" */
        this.eGui = document.createElement('div');
        this.eGui.style = "display:flex; flex-direction:column; text-align:center"
        this.eGui.innerHTML = `
        <div class="filter-title"> ${params.title}</div>
   
      ${this.radioBt ("Bangle",false)}
      ${this.radioBt ("Necklace",false)}
      ${this.radioBt ("Cuffs",false)}
      ${this.radioBt ("Bracelet",false)}
      ${this.radioBt ("Ring",false)}
      ${this.radioBt ("Pierce",false)}
      ${this.radioBt ("Pendant Top",false)}
      ${this.radioBt ("Pin",false)}
      ${this.radioBt ("Brooch",false)}
      
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
<lable for = "jewellarytype">
<input type ="radio"
name ="jewellarytype"
value ="{value}"
${checked ? "checked" : ""}>
${value}
</lable>
`
    }}
      

export default pricerange;