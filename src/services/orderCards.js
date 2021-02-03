export default function orderbyTitle(cards,typeOrder){
    
    let anames = cards.map((card) => {
      return card.title;
    })
  
    typeOrder ? anames.sort() : anames.sort().reverse()
    let objOrdered = []
    let indexOrdered = []

    const isInside = (n) => { // it's position is already ordered
        return indexOrdered.find(e => e === n);
    }
    
    for(let i=0;i<anames.length;i++){
        for(let j=0;j<cards.length;j++){
          if(anames[i] === cards[j].title && !isInside(j)){
              objOrdered.push(cards[j])
              indexOrdered.push(j)
          }
        }    
    }
  
    return objOrdered
  }