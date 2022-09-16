const questions = document.querySelectorAll(".question-item");

questions.forEach(function (questionItem) {
    questionItem.addEventListener("click", function () {
        const question = questionItem.querySelector(".answer");
        const questionP = questionItem.querySelector(".question-p");
        const arrows = questionItem.querySelector(".arrow-img");

        let actives = document.querySelectorAll(".active");
        let opens = document.querySelectorAll(".open");
        let rotate = document.querySelectorAll(".rotate");

        question.classList.toggle("active");

        if(question.classList.contains("active")) {
            questionP.classList.add("open");
            arrows.classList.add("rotateArrow");
        }

        else {
            question.classList.remove("active");
            questionP.classList.remove("open");
            arrows.classList.remove("rotateArrow");

            
        }
        

        actives.forEach((i) => {
            i.classList.remove("active");
           });
        
        opens.forEach((o) => {
            o.classList.remove("open");
        });

        rotate.forEach((r) => {
            r.classList.remove("rotateArrow");
        });
        


        
        
    });
});