<template>
  <div class="box">
    <div class="textbox">
      <h1>På jakt etter nye eventyr?</h1>
      <h3>Karriere</h3>
      <h2>Akkurat nå trenger vi flere dyktige og trivelige kollegaer.</h2>
      <img
        src="@/assets/woman-5987433_960_720.jpg"
        alt="en person ser ut mot havet"
      />
    </div>

    <div class="containerJsList">
      <div class="jsonList">
        <div
          class="iteratedBox"
          v-for="(stillinger, index) in stillinger"
          :key="index"
        >
          <h2>{{ stillinger.stilling }}</h2>
          <div class="inlines">
            <p class="stillingsdesc">{{ stillinger.Beskrivelse }}</p>
            <p class="frist">Frist: {{ stillinger.Frist }}</p>
          </div>
          <h4>Kvalifikasjoner</h4>
          <p class="kvalifikasjonerText">{{ stillinger.Kvalifikasjoner }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stillinger from "../assets/stillinger.json";

export default {
  name: "Career",
  data() {
    return {
      stillinger,
    };
  },
};
</script>

<style scoped>
.box {
  margin-top: 79px;
  height: 100vh;
  color: black;
  width: 100vw;
  padding: 17px;
  display: flex;
  flex-wrap: wrap;
}

.textbox {
  margin-top: 10px;
  margin-right: 37px;
}

img {
  width: 497px;
  margin-top: 17px;
}

.jsonList {
  height: fit-content;
  width: 542px;
}

h2 {
  line-height: 2;
}

h4 {
  margin-top: 7px;
}

.inlines {
  display: flex;
  justify-content: space-between;
}

.stillingsdesc,
.kvalifikasjonerText {
  width: 400px;
}

.containerJsList {
  margin-top: 100px;
  height: 380px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}

p {
  font-size: clamp(16px, 1vw, 1vw);
}
/*If screen width less than 1200 -> reduce margin top & set flex start */
@media screen and (max-width: 1200px) {
  .containerJsList {
    margin-top: 10px;
    align-items: flex-start;
  }
}
</style>
