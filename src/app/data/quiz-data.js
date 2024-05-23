export const javascript = [
  {
    id: 1,
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      "<script src='xxx.js'>",
      "<script href='xxx.js'>",
      "<script ref='xxx.js'>",
      "<script name='xxx.js'>",
    ],
    correctAnswer: "<script src='xxx.js'>",
  },
  {
    id: 2,
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      "alert('Hello World');",
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
    ],
    correctAnswer: "alert('Hello World');",
  },
  {
    id: 3,
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "func myFunction()",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    id: 4,
    question: "How do you call a function named 'myFunction'?",
    answers: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
      "Call.myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    id: 5,
    question: "How to write an IF statement in JavaScript?",
    answers: ["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"],
    correctAnswer: "if (i == 5)",
  },
  {
    id: 6,
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: ["if (i != 5)", "if (i <> 5)", "if i <> 5", "if i =! 5 then"],
    correctAnswer: "if (i != 5)",
  },
  {
    id: 7,
    question: "How does a WHILE loop start?",
    answers: [
      "while (i <= 10)",
      "while i = 1 to 10",
      "while (i <= 10; i++)",
      "while (i <= 10;)",
    ],
    correctAnswer: "while (i <= 10)",
  },
  {
    id: 8,
    question: "How does a FOR loop start?",
    answers: [
      "for (i = 0; i <= 5; i++)",
      "for i = 1 to 5",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)",
    ],
    correctAnswer: "for (i = 0; i <= 5; i++)",
  },
  {
    id: 9,
    question: "How can you add a comment in JavaScript?",
    answers: [
      "// This is a comment",
      "' This is a comment",
      "<!-- This is a comment -->",
      "/ This is a comment",
    ],
    correctAnswer: "// This is a comment",
  },
  {
    id: 10,
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = 'red', 'green', 'blue'",
    ],
    correctAnswer: "var colors = ['red', 'green', 'blue']",
  },
  {
    id: 11,
    question: "How do you round the number 7.25 to the nearest integer?",
    answers: ["Math.round(7.25)", "round(7.25)", "rnd(7.25)", "Math.rnd(7.25)"],
    correctAnswer: "Math.round(7.25)",
  },
  {
    id: 12,
    question: "How do you find the number with the highest value of x and y?",
    answers: ["Math.max(x, y)", "Math.ceil(x, y)", "top(x, y)", "ceil(x, y)"],
    correctAnswer: "Math.max(x, y)",
  },
  {
    id: 13,
    question:
      "What is the correct JavaScript syntax for opening a new window called 'w2'?",
    answers: [
      "w2 = window.open()",
      "w2 = window.new()",
      "w2 = open.new()",
      "w2 = new.window()",
    ],
    correctAnswer: "w2 = window.open()",
  },
  {
    id: 14,
    question: "JavaScript is the same as Java.",
    answers: ["False", "True", "Maybe", "I don't know"],
    correctAnswer: "False",
  },
  {
    id: 15,
    question: "How can you detect the client's browser name?",
    answers: [
      "navigator.appName",
      "browser.name",
      "client.navName",
      "navigator.browserName",
    ],
    correctAnswer: "navigator.appName",
  },
];

