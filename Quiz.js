class Quiz{
    constructor(){

    }

    getstate(){
        var gameStateref=database.ref('gameState')
        gameStateref.on("value",(data)=>{
            gameState=data.val
        })
    }

    update(state){
       database.ref('/').update({
           gameState:state

       })
    }

    async start(){
        if(gameState===0){
            contestant=new Contestant()
            var contestantCountRef=await database.ref('contestantCount').once("value")
        if(contestantCountRef.exists()){
            contestantCount=contestantCountRef.val()
            contestant.getCount()
        }
        question=new Question()
        question.display()
        }

    }

    play(){
        question.hide()
        background("yellow")
        textSize(30)
        text("Result of the quiz " ,340,50)
        text("-------------------------------------" ,320,65)

        Contestant.getPlayerInfo()
        if(allContestants !== undefined){

            var display_answers=230
            fill("black")
            textSize(20)
            text("NOTE: Contestant who answered correct is highlighted in green colour ",130,230)

            for(var plr in allContestants){
                var correctAns="2"
                if(correctAns===allContestants[plr].answer){
                    fill("green")
                }else{
                    fill("red")
                }

                diplay_answers+=30
                textSize(20)
                text(allContestants[plr].name + ": " + allContestants[plr].answer,230,display_answers)
            }

        }
    }
}