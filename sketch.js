var canva;
var gameState=0
var contestantCount,database,quiz,question,contestant

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()

  quiz=new Quiz

  quiz.getstate()
  quiz.start()

  contestant=new Contestant
}


function draw(){
  background("pink");
  quiz.display()

  if(contestantCount===4){
    gameState=1
    quiz.update(1)
  }
  if(gameState===1){
    clear()
    quiz.play()
  }
  

  
}
