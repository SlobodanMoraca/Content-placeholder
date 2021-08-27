const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const bob = document.querySelector('#name')
const date = document.querySelector('#date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text =document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)

function getData(){
    header.innerHTML ='<img src="images/lenovo.jpg" alt=""/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="">'
    bob.innerHTML = 'John Doe'
    date.innerHTML = 'Oct 08. 2020'


    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

    animated_bg-text.forEach(bg => bg.classList.remove('animated-bg-text'))

}
