prepend(data){
        let newNd = {value:data, next:null}
        this.head =  newNd
        newNd = this.head
        this.length++;
    }