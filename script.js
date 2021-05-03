//inizializzo Vue
const app = new Vue(
    {
        el: '#vueContainer',
       data: {
            message:"test",
            var: 0,
            images:["images/Uno.jpg", "images/due.jpg", "images/tre.jpg", "images/quattro.jpg"]
        },
        methods: {
            /**
             * 
             * @param {number}}direction - +1 se voglio andare avanti, -1 se indeitro direction 
             */
            changeImg(direction){
                let newIndex = this.activeImg += direction;
se 
                if(newIndex < 0){
                    // se l'indice < di 0 facciamo andare l'utente all'ultima immagine della lista
                    newIndex = this.images.length
                } else if (newIndex > (this.images.length - 1)){
                    // se l'indice è già l'ultimo della lista delle immagini, facciamo andare l'utente alla prima immagine
                    newIndex = 0;
                    this.activeImg = 0
                }

                this.activeImg = newIndex;
            }
        },
        mounted() {
            const document.querySelector(" .slider-container")
        
            elementoHtml.focus()
        }
    });
)