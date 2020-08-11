<template>
  <body>
    <div class="home">
      <h1>Welcome to the Vueified D20  Character Reference System!</h1>
        <p>
            This site is intended to be used as a single place to store characters for roleplaying
            games such as those in the D20 system. At present, it is only an html mockup showing
            input forms for character facts, abilities and skills and a character sheet to display
            them.
        </p>
        <p>
            Future features should include character sheet autofill from the input, multiple
            dynamic character pages, a dynamic skills list for different systems and further
            customization of the character sheet.
        </p>
        <p>
            In time I hope this will include features for not just characters, but also items,
            cities, maps and encounters within campaigns and rulesets. For now though, press
            characters to get started viewing Grognak (a placeholder character) or making your
            own!
        </p>
        <p>
            To do:
            <ul>
                <li>
                    Implement database for characters/etc. storage; connect character creator
                </li>
                <li>
                    Add filters and sorting to spell index
                </li>
                <li>
                    Create additional character templates (proficiencies, etc.) for other systems than d20 and sort characters into them.
                </li>
                <li>
                    Create themes (sci-fi, fantasy, default); improve site layout
                </li>
            </ul>
        </p>
    </div>
  </body>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
body {
  background-color: lightgray;
  height: fit-content;
}
.home {
  background-color: white;
  min-height: calc(100vh - 24px - 70px);
  max-width: 1024px;
  margin: auto;
  padding: 3em;
}
h1 {
  text-align: center;
}
p {
  text-align: left;
}
</style>