// HTML QUESTIONS
export const html = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<style>", "<script>", "<css>", "<link>"],
    correctAnswer: "<style>",
  },
  {
    id: 3,
    question: "How can you make a numbered list?",
    answers: ["<ol>", "<ul>", "<dl>", "<list>"],
    correctAnswer: "<ol>",
  },
  {
    id: 4,
    question: "What is the correct HTML element for inserting a line break?",
    answers: ["<br>", "<lb>", "<break>", "<newline>"],
    correctAnswer: "<br>",
  },
  {
    id: 5,
    question:
      "Which HTML element is used to specify a header for a document or section?",
    answers: ["<header>", "<head>", "<section>", "<top>"],
    correctAnswer: "<header>",
  },
  {
    id: 6,
    question: "How do you create a hyperlink in HTML?",
    answers: [
      "<a href='url'>link text</a>",
      "<a url='url'>link text</a>",
      "<a>link text</a>",
      "<link href='url'>link text</link>",
    ],
    correctAnswer: "<a href='url'>link text</a>",
  },
  {
    id: 7,
    question: "What is the correct HTML tag for making a text input field?",
    answers: [
      "<input type='text'>",
      "<textfield>",
      "<textinput>",
      "<inputtext>",
    ],
    correctAnswer: "<input type='text'>",
  },
  {
    id: 8,
    question:
      "Which HTML element is used to define a footer for a document or section?",
    answers: ["<footer>", "<foot>", "<bottom>", "<section>"],
    correctAnswer: "<footer>",
  },
  {
    id: 9,
    question: "Which HTML element defines navigation links?",
    answers: ["<nav>", "<navigation>", "<links>", "<navigate>"],
    correctAnswer: "<nav>",
  },
  {
    id: 10,
    question: "What is the correct HTML element for playing video files?",
    answers: ["<video>", "<media>", "<movie>", "<clip>"],
    correctAnswer: "<video>",
  },
  {
    id: 11,
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: ["alt", "src", "title", "longdesc"],
    correctAnswer: "alt",
  },
  {
    id: 12,
    question: "In HTML, how can you create a checkbox?",
    answers: [
      "<input type='checkbox'>",
      "<check>",
      "<checkbox>",
      "<input type='check'>",
    ],
    correctAnswer: "<input type='checkbox'>",
  },
  {
    id: 13,
    question: "How do you add a background color in HTML?",
    answers: [
      "<body style='background-color:yellow;'>",
      "<background>yellow</background>",
      "<body bg='yellow'>",
      "<body color='yellow'>",
    ],
    correctAnswer: "<body style='background-color:yellow;'>",
  },
  {
    id: 14,
    question: "Which HTML element is used to specify a table cell?",
    answers: ["<td>", "<th>", "<tr>", "<cell>"],
    correctAnswer: "<td>",
  },
  {
    id: 15,
    question: "What is the correct HTML for adding a background color?",
    answers: [
      "<body style='background-color:yellow;'>",
      "<background>yellow</background>",
      "<body bg='yellow'>",
      "<body color='yellow'>",
    ],
    correctAnswer: "<body style='background-color:yellow;'>",
  },
];

