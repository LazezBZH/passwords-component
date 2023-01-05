import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const rainbow = [
    "Majuscules",
    "Minuscules",
    "Chiffres",
    "Caractères spéciaux",
  ];
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h1">
          <h1>Générateur de mot de passe</h1>
        </div>
        <div className="passLength">
          <label htmlFor="number">Longueur du mot de passe</label>
          <input
            type="number"
            id="number"
            min="4"
            {...register("length", { required: true })}
          />
        </div>

        {errors.length && (
          <p className="error">*Choississez une longueur (min 4)</p>
        )}

        <fieldset>
          <legend>Caractères souhaités: </legend>
          {rainbow.map((c) => (
            <label key={c}>
              <input
                type="checkbox"
                id={c}
                name={c}
                value={c}
                placeholder={c}
                className="checkbox"
                {...register("charts", { required: true })}
              />
              {c}
            </label>
          ))}

          {errors.charts && (
            <p className="error">*Choississez au moins un type de caractères</p>
          )}
        </fieldset>
        <input type="submit" value="Générer" className="submit" />
      </form>
      <div className="result">
        <label htmlFor="password" className="label">
          Votre mot de passe:
          <div className="clicToCopy">(cliquer pour copier)</div>
        </label>

        <div className="copyPassword">
          <input type="text" name="password" id="password" />
          <div className="copy"> &#128466; </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
