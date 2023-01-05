// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <div class="container">
          <header>
            <div class="banner">
              <i
                data-feather="shield"
                stroke="#15FAEC"
                fill="#FE0000"
                stroke-width="3"
                width="100"
                height="80"
              ></i>
              <span id="hOne">
                <h1>Générateur de mot de passe </h1>
              </span>
            </div>
            <p class="description">
              Donnez-moi vos critères et je générerai un mot de passe aléatoire
            </p>
          </header>
          <form class="myform">
            <div class="generator">
              <div class="choice">
                <div class="passwordLengthChoice">
                  {" "}
                  <label for="passwordLength">
                    {" "}
                    Longueur souhaitée (mini 4):
                  </label>{" "}
                  <input
                    type="number"
                    min="4"
                    name="passwordLength"
                    id="passwordLength"
                    placeholder="taille"
                  />
                </div>

                <fieldset id="fieldset">
                  <legend>Caractères souhaités: </legend>
                  <div>
                    <input
                      type="checkbox"
                      id="mustHaveUpper"
                      name="mustHaveUpper"
                      class="checkbox"
                    />
                    <label for="mustHaveUpper">Majuscules</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="mustHaveLower"
                      name="mustHaveLower"
                      class="checkbox"
                    />
                    <label for="mustHaveLower">Minuscules</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="mustHaveNumber"
                      name="mustHaveNumber"
                      class="checkbox"
                    />
                    <label for="mustHaveNumber">Chiffres</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="mustHaveOther"
                      name="mustHaveOther"
                      class="checkbox"
                    />
                    <label for="mustHaveOther">Caractères spéciaux</label>
                  </div>
                </fieldset>
              </div>

              <div class="generateBtnDiv">
                <button type="button" id="generatePassword">
                  Générer un mot de passe selon mes critères
                </button>
                <button id="refresh">raffraîchir</button>
              </div>

              <div class="error">
                <p id="error"></p>
              </div>
            </div>

            <div class="results">
              <div class="result">
                <label for="password" class="label">
                  Votre mot de passe:{" "}
                  <div class="clicToCopy">(cliquer pour copier)</div>{" "}
                </label>

                <div id="copyPassword">
                  <input type="text" name="password" id="password" />{" "}
                  <div class="copy">
                    <i data-feather="copy"></i>
                  </div>
                </div>
                <p id="copyOk"></p>
                <p id="copyNotOk"></p>
              </div>

              <div>
                <div id="security" class="security security-off">
                  {" "}
                  <p>
                    Estimation du niveau de sécurité du mot de passe généré:
                  </p>
                  <div class="progressBar">
                    <div id="barr">
                      <div id="securityy"></div>
                    </div>
                    <div class="smiley">
                      <i
                        data-feather="frown"
                        stroke="black"
                        fill="red"
                        stroke-width="2"
                        width="20"
                        height="20"
                        id="verylow"
                        display="none"
                      ></i>
                      <i
                        data-feather="frown"
                        stroke="black"
                        fill="orange"
                        stroke-width="2"
                        width="20"
                        height="20"
                        id="low"
                        display="none"
                      ></i>
                      <i
                        data-feather="frown"
                        stroke="black"
                        fill="yellow"
                        stroke-width="2"
                        width="20"
                        height="20"
                        id="middle"
                        display="none"
                      ></i>
                      <i
                        data-feather="smile"
                        stroke="black"
                        fill="rgb(105, 199, 105)"
                        stroke-width="2"
                        width="20"
                        height="20"
                        id="good"
                        display="none"
                      ></i>
                      <i
                        data-feather="smile"
                        stroke="white"
                        fill="rgb(1, 108, 1)"
                        stroke-width="2"
                        width="30"
                        height="30"
                        id="verygood"
                        display="none"
                      ></i>
                    </div>
                  </div>
                </div>
                <p class="advert">
                  <a
                    href="http://password-checker.online-domain-tools.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Vous pouvez également le tester plus précisément là:{" "}
                    <i
                      data-feather="external-link"
                      stroke="#15FAEC"
                      stroke-width="3"
                      width="48"
                    ></i>{" "}
                  </a>
                </p>
              </div>
            </div>
          </form>
          <footer>
            <h2>Conseils</h2>
            <div>
              <p>
                Pour obtenir un mot de passe sécurisé cocher chaque catégorie de
                caractères.
              </p>
              <p>
                L'idéal selon la CNIL étant un mot de passe d'au moins 12
                caractères de 4 types différents.
              </p>
              <p>
                Source:{" "}
                <a
                  href="https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Les conseils de la CNIL pour un bon mot de passe
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </div>
  );
}

export default App;
