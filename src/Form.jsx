import React from "react";
import { useState } from "react";

export default function Form() {
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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="passwordLength">Longueur souhaitée (mini 4):</label>
        <input
          type="number"
          min="4"
          name="passwordLength"
          id="passwordLength"
          placeholder="taille"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <fieldset id="fieldset">
          <legend>Caractères souhaités: </legend>
          <div>
            <input
              type="checkbox"
              id="mustHaveUpper"
              name="mustHaveUpper"
              className="checkbox"
              checked={mustHaveUpper}
              onChange={(e) => setMustHaveUpper(e.target.checked)}
            />
            <label htmlFor="mustHaveUpper">Majuscules</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mustHaveLower"
              name="mustHaveLower"
              className="checkbox"
              checked={mustHaveLower}
              onChange={(e) => setMustHaveLower(e.target.checked)}
            />
            <label htmlFor="mustHaveLower">Minuscules</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mustHaveNumber"
              name="mustHaveNumber"
              className="checkbox"
              checked={mustHaveNumber}
              onChange={(e) => setMustHaveNumber(e.target.checked)}
            />
            <label htmlFor="mustHaveNumber">Chiffres</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mustHaveOther"
              name="mustHaveOther"
              className="checkbox"
              checked={mustHaveOther}
              onChange={(e) => setMustHaveOther(e.target.checked)}
            />
            <label htmlFor="mustHaveOther">Caractères spéciaux</label>
          </div>
        </fieldset>
        {/* <button>Send</button>{" "} */}
        <input type="submit" value="Générer" />
        <input type="button" value="Raffraîchir" onClick={resetAll} />

        <p> {errorMessage} </p>
      </form>
      {passwordReturned && (
        <p>
          Votre mot de passe de {passLenght} {""}
          caractères avec {choice} est:
        </p>
      )}
      <input type="text" value={passwordReturned} />{" "}
      <input type="button" value="Copier" onClick={copy} />
    </>
  );
}
