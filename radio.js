const radio = {
    station: [
        {
            name: 'Hot 97',
            songs: [
                {
                    artist: 'Adele',
                    title: 'Hello'               
                },
                {
                    artist: 'The Roots',
                    title: 'The Seed 2.0'
                }
            ]
        },
        {
            name: 'Z-100',
            songs: [
                {
                    artist: 'Kanye West',
                    title: 'Life of Pablo'               
                },
                {
                    artist: 'The Beatles',
                    title: 'Hey Jude'
                }
            ]
        },
        {
            name: 'FlyLo Radio',
            songs: [
                {
                    artist: 'ThunderCat',
                    title: 'Dragonball Durag'               
                },
                {
                    artist: 'Tyler the Creator',
                    title: 'WUSYANAME'
                }
            ]
        }
    ],
    shuffle(){
let i = Math.floor(Math.random()*3)
let s = Math.floor(Math.random()*2)
return radio.station[i]
console.log()

    }
    
}
console.log(radio.shuffle())
    

class Animal {
    // creating our properties for our class
    constructor(name, color, age, legs) {
      this.name = name
      this.color = color
      this.age = age
      this.legs = legs
    }
  
    // method
    genericSound() {
      console.log('This is a generic animal sound! WOOO')
  
      // this will point at the current object we are working with
      // console.log('we are inside genericSound', this)
    }
  }
  
  // Instiated Animal class using new keyword
  // const dog = new Animal('Spot', 'brown', 2, 4)
  // console.log(typeof dog)
  
  // const dog = 'Dillon'
  
  // dog.genericSound()
  
  // const cat = new Animal('Meow', 'blue', 2, 4)
  // cat.genericSound()
  
  // genericSound()
  
  
  // this doesn't belong anywhere
  // console.log(this)