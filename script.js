const questions = [
  {
    id: 1,
    title:
      'برای اینکه لینک در صفحه یا تب جدید باز شود، از کدام صفت استفاده میشود؟',
    options: [
      {
        key: 1,
        title: '_blank'
      },
      {
        key: 2,
        title: '_self'
      },
      {
        key: 3,
        title: '_new'
      },
      {
        key: 4,
        title: '_parent'
      }
    ],
    answerKey: 1
  },
  {
    id: 2,
    title:
      'کدام عملگر true برمیگرداند اگر دو مقداری که با هم مقایسه میشوند، برابر نباشند؟',
    options: [
      {
        key: 1,
        title: '<>'
      },
      {
        key: 2,
        title: '~'
      },
      {
        key: 3,
        title: '==!'
      },
      {
        key: 4,
        title: '!=='
      }
    ],
    answerKey: 4
  },
  {
    id: 3,
    title: 'کدام یک کلمه کلیدی در جاوااسکریپت نیست؟',
    options: [
      {
        key: 1,
        title: 'this'
      },
      {
        key: 2,
        title: 'catch'
      },
      {
        key: 3,
        title: 'function'
      },
      {
        key: 4,
        title: 'array'
      }
    ],
    answerKey: 4
  },
  {
    id: 4,
    title:
      'کدام یک راه درست برای اینکه تعداد پاراگراف‌های موجود در صفحه را بدست بیاوریم با استفاده از jquery است؟',
    options: [
      {
        key: 1,
        title: '$("p").count()'
      },
      {
        key: 2,
        title: '$("p").length'
      },
      {
        key: 3,
        title: '$("*").find("p")'
      },
      {
        key: 4,
        title: '$("p").length()'
      }
    ],
    answerKey: 2
  }
];


$(document).ready(function () {
  let form = $("#quizForm");
  form.empty();
  questions.forEach(function(element) {
    let question=$("<div></div>");
    question.addClass("question");
    let title = $("<h3></h3>").text(element["title"]);
    question.append(title);
    let choises = $("<div></div>");
    choises.addClass("choices");
    for (let n = 0; n < 4; n++) {
      let choise = $("<div></div>");
      choise.addClass("choice");
      let choice_title = $('<label for=""></label>').text(element.options[n].title);
      let choice_radio = $('<input type="radio" name="question' + element.id + '" id="" value="' + element.options[n].key+'"></label>');
      choise.append(choice_title);
      choise.append(choice_radio);
      choises.append(choise);
    }
    question.append(choises);
    form.append(question)
  });
  let button = $('<button type="submit"></button>').text("ثبت");
  form.append(button)
});

$("Form").submit(function (e) {
    e.preventDefault(); 
    let rightAnswers=0;
    let wrongAnswers=0;
    let emptyAnswers=0;
    let element;
    for (var n = 1; n < 5; n++) {
    	element = $('input[name="question' + n + '"]:checked');
    	if(!element.val()){
    		emptyAnswers++;
    	}
    	else{
    		if(element.val() == questions[n-1].answerKey){
    			rightAnswers++;
    		}
    		else{
    			wrongAnswers++;
    		}
    	}
    }
    $("#rightAnswers").text(rightAnswers)
    $("#wrongAnswers").text(wrongAnswers)
    $("#emptyAnswers").text(emptyAnswers)
  })