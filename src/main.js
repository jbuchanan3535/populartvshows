// 
// Dev: Joshua Buchanan
// Script: vue popular tv shows
// Date: 12/6/2020
// Class/Section: CIS 131 Markley
// 
// when trying to make comments on my other vue pages i couldnt make them render as comments.


// basically making app.vue our main home and sending the components of header.vue
//which just contains the top header and sending the other component called card.vue
//which makes the strucutre for the bootstrap card. 
// app.vue will loop through the information and make a "card" per each 
//object in the axios info (pop tv shows). 
import Vue from 'vue'
import App from './App.vue'



new Vue({
  render: h => h(App),
}).$mount('#app')
