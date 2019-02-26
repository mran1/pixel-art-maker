
let container = document.createElement('div')
document.body.appendChild(container)
container.style.height='100%'
for(let i=0;i<4;i++){
  let colGrid = document.createElement('div')
  container.appendChild(colGrid)
  colGrid.className = 'row'
  for(let j=0;j<4;j++){
    let grid = document.createElement('div')
    grid.style.height='100px'
    grid.style.width='100px'
    grid.style.border.style='solid'
    grid.style.border.color='green'
    grid.onclick=()=>{
      grid.style.backgroundColor= 'red'
    }
    colGrid.appendChild(grid)
  }
}
// grid00.onclick=()=>{
//   grid00.style.backgroundColor= 'red'
// }
