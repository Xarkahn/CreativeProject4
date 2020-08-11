<template>
  <body>
    <div class="index" id="spell-table"></div>
  </body>
</template>

<script>
export default {
  name: "spells5e",
  created() {
    let check = `
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                </svg>
            `;
    fetch("https://www.dnd5eapi.co/api/spells")
      .then(result => result.json())
      .then(result => {
        let fetched = result;
        let spellTable = document.getElementById("spell-table");
        let spellList = document.createElement("TABLE");
        let header = document.createElement("TR");
        let keys = [
          "Name",
          "Classes",
          "Level",
          "School",
          "Components",
          "Range",
          "Duration"
        ];
        keys.forEach(key => {
          if (key == "Components") {
            let div = document.createElement("DIV");
            let subDiv = document.createElement("DIV");
            let th = document.createElement("TH");
            th.innerHTML = "Verbal";
            subDiv.appendChild(th);
            div.appendChild(subDiv);
            subDiv = document.createElement("DIV");
            th = document.createElement("TH");
            th.innerHTML = "Somatic";
            subDiv.appendChild(th);
            div.appendChild(subDiv);
            subDiv = document.createElement("DIV");
            th = document.createElement("TH");
            th.innerHTML = "Material";
            subDiv.appendChild(th);
            div.appendChild(subDiv);
            header.appendChild(div);
          } else if (key == "Classes") {
            let div = document.createElement("DIV");
            let classes = [
              "Bard",
              "Cleric",
              "Druid",
              "Paladin",
              "Ranger",
              "Sorcerer",
              "Warlock",
              "Wizard"
            ];
            classes.forEach(ddClass => {
              let subDiv = document.createElement("DIV");
              let th = document.createElement("TH");
              th.innerHTML = ddClass;
              subDiv.appendChild(th);
              div.appendChild(subDiv);
            });
            header.appendChild(div);
          } else {
            let th = document.createElement("TH");
            th.appendChild(document.createTextNode(key));
            header.appendChild(th);
          }
        });
        spellList.appendChild(header);
        fetched.results.forEach(spellIndex => {
          fetch("https://www.dnd5eapi.co/api/spells/" + spellIndex.index)
            .then(result => result.json())
            .then(result => {
              let spell = document.createElement("TR");
              //Name
              let td = document.createElement("TD");
              td.className = "spell-name";
              td.addEventListener("click", () => openModal(spellIndex.index));
              td.appendChild(document.createTextNode(result["name"]));
              spell.appendChild(td);
              //Classes
              let classes = [
                "Bard",
                "Cleric",
                "Druid",
                "Paladin",
                "Ranger",
                "Sorcerer",
                "Warlock",
                "Wizard"
              ];
              let div = document.createElement("DIV");
              classes.forEach(ddClass => {
                td = document.createElement("TD");
                if (
                  result["classes"].filter(value => value["name"] == ddClass)
                    .length > 0
                ) {
                  td.innerHTML = check;
                } else {
                  td.innerHTML = `-`;
                }
                div.appendChild(td);
              });
              spell.appendChild(div);
              //Level
              td = document.createElement("TD");
              td.appendChild(document.createTextNode(result["level"]));
              spell.appendChild(td);
              //School
              td = document.createElement("TD");
              td.appendChild(document.createTextNode(result["school"]["name"]));
              spell.appendChild(td);
              //Components
              div = document.createElement("DIV");
              td = document.createElement("TD");
              let components = String(result["components"]);
              if (components.search("V") != -1) {
                td.innerHTML = check;
              } else td.innerHTML = "-";
              div.appendChild(td);
              td = document.createElement("TD");
              components = String(result["components"]);
              if (components.search("S") != -1) {
                td.innerHTML = check;
              } else td.innerHTML = "-";
              div.appendChild(td);
              td = document.createElement("TD");
              components = String(result["components"]);
              if (components.search("M") != -1) {
                td.innerHTML = check;
              } else td.innerHTML = "-";
              div.appendChild(td);
              spell.appendChild(div);
              //Range
              td = document.createElement("TD");
              td.appendChild(document.createTextNode(result["range"]));
              spell.appendChild(td);
              //Duration
              td = document.createElement("TD");
              td.appendChild(document.createTextNode(result["duration"]));
              spell.appendChild(td);
              //Append final spell
              spellList.appendChild(spell);
            });
          spellTable.appendChild(spellList);
        });
      });
    function openModal(index) {
      let modal = document.createElement("DIV");
      let modalContent = document.createElement("DIV");
      let closeButton = document.createElement("SPAN");
      let text = document.createElement("DIV");

      modal.className = "modal";

      modalContent.className = "modal-content";

      closeButton.className = "close";
      closeButton.innerHTML = `&times;`;
      closeButton.onclick = () => {
        close();
      };

      window.onclick = function(event) {
        if (event.target == modal) {
          close();
        }
      };

      fetch("https://www.dnd5eapi.co/api/spells/" + index)
        .then(result => result.json())
        .then(result => {
          let desc = result["desc"];
          text.innerHTML += `<h1>${result["name"]}</h1>`;
          let div = document.createElement("DIV");
          div.className = "spell-description";
          desc.forEach(p => {
            div.innerHTML += `<p>${p}</p>`;
          });
          if (result["higher_level"]) {
            div.innerHTML += `<p>${result["higher_level"]}</p>`;
          }
          text.appendChild(div);
          let details = document.createElement("DIV");
          details.className = "details";
          details.innerHTML = `
                                <div>
                                    <div>
                                        <strong>Range:</strong> ${
                                          result["range"]
                                        }
                                    </div>
                                    <div>
                                        <strong>Duration:</strong> ${
                                          result["duration"]
                                        }
                                    </div>
                                    <div>
                                        <strong>School:</strong> ${
                                          result["school"]["name"]
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <strong>Classes:</strong> ${result[
                                          "classes"
                                        ]
                                          .map(ddClass => ddClass["name"])
                                          .join(", ")}
                                    </div>
                                    <div>
                                        <strong>Ritual:</strong> ${yesNo(
                                          result["ritual"]
                                        )}
                                    </div>
                                    <div>
                                        <strong>Concentration:</strong> ${yesNo(
                                          result["concentration"]
                                        )}
                                    </div>
                                </div>
                                    `;
          let components = [];
          result["components"].find(v => v == "V")
            ? components.push("Verbal")
            : false;
          result["components"].find(s => s == "S")
            ? components.push("Somatic")
            : false;
          result["material"] ? components.push(result["material"]) : false;
          components = components.join("; ");
          details.innerHTML += `
                                    <div>
                                        <strong>Components:</strong> ${components}
                                    </div>
                                `;
          function yesNo(tf) {
            if (tf) return "Yes";
            else return "No";
          }
          text.appendChild(details);
        });

      modalContent.appendChild(closeButton);
      modalContent.appendChild(text);
      modal.appendChild(modalContent);
      document.getElementById("spell-table").appendChild(modal);

      function close() {
        modal.remove();
      }
    }
  }
};
</script>

