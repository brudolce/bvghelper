# BVG Helper

![](https://img.shields.io/badge/TS-ES5-blue) ![](https://img.shields.io/badge/REDUX-v7.2.1-purple)

---


The current application is a question formulaire, flexible and editable. There are two main files in the application that needed to be edited in order to make your cool question form:

- questions.json
- resultProcessing.ts

---

### questions.json

Located inside `src > views > Info` this file emulates and API fetching.
In order to work should have the following format:

    {	"questions": [
    		{
    			"type": "text",
    			"question": "What is your name?",
    			"depends":""
    		},{
    			"type": "radio",
    			"question": "Do you like cheese?",
    			"options": [
    				"Yes",
    				"No"
    			]
    		}
    	]
    }

Objects inside the questions array can have "type", "question", "option" and "depends" properties.

There are four possible types: "text", "number", "radio", "checkbox". "radio" and "checkbox" need an array of strings in the "option" propertie.

The **"depends"** propertie links the current question to a previous question, that needs to be of a "radio" type and have ["Yes", "No"] inside the "options" propertie. If the answer of the previous question is "No", the current question is not shown in the formulaire. Follows bellow an example of depends usage:

    {	"questions": [
    		{
    			"type": "radio",
    			"question": "Do you know which city zones are you moving around?",
    			"options": [
    				"Yes",
    				"No"
    			]
    		},{
    			"type": "checkbox",
    			"question": "Which city zones are you going?",
    			"options": [
    				"A",
    				"B",
    				"C"
    			],
    			"depends": "Do you know which city zones are you moving around?"
    		}
    	]
    }

According to this example, the question "Do you know which city zones are you moving around?" tells if you need to anser or not the following question.

### resultProcessing.ts

Located inside `src > views > Results` is the file that processes the answers from the questionaire and converts into a string, according to some logic.
