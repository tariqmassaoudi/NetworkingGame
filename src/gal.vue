
 <template>
  <v-layout justify-center>
    <v-flex xs12 sm12>
      <v-toolbar color="indigo" dark>
      
        <v-toolbar-title>{{"Welcome "+ this.$route.params.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="searchtext"
            label="Search"
          ></v-text-field>
    
      </v-toolbar>

      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  height="300px"
                  :contain="true"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                     
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions >
                
                  <v-btn   block  v-on:click="del(card.title)" >
                   I've networked with this person
                  </v-btn>
                 
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>

import firebase from 'firebase'


export default {
  created(){
 var folders = ['Aaron_GILLETT.jpg',
'Aleks_BERDITCHEVSKAIA.jpg',
'Alicia_COMBAZ.jpg',
'Anja_SCHMALFUSS.jpg',
'Ankitha_Cheerakathil.jpg',
'Anthony_Zacharzewski.jpg',
'Bassiro_BA.jpg',
'Benjamin_Spector.jpg',
'Bernard_LE_ROUX.jpg',
'Beth_Noveck.jpg',
'Bisan_Abdulkader.jpg',
'Bruno_BOCCARA.jpg',
'Carina_Hallin.jpg',
'Celestin_SEBDOGBO.jpg',
'Cristiano_FERRI.jpg',
'Daniel_ANDLER.jpg',
'Darko_LOVRIC.jpg',
'David_Baum.jpg',
'Diana_DAJER.jpg',
'Fabrizio_GERMANI.jpg',
'Fahimeh_ROBIOLLE.jpg',
'Hugo_MERCIER.jpg',
'Hugo_Trad.jpg',
'Ikram_CHAIRI.jpg',
'Kanupriya_KOTHIWAL.jpg',
'Kathleen_KENNEDY.jpg',
'Laurent_LEDOUX.jpg',
'Liudmyla_Titova.jpg',
'Loubna_Hadid.jpg',
'Mariia_GOLOVIANKO.jpg',
'Mark_Klein.jpg',
'Miniya_CHATTERJI.jpg',
'Nawal_ABOUB.jpg',
'Nchimunya_HAMUKOMA.jpg',
'Oumar_A_BA.jpg',
'Pierre_Vallet.jpg',
'Rabih_SALLOUM.jpg',
'Ronan_CIVILIS.jpg',
'Sacha_Alanoca.jpg',
'Salvador_MASCARENHAS.jpg',
'Sanaa_LAHLALI.jpg',
'Siddharth_AGARWAL.jpg',
'Solene_Aymon.jpg',
'Steven_GRAY.jpg',
'Traoré_KADIDIATOU.jpg',
'Vincent_HEJDUK.jpg',
'Willice_ONYANGO.jpg']

//  <v-flex xs12 align-end flexbox>
//                         <span class="headline white--text" v-text="card.title"></span>
//                       </v-flex>

folders.forEach(f => {
  var n=f.split("_")[0]+" "+f.split("_")[1].replace('.jpg',"")

  this.cards.push({
    title:n,
    src: require('@/assets/pics/'+f),
    flex:3
  }
    )
    console.log('@/assets/pics/'+f)

    this.cardsOg.push( { title:n,
    src: require('@/assets/pics/'+f),
    flex:3})
  
});
  },

  data: () => ({
    cards: [
  
    ],
    cardsOg: [
   
    ],
    pics:[],
    id:'',
    searchtext:''
  }),
 
  methods: {
    del(card) {
      this.cards = this.cards.filter(function(c) {
        if (c.title === card) return false;
        else return true;
      });

      var db = firebase.firestore();
     

      db
        .collection("users")
        .doc(this.id).update({
          posters:firebase.firestore.FieldValue.arrayUnion(card)
        }).then(function() {
    console.log("Document successfully updated!");
});
        
    }
  }
  ,mounted(){
    console.log(this.$route.params.name)
    if(this.$route.params.name==undefined){
      this.$router.push('/')
    }
    this.id=this.$route.params.id;
    console.log(this.id)
  },
  watch: {
    searchtext: function (value) {
      this.cards=this.cardsOg
     this.cards= this.cards.filter(function(el) { return el.title.toUpperCase().match(value.toUpperCase());});
      console.log(this.cards)
    }
  },
};
</script>