<style>
body {
  background-color: lightgray;
  text-align: center;
  height: fit-content;
}
/* Indexes */
.index {
  position: relative;
  background-color: white;
  max-width: fit-content;
  padding: 0;
  margin: 0 auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
  text-align: center;
  overflow-x: scroll;
}

.index table {
  border-top: solid thin black;
  border-bottom: solid thin black;
  position: relative;
}

.index table * {
  border-left: solid thin black;
  border-right: solid thin black;
}

.index table tr div {
  border: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.index table tr div * {
  border: none;
  width: 1.5em;
}

.index table tr div th {
  border: none;
  writing-mode: vertical-rl;
}

.index table tr:first-child {
  background-color: var(--accent-color);
  color: white;
}

.index table tr:nth-child(even) {
  background-color: var(--accent-color-pale);
}

.index .spell-name:hover {
  color: gray;
  cursor: pointer;
}

.spell-description {
  padding: 5%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
}

.spell-description p {
  text-align: left;
  text-indent: 3em;
  color: black;
  margin: 0;
}

.modal-content .details {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  margin: auto;
}

.modal-content .details div {
  flex-direction: column;
  text-align: left;
  margin-right: 3em;
  margin-left: 1em;
}

/* Spell Modals, modified from https://www.w3schools.com/howto/howto_css_modals.asp */
/* The Modal (background) */
.modal {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: var(--header-color);
  color: white;
  margin: 15% auto; /* 15% from the top and centered */
  border: 1px solid black;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
