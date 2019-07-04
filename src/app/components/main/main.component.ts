import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  ngOnInit() {
    const URL = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss&api_key=hamduhn4stvycgaizqxcbudqtiagpcmvlq1mpzdt&order_dir=desc&count=50'
    const XHR = new XMLHttpRequest
    XHR.open('GET', URL)
    XHR.send()
    XHR.onreadystatechange = () => {
      if (XHR.readyState === 4 && XHR.status === 200) {
        let jsonObject = (JSON.parse(XHR.response))
        let items = jsonObject.items

         // to show the first element 
         let first = document.getElementById('first')
         let p = document.querySelector('#first p')
         p.textContent = items[0].title
         let image = document.querySelector('#first img')
         image.setAttribute('src', items[0].enclosure.link)
         console.log(items[0].enclosure.link)
 
         // to show the second element 
         let second = document.getElementById('second')
         let p1 = document.querySelector('#second p')
         p1.textContent = items[1].title
         let image1 = document.querySelector('#second img')
         image1.setAttribute('src', items[1].enclosure.link)
 
         // to show the third element 
         let third = document.getElementById('third')
         let p2 = document.querySelector('#third p')
         p2.textContent = items[2].title
         let image2 = document.querySelector('#third img')
         image2.setAttribute('src', items[2].enclosure.link)

          // to show the fourth element 
        let fourth = document.getElementById('fourth')
        let p3 = document.querySelector('#fourth p')
        p3.textContent = items[3].title
        let image3 = document.querySelector('#fourth img')
        image3.setAttribute('src', items[3].enclosure.link)

         // to show the fifth element 
         let fifth = document.getElementById('fifth')
         let p4 = document.querySelector('#fifth p')
         p4.textContent = items[4].title
         let image4 = document.querySelector('#fifth img')
         image4.setAttribute('src', items[4].enclosure.link)

          // to show the sixth element 
        let sixth = document.getElementById('sixth')
        let p5 = document.querySelector('#sixth p')
        p5.textContent = items[5].title
        let image5 = document.querySelector('#sixth img')
        image5.setAttribute('src', items[5].enclosure.link)

        // to show the seventh element 
        let seventh = document.querySelector('seventh')
        let p6 = document.querySelector('#seventh p')
        p6.textContent = items[6].title
        let image6 = document.querySelector('#seventh img')
        image6.setAttribute('src', items[6].enclosure.link)
 
         
      }
    }

  }

  getData() {
    const URL = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss&api_key=hamduhn4stvycgaizqxcbudqtiagpcmvlq1mpzdt&order_dir=desc&count=50'
    const XHR = new XMLHttpRequest
    XHR.open('GET', URL)
    XHR.send()
    XHR.onreadystatechange = () => {
      if (XHR.readyState === 4 && XHR.status === 200) {
        let jsonObject = (JSON.parse(XHR.response))
        let items = jsonObject.items


        // to show the first element when the button will be clicked
        let eighth = document.querySelector('#eighth')
        eighth.classList.remove('display')
        let p7 = document.querySelector('#eighth p')
        p7.textContent = items[7].title
        let image7 = document.querySelector('#eighth img')
        image7.setAttribute('src', items[7].enclosure.link)

        // to show the second element element when the button will be clicked
        let ninth = document.querySelector('#ninth')
        ninth.classList.remove('display')
        let p8 = document.querySelector('#ninth p')
        p8.textContent = items[8].title
        let image8 = document.querySelector('#ninth img')
        image8.setAttribute('src', items[8].enclosure.link)

        // to show the third element element when the button will be clicked
        let tenth = document.querySelector('#tenth')
        tenth.classList.remove('display')
        let p9 = document.querySelector('#tenth p')
        p9.textContent = items[9].title
        let image9 = document.querySelector('#tenth img')
        image9.setAttribute('src', items[9].enclosure.link)

        // to show the fourth element element when the button will be clicked
        let eleventh = document.querySelector('#eleventh')
        eleventh.classList.remove('display')
        let p10 = document.querySelector('#eleventh p')
        p10.textContent = items[10].title
        let image10 = document.querySelector('#eleventh img')
        image10.setAttribute('src', items[10].enclosure.link)

        // to show the fifth element element when the button will be clicked
        let twelveth = document.querySelector('#twelveth')
        twelveth.classList.remove('display')
        let p11 = document.querySelector('#twelveth p')
        p11.textContent = items[11].title
        let image11 = document.querySelector('#twelveth img')
        image11.setAttribute('src', items[11].enclosure.link)

        // to show the sixth element element when the button will be clicked
        let thirteenth = document.querySelector('#thirteenth')
        thirteenth.classList.remove('display')
        let p12 = document.querySelector('#thirteenth p')
        p12.textContent = items[12].title
        let image12 = document.querySelector('#thirteenth img')
        image12.setAttribute('src', items[12].enclosure.link)

        // to show the seventh elementelement when the button will be clicked 
        let fourteenth = document.querySelector('#fourteenth')
        fourteenth.classList.remove('display')
        let p13 = document.querySelector('#fourteenth p')
        p13.textContent = items[13].title
        let image13 = document.querySelector('#fourteenth img')
        image13.setAttribute('src', items[13].enclosure.link)



        // while (i < 7) {
        //   console.log(items[0].enclosure.link)
        //   let boxitem = document.querySelector('.box-items')
        //   let divContainer = document.createElement('div')
        //   let div = document.createElement('div')
        //   let p = document.createElement('p')
        //   p.textContent = items[i].title
        //   let image = document.createElement('img')
        //   image.setAttribute('src', items[i].enclosure.link)
        //   divContainer.classList.add('container')
        //   boxitem.appendChild(divContainer)
        //   divContainer.appendChild(div)
        //   div.append(p, image)
        //   divContainer.classList.add('row')
        //   div.classList.add('col-lg-4', 'col-md-6', 'col-xs-12')
        //   div.style.width = '32%'
        //   divContainer.style.overflow = 'hidden'
        //   div.style.cssFloat = 'left'
        //   image.style.maxWidth = '380px'
        //   // image.style.marginLeft = '-20px'
        //   image.style.marginTop = '12px'
        //   div.style.position = 'relative'
        //   p.style.position = 'absolute'
        //   p.style.bottom = '-5px'
        //   p.style.left = '34px'
        //   p.style.color = '#FFF'
        //   p.style.fontSize = '22px'
        // /  i++;
        // }

      }
    }

  }
}


