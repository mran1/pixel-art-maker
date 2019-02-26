
let container = document.createElement('div')
document.body.appendChild(container)
container.className = 'col'
for(let i=0;i<5;i++){
  let colGrid = document.createElement('div')

  colGrid.className = 'row'
  for(let j=0;j<5;j++){
    let grid = document.createElement('div')
    // grid.className = 'grid'
    grid.style.border = '1px solid'
    grid.style.height='100px'
    grid.style.width='100px'
    grid.onclick=()=>{
      grid.style.backgroundColor= 'red'
    }
    colGrid.appendChild(grid)
  }
    container.appendChild(colGrid)
}

let colPaletteContainer = document.createElement('div')
document.body.appendChild(colPaletteContainer)
colPaletteContainer.className = 'Palette'
for(let i=0;i<10;i++){
  let colour = document.createElement('div')
  colour.style.border = '1px solid'
  colour.style.height='100px'
  colour.style.width='100px'
  colPaletteContainer.appendChild(colour)
  colour.onclick=()=>{
  //colour.style.backgroundColor= 'red'
  }
}



// grid00.onclick=()=>{
//   grid00.style.backgroundColor= 'red'
// }
