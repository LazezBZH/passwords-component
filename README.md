# A password generator React component

## About

Simple component for React project.
Keep the default theme or chose yours simply changing CSS.

## Installation

You can install this component with npm or yarn:

    npm i password-generator-by-lazez

or

    yarn add password-generator-by-lazez

caution

    You'll perhaps have to do npm start or yarn start again
    so that it works in your project (it'll be opened in another port then)

**NPM link**

[password generator by lazez on NPM](https://www.npmjs.com/package/password-generator-by-lazez)

## Use in your React project

Import the generator component into the file

    import { Generator } from password-generator-by-lazez;

## See how it works

[exemple deployed](https://password-generator-by-lazez.netlify.app/)

## Screenshots

![demo1](https://raw.githubusercontent.com//LazezBZH/passwords-component/master/src/docs/password1.png)

![demo2](https://raw.githubusercontent.com//LazezBZH/passwords-component/master/src/docs/password2.png)

![demo2](https://raw.githubusercontent.com//LazezBZH/passwords-component/master/src/docs/password2.png)

## Example ( in a React project)

**App.js**

```js
import "./App.css";
import { Generator } from "password-generator-by-lazez";

function App() {
  return (
    <div className="App">
      <Generator />
    </div>
  );
}
```

**CSS**

I use className for my CSS.
If you want to set your own design the easiest way is to use the IDs which will have priority.
Each element has same id and class (or almost)

| **Elements** |                                                               |                                         |                            |                           | **ClassName**         | **id**                |
| ------------ | ------------------------------------------------------------- | --------------------------------------- | -------------------------- | ------------------------- | --------------------- | --------------------- |
| _All (div)_  |                                                               |                                         |                            |                           | container             | container             |
|              | _div (contains h1)_                                           |                                         |                            |                           | title                 | title                 |
|              | _form (choices, invite or error msg, submit and refresh btn)_ |                                         |                            |                           | myForm                | myForm                |
|              |                                                               | _label (for chose length)_              |                            |                           | lengthLabel           | lengthLabel           |
|              |                                                               | _input (to chose length)_               |                            |                           | lengthInput           | lengthInput           |
|              | _fieldset ( contains checkbox for charts)_                    |                                         |                            |                           | fieldset              | fieldset              |
|              |                                                               | _fieldset legend_                       |                            |                           | fieldsetLegend        | fieldsetLegend        |
|              |                                                               | _div (for uppercharts checkbox)_        |                            |                           | fieldsetdiv           | fieldsetDivUpper      |
|              |                                                               |                                         | _uppercharts input_        |                           | checkbox              | mustHaveUpper         |
|              |                                                               |                                         | _uppercharts label_        |                           | chartLabel            | chartlabelUpper       |
|              |                                                               | _div (for lowercharts checkbox)_        |                            |                           | fieldsetdiv           | fieldsetDivLower      |
|              |                                                               |                                         | _lowercharts input_        |                           | checkbox              | mustHaveLower         |
|              |                                                               |                                         | _lowercharts label_        |                           | chartLabel            | chartlabelLower       |
|              |                                                               | _div (for numbercharts checkbox)_       |                            |                           | fieldsetdiv           | fieldsetDivNumber     |
|              |                                                               |                                         | _numbercharts input_       |                           | checkbox              | mustHaveNumber        |
|              |                                                               |                                         | _numbercharts label_       |                           | chartLabel            | chartlabelNumber      |
|              |                                                               | _div (for othercharts checkbox)_        |                            |                           | fieldsetdiv           | fieldsetDivOther      |
|              |                                                               |                                         | _othercharts input_        |                           | checkbox              | mustHaveOther         |
|              |                                                               |                                         | _othercharts label_        |                           | chartLabel            | chartlabelOther       |
|              | _div (invite msg)_                                            |                                         |                            |                           | messages              | messages              |
|              |                                                               | _p invite msg_                          |                            |                           | inviteTxt             | inviteTxt             |
|              |                                                               | _p invite msg new_                      |                            |                           | inviteTxtNew          | inviteTxtNew          |
|              |                                                               | _p error msg_                           |                            |                           | errorTxt              | errorTxt              |
|              | _div contains submit and refresh btn_                         |                                         |                            |                           | inputs                | inputs                |
|              |                                                               | _input submit_                          |                            |                           | submit                | submit                |
|              |                                                               | _input type button to refresh_          |                            |                           | refresh               | refresh               |
|              | _label (for output passwordReturned)_                         |                                         |                            |                           | passwordReturnedLabel | passwordReturnedLabel |
|              |                                                               | _div (contains message when generated)_ |                            |                           | messageGenerated      | messageGenerated      |
|              |                                                               |                                         | _p msg after generate_     |                           | messageAfter          | messageAfter          |
|              |                                                               |                                         |                            | _span with chosen length_ | chosenGenerated       | chosenLengthGenerated |
|              |                                                               |                                         |                            | _span with chosen charts_ | chosenGenerated       | chosenChartsGenerated |
|              |                                                               |                                         | _p message befor generate_ |                           | messageBefore         | messageBefore         |
|              | _input text(output of generate)_                              |                                         |                            |                           | passwordReturned      | passwordReturned      |
|              | _input button (copy)_                                         |                                         |                            |                           | copy                  | copy                  |
