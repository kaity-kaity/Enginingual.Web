
function doDebugBurger() {
  debugMorphoAnalysis();
}
 

function debugMorphoAnalysis() {
  const beforeTrans = document.getElementById('rawText');
  const afterTrans = document.getElementById('translatedText');

  let tokens = "";

  kuromoji.builder({ dicPath: "./dict" }).build(function (err, tokenizer) {
    if (err) {
      console.log(err);
    } else {
      tokens = tokenizer.tokenize(beforeTrans.value);
      (async function () {
        let morphoText = afterTrans.textContent + "\n";
        for (let token of tokens) {
          let key = token.surface_form.toUpperCase();
          if (index[key] !== undefined) {
            morphoText = morphoText + await debugGetTranslation(index[key], key);
          } else {
            morphoText = morphoText + token.surface_form;
          }
        }
        afterTrans.value = morphoText;
      }());
    }
  });
}

async function debugGetTranslation(id, text) {
  const baseURL = "http://" + document.getElementById('debugIP').value;
  let translation = "";
  console.log(baseURL + '/getTranslation?id=' + id + '&text=' + text);
  await axios.get(baseURL + '/getTranslation?id=' + id + '&text=' + text)
    .then(function (response) {
      translation = response.data.data.translation;
    }).catch(function (error) {
      translation = text;
    });
  return translation;
}

document.getElementById('debugBurger').addEventListener('click', doDebugBurger);
