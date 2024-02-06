<template>
  <div class="main">
    <div class="calculate-box">
      <div class="total">
        <div>
          <h2>consumo total kwh</h2>
          <input type="text" v-model="totalKWH">
        </div>
        <div>
          <h2>consumo total R$</h2>
          <input type="text" v-model="totalBRL">
        </div>
      </div>
      <div class="tax">
        <div>
          <h2>taxa</h2>
          <input type="text" v-model="tax">
        </div>
      </div>
      <div class="neighbors">
        <div class="neighbor1">
          <h2>vizinho</h2>
          <input type="text" name="neighbor1" id="neighbor1" v-model="neighbor1_spent">
        </div>
        <!-- <div class="neighbor2">
          <h2>vizinho 2</h2>
          <input type="text" name="neighbor2" id="neighbor2" v-model="neighbor2_spent">
        </div> -->
      </div>
      <button class="calculate-button" @click="calculate()">Calcular</button>
      <div class="awser">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      neighbor1_spent: 0,
      neighbor2_spent: 0,
      totalKWH: 0,
      totalBRL: 0,
      tax: 0,
      KWHcost: 0,
      neighbor1: 0,
      neighbor2: 0
    }
  },
  methods: {
    toNumber(str){
      return str*1;
    },
    calculate(){
      this.neighbor2_spent = this.toNumber(this.totalKWH) - this.toNumber(this.neighbor1_spent);
      var KWHcost = (this.toNumber(this.totalKWH) - this.toNumber(this.tax)) / this.toNumber(this.totalBRL);

      console.log("total: " + this.toNumber(this.totalKWH) + " " + this.toNumber(this.totalBRL))
      console.log("KWHCost: ", KWHcost);

      console.log("1: ", this.neighbor1_spent)
      console.log("2: ", this.KWHcost)
      console.log("3: ", this.tax)


      this.neighbor1 = (this.neighbor1_spent * KWHcost) + (this.tax / 2)
      this.neighbor2 = (this.neighbor2_spent * KWHcost) + (this.tax / 2)


      console.log("neighbor 1 = ", this.neighbor1);
      console.log("neighbor 2 = ", this.neighbor2)
    }
  }
}
</script>

<style scoped>

.total{
  display: flex;
  justify-content: space-evenly
}

.tax{
  display: flex;
  justify-content: space-evenly
}

.neighbors{
  display: flex;
  justify-content: space-evenly
}

.calculate-button{
  margin-top: 20px;
}
.calculate-box{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

input {
  font: inherit;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #009c4e;
  background-color: #009c4e;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>