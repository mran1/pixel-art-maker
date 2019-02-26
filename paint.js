let selected=""
let container = document.createElement('div')
document.body.appendChild(container)
container.className = 'col'
for(let i=0;i<3;i++){
  let colGrid = document.createElement('div')

  colGrid.className = 'row'
  for(let j=0;j<3;j++){
    let grid = document.createElement('div')
    // grid.className = 'grid'
    grid.style.border = '1px solid'
    grid.style.height='100px'
    grid.style.width='100px'
    grid.onclick=()=>{
      grid.style.backgroundColor= selected
    }
    colGrid.appendChild(grid)
  }
    container.appendChild(colGrid)
}

let cls = ['green','red','blue','black','yellow']
let colPaletteContainer = document.createElement('div')
document.body.appendChild(colPaletteContainer)
colPaletteContainer.className = 'Palette'
for(let i=0;i<5;i++){
  let colour = document.createElement('div')
  colour.style.border = '1px solid'
  colour.style.height='100px'
  colour.style.width='100px'
  colour.style.backgroundColor=cls[i]
  colPaletteContainer.appendChild(colour)
  colour.onclick=()=>{
  //colour.style.backgroundColor= 'red'
  selected = cls[i]
  }
}



// grid00.onclick=()=>{
//   grid00.style.backgroundColor= 'red'
// }
