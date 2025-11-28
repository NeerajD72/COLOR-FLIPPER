const display = document.getElementById('bc_color')
const btn = document.getElementById('button')

const color_arr = [
 '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E', 'F'
]

btn.addEventListener('click',()=>{
  let hexcode_color = '#'
  for(let i=0;i<6;i++){
    const random = Math.floor(Math.random()*color_arr.length)
    hexcode_color += color_arr[random]
  }
  document.body.style.backgroundColor = hexcode_color
  //for displaying the color code of the color
  display.textContent = hexcode_color
})