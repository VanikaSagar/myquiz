class Question{
    constructor (){
        this.input=createInput("Enter your name ")
        this.button = createButton("Submit")
        this.title=createElement("h1")
        this.input2=createInput("Enter your answer ")
        this.question=createElement("h3")
        this.option1=createElement("h4")
        this.option2=createElement("h4")
        this.option3=createElement("h4")
        this.option4=createElement("h4")

    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.title.hide()
        this.input2.hide()
        this.question.hide()
        this.option1.hide()
        this.option2.hide()
        this.option3.hide()
        this.option4.hide()

    }

    display(){
        this.title.html("Quiz")
        this.title.position(350,0)
        this.question.html("Question : What starts with the letter 'E' , but has only one letter ? ")
        this.question.position(150,80)
        this.option1.html("1: Everyone ")
        this.option1.position(150,100)
        this.option2.html("2: Envelope ")
        this.option2.position(150,120)

        this.option3.html("3: Estimate")
        this.option3.position(150,140)

        this.option4.html("4: Example")
        this.option4.position(150,160)

        this.input.position(150,230)
        this.input2.position(350,230)
        this.button.position(290,300)

        this.button.mousePressed(()=>{
            this.input2.hide()
            this.input.hide();
            this.button.hide();
            contestant.name = this.input.value();
            contestant.answer-this.input2.value()
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            
          });
   
    }

   

    }