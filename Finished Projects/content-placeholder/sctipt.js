const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const fName = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texs = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 2500)
function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eveniet!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    fName.innerHTML = 'John Doe'
    date.innerHTML = 'May 17th 2023'
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texs.forEach(bg => bg.classList.remove('animated-bg-text'))
}