export const css = [
  {
    id: 1,
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    id: 2,
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: [
      "In the <head> section",
      "In the <body> section",
      "At the end of the document",
      "Before the <html> tag",
    ],
    correctAnswer: "In the <head> section",
  },
  {
    id: 3,
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<style>", "<css>", "<script>", "<link>"],
    correctAnswer: "<style>",
  },
  {
    id: 4,
    question: "Which is the correct CSS syntax?",
    answers: [
      "body {color: black;}",
      "{body:color=black;}",
      "body:color=black;",
      "{body;color:black;}",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    id: 5,
    question: "How do you insert a comment in a CSS file?",
    answers: [
      "/* this is a comment */",
      "// this is a comment",
      "' this is a comment",
      "<!-- this is a comment -->",
    ],
    correctAnswer: "/* this is a comment */",
  },
  {
    id: 6,
    question: "Which property is used to change the background color?",
    answers: ["background-color", "color", "bgcolor", "background"],
    correctAnswer: "background-color",
  },
  {
    id: 7,
    question: "How do you add a background color for all <h1> elements?",
    answers: [
      "h1 {background-color: #FFFFFF;}",
      "h1.all {background-color: #FFFFFF;}",
      "all.h1 {background-color: #FFFFFF;}",
      "h1:all {background-color: #FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color: #FFFFFF;}",
  },
  {
    id: 8,
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: ["color", "text-color", "fgcolor", "font-color"],
    correctAnswer: "color",
  },
  {
    id: 9,
    question: "Which CSS property controls the text size?",
    answers: ["font-size", "text-size", "font-style", "text-style"],
    correctAnswer: "font-size",
  },
  {
    id: 10,
    question:
      "What is the correct CSS syntax to make all the <p> elements bold?",
    answers: [
      "p {font-weight: bold;}",
      "p {text-size: bold;}",
      "p {font-style: bold;}",
      "p {font: bold;}",
    ],
    correctAnswer: "p {font-weight: bold;}",
  },
  {
    id: 11,
    question: "How do you display hyperlinks without an underline?",
    answers: [
      "a {text-decoration: none;}",
      "a {underline: none;}",
      "a {text-decoration: no-underline;}",
      "a {decoration: no-underline;}",
    ],
    correctAnswer: "a {text-decoration: none;}",
  },
  {
    id: 12,
    question:
      "How do you make each word in a text start with a capital letter?",
    answers: [
      "text-transform: capitalize;",
      "text-style: capitalize;",
      "text-capitalize: capitalize;",
      "transform: capitalize;",
    ],
    correctAnswer: "text-transform: capitalize;",
  },
  {
    id: 13,
    question: "Which property is used to change the font of an element?",
    answers: ["font-family", "font-style", "font-weight", "font-variant"],
    correctAnswer: "font-family",
  },
  {
    id: 14,
    question: "How do you make the text bold?",
    answers: [
      "font-weight: bold;",
      "style: bold;",
      "font: bold;",
      "text-style: bold;",
    ],
    correctAnswer: "font-weight: bold;",
  },
  {
    id: 15,
    question: "How do you center align a block element?",
    answers: [
      "margin: 0 auto;",
      "text-align: center;",
      "align: center;",
      "margin-center: auto;",
    ],
    correctAnswer: "margin: 0 auto;",
  },
];

export const accessibility = [
  {
    id: 1,
    question: "What does WCAG stand for?",
    answers: [
      "Web Content Accessibility Guidelines",
      "World Content Accessibility Guide",
      "Web Content Adjustments Guide",
      "World Communication Accessibility Guidelines",
    ],
    correctAnswer: "Web Content Accessibility Guidelines",
  },
  {
    id: 2,
    question: "Which of the following is an ARIA role for a button?",
    answers: [
      "role='button'",
      "aria-button='true'",
      "role='pushbutton'",
      "aria-role='button'",
    ],
    correctAnswer: "role='button'",
  },
  {
    id: 3,
    question:
      "Which HTML attribute is used to provide alternative text for images?",
    answers: ["alt", "title", "description", "src"],
    correctAnswer: "alt",
  },
  {
    id: 4,
    question: "What is the purpose of the 'tabindex' attribute?",
    answers: [
      "To control the tab order of elements",
      "To style elements using tab key",
      "To add tab spaces in text",
      "To make elements tabbable",
    ],
    correctAnswer: "To control the tab order of elements",
  },
  {
    id: 5,
    question:
      "Which ARIA attribute is used to describe the current state of an interactive element?",
    answers: ["aria-pressed", "aria-state", "aria-role", "aria-status"],
    correctAnswer: "aria-pressed",
  },
  {
    id: 6,
    question: "What is the primary goal of web accessibility?",
    answers: [
      "To ensure equal access to web content for all users",
      "To improve web page load times",
      "To enhance visual design of web pages",
      "To increase the number of site visitors",
    ],
    correctAnswer: "To ensure equal access to web content for all users",
  },
  {
    id: 7,
    question: "Which HTML element is used to define navigation links?",
    answers: ["<nav>", "<navigate>", "<navigation>", "<menu>"],
    correctAnswer: "<nav>",
  },
  {
    id: 8,
    question:
      "What is the ARIA attribute for defining a region that updates frequently?",
    answers: ["aria-live", "aria-refresh", "aria-update", "aria-dynamic"],
    correctAnswer: "aria-live",
  },
  {
    id: 9,
    question: "What does the 'alt' attribute do?",
    answers: [
      "Provides alternative text for an image",
      "Adds a tooltip to an image",
      "Resizes an image",
      "Changes the alignment of an image",
    ],
    correctAnswer: "Provides alternative text for an image",
  },
  {
    id: 10,
    question:
      "Which WCAG principle relates to the ability to use a website with a keyboard?",
    answers: ["Operable", "Perceivable", "Understandable", "Robust"],
    correctAnswer: "Operable",
  },
  {
    id: 11,
    question:
      "Which ARIA attribute is used to define the relationship between two elements?",
    answers: [
      "aria-labelledby",
      "aria-controls",
      "aria-related",
      "aria-association",
    ],
    correctAnswer: "aria-labelledby",
  },
  {
    id: 12,
    question:
      "Which of the following is not a valid WCAG level of conformance?",
    answers: ["Level D", "Level A", "Level AA", "Level AAA"],
    correctAnswer: "Level D",
  },
  {
    id: 13,
    question:
      "Which element is used to group related options in a drop-down list?",
    answers: ["<optgroup>", "<optionset>", "<grouplist>", "<group>"],
    correctAnswer: "<optgroup>",
  },
  {
    id: 14,
    question: "What is the purpose of the 'aria-hidden' attribute?",
    answers: [
      "To indicate that an element should be ignored by screen readers",
      "To hide an element visually",
      "To reduce the opacity of an element",
      "To remove an element from the DOM",
    ],
    correctAnswer:
      "To indicate that an element should be ignored by screen readers",
  },
  {
    id: 15,
    question:
      "Which of the following is a best practice for creating accessible forms?",
    answers: [
      "Use <label> elements to associate text labels with form controls",
      "Use placeholder text instead of labels",
      "Avoid using fieldsets and legends",
      "Use as few form elements as possible",
    ],
    correctAnswer:
      "Use <label> elements to associate text labels with form controls",
  },
];
