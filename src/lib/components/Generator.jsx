import React from "react";
import { useState } from "react";
import "./Generator.css";

export default function Generator(props) {
  const [number, setNumber] = useState();
  const [mustHaveUpper, setMustHaveUpper] = useState(false);
  const [mustHaveLower, setMustHaveLower] = useState(false);
  const [mustHaveNumber, setMustHaveNumber] = useState(false);
  const [mustHaveOther, setMustHaveOther] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordReturned, setPasswordReturned] = useState("");
  const [choice, setChoice] = useState("");
  const [passLenght, setPassLength] = useState(0);

  function copy(e) {
    e.preventDefault();
    if (passwordReturned) {
      navigator.clipboard.writeText(passwordReturned).then(() => {
        alert("Mot de passe copié");
      });
    } else {
      alert("Vous n'avez pas encore généré de mot de passe à copier!");
    }
  }

  function shuffelWord(word) {
    var shuffledPassword = "";
    word = word.split("");
    while (word.length > 0) {
      shuffledPassword += word.splice((word.length * Math.random()) << 0, 1);
    }
    return shuffledPassword;
  }

  function resetAll() {
    setNumber("");
    setMustHaveLower("");
    setMustHaveUpper("");
    setMustHaveNumber("");
    setMustHaveOther("");
    setErrorMessage("");
    setPasswordReturned("");
  }
  function reset() {
    setNumber("");
    setMustHaveLower("");
    setMustHaveUpper("");
    setMustHaveNumber("");
    setMustHaveOther("");
  }
  function onChangeLength(e) {
    setErrorMessage("");
    setNumber(e.target.value);
  }
  function onChangeUpper(e) {
    setErrorMessage("");
    setMustHaveUpper(e.target.checked);
  }
  function onChangeLower(e) {
    setErrorMessage("");
    setMustHaveLower(e.target.checked);
  }
  function onChangeNumber(e) {
    setErrorMessage("");
    setMustHaveNumber(e.target.checked);
  }
  function onChangeOther(e) {
    setErrorMessage("");
    setMustHaveOther(e.target.checked);
  }
  function handleSubmit(e) {
    e.preventDefault();

    let lowerCaseChar = [
      "a",
      "z",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "q",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "w",
      "x",
      "c",
      "v",
      "b",
      "n",
    ];
    let upperCaseChar = [
      "A",
      "Z",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "Q",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "M",
      "W",
      "X",
      "C",
      "V",
      "B",
      "N",
    ];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let otherChar = [
      "$",
      "%",
      "^",
      "&",
      "!",
      "@",
      "#",
      ":",
      ";",
      "'",
      ",",
      ".",
      ">",
      "/",
      "*",
      "-",
      ",",
      "|",
      "?",
      "~",
      "_",
      "=",
      "+",
    ];

    let allChar = [].concat(
      mustHaveUpper ? upperCaseChar : [],
      mustHaveLower ? lowerCaseChar : [],
      mustHaveNumber ? numbers : [],
      mustHaveOther ? otherChar : []
    );
    let chosenLength = parseInt(number);
    let password = "";

    setPassLength(chosenLength);

    if (!chosenLength && allChar.length < 1) {
      setErrorMessage(
        "* Merci de sélectionner au moins un type de caractères et une taile de 4 ou plus."
      );
    } else if (chosenLength < 4 && allChar.length < 1) {
      setErrorMessage(
        "* Merci de sélectionner au moins un type de caractères et une taile de 4 ou plus."
      );
    } else if (!chosenLength || chosenLength < 4) {
      setErrorMessage("* Merci de sélectionner une taile de 4 ou plus.");
    } else if (allChar.length < 1) {
      setErrorMessage(
        "* Merci de sélectionner au moins un type de caractères."
      );
    } else if (
      // case1
      mustHaveLower &&
      !mustHaveUpper &&
      !mustHaveNumber &&
      !mustHaveOther
    ) {
      for (let i = 0; i < chosenLength; i++) {
        password +=
          lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      }
      setErrorMessage("");
      setChoice("uniquement des minuscules");
    } else if (
      // case2
      !mustHaveLower &&
      mustHaveUpper &&
      !mustHaveNumber &&
      !mustHaveOther
    ) {
      for (let i = 0; i < chosenLength; i++) {
        password +=
          upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
      }
      setErrorMessage("");
      setChoice("uniquement des majuscules");
    } else if (
      // case3
      !mustHaveLower &&
      !mustHaveUpper &&
      mustHaveNumber &&
      !mustHaveOther
    ) {
      for (let i = 0; i < chosenLength; i++) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
      }
      setErrorMessage("");
      setChoice("uniquement des chiffres");
    } else if (
      // case4
      !mustHaveLower &&
      !mustHaveUpper &&
      !mustHaveNumber &&
      mustHaveOther
    ) {
      for (let i = 0; i < chosenLength; i++) {
        password += otherChar[Math.floor(Math.random() * otherChar.length)];
      }
      setErrorMessage("");
      setChoice("uniquement des caractères spéciaux");
    } else if (
      // case5
      mustHaveLower &&
      mustHaveUpper &&
      mustHaveNumber &&
      mustHaveOther
    ) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += otherChar[Math.floor(Math.random() * otherChar.length)];
      for (let i = 0; i < chosenLength - 4; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("les quatre types de caractères");
      password = shuffelWord(password);
    } else if (
      // case6
      mustHaveLower &&
      mustHaveUpper &&
      !mustHaveNumber &&
      !mustHaveOther
    ) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];

      for (let i = 0; i < chosenLength - 2; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des majuscules et des minuscules");
      password = shuffelWord(password);
    } else if (
      // case7
      !mustHaveLower &&
      mustHaveUpper &&
      mustHaveNumber &&
      !mustHaveOther
    ) {
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      for (let i = 0; i < chosenLength - 2; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des majuscules et des chiffres");
      password = shuffelWord(password);
    } else if (
      // case8
      !mustHaveLower &&
      mustHaveUpper &&
      !mustHaveNumber &&
      mustHaveOther
    ) {
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
      password += otherChar[Math.floor(Math.random() * otherChar.length)];
      for (let i = 0; i < chosenLength - 2; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des majuscules et des caractères spéciaux");
      password = shuffelWord(password);
    } else if (
      // case9
      mustHaveLower &&
      !mustHaveUpper &&
      mustHaveNumber &&
      !mustHaveOther
    ) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      for (let i = 0; i < chosenLength - 2; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("avec des minuscules et des chiffres");
      password = shuffelWord(password);
    } else if (
      // case10
      mustHaveLower &&
      !mustHaveUpper &&
      !mustHaveNumber &&
      mustHaveOther
    ) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      password += otherChar[Math.floor(Math.random() * otherChar.length)];
      for (let i = 0; i < chosenLength - 2; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des minuscules et des caractères spéciaux");
      password = shuffelWord(password);
    } else if (
      // case11
      !mustHaveLower &&
      !mustHaveUpper &&
      mustHaveNumber &&
      mustHaveOther
    ) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += otherChar[Math.floor(Math.random() * otherChar.length)];
      for (let i = 0; i < chosenLength - 2; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des chiffres et des caractères spéciaux");
      password = shuffelWord(password);
    } else if (
      // case12
      mustHaveLower &&
      mustHaveUpper &&
      mustHaveNumber &&
      !mustHaveOther
    ) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      for (let i = 0; i < chosenLength - 3; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des majuscules, des minuscules et des chiffres");
      password = shuffelWord(password);
    } else if (
      // case13
      mustHaveLower &&
      mustHaveUpper &&
      !mustHaveNumber &&
      mustHaveOther
    ) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];

      password += otherChar[Math.floor(Math.random() * otherChar.length)];
      for (let i = 0; i < chosenLength - 3; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des majuscules, des minuscules et des caractères spéciaux");
      password = shuffelWord(password);
    } else if (
      // case14
      mustHaveLower &&
      !mustHaveUpper &&
      mustHaveNumber &&
      mustHaveOther
    ) {
      password +=
        lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += otherChar[Math.floor(Math.random() * otherChar.length)];
      for (let i = 0; i < chosenLength - 3; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des minuscules, des chiffres et des caractères spéciaux");
      password = shuffelWord(password);
    } else if (
      // case15
      !mustHaveLower &&
      mustHaveUpper &&
      mustHaveNumber &&
      mustHaveOther
    ) {
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
      password += numbers[Math.floor(Math.random() * numbers.length)];
      password += otherChar[Math.floor(Math.random() * otherChar.length)];
      for (let i = 0; i < chosenLength - 3; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
      }
      setErrorMessage("");
      setChoice("des majuscules, des chiffres et des caractères spéciaux");
      password = shuffelWord(password);
    }
    setPasswordReturned(password);
    if (password) {
      reset();
    }
  }

  return (
    <div className="container" id="container">
      <div className="title" id="title">
        <h1>Générateur de mot de passe</h1>
      </div>
      <form className="myForm" id="myForm" onSubmit={handleSubmit}>
        <label className="lengthLabel" id="lengthLabel" htmlFor="lengthInput">
          Longueur souhaitée (mini 4):
        </label>
        <input
          type="number"
          min="4"
          name="lengthInput"
          id="lengthInput"
          className="lengthInput"
          placeholder="taille"
          value={number}
          onChange={onChangeLength}
        />
        <fieldset className="fieldset" id="fieldset">
          <legend className="fieldsetLegend" id="fieldsetLegend">
            Caractères souhaités:{" "}
          </legend>
          <div className="fieldsetDiv" id="fieldsetDivUpper">
            <input
              type="checkbox"
              id="mustHaveUpper"
              name="mustHaveUpper"
              className="checkbox"
              checked={mustHaveUpper}
              onChange={onChangeUpper}
            />
            <label
              htmlFor="mustHaveUpper"
              className="chartLabel"
              id="chartLabelUpper"
            >
              Majuscules
            </label>
          </div>
          <div className="fieldsetDiv" id="fieldsetDivLower">
            <input
              type="checkbox"
              id="mustHaveLower"
              name="mustHaveLower"
              className="checkbox"
              checked={mustHaveLower}
              onChange={onChangeLower}
            />
            <label
              htmlFor="mustHaveLower"
              className="chartLabel"
              id="chartLabelLower"
            >
              Minuscules
            </label>
          </div>
          <div className="fieldsetDiv" id="fieldsetDivNumber">
            <input
              type="checkbox"
              id="mustHaveNumber"
              name="mustHaveNumber"
              className="checkbox"
              checked={mustHaveNumber}
              onChange={onChangeNumber}
            />
            <label
              htmlFor="mustHaveNumber"
              className="chartLabel"
              id="chartLabelNumber"
            >
              Chiffres
            </label>
          </div>
          <div className="fieldsetDiv" id="fieldsetDivOther">
            <input
              type="checkbox"
              id="mustHaveOther"
              name="mustHaveOther"
              className="checkbox"
              checked={mustHaveOther}
              onChange={onChangeOther}
            />
            <label
              htmlFor="mustHaveOther"
              className="chartLabel"
              id="chartLabelOther"
            >
              Caractères spéciaux
            </label>
          </div>
        </fieldset>
        <div className="messages" id="messages">
          {!errorMessage && !passwordReturned && (
            <p className="inviteTxt" id="inviteTxt">
              Entrez vos critères afin de générer un mot de passe
            </p>
          )}
          {!errorMessage && passwordReturned && (
            <p className="inviteTxt" id="inviteTxtNew">
              Entrez vos critères afin de générer un nouveau mot de passe
            </p>
          )}
          <p className="errorTxt" id="errorTxt">
            {errorMessage}
          </p>
        </div>
        <div className="inputs" id="inputs">
          <input className="submit" id="submit" type="submit" value="Générer" />
          <input
            className="refresh"
            id="refresh"
            type="button"
            value="Rafraîchir"
            onClick={resetAll}
          />
        </div>
      </form>
      <label
        htmlFor="passwordReturned"
        className="passwordReturnedLabel"
        id="passwordReturnedLabel"
      >
        {" "}
        <div className="messageGenerated" id="messageGenerated">
          {" "}
          {passwordReturned && (
            <p className="messageAfter" id="messageAfter">
              Votre mot de passe de{" "}
              <span className="chosenGenerated" id="chosenLengthGenerated">
                {passLenght}
              </span>{" "}
              {""}
              caractères avec{" "}
              <span className="chosenGenerated" id="chosenchartsGenerated">
                {choice}
              </span>{" "}
              est:
            </p>
          )}
          {!passwordReturned && (
            <p className="messageBefore" id="messageBefore">
              Le mot de passe généré s'affichera ci-dessous.
            </p>
          )}
        </div>
      </label>
      <input
        type="text"
        value={passwordReturned}
        className="passwordReturned"
        id="passwordReturned"
      />{" "}
      <input
        type="button"
        value="Copier"
        onClick={copy}
        className="copy"
        id="copy"
      />
    </div>
  );
}
