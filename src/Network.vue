

 <template>
<div id="canvas"></div>


</template>


<script>
import firebase from 'firebase'
export default {
    methods:{

    }
    ,
mounted(){
    var G = new jsnx.DiGraph();
          var db = firebase.firestore();
db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var size=13
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().posters);
        let user=doc.data()
        
      
        if(user.posters!=undefined){
 user.posters.forEach(n => {
        G.addNode(n.split(' ')[0],{size:13,color:'#0064C7'})     
          G.addEdgesFrom([[user.name.split(' ')[0],n.split(' ')[0]], [n.split(' ')[0],user.name.split(' ')[0]]]);
          size+=1

        });

        }
        G.addNode(user.name.split(' ')[0],{size:size,color:'#008A00'})







//  G.addNodesFrom(["Ahmed","adil","samir","laila","marwa"], {color: 'black'});

// G.addEdgesFrom([["Ahmed","Adil"], ["Ahmed","Samir"]]);
 
jsnx.draw(G, {
    element: '#canvas',
    weighted: false, 
    withLabels: true, 
    width:1800,
    height:1000,

    layoutAttr: {
        charge: -1000,
        linkDistance: 120
    },
    
   
    nodeStyle: {
        
        fill: function(d) { 
            return d.data.color; 
        },
        stroke: 'none'
    },
     edgeStyle: {
        fill: '#999'
    },
    nodeAttr: {
    r: function(d) {
      // `d` has the properties `node`, `data` and `G`
      return d.data.size;
    }
    }
    , 
    labelStyle: {'text-anchor': 'middle',
        'dominant-baseline': 'central',
        'cursor': 'pointer',
        '-webkit-user-select': 'none',
        'fill': '#000'},
    stickyDrag: true
});

       
       

    });
});




  
}
}



</script>
