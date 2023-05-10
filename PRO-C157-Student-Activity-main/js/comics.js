AFRAME.registerComponent("comics", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spider-man",
        title: "SPIDERMAN..",
        url: "./assets/thumbnails/rtr.jpg",
        
      },
      {
        id: "super-man",
        title: "SUPERMAN..",
        url: "./assets/thumbnails/download.jpg",
      },

      {
        id: "spider-man",
        title: "SPIDERMAN",
        url: "./assets/thumbnails/829757.jpg",
      },
      {
        id: "outer-space",
        title: "OUTER SPACE",
        url: "./assets/thumbnails/0.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 28;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      var borderEl=this.createBorder(position,item.id)
      var thumbnails=this.createThumbnail(item)
      borderEl.appendChild(thumbnails)
      var titleEl=this.createTitle(position,item)
      borderEl.appendChild(titleEl)
      // Thumbnail Element
     
      // Title Text Element
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 8,
      radiusOuter: 11,
    });
   
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color:"blue",opacity:0.4
    })
    return entityEl
  },
  createThumbnail: function(item){
    const entityEl=document.createElement("a-entity")
    
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive: "circle",
      radius: 9,
      
    })
   
    entityEl.setAttribute("material",{
      src:item.url
    })
    return entityEl
  },
  createTitle: function(position,item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:90,
      color:"black",
      value:item.title
    })
    const elpos=position
    elpos.y=-20
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("position",elpos)
    return entityEl
  },



  
});